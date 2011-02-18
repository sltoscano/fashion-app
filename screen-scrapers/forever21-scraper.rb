###############################################################################
# stoscano@trisource
#
# clothing website scraper
#   store = forever21.com
###############################################################################

require 'rubygems'
require 'mechanize'

begin
  agent = Mechanize.new
  agent.user_agent = 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Chrome/7.0.517.44 Safari/534.7'
  agent.max_history = 0
  agent.open_timeout = 15
  agent.read_timeout = 20
  agent.keep_alive = false

  local_data_folder = 'forever21-data'
  local_image_folder = "#{local_data_folder}/images"
  local_metadata_folder = "#{local_data_folder}/metadata"
  error_log = "#{$0}_errors.txt"

  db_categories = {
    "top"                   => "top",
    "whatsnew_app_tops"     => "top",
    "sweaters"              => "sweater",
    "whatsnew_app_sweaters" => "sweater",
    "btms"                  => "bottom",
    "whatsnew_app_bottoms"  => "bottom",
    "btms_jeans"            => "jeans",
    "whatsnew_app_jeans"    => "jeans",
    "dress"                 => "dress",
    "whatsnew_app_dresses"  => "dress",
  }

  # Always put the whatsnew items first in the list
  categories = [
    "whatsnew_app_tops",
    "whatsnew_app_sweaters",
    "whatsnew_app_bottoms",
    "whatsnew_app_jeans",
    "whatsnew_app_dresses",
    "top",
    "sweaters",
    "btms",
    "btms_jeans",
    "dress",
  ]

  visited_pages = Hash.new
  
  Dir.mkdir(local_data_folder) unless File.directory?(local_data_folder)
  Dir.mkdir(local_image_folder) unless File.directory?(local_image_folder)
  Dir.mkdir(local_metadata_folder) unless File.directory?(local_metadata_folder)

  categories.each do |category|
    raise "#{category} not consistent with db_categories" unless db_categories[category]

    puts "scraping category: " + db_categories[category]
    page = agent.get "http://www.forever21.com/category.asp?catalog_name=FOREVER21&category_name=#{category}&Page=1&pgCount=100"

    # Grab all the products on the page
    page.links_with(:href => /http:\/\/www.forever21.com\/product.asp?/).each do |product_page|
      if visited_pages.has_key?(product_page.uri)
        next
      else
        visited_pages[product_page.uri] = 1
      end

      puts "\tloading product page for category: #{category}"
      page = product_page.click

      image_names = []

      # Grab the base model image names
      page.search("//a").each do |item|
        if item.attributes.to_s =~ /model.+\/(.+\.jpg)/i
          image_names.push($1)
        end
      end

      product_id = ''
      product_name = ''
      product_price = ''

      # Grap product name, price, product id
      if product_page.uri.to_s =~ /product\%255Fid=(\d+)/
        product_id = $1
      end
      item_name = page.search("//font[@class='items_name']").first
      if item_name
        details = item_name.parent.children
        product_name = "" + details.at(0)
        product_price = $1 if details.at(2).to_s =~ /\$(\d+\.\d+)/
      end

      color_hash = Hash.new
      
      # Grab the available colors for the product
      color_option = page.search("//select[@name='COLOR']").first
      if color_option
        color_option.children.each do |option|
          if option.to_s =~ /\<option.+value\="(.+)"\>(.+)\<\/option\>/
            color_hash[$1] = $2
          end
        end
      end

      image_names.each do |image_name|
        puts "\t\tdownloading image group: #{image_name}"

        image_url = ''
        image_local = ''
        perspectives_found = []
        perspectives = ["back", "side", "front", "more"]
        begin
          perspectives.each do |perspective|
            image_url = "http://www.forever21.com/images/model_#{perspective}/#{image_name}"
            image_local = "#{local_image_folder}/#{perspective}_#{db_categories[category]}_#{image_name}"

            # Download the image
            agent.get(image_url).save_as(image_local) unless File.exist?(image_local)
            perspectives_found.push(perspective) if File.exist?(image_local)
          end
        rescue Exception => e
          # Retry
          unless File.exist?(image_local)
            puts "retrying: #{image_url}"
            sleep 5
            begin
              agent.get(image_url).save_as(image_local)
            rescue Exception
            end
            perspectives_found.push(perspective) if File.exist?(image_local)
          end
          unless File.exist?(image_local)
            puts "problem downloading: #{image_url}"
            puts "\t" + e.to_s
            File.open(error_log, 'a') do |f|
              f.puts "problem downloading: #{image_url}"
              f.puts "\t" + e.to_s
            end
          end
          next
        end

        # Save the metadata for this group
        if image_name =~ /(.+)-(\d+)\.jpg/
          base_name = $1 + "-" + $2
          metadata_file = "#{local_metadata_folder}/#{base_name}" + ".txt"
          File.open(metadata_file, 'w') do |f|
            f.puts "[product_detail]"
            f.puts "product_name=" + product_name
            f.puts "product_price=" + product_price
            f.puts "product_color=" + color_hash[$2]
            f.puts "product_id=" + product_id
            f.puts "product_url=" + product_page.uri.to_s
            f.puts "article_type=" + db_categories[category]
            f.puts "article_perspectives=" + perspectives_found.join(",")
            f.puts "brand_name=forever21"
            f.puts "new_arrival=" + (category =~ /whatsnew/ ? "yes" : "no")
            f.puts "base_data_name=" + base_name
            f.puts "scraped_date=" + Time.now.to_s
          end
        end
      end

      # Try not to spam the server
      sleep_val = rand(6)
      sleep sleep_val
    end
  end

rescue Exception => e
  puts e
end

__END__
