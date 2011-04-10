###############################################################################
# stoscano@trisource
###############################################################################

require 'rubygems'
require 'mechanize'
require 'net/smtp'

def send_email(from, from_alias, to, to_alias, subject, message)
	msg = <<END_OF_MESSAGE
From: #{from_alias} <#{from}>
To: #{to_alias} <#{to}>
Subject: #{subject}
	
#{message}
END_OF_MESSAGE
	
	Net::SMTP.start('mail.trisourcesoftware.com', 25, 'trisourcesoftware.com', 'test@trisourcesoftware.com', 'test123!!!', :login) do |smtp|
		smtp.send_message msg, from, to
	end
end

begin

  puts "Begin mechanize script"

  quotes = []

  puts "Loading quotes"
  exit unless File.exist?("quotes.txt")
  i = 0
  
  quotes = IO.readlines("quotes.txt")
  len = quotes.length

  for c in 0..len
    if quotes[c] =~ /(.+)(\.|\?|\!)\s*$/
      quotes[c] = $1 + " hipster" + $2
    else
      quotes[c] = quotes[c] + " hipster." unless quotes[c] == nil
    end
  end

  puts "Randomizing " + len.to_s + " quotes"
  for c in 0..len
    temp = quotes[c]
    pos = rand(len)
    quotes[c] = quotes[pos]
    quotes[pos] = temp
  end
  puts "done"

  agent = Mechanize.new
  agent.user_agent = 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Chrome/7.0.517.44 Safari/534.7'
  agent.max_history = 0
  agent.open_timeout = 300
  agent.read_timeout = 300
  agent.keep_alive = false

  page = agent.get "http://live105.radio.com/2011/02/21/be-comment-40000-with-the-word-hipster-and-win-coachella-tickets" 

  base_sleep_amount = 60*15
  rand_amount = 60*10
  comment_no = 0
  i = 0

  while comment_no.to_i < 40050

    if i == len
      puts "Randomizing " + len.to_s + " quotes"
      for c in 0..len
        temp = quotes[c]
        pos = rand(len)
        quotes[c] = quotes[pos]
        quotes[pos] = temp
      end
      puts "done"
    end

    puts "Attempt number " + i.to_s
    puts "Time is " + Time.now.to_s

    begin
      t1 = Time.now

      page = page.form_with(:action => 'http://live105.radio.com/wp-comments-post.php') do |comment_form|
        comment_form.field_with(:name => "author").value = "Steve"
        comment_form.field_with(:name => "email").value = "stoscano@hotmail.com"
        comment_value = quotes[i]
        comment_form.field_with(:name => "comment").value = comment_value
        puts "Submitting comment \"" + comment_value + "\""
      end.click_button

      if page == nil
        raise "Form submit failed"
      end

      i = i + 1

      puts "Uri = " + page.uri.to_s
      if page.uri.to_s =~ /\#comment\-(\d+)/
        comment_no = $1
      else
        raise "Uri parse failed"
      end

      if comment_no.to_i > 39000
        base_sleep_amount = 30
        rand_amount = 30
        if comment_no.to_i > 39500
          base_sleep_amount = 5
          rand_amount = 1
        end
      end

      t2 = Time.now
      secs = (t2 - t1)

      puts "Time elapsed = " + secs.to_s + " sec"

      sleep_val = base_sleep_amount + rand(rand_amount)
      puts "Sleeping for " + sleep_val.to_s + " sec"
      puts ""
      sleep sleep_val

    rescue Exception => e
      # Retry
      sleep_val = base_sleep_amount + rand(rand_amount)
      puts "Exception caught: \"" + e.to_s + "\", retrying in " + sleep_val.to_s + "..."
      puts ""
      sleep sleep_val
    end
  end
end

__END__
