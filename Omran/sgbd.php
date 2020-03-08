
<?php
	mysql_connect("localhost","root","") or die(mysql_error());
	mysql_select_db("omran") or die(mysql_error());
	mysql_query("SET NAMES 'utf8'") or die(mysql_error());
	
	if(isset($_GET['ChangePas']))
	{
		$CIN=$_GET['CIN'];
		$npswd=$_GET['NewPasse'];
		$pswd=$_GET['pswd'];
		
		if($_SESSION['CIN']==$CIN)
		{
			$req=mysql_query("select * from compte where CIN = '$CIN'") or die(mysql_error());
			$rep=mysql_fetch_array($req);
			if($pswd!=$rep['password'])
			{
				echo 1;
			}
			else
			{
				mysql_query("update compte set password='$npswd' where CIN='$CIN'") or die(mysql_query());
				echo 0;
			}
		}
		else
		{
			echo 3;
		}
		
	}
	
	if(isset($_GET['ChangeLog']))
	{
		$log=$_GET['login'];
		$pswd=$_GET['pswd'];
		$CIN=$_GET['CIN'];
		if($_SESSION['CIN']==$CIN)
		{
			$req=mysql_query("select * from compte where CIN = '$CIN'") or die(mysql_error());
			$rep=mysql_fetch_array($req);
			if($pswd!=$rep['password'])
			{
				echo 1;
			}
			else
			{
				$req2=mysql_query("select * from compte where login = '$log' and CIN != '$CIN'") or die(mysql_error());
				$rep2=mysql_fetch_array($req2);
				if($rep2!=NULL)
				{
					echo 2;
				}
				else
				{
					mysql_query("update compte set login='$log' where CIN='$CIN'") or die(mysql_query());
					$_SESSION['login']=$log;
					echo 0;
				}
			}
		}
		else
			echo 3;
	}
	
	if(isset($_GET['param']))
	{
		$CIN=$_GET['CIN'];
		$req=mysql_query("select * from compte where CIN = '$CIN'") or die(mysql_error());
		$rep=mysql_fetch_array($req);
		?>
        <div style="margin-top:10px;margin-bottom:10px;width:auto" class="container">
	<section id="content2" style="margin-left:0px;margin-right:0px">
    <div id="verif" style="display:none;color:red;z-index:100;box-shadow:0px 0px 4px black;position:absolute;background-color:white;width:200px;height:35px;right:-172px;top:180px;text-shadow:0px 0px 3px rgba(0,0,0,0.3)"><span style="height:0px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span></div>
		<form onsubmit="return false;">
        
			<h1>Paramétre du compte</h1>
            <div>
				&nbsp;&nbsp;&nbsp;&nbsp; Votre CIN : &nbsp;&nbsp;&nbsp;&nbsp;<input disabled="disabled" class="test" type="text" placeholder="CIN" required="" id="CIN" value="<?php echo $CIN; ?>" />
			</div>
            
            <div style="margin-bottom:10px">
            	Changer mot de passe : <input type="radio" name="choix" onclick="Change('ChangePasse')"  /> &nbsp;&nbsp;&nbsp;&nbsp; Changer Pseudo : <input type="radio" name="choix" onclick="Change('ChangePseud')"/>
            </div>
            
            <div id="ChangePseud" style="display:none">
            	<div>
					Nom d'utilisateur : <input class="test" type="text" placeholder="Username" required="" id="username2" value="<?php echo $rep['login'] ?>" />
				</div>
                <div>
					&nbsp;&nbsp; Mot de passe : &nbsp;&nbsp;<input type="password" placeholder="Mot de passe" required="" id="password2" />
				</div>
            </div>
            
            <div id="ChangePasse" style="display:none">
            	<div>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; old passe : &nbsp;&nbsp;<input type="password" placeholder="Mot de passe" required="" id="password6" />
				</div>
				<div>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; new passe : &nbsp;&nbsp;<input type="password" placeholder="Mot de passe" required="" id="password4" />
				</div>
				<div>
					&nbsp;&nbsp;&nbsp;&nbsp; confirmation : &nbsp;&nbsp;&nbsp;<input type="password" placeholder="confirmation" required="" id="confirm" />
				</div>
            </div>
            
            
			

			<div>
				<input type="submit" id="pff"  value="Valider"  style="margin-bottom:10px;display:none" onclick="ValChange()" />
			</div>
		</form><!-- form -->
        
	</section><!-- content -->
</div><!-- container -->
		<?php
	}
	
	if(isset($_GET["inscription"]))
	{
		
		$cin=$_GET["cin"];
		$nom=addslashes($_GET["nom"]);
		$prenom=addslashes($_GET["prenom"]);
		$email=addslashes($_GET["email"]);
		$tele=$_GET["tele"];
		$fonction=addslashes($_GET["fonction"]);
		$login=addslashes($_GET["login"]);
		$pswd=$_GET["pswd"];
		
		
		$req=mysql_query("select * from `compte` where `CIN` = '$cin'")  or die(mysql_error());
		$rep=mysql_fetch_array($req) ;
		
		if($rep==NULL)
		{
			
			$req2=mysql_query("select * from compte where login = '$login'") or die(mysql_error());
			$rep2=mysql_fetch_array($req2);
			if($rep2==NULL)
			{
				mysql_query("insert into compte values('$cin','adherent','$nom','$prenom','$email','$tele','$fonction','$login','$pswd','actif')") or die(mysql_error());
				echo "1";
			}
			else
			echo "2";
		}
		else
		{
			echo "3";
		}
	}
	
	if(isset($_GET["forgot"]))
	{
		
		ini_set("SMTP","127.0.0.1");
		$cin=$_GET['cin'];
		$req=mysql_query("select email,login,password from `compte` where `CIN` = '$cin'")  or die(mysql_error());
		$rep=mysql_fetch_array($req);
		if($rep!=NULL)
		{
			$mail=$rep['email'];
			$mail=addslashes($mail);
			$sujet = 'Recuperation du compte';
			$message = "Bonjour,
			Votre login est : ".$rep['login'].", est votre mot de passe est : ".$rep['password'];
			$destinataire = $mail;
			$headers = "From: \"Amicale de solidarité\"<postmaster@localhost>\n";
			$headers .= "Reply-To: postmaster@localhost\n";
			$headers .= "Content-Type: text/plain; charset=\"iso-8859-1\"";
			if(mail($destinataire,$sujet,$message,$headers))
			{
        		echo $mail;
			}
			else
			{
        		echo "1";
			}
		}
		else
		{
			echo 0;
		}
	}
	
	if(isset($_GET['auth']))
	{
		$login = addslashes($_GET['login']);
		$pswd = addslashes($_GET['pswd']);
		
		$req = mysql_query("select * from compte where login = '$login'") or die(mysql_error());
		$rep = mysql_fetch_array($req);
		if($rep!=NULL)
		{
			$req2=mysql_query("select * from compte where login='$login' and password='$pswd'") or die(mysql_error());
			$rep2=mysql_fetch_array($req2);
			if($rep2!=NULL)
			{
				if($rep2['etat']=='actif')
				{
					session_start();
					$_SESSION['login'] = $login;
					$_SESSION['Nom'] = $rep2['nom'];
					$_SESSION['Prenom']=$rep2['prenom'];
					$_SESSION['statue']=$rep2['statue'];
					$_SESSION['CIN']=$rep2['CIN'];
					echo 1;
				}
				else
				{
					echo 4;
				}
			}
			else echo 2;
		}
		else echo 3;
	}
	
	if(isset($_GET['detAct']))
	{
		$IDact=$_GET['IDact'];
		$req=mysql_query("SELECT * FROM actualite WHERE IDact = $IDact") or die(mysql_error());
		$rep=mysql_fetch_array($req);
		$txt="";
		$txt.='<div class="detArticl" id="detArticl">
                					<blockquote><span style="float:left"><h3 style="color:rgba(230,45,10,1)">'.$rep['titre'].'</h3></span><span style="margin-right:25px;float:right"><h4 style="color:rgba(230,45,10,1)">'.$rep['date'].'</h4></span></blockquote><br /><br /><br /><br />';
                				if($rep['image']!=""){	$txt.=	'<img style="margin-right:15px;margin-left:5px" align="left" src="backoffice/'.$rep['image'].'" width="150" height="110" /> ';}	 
								$txt.='<p>';
								
									$txt.='&nbsp;&nbsp;'.nl2br($rep['contenue']);
								
								$txt.='</p>
                	</div><br /><center><img style="cursor:pointer" src="img/1405874324_Undo.png" title="Retour" onclick="undo()" height="50" width="50"  /></center>';
		echo $txt;
	}
	
	if(isset($_GET['detEvent']))
	{
		$IDEvent=$_GET['IDEvent'];
		$req=mysql_query("SELECT * FROM evenement,deroulement WHERE evenement.IDEvent = $IDEvent and deroulement.IDEvent=evenement.IDEvent") or die(mysql_error());
		$rep=mysql_fetch_array($req);
		$photos=explode("*",$rep['galerie']);
		$cmp=count($photos);
		$txt="";
		
		$txt.='<div class="detArticl" id="detArticl">
                					<blockquote><span style="float:left"><h3 style="color:rgba(230,45,10,1)">'.$rep['intitule'].'</h3></span><span style="margin-right:25px;float:right"><h4 style="color:rgba(230,45,10,1)">'.$rep['date'].'</h4></span></blockquote><br /><br /><br /><br />';
                				
							
								$txt.='<p>';
								
									$txt.='&nbsp;&nbsp;'.nl2br($rep['description']);
								
								$txt.='</p>';
								
								if($rep['galerie']!=""){
					
                       $txt.= '<marquee onMouseOver="this.stop()" onMouseOut="this.start()" style="margin-top:40px" align="middle" direction="left">';
                        	
							
								for($i=0;$i<$cmp;$i++)
								{
									
                                    	$txt.='<img style="margin-right:5px"  src="backoffice/'. $photos[$i].'" height="250" width="250" />';
                                    
									
								}
							
                        $txt.='</marquee>';
                        
						
								}
								
								
                	$txt.='</div><br /><center><img style="cursor:pointer" src="img/1405874324_Undo.png" title="Retour" onclick="undo()" height="50" width="50"  /></center>';
		echo $txt;
		
	}
	
	if(isset($_GET['detEvent2']))
	{
		$IDEvent=$_GET['IDEvent'];
		$req=mysql_query("SELECT * FROM evenement where IDEvent = $IDEvent ") or die(mysql_error());
		$rep=mysql_fetch_array($req);
		$txt="";
		
		$txt.='<div class="detArticl" id="detArticl">
                					<blockquote><span style="float:left"><h3 style="color:rgba(230,45,10,1)">'.$rep['intitule'].'</h3></span><span style="margin-right:25px;float:right"><h4 style="color:rgba(230,45,10,1)">'.$rep['date'].'</h4></span></blockquote><br /><br /><br /><br />';
                				
							
								$txt.='<p>';
								
									$txt.='&nbsp;&nbsp;'.nl2br($rep['detail']);
								
								$txt.='</p>';
								
								
								
								
                	$txt.='</div><br /><center><img style="cursor:pointer" src="img/1405874324_Undo.png" title="Retour" onclick="undo()" height="50" width="50"  /></center>';
		echo $txt;
		
	}

?>