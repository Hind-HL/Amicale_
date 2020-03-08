<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Amicale de solidarite</title>
<link href="css/style.css" type="text/css" rel="stylesheet" />


<script type="text/javascript" src="scripts/jquery-1.9.0.min.js"></script>
<script type="text/javascript" src="scripts/script.js"></script>
<script type="text/javascript" src="scripts/foncition.js"></script>
<script type="text/javascript" src="../miniproj_zeggaf/scripts/jquery.js"></script>
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

<script  type="text/javascript">
    $(window).load(function() {
        $('#slider').nivoSlider();
    });
    </script>
    
    <script type="text/javascript">
	
		dt = new Date()
		y=dt.getFullYear()
		deroulement(y);
		opt=""
		for(i=0;i<=10;i++)
		{
			opt=opt+"<option>"+(y-i)+"</option>"
		}
		
		
		
		
		
		
		

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

		
	</div>
    
    <div class="corp">
    	<div class="sous-corp">
        	<center><h4 style="color:rgba(72,164,255,1)">Activités relatives a l'année : <select id="sanaton" onchange="an = this.value;deroulement(an)"></select></h46></center>
			<script type="application/javascript">
            	document.getElementById('sanaton').innerHTML=opt
            </script> 
            <div id="hona" style="display:none"></div>       
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