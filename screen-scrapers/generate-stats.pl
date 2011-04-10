#
# Suck out the comments and dump into csv
#

use strict;

my $i = 0;
my $users = 0;
my $line;
my %entries;
my $min_id = 50000;
my $max_id = 0;

my $data_file = "data.csv";

open (DB, ">$data_file") || die ("Can't create file $data_file.");
open (FILE, $ARGV[0]) || die ("Can't open file $ARGV[0].");

print DB "name,date,time,comment_id\r\n";

while ($line = <FILE>)
{
	my $contestant = {
		"Name" => "",
		"Entry_Count" => 0,
		"Last_Time" => 0,
		"Last_ID" => 0,
	};

	next if ($line !~ /\<div class\=\"box_comment\"\>/);
	$i++;
	
	while ($line = <FILE>)
	{
		my $last_id = 0;
		next if ($line !~ /\<div class\=\".+\" id\=\"comment\-(\d+)\"\>/);
		$last_id = $1;	

		$min_id = ($last_id < $min_id) ? $last_id : $min_id;
		$max_id = ($last_id > $max_id) ? $last_id : $max_id;
		
		while ($line = <FILE>)
		{
			next if ($line !~ /\<div class\=\"box_user\"\>/);

			while ($line = <FILE>)
			{
				next if ($line !~ /\<p\>(.+)\<br\>/);
				my $name = $1;
				if ($name =~ /\<a href\=\".+\" rel\=\".+\" class\=\"url\"\>(.+)\<\/a\>/)
				{
					$name = $1;
				}
				$users++ if not defined($entries{$name});

				while ($line = <FILE>)
				{
					next if ($line !~ /\<span class\=\"txt_timestamp\"\>(.+)\<\/span\>/);
					my $time = $1;
					
					$contestant->{"Name"} = $name;
					$contestant->{"Entry_Count"} = $entries{$name}->{"Entry_Count"}+1;
					$contestant->{"Last_Time"} = $time;
					$contestant->{"Last_ID"} = $last_id;					
					$entries{$name} = $contestant;

					$time =~ s/ 2011 //;
					$time =~ s/12:00 am/12:01 am/;	# 12:00 am is a special value see below
					print DB "$name,$time,$last_id\r\n";
					last;
				}
				last;
			}
			last;
		}
		last;
	}
}

#my $key;
#foreach $key (keys %entries)
#{
#	print "User = " . $key . "\n";
#	print "Entry_Count = " . $entries{$key}->{"Entry_Count"} . "\n";
#	print "Last_Time = " . $entries{$key}->{"Last_Time"} . "\n";
#	print "Last_ID = " . $entries{$key}->{"Last_ID"} . "\n";
#	if ($entries{$key}->{"Last_ID"} > $max_id)
#	{
#		$max_id = $entries{$key}->{"Last_ID"};
#	}
#	print "\n";
#}

for (my $n=1;$n < $min_id;$n++)
{
	print DB "__unknown__,February 01,12:00 am,$n\r\n"
}

my $total = ($min_id - 1) + $i;
my $missing = $max_id - $total;
for (my $n=0;$n < $missing;$n++)
{
	print DB "__missing__,February 01,12:00 am,$n\r\n"
}

print "Count = $i\n";
print "Users = $users\n";
print "MaxID = $max_id\n";
print "MinID = $min_id\n";
print "Missing = $missing\n";
print "\n";
print "DataFile = $data_file\n";
