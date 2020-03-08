<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<?php 
	include('afch.php');
	include('sgbd.php');
?>
<input type="hidden" id="statue" value="<?php echo $_SESSION['statue']?>" />
<input type="hidden" id="CINm" value="<?php echo $_SESSION['CIN']?>" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Amicale de solidarite</title>
<link href="css/style.css" type="text/css" rel="stylesheet" />
<!--<link rel='stylesheet' href='scripts/lib/cupertino/jquery-ui.min.css' />-->
<!--<link href='css/fullcalendar.css' rel='stylesheet' />-->
<!--<link href='css/fullcalendar.print.css' rel='stylesheet' media='print' />-->
<!--<script src='scripts/lib/moment.min.js'></script>-->
<script src='scripts/lib/jquery.min.js'></script>
<!--<script src='scripts/lib/jquery-ui.custom.min.js'></script>-->
<!--<script src='scripts/fullcalendar.min.js'></script>-->


<script type="text/javascript" src="scripts/script.js"></script>
<script type="text/javascript" src="scripts/foncition.js"></script>
    <script type="text/javascript" src="scripts/jquery.nivo.slider.js"></script>
    
    <script>
	
	setTimeout(function(){affichage()},100);
	setInterval(function(){sa3a()},1000)

	
	
	
</script>
    
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

<script  type="text/javascript">
    $(window).load(function() {
        $('#slider').nivoSlider();
    });
	
	
	
    </script>
    

</head>

<body style="background-attachment:fixed;background:url(images/bg1.png) repeat">

<div class="entete">
	<a href="index.php"><img src="images/omrans.png" width="200" height="120" style="float:left;margin-left:20px" /></a>
    <span class="log">
    	<center>Amicale de solidarité</center>
        <p align="center" style="color:white;text-shadow:0px 0px 6px rgba(0,0,0,0.8);font-size:18px">Al Omrane Meknes</p>
    </span>
    <p class="teted "><a class="contete" style="color:rgba(203,32,1,1);cursor:pointer" onclick="go('ac')">Actualités </a> | <a class="contete" style="color:rgba(203,32,1,1);cursor:pointer" onclick="go('cl')"> Calendrier </a> | <a onclick="go('cn')" class="contete" style="color:rgba(203,32,1,1);cursor:pointer" > Contact </a></p>
</div>


<div style="width:1025px;height:38px;background:#FFF;margin-bottom:25px;border-radius:4px;border:groove 2px;margin-left:auto;margin-right:auto;box-shadow:2px 2px 8px rgba(51,51,51,0.3);background-image:radial-gradient(rgba(252,252,252,1),rgba(245,245,245,1))">

	<a href="index.php"><img src="images/omrans.png" height="36" width="80" style="float:left;margin-left:10px" /></a>

	<span style="float:right;margin-right:5px">
	<img style="float:right;cursor:pointer" src="img/1367644414_logout.png"  width="35" height="35" title="Déconnexion" onclick="deco()"/>
	<img style="float:right;margin-right:3px;<?php if($_SESSION['statue']=='adherent') { ?>margin-left:20px;<?php } ?>cursor:pointer" src="img/1367645053_configuration 1.png" width="35" height="35" title="Mon compte" onclick="confcmpt('<?php echo $_SESSION['CIN'];?>')"/>
    <?php if($_SESSION['statue']=='admin' || $_SESSION['statue'] == 'membre'){ ?>
    <img style="float:right;margin-left:20px;margin-right:3px;cursor:pointer" src="img/administrator.png" width="35" height="35" title="Gestion" onclick="gestion()"/>
    <?php }?>
	<div style="float:lef;margin-right:140px;height:36px"><?php echo $_SESSION['Nom'].'<br />'.$_SESSION['Prenom'] ?></div>
	</span>

	<center><span style="font-size:20px;line-height:38px" id="sa3a"></span></span></center>
</div>

	<div class="corp">
		<div id="sse50">
  			<div id="sses50">
    			<ul>
      				<li><a href="index.php">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Accueil&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
      				<li><a href="Activites.php">&nbsp;&nbsp;&nbsp;&nbsp;Activités&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
      				<?php if($_SESSION['statue']=='admin' || $_SESSION['statue'] == 'membre'){ ?><li><a href="Actualite.php">&nbsp;&nbsp;&nbsp;Actualité&nbsp;&nbsp;&nbsp;</a></li><?php }?>
                    <li><a href="profile.php">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
    			</ul>
  			</div>
		</div>

		
	</div>
    
    <div class="corp">
    	<div class="sous-corp">
        	
            <div id="hona" >
             
            </div>       
        </div>
    </div>
    
    <div class="pied">
    	Rue Ibn Sina , BP 253, Ville Nouvelle Meknes <br />
        <b>Téléphone</b> : +212 (0) 5 35 51 05 54<br />
		<b>Fax</b> : +212 (0) 5 35 51 04 40 <br  />
		<b>E-mail</b> : commercial@alomrane.ma
    </div>
    
    

</body>
</html>