#
# Suck out the comments and dump into csv
#

use strict;

my $i = 0;
my $users = 0;
my $line;
my %entries;

open (DB, ">data.csv") || die ("Can't create file.");
open (FILE, $ARGV[0]) || die ("Can't open file $ARGV[0].");

print DB "name,date,time,comment_id\n";

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
		
		while ($line = <FILE>)
		{
			next if ($line !~ /\<div class\=\"box_user\"\>/);

			while ($line = <FILE>)
			{
				next if ($line !~ /\<p\>(.+)\<br\>/);
				my $name = $1;
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
					print DB "$name,$time,$last_id\n";
					last;
				}
				last;
			}
			last;
		}
		last;
	}
}

my $max_id = 0;
my $key;
foreach $key (keys %entries)
{
	print "User = " . $key . "\n";
	print "Entry_Count = " . $entries{$key}->{"Entry_Count"} . "\n";
	print "Last_Time = " . $entries{$key}->{"Last_Time"} . "\n";
	print "Last_ID = " . $entries{$key}->{"Last_ID"} . "\n";
	if ($entries{$key}->{"Last_ID"} > $max_id)
	{
		$max_id = $entries{$key}->{"Last_ID"};
	}
	print "\n";
}

print "Count = $i\n";
print "Users = $users\n";
print "NaxID = $max_id\n";

