<!DOCTYPE html>

<html>
	<head>
    	<meta charset="utf-8">
    	<meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- tell Internet Explorer to display site in highest mode available -->
    	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> <!-- ensure proper rendering and touch zooming for all devices -->

		<title>AlgaeCal Test - Zachary Kirshner</title>

		<!-- load Bootstrap CSS: -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
		
		<!-- load Google Web Font 'Roboto': -->
		<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

		<!-- load main CSS: -->
		<link rel="stylesheet" href="css/style.css">
	</head>

	<body>
		<header id="header">
			<a href="https://www.algaecal.com/" title="https://www.algaecal.com/">
				<img id="logoHeader" src="images/logo.png" alt="AlgaeCal">
			</a>
			
			<a id="tap-to-talk" href=""> <!-- the href value (tel:+01-800-820-0184") is populated via JS with REST API data -->
				<span class="tap">Tap to Talk</span> <span class="phone-number"></span><br /> <!-- span#phone-number inner-html text (1-800-820-0184) is populated via JS with REST API data -->
				<img id="phone-icon" src="images/phone_icon.png"><span class="speak">Speak to our Bone Health Specialists!</span>
			</a> <!-- end #tap-to-talk -->
		</header> <!-- end #header -->