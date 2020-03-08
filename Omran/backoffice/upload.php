<?php

session_start();
include('connectdb.php');

if(isset($_POST['valid']))
{
	$catalog='';
	if(isset($_FILES['images']))
	{
		$allowed = array('png', 'jpg', 'mpeg','gif');
		$n=count($_FILES['images']['name']);
		$extension = array();
		for($i=0;$i<$n;$i++)
		{
			if($_FILES['images']['error'][$i] == 0)
			{
				$extension[$i] = pathinfo($_FILES['images']['name'][$i], PATHINFO_EXTENSION);
				if(!in_array(strtolower($extension[$i]), $allowed))
				{
					echo '{"status":"error"}';
					exit;
				}
				move_uploaded_file($_FILES['images']['tmp_name'][$i], 'img_deroul/'.$_FILES['images']['name'][$i]);
			}
		}
		for($i=0;$i<$n;$i++)
		{
			$catalog.='img_deroul/'.$_FILES['images']['name'][$i];
			if($i<$n-1)
				$catalog.='*';
		}
	}
	$IDEvent=$_POST['IDEvent'];
	$date=$_POST['date'];
	$budget=$_POST['budget'];
	$lieux=$_POST['lieux'];
	$lieux=addslashes($lieux);
	$desc=$_POST['Desc'];
	$desc=addslashes($desc);
	mysql_query("update evenement set etat='realise',date='$date',budget=$budget,lieux='$lieux' where IDEvent=$IDEvent") or die(mysql_error());
	mysql_query("insert into deroulement values ('',$IDEvent,'$catalog','$desc')") or die(mysql_error());
	
	
	header("Location: activites.php");
}

if(isset($_POST['Dsoufle']))
{
	$img='';
	if(isset($_FILES['Ijoint']))
	{
		$allowed = array('jpg', 'gif', 'png');
		$extension = '';
		$test=0;
		$ConJoin='';
		if($_FILES['Ijoint']['error'] == 0)
		{
			$extension = pathinfo($_FILES['Ijoint']['name'], PATHINFO_EXTENSION);
			if(!in_array(strtolower($extension), $allowed))
			{
				echo 'extention invalide : jpg, gif, png';
				exit;
			}
			move_uploaded_file($_FILES['Ijoint']['tmp_name'], 'img_act/'.$_FILES['Ijoint']['name']);
			$test=1;
		}
		if($test==1)
		{
			$img='img_act/'.$_FILES['Ijoint']['name'];
			$img=addslashes($img);
		}
	}
	$IDact=$_POST['IDact'];
	$IntitulAct=$_POST['IntitulAct'];
	$IntitulAct=addslashes($IntitulAct);
	$TextAct=$_POST['TextAct'];
	$TextAct=addslashes($TextAct);
	if($img!='')
	mysql_query("update actualite set titre='$IntitulAct',image='$img',contenue='$TextAct' where IDact='$IDact'") or die(mysql_error());
	else
	mysql_query("update actualite set titre='$IntitulAct',contenue='$TextAct' where IDact='$IDact'") or die(mysql_error());
	header("Location: Actualite.php");
}

if(isset($_POST['pipi']))
{
	$img='';
	if(isset($_FILES['Ijoint']))
	{
		$allowed = array('jpg', 'gif', 'png');
		$extension = '';
		$test=0;
		$ConJoin='';
		if($_FILES['Ijoint']['error'] == 0)
		{
			$extension = pathinfo($_FILES['Ijoint']['name'], PATHINFO_EXTENSION);
			if(!in_array(strtolower($extension), $allowed))
			{
				echo 'extention invalide : jpg, gif, png';
				exit;
			}
			move_uploaded_file($_FILES['Ijoint']['tmp_name'], 'img_act/'.$_FILES['Ijoint']['name']);
			$test=1;
		}
		if($test==1)
		{
			$img='img_act/'.$_FILES['Ijoint']['name'];
			$img=addslashes($img);
		}
	}
	$IntitulAct=$_POST['IntitulAct'];
	$IntitulAct=addslashes($IntitulAct);
	$TextAct=$_POST['TextAct'];
	$TextAct=addslashes($TextAct);
	$date=date("Y-m-d");
	mysql_query("insert into actualite values('','".$_SESSION['CIN']."','$IntitulAct','$date','$img','$TextAct')") or die(mysql_error());
	header("Location: Actualite.php");
}

if(isset($_POST['caca']))
{
	
	if(isset($_FILES['Pjoint']))
	{
		$allowed = array('pdf', 'doc', 'docx');
		$extension = '';
		$test=0;
		$ConJoin='';
		if($_FILES['Pjoint']['error'] == 0)
		{
			$extension = pathinfo($_FILES['Pjoint']['name'], PATHINFO_EXTENSION);
			if(!in_array(strtolower($extension), $allowed))
			{
				echo 'extention invalide : pdf, doc, docx';
				exit;
			}
			move_uploaded_file($_FILES['Pjoint']['tmp_name'], 'pice_jointe/'.$_FILES['Pjoint']['name']);
			$test=1;
		}
		if($test==1)
		{
			$ConJoin=$_POST['CdPjDot'].'*'.'pice_jointe/'.$_FILES['Pjoint']['name'];
			$ConJoin=addslashes($ConJoin);
		}
		$intitule=$_POST['IntitulDot'];
		$mont=$_POST['MontDot'];
		$intitule=addslashes($intitule);
		$desc=$_POST['DescDot'];
		$desc=addslashes($desc);
		$condition=$_POST['CondDot'];
		$cond='';
		$cmp=count($condition);
		for($i=0;$i<$cmp;$i++)
		{
			$cond.=$condition[$i];
			if($i!=$cmp-1)
				$cond.='*';
		}
		
		$cond=addslashes($cond);
		
		mysql_query("insert into dotation values('','".$_SESSION['CIN']."','$intitule',$mont,'$desc','$cond','$ConJoin')") or die(mysql_error());
	}
	header("Location: activites.php");
}
?>