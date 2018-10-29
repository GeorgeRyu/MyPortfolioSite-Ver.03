<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="<?php language_attributes(); ?>">

<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width = device-width, initial-scale = 1">
	<meta charset="<?php bloginfo( 'charset' ); ?>">

	<title>Ryu Takahashi | Designer & Front-End Developer</title>
	<?php wp_head(); ?>

</head>

<body>
	<header>
		<nav class="menu-content">
			<ul class="wrap-links">
				<li><a href="about.html">ABOUT</a></li>
				<li><a href="work01.html">WORK</a></li>
			</ul>
		</nav>
	</header>

	<a id="logo" class="logo" href="<?php echo home_url(); ?>">
		<svg width="120px" height="120px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
			<defs><style>.cls-1{fill:#dedc00;}</style></defs>
			<title>logo</title>
			<g id="logo-rt" id="Layer_2" data-name="Layer 2">
				<g id="Layer_1-2" data-name="Layer 1">
					<path id="logo" class="cls-1" d="M120,43.76C120,0,60,0,60,0H0V120H45.05V47H24.94V41.16H70.35V47H50.24v73H120L84,84C100.68,79.32,120,68.58,120,43.76Z"/>
				</g>
			</g>
		</svg>
		<div class="wrap-gauge"><span id="gauge"></span></div>
	</a>
