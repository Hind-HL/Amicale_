<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Amicale de solidarite</title>
<link href="css/style.css" type="text/css" rel="stylesheet" />
<link href="css/lean-slider.css" type="text/css" rel="stylesheet" />
<link href="css/sample-styles.css" type="text/css" rel="stylesheet" />


<script type="text/javascript" src="scripts/jquery-1.9.0.min.js"></script>
<script type="text/javascript" src="scripts/script.js"></script>
<script language="javascript" src="scripts/foncition.js"></script>
<script language="javascript" src="scripts/modernizr-2.6.1.min.js"></script>
<script language="javascript" src="scripts/lean-slider.js"></script>    
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
   
</head>

<body  style="/* [disabled]background-attachment:fixed; */ background: url(images/bg1.png) repeat">

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
        
        <?php
		mysql_connect("localhost","root","") or die(mysql_error());
		mysql_select_db("omran") or die(mysql_error());
		mysql_query("SET NAMES 'utf8'") or die(mysql_error());
		$reqq=mysql_query("select galerie from slider") or die(mysql_query());
		$repp=mysql_fetch_array($reqq);
		if($repp['galerie']!='')
		{
			$swar='';
			$part=explode('*',$repp['galerie']);
			$n=count($part);
			for($i=0;$i<$n;$i++)
			{
				$elem=explode("//",$part[$i]);
				if($elem[0]!=NULL)
				$swar.='<div class="slide'.($i+1).'"><img onclick="detEvent('.$elem['2'].');document.getElementById(\'hna\').style.height=\'auto\'" height="430" style="cursor:pointer" src="backoffice/'.$elem[0].'" data-thumb="'.$elem[0].'" title="'.$elem[1].'" />
				<div style="background-color:black;line-height:35px;height:35px;color:white">&nbsp; &nbsp; &nbsp;Photo prise dans l\'événement : <span  style="cursor:pointer;font-size:22px" ><strong>'.$elem['1'].'</strong></span></div>
				</div>';
			}
		}
		 ?>
         
         <div class="slider-wrapper">
        <div id="slider">
        
        <?php if($repp['galerie']!=''){ 
        		echo $swar;
         } ?>
         
         <?php if($repp['galerie']==''){ ?>
            <div class="slide1">
                <img src="backoffice/images/1.jpg" alt="" />
            </div>
            <div class="slide2">
                <img src="backoffice/images/2.jpg" alt="" />
            </div>
            <div class="slide3">
                <img src="backoffice/images/3.jpg" alt="" />
            </div>
            <div class="slide4">
                <img src="backoffice/images/4.jpg" alt="" />
            </div>
            <?php } ?>
            
        </div>
        <div id="slider-direction-nav"></div>
        <div id="slider-control-nav"></div>
    </div>

		
	</div>
    
<div class="corp">

    	<div id="hna" class="sous-corp"  >
        <div id="hona">
				<div class="blocAct" id="b1">
        			<h1 class="title">Actualités à la une</h1>
        			<div class="barre"></div>
                	
                	<?php
						
						$cmp = 0;
						$date=date("Y-m-d");
						$y=date('Y');
						$m=date('m');
						$d=date('d');
						if($m>=7)
						{
							$m6=$m-6;
							$y6=$y;
						}
						else
						{
							$dif=6-$m;
							$m6=12-$dif;
							$y6=$y-1;
						}
		
						if($m6<10)
							$m6='0'.$m6;
						$date2=$y6."-".$m6."-".$d;
						
						
						$req=mysql_query("SELECT * FROM `actualite` where date between '".$date2."' and '".$date."' ORDER BY IDAct desc") or die(mysql_error());
						$req2=mysql_query("SELECT count(*) as nbr FROM `actualite` where date between '".$date2."' and '".$date."' group by(IDact)") or die(mysql_error());
						$rep2=mysql_fetch_array($req2);
						$nbr=$rep2['nbr'];
						if($nbr==0)
						{
							echo '<br />Aucune actualité n\'est disponible à l\'heure actuelle.';
						}
						else
						while($rep=mysql_fetch_array($req))
						{
							$elem = explode('<br />',$rep['contenue']);
							echo '<div class="conAct">
                					<div style="height:68px;width:85%;margin-left:auto;margin-right:auto"><div style="float:left;width:65%"><h3 style="color:rgba(230,45,10,1);cursor:pointer "onclick=\'detail('.$rep['IDact'].');setTimeout(function(){mesur2()},1100);\'>'.$rep['titre'].'</h3></div><div style="float:right"><h4 style="color:rgba(230,45,10,1)">'.$rep['date'].'</h4></div></div>
                					';
							if($rep['image']!=""){	echo	'<br /><img style="margin-right:5px;margin-left:5px" align="left" src="backoffice/'.$rep['image'].'" width="100" height="70" /> ';}
							echo '<p>'.$elem[0].'....</p><br />
                			</div>';
							$cmp++;
							if($cmp==2) break;
						}
						 
					?>
                
                	<div style="margin-left:70%"><a class="contete" style="color:rgba(230,45,10,1);font-size:12px;cursor:pointer" onclick="go('ac')" >Toutes l'actualités...</a></div>
   		  		</div>
                
                
        			<div class="blocAct" id="b2">
        				<h1 class="title">Evenement à la une</h1>
        				<div class="barre"></div>
                        
                        
                 		
                        <?php
                			$cmp = 0;
							$datee=date("Y-m-j");
							mysql_query("SET NAMES 'utf8'") or die(mysql_error());
							$req2=mysql_query("SELECT * FROM `evenement` where etat='approuve' and date >'".$datee."' ORDER BY date ASC") or die(mysql_error());
							$req3=mysql_query("SELECT count(*) as nb FROM `evenement` where etat='approuve' and date >'".$datee."' group by(IDEvent)") or die(mysql_error());		
							$rep3=mysql_fetch_array($req3);
							$nbr=$rep3['nb'];
							if($nbr!=0)
							while($rep2=mysql_fetch_array($req2))
							{
								$elem2 = explode('<br />',$rep2['detail']);
								echo '<div class="conAct" id="detDet">
								<blockquote><h3 style="color:rgba(230,45,10,1);cursor:pointer" onclick="detEvent2('.$rep2['IDEvent'].');setTimeout(function(){mesur2()},1200)"><a>'.$rep2['intitule'].'</a></h3></blockquote>
                	 	<p>'.$elem2[0].'</p>
						</div>';
								$cmp++;
								if($cmp==2) break;
							}
							else
							{
								echo '<br />Aucun evenement n\'est prévu à l\'heure actuelle.';	
							}
						?>
                        
                   		<div style="margin-left:70%;margin-top:10px"><a class="contete" style="color:rgba(230,45,10,1);font-size:12px;cursor:pointer" onclick="go('cl')">Calendrier</a></div>
                   	</div>
                </div>
        </div></div>
    </div>
    
  <script type="text/javascript">
  function mesur()
  {
  	h1=$('#b1').height()
	h2=$('#b2').height()
	if(h1>h2)
	height=h1
	else
	height=h2
	$('#hna').height(50+height)
	
  }
  mesur();
  function mesur2()
  {
  	h1=$('#detArticl').height()
	height=h1
	$('#hna').height(110+height)
  }
	
  </script>
  <script type="text/javascript">
    $(document).ready(function() {
        var slider = $('#slider').leanSlider({
            directionNav: '#slider-direction-nav',
            controlNav: '#slider-control-nav'
        });
    });
    </script>
    
    <div class="pied">
    	Rue Ibn Sina , BP 253, Ville Nouvelle Meknes <br />
        <b>Téléphone</b> : +212 (0) 5 35 51 05 54<br />
		<b>Fax</b> : +212 (0) 5 35 51 04 40 <br  />
		<b>E-mail</b> : commercial@alomrane.ma
    </div>

</body>
</html>