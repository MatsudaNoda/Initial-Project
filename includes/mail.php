<?php
	require 'autoloader.php';
	use Mailgun\Mailgun;

	# Instantiate the client.
	$mgClient = new Mailgun('key-490ab44144c20be7a0905dadac7ef920');
	$domain = "sandbox6ae713acf0624afd9e3ed700b432d317.mailgun.org";

	# Make the call to the client.
	$result = $mgClient->sendMessage("$domain",
	  array('from'    => 'test@syntervision.com',
	        'to'      => 'gabriel.schippers@syntervision.com',
	        'subject' => 'Hello',
	        'text'    => 'Testing some Mailgun awesomeness!'));				
?>