require 'daemons'

options = {
  :backtrace => true,
  :ontop => true,
  :monitor => true
}

Daemons.run('live105-scraper.rb', options)

# usage 
# ruby daemon-script.rb start
# ruby daemon-script.rb restart
# ruby daemon-script.rb stop
