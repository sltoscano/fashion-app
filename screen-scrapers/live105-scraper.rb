###############################################################################
# stoscano@trisource
###############################################################################

require 'rubygems'
require 'mechanize'
require 'net/smtp'
require 'logger'

$logger = Logger.new("scraper.log", shift_age = 'daily')
$failures = 0

def print(x)
  puts x
  $logger << x + "\r\n"
end

def init_browser()
  agent = Mechanize.new
  agent.user_agent = 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Chrome/7.0.517.44 Safari/534.0'
  agent.max_history = 1
  agent.open_timeout = 3000
  agent.read_timeout = 3000
  agent.keep_alive = 3000
  return agent
end

begin

  if ARGV[0] == nil
    print "Error: first arg must be an integer"
    exit
  end

  print "Begin mechanize script"

  quotes = []

  print "Loading quotes"
  unless File.exist?("quotes.txt")
    print "Error: couldn't find quotes.txt"
    exit
  end
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

  agent = init_browser()
  page = agent.get "http://live105.radio.com/2011/02/21/be-comment-40000-with-the-word-hipster-and-win-coachella-tickets"
 
  base_sleep_amount = 5;
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
      sleep 5
      t1 = Time.now

      comment_form = page.form_with(:action => 'http://live105.radio.com/wp-comments-post.php')
      comment_form.field_with(:name => "author").value = "Steve"
      comment_form.field_with(:name => "email").value = "stoscano@hotmail.com"
      comment_value = (ARGV[0].to_i+i).to_s + ". " + quotes[i]
      comment_form.field_with(:name => "comment").value = comment_value
      print "Submitting comment \"" + comment_value + "\""
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
      # Retry
      $failures = $failures + 1
      # linear backoff
      sleep_val = 30 * $failures
      print "Exception caught: \"" + e.to_s + "\", retrying in " + sleep_val.to_s + "..."
      print ""
      sleep sleep_val.to_i
      # reestablish connection
      agent = init_browser()
      page = agent.get "http://live105.radio.com/2011/02/21/be-comment-40000-with-the-word-hipster-and-win-coachella-tickets"
    end
  end
end

__END__
