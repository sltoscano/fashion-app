###############################################################################
# stoscano@trisource
###############################################################################

require 'rubygems'
require 'mechanize'
require 'net/smtp'
require 'logger'

$logger = Logger.new("scraper.log", shift_age = 'daily')

def print(x)
  puts x
  $logger << x + "\r\n"
end

begin

  print "Begin mechanize script"

  quotes = []

  print "Loading quotes"
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

  print "Randomizing " + len.to_s + " quotes"
  for c in 0..len
    temp = quotes[c]
    pos = rand(len)
    quotes[c] = quotes[pos]
    quotes[pos] = temp
  end
  print "done"

  agent = Mechanize.new
  agent.user_agent = 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Chrome/7.0.517.44 Safari/534.7'
  agent.max_history = 0
  agent.open_timeout = 300
  agent.read_timeout = 300
  agent.keep_alive = false

  page = agent.get "http://live105.radio.com/2011/02/21/be-comment-40000-with-the-word-hipster-and-win-coachella-tickets" 

  base_sleep_amount = 10
  rand_amount = 5
  comment_no = 0
  i = 0

  while true

    if i == len
      print "Randomizing " + len.to_s + " quotes"
      for c in 0..len
        temp = quotes[c]
        pos = rand(len)
        quotes[c] = quotes[pos]
        quotes[pos] = temp
      end
      print "done"
    end

    print "Attempt number " + i.to_s
    print "Time is " + Time.now.to_s

    begin
      t1 = Time.now

      page = page.form_with(:action => 'http://live105.radio.com/wp-comments-post.php') do |comment_form|
        comment_form.field_with(:name => "author").value = "Steve"
        comment_form.field_with(:name => "email").value = "stoscano@hotmail.com"
        comment_value = quotes[i]
        comment_form.field_with(:name => "comment").value = comment_value
        print "Submitting comment \"" + comment_value + "\""
      end.click_button

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

      sleep_val = base_sleep_amount + rand(rand_amount)
      print "Sleeping for " + sleep_val.to_s + " sec"
      print ""
      sleep sleep_val

    rescue Exception => e
      # Retry
      sleep_val = base_sleep_amount + rand(rand_amount)
      print "Exception caught: \"" + e.to_s + "\", retrying in " + sleep_val.to_s + "..."
      print ""
      sleep sleep_val
    end
  end
end

__END__
