###############################################################################
# stoscano@trisource
###############################################################################

require 'rubygems'
require 'mechanize'
require 'logger'

$logger = Logger.new("scraper.log", shift_age = 'daily')
$failures = 0

def print(x)
  puts x
  $logger << x + "\r\n"
end

def init_browser()
  agent = Mechanize.new
  agent.user_agent = 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Chrome/7.0.517.44'
  agent.max_history = 1
  agent.open_timeout = 3000
  agent.read_timeout = 3000
  agent.keep_alive = 3000
  return agent
end

begin

  if ARGV[0] == nil
    print "Error: first arg must be a comments file"
    exit
  end
  comments_file = ARGV[0]

  if ARGV[1] == nil
    print "Error: second arg must be a names file"
    exit
  end
  names_file = ARGV[1]

  if ARGV[2] == nil
    print "Error: third arg must be a whales file"
    exit
  end
  whales_file = ARGV[2]

  print "Begin mechanize script"
  
  quotes = IO.readlines(comments_file)
  len = quotes.length
  for i in 0..len
    quotes[i] = $1 if quotes[i] =~ /^(.+)$/
  end
  
  names = IO.readlines(names_file)
  names_len = names.length
  for i in 0..names_len
    names[i] = $1 if names[i] =~ /^(.+)$/
  end
  
  whales = IO.readlines(whales_file)
  whales_len = whales.length
  for i in 0..whales_len
    whales[i] = $1 if whales[i] =~ /^(\w+)$/
  end
  
  agent = init_browser()
  page = agent.get "http://live105.radio.com/2011/02/21/be-comment-40000-with-the-word-hipster-and-win-coachella-tickets"
 
  base_sleep_amount = 7
  rand_amount = 15
  comment_no = 0
  i = 1

  while true

    print "Attempt number " + i.to_s
    print "Time is " + Time.now.to_s

    begin
      t1 = Time.now
      
      author = whales[rand(whales_len-1)]
      
      # all other non-whales post at a lower frequency
      # at least every 10th post at most every 25th post
      rand_lowfreq_user = 10 + rand(15)
      if i % rand_lowfreq_user == 0
        author = names[rand(names_len-1)]
        puts "Non-whale author \"" + author + "\" (i=" + i.to_s + ";freq=" + rand_lowfreq_user.to_s + ")"
      else
        puts "Whale author \"" + author + "\" (i=" + i.to_s + ")"
      end

      comment_form = page.form_with(:action => 'http://live105.radio.com/wp-comments-post.php')
      comment_form.field_with(:name => "author").value = author
      comment_form.field_with(:name => "email").value = "zotzot209@gmail.com"
      comment_form.field_with(:name => "comment").value = quotes[i]
      print "Submitting comment \"" + quotes[i] + "\""
      page = agent.submit comment_form

      if page == nil
        raise "Form submit failed"
      end

      i = i + 1

      print "Uri = " + page.uri.to_s
      if page.uri.to_s =~ /\#comment\-(\d+)/
        comment_no = $1
      else
        raise "Uri parse failed"
      end

      t2 = Time.now
      secs = (t2 - t1)

      print "Time elapsed = " + secs.to_s + " sec"

      $failures = 0

      sleep_val = base_sleep_amount.to_i + rand(rand_amount)
      print "Sleeping for " + sleep_val.to_s + " sec"
      print ""
      sleep sleep_val.to_i

    rescue Exception => e
      $failures = $failures + 1
      print "Exception caught: \"" + e.to_s + "\""
      print "Sleeping " + (sleep_val.to_i * $failures).to_s
      sleep sleep_val.to_i * $failures
    end
  end
end

__END__
