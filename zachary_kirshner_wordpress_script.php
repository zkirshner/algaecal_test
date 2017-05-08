<?php 

/*
/ To include an external script for the last version of jQuery in WordPress,
/ I would put the code below into the functions.php file of WordPress' active theme.
/ I would manually select a CDN URL for the latest stable version of jQuery, and 
/ would no longer use an automatic "latest version" link, as jQuery and Google
/ have discontinued updating these links since jQuery 1.11.1.
/
*/ 

function include_custom_jquery() { // function to replace WP core jQuery with external version
	wp_deregister_script('jquery'); // de-register WP core version of jQuery

	wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', array(), null, true); // load external version of jQuery
}

add_action('wp_enqueue_scripts', 'include_custom_jquery'); // call include_custom_jquery()

?>
