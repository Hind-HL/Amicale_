<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<?php include("sgbd.php"); ?>
<!--[if lt IE 7 ]> <html lang="en" class="ie6 ielt8"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="ie7 ielt8"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="ie8"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <html lang="en"> <!--<![endif]-->

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Amicale de solidarite</title>
<link href="css/style.css" type="text/css" rel="stylesheet" />


	<script type="text/javascript" src="scripts/jquery-1.9.0.min.js"></script>
	<script type="text/javascript" src="scripts/script.js"></script>
    <script type="text/javascript" src="scripts/jquery.nivo.slider.js"></script>
    
    <script type="text/javascript">


		if (window.addEventListener) {
    		window.addEventListener("load", sse1.buildMenu, false);
		}
		else if (window.attachEvent) {
    			window.attachEvent("onload", sse1.buildMenu);
		}
		else {
    		window["onload"] = sse1.buildMenu;
		}
	</script>
    
    <script type="text/javascript">
	
    $(window).load(function() {
        $('#slider').nivoSlider();
    });
    </script>
    
   
    	
    
    <script language="javascript" src="scripts/foncition.js"></script>
    
    
</head>

<body style="background-attachment:fixed;background:url(images/bg1.png) repeat">


<div onclick="ferme()" id="modal" style="width:100%;height:100%;z-index:10000000;position:fixed;background-color: rgba(102,102,102,0.7);display:none;margin-top:-15px">
  </div>
  <div id="form" style="top:35%;left:35%;width:330px;padding:15px;background-color:white; box-shadow: 8px 8px 6px rgba(0,0,0,0.8);position:fixed;z-index:1500000000;border-radius:20px;background:rgba(230,230,230,1);display:none">
  <img style="position:absolute;right:-15px;top:-15px;cursor:pointer" src="img/close.png" height="30" width="30" title="fermer" onclick="ferme()" />
  <div id="message" style="background:white;text-align:center;padding:20px"></div>
  </div>


<div class="entete">
	<img src="images/omrans.png" width="200" height="120" style="float:left;margin-left:20px" />
    <span class="log">
    	<center>Amicale de solidarité</center>
        <p align="center" style="color:white;text-shadow:0px 0px 6px rgba(0,0,0,0.8);font-size:18px">Al Omrane Meknes</p>
    </span>
    <p class="teted "><a class="contete" style="color:rgba(203,32,1,1);cursor:pointer" onclick="go('ac')">Actualités </a> | <a class="contete" style="color:rgba(203,32,1,1);cursor:pointer" onclick="go('cl')"> Calendrier </a> | <a onclick="go('cn')" class="contete" style="color:rgba(203,32,1,1);cursor:pointer" > Contact </a></p>
</div>

	<div class="corp">
    
    	<div id="sse50">
  			<div id="sses50">
    			<ul>
      				<li><a href="index.php">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Accueil&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
      				<li><a href="Activites.php">&nbsp;&nbsp;&nbsp;&nbsp;Activités&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
      				<li><a href="Inscription.php">&nbsp;&nbsp;&nbsp;Inscription&nbsp;&nbsp;&nbsp;</a></li>
      				<li><a href="auth.php">Authentification</a></li>
    			</ul>
  			</div>
            
		</div>
        
        
        <div style="margin-top:60px;margin-bottom:60px" class="container">
	<section id="content2">
    <div id="verif" style="display:none;color:red;z-index:100;box-shadow:0px 0px 4px black;position:absolute;background-color:white;width:200px;height:35px;right:-172px;top:95px;text-shadow:0px 0px 3px rgba(0,0,0,0.3)"><span style="height:0px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span></div>
		<form onsubmit="return false;">
			<h1>Inscription Form</h1>
            <div>
				&nbsp;&nbsp;&nbsp;&nbsp; Votre CIN : &nbsp;&nbsp;&nbsp;&nbsp;<input class="test" type="text" placeholder="CIN" required="" id="CIN" />
			</div>
            <div>
				Nom d'utilisateur : <input class="test" type="text" placeholder="Username" required="" id="username2" />
			</div>
			<div>
				&nbsp;&nbsp; Mot de passe : &nbsp;&nbsp;<input type="password" placeholder="Mot de passe" required="" id="password2" />
			</div>
			<div>
				&nbsp;&nbsp;&nbsp; confirmation : &nbsp;&nbsp;&nbsp;<input type="password" placeholder="confirmation" required="" id="password3" />
			</div>
            <div>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nom : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class="test" type="text" placeholder="Nom" required="" id="nom" />
			</div>
            <div>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Prénom : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class="test" type="text" placeholder="Prenom" required="" id="prenom" />
			</div>
            <div>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; E-mail : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class="test" type="text" placeholder="Exemple@exemple.com" required="" id="email" />
			</div>
            <div>
				&nbsp;&nbsp;&nbsp;&nbsp; Téléphone : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class="test" type="text" placeholder="06 XX XX XX XX" required="" id="telephone" />
			</div>
            <div>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fonction : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class="test" type="text" placeholder="Fonction occupé" required="" id="fonction" />
			</div>
            
			<div>
				<input type="submit"  onclick="inscription()" value="Valider" />
			</div>
		</form><!-- form -->
		<div class="button">
			<a href="index.php">Retoure à l'accueil</a>
		</div><!-- button -->
	</section><!-- content -->
</div><!-- container -->
		
    </div>
    
    <div class="pied">
    	Rue Ibn Sina , BP 253, Ville Nouvelle Meknes <br />
        <b>Téléphone</b> : +212 (0) 5 35 51 05 54<br />
		<b>Fax</b> : +212 (0) 5 35 51 04 40 <br  />
		<b>E-mail</b> : commercial@alomrane.ma
        
    </div>

</body>
</html>















