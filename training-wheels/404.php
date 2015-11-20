<?php
	include $_SERVER['DOCUMENT_ROOT']."/php/training-functions.php";
	
	header($_SERVER['SERVER_PROTOCOL'] . " 200 OK");
	
	$uri=$_SERVER['REQUEST_URI'];
	$parts=preg_split("/[\/?]/",$uri);
	
	if($parts[1]=="json")
	{
        print_some_json();
	}
	else
	{
		home();
	}
?>

