<?
require "Auth_vk.php"
$o = new Auth_vk()
if(!$_GET['code']){
	$o->redrect(URL_AUTH)
	$query = "client_id" = ".APP_ID." &scope = offline &redirect_uri =".REDIRECT_URI."&response +type=code" 
	$o->redirect(URL_AUTH? $query)
}



if($_GET['code']){
	echo  ($_GET['code']
}
?>