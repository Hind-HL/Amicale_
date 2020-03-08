<?php
include('connectdb.php');
session_start();
if(!isset($_SESSION['login']))
{
	header('Location:../');
}

if(isset($_GET['deco']))
{
	session_destroy();
}
?>