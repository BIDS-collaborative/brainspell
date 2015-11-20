<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');

$rootdir = "/";

include $_SERVER['DOCUMENT_ROOT'].$rootdir."php/base.php";

function print_some_json()
{
    print '{"this": "that", "a number": 1}';
}
function home()
{
	global $rootdir;
    global $dbuser;

	$html = file_get_contents($_SERVER['DOCUMENT_ROOT'].$rootdir."templates/base.html");
    $core = 'If I was going to access the database, I would do it as '.$dbuser;
	$tmp=str_replace("<!--%Core%-->",$core,$html);
    // Why don't we just assign directly to $html?
	$html=$tmp;

	print $html;
}
?>
