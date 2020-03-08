<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Amicale de solidarite</title>
<link href="css/style.css" type="text/css" rel="stylesheet" />


<script type="text/javascript" src="scripts/jquery-1.9.0.min.js"></script>
    <script type="text/javascript" src="scripts/jquery.nivo.slider.js"></script>
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

	<div class="corp">
		<ul id="nav" style="margin-top:5px;">
			<li class="current" ><a href="index.php">Accueil</a></li><!-- n1 -->
				<li><a href="Activites.php">Activités</a><!-- n1 -->
                	<ul>
						<li><a href="#">calendrier</a></li>
						<li><a href="#">Découvrir</a></li>
					</ul>
				</li>
            
			<li><a href="#">Inscription</a></li>	
			<li><a href="#">Authentification</a></li>
    	</ul>
   <br /><br />
		<div id="wrapper" >
        
        	<div class="slider-wrapper theme-default" >
            	<div id="slider" class="nivoSlider">
                	<img src="images/welding.jpg" data-thumb="images/welding.jpg" alt="" />
                	<img src="images/Metal-fabrication1.jpg" data-thumb="images/Metal-fabrication1.jpg" alt="" title="Omran bulding" />
                	<img src="images/fabrication.jpg" data-thumb="images/fabrication.jpg" alt="" data-transition="slideInLeft" />
                	<img src="images/ligne-de-fabrication.jpg" data-thumb="images/ligne-de-fabrication.jpg" alt="" title="#htmlcaption" />
            	</div>
            	<div id="htmlcaption" class="nivo-html-caption">
                	<strong>test</strong> slider <em>Omran</em> site <a href="#">"web"</a>. 
            	</div>
        	</div>
    	</div>
	</div>
    
    <div class="corp">
    	<div class="sous-corp" style="height:350px" >
        	<div class="blocAct">
        		<p class="title">Actualités à la une</p>
        		<div class="barre"></div>
            </div>
       
        	<div class="blocAct">
        		<p class="title">Evenement à la une</p>
        		<div class="barre"></div>
            </div>
        </div>
    </div>

</body>
</html>