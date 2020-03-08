

<?php
	include('SessStart.php');
	mysql_connect("localhost","root","") or die(mysql_error());
	mysql_select_db("omran") or die(mysql_error());
	mysql_query("SET NAMES 'utf8'") or die(mysql_error());
	
	if(isset($_GET['ImageSlider2']))
	{
		$img=addslashes($_GET['img']);
		mysql_query("update slider set galerie='$img'") or die(mysql_error());
	}
	
	if(isset($_GET['ImageSlider']))
	{
		$images = array();
		$valeur = array();
		$req=mysql_query("select galerie,deroulement.IDEvent as IDEvent,intitule from deroulement,evenement where evenement.IDEvent=deroulement.IDEvent order by IDEvent DESC") or die(mysql_error());
		$k=0;
		while($rep=mysql_fetch_array($req))
		{
			$imgs=explode("*",$rep['galerie']);
			$n=count($imgs);
			for($i=0;$i<$n;$i++)
			{
				$images[$k]=$imgs[$i];
				$valeur[$k]=$imgs[$i].'//'.$rep['intitule'].'//'.$rep['IDEvent'];
				$k++;
			}
		}
		$txt='';
		$tdTab='';
		$trn=1;
		$nb=count($images);
		$req3=mysql_query("select galerie from slider") or die(mysql_error());
		$rep3=mysql_fetch_array($req3);
		$part=explode("*",$rep3['galerie']);
		$ns=count($part);
		$cont=0;
		for($i=0;$i<$nb;$i++)
		{
			$txt.=$images[$i];
			if($i!=$nb-1)
				$txt.='*';
			if($trn==1)
			{
				$tdTab.='<tr align="center" style="height:200px">';
			}
			$tdTab.='<td style="width:33.33%"><img src="'.$images[$i].'" height="180" width="180" /><br /><input type="checkbox" value="'.$valeur[$i].'" id="'.$i.'" onclick="verific(this)" name="img[]" ';
			for($j=0;$j<$ns;$j++)
			{
				$tsw=explode("//",$part[$j]);
				if($tsw[0]==$images[$i] and $images[$i]!='')
				{
					$tdTab.='checked="checked" ';
					$cont++;
				}
			}
			$tdTab.='/></td>';
			$trn++;
			if($trn==4)
			{
				$tdTab.='</tr>';
				$trn=1;
			}
		}
		
		
		?>
        
        <table border="0" cellspacing="0" align="center" style="width:500px;border:0px !important">
            	<?php
				echo $tdTab;
				?>
            </table>
        <center><button class="bouton" onclick="SlidImg()"> OK </button></center>
        <?php
		echo '//**//'.$cont;
	}
	
	if(isset($_GET['EditAct']))
	{
		$IDact=$_GET['IDact'];
		$req=mysql_query("select * from actualite where IDact=$IDact") or die(mysql_error());
		$rep=mysql_fetch_array($req);
		?>
		<div class="container">
        	<div class="FormProp">
            	<h1 style="margin-left:230px">Ajout article</h1>
                <div id="verif" style="display:none;color:red;z-index:100;box-shadow:0px 0px 4px black;position:absolute;background-color:white;width:200px;height:35px;right:-24px;top:95px;text-shadow:0px 0px 3px rgba(0,0,0,0.3)">
                	<span style="height:0px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>
                </div>
                <form onsubmit="return AjAct()" action="upload.php" method="post" enctype="multipart/form-data">
                	<table id="AjDt" border="1" cellspacing="0" align="center" width="80%" style="height:auto">
                    	<tr>
                        	<td><label for="IntitulAct">Titre de l\'article <font color="red">*</font></label></td>
                            <td> : </td>
                            <td align="right"> <input type="text" id="IntitulAct" name="IntitulAct" placeholder="Titre de l\'article" value="<?php echo $rep['titre'] ?>" /></td>
                        </tr>
                        <tr>
                        	<td><label for="TextAct">Article <font color="red">*</font> </label></td>
                            <td> : </td>
                            <td align="right"><textarea style="width:400px" name="TextAct" id="TextAct" placeholder="Tappez votre text ici ..."><?php echo $rep['contenue'] ?></textarea></td>
                        </tr>
                        <tr>
                        	<td> <label>Image<label> </td>
                            <td> : </td>
                            <td align="right"><div class="upload"><input type="file" id="Ijoint" name="Ijoint"/></div></td>
                        </tr>
                        <tr>
                        	<td align="center" colspan="3"><input type="submit" name="Dsoufle" class="bouton"  value="Valider" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        </tr>
                    </table>
                    <input type="hidden" value="<?php echo $IDact ?>" name="IDact" />
                </form>
            </div>
            <center><strong style="text-shadow:0px 0px 4px rgba(102,102,102,0.5);color:red;font-size:20px">Note : </strong>Les Champs marqués avec une étoile <font color="red">*</font> doivent obligatoirement être remplis</center>
        </div>
		<?php
	}
	
	if(isset($_GET['SprAct']))
	{
		$IDAct=$_GET['IDAct'];
		mysql_query("delete from actualite where IDact=$IDAct") or die(mysql_error());
	}
	
	if(isset($_GET['MesArticle']))
	{
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
		mysql_query("SET NAMES 'utf8'") or die(mysql_error());
		$req=mysql_query("SELECT * FROM `actualite` where date between '".$date2."' and '".$date."' and CIN='".$_SESSION['CIN']."' ORDER BY IDAct desc") or die(mysql_error());
		$req2=mysql_query("SELECT count(*) as nbr FROM `actualite` where date between '".$date2."' and '".$date."' and CIN='".$_SESSION['CIN']."' group by(IDact)") or die(mysql_error());
		$rep2=mysql_fetch_array($req2);
		$nbr=$rep2['nbr'];
		if($nbr==0)
		{
			echo '<br /><h2>Aucune actualité n\'est disponible à l\'heure actuelle.</h2>*ifra9hom*0';
		}
		else
		{
		$reponse='<div class="blocAct" style="float:none;width:95%">
    	    			<h1 class="title">Actualités à la une</h1>
    	    			<div class="barre"></div>';
		$bloc=1;
		$cont=0;				
		while($rep=mysql_fetch_array($req))
		{
			$elem = explode("<br />",$rep['contenue']);
			$tl=count($elem);
			if($tl>2)$tl=2;
			if($cont%4==0){$reponse.='<div id="cont'.$bloc.'" ';if($bloc>1){$reponse.='style="display:none"';}$reponse.='>';}
			$reponse.='<div class="conAct" style="height:180px;overflow:hidden">
                					<blockquote><span style="float:left"><h3 style="color:rgba(230,45,10,1)"><a style="cursor:pointer" onclick="detail2(\''.$rep['IDact'].'\')">'.$rep['titre'].'</a></h3></span><span style="margin-right:25px;float:right"><h4 style="color:rgba(230,45,10,1)">'.$rep['date'].'</h4></span></blockquote><br /><br /><br />';
                				if($rep['image']!=""){	$reponse.=	'<img style="margin-right:5px;margin-left:5px" align="left" src="'.$rep['image'].'" width="100" height="70" /> ';}	 
								$reponse.='<p>';
								for($i=0;$i<$tl;$i++)
								{
									$reponse.='&nbsp;&nbsp;'.$elem[$i].'<br />';
								}
								$reponse.='</p>
                	</div>';
			$cont+=1;
			if($cont%4==0){$reponse.='</div>';$bloc+=1;}
		}
						
						
		$reponse.='</div>';
		echo $reponse.'*ifra9hom*'.$bloc;
		}
	}
	
	if(isset($_GET['SprDot']))
	{
		$IDDot=$_GET['IDDot'];
		echo $IDDot;
		mysql_query("delete from dotation where IDDot=$IDDot") or die(mysql_query());
	}
	
	if(isset($_GET['SpDot']))
	{
		$CIN=$_SESSION['CIN'];
		$req1=mysql_query("select count(*) as nombre from dotation") or die(mysql_error);
		$rep1=mysql_fetch_array($req1);
		$nb=$rep1['nombre'];
		if($nb==0)
		{
			echo 'Aucune publication n\'éxiste pour le moment!';
		}
		else
		{
			
				$req=mysql_query("select * from dotation") or die(mysql_error());
				echo '<br />';
				while($rep2=mysql_fetch_array($req))
				{
					$cond=explode("*",$rep2['conditions']);
					$cmpp=count($cond);
					if($rep2['pieceJoint']!='')
					{
						$cond2=explode("*",$rep2['pieceJoint']);
						$condPJ='<li><span style="color:black">'.$cond2[0].' : <a style="color:rgba(1,58,254,1);text-decoration:underline;" href="'.$cond2[1].'">Telecharger ici</a></span></li>';
					}
					else
					{
						$condPJ='';
					}
					 ?>
                    <div id="tous_<?php echo $rep2['IDDot'] ?>">
                    
            			<div id="titre<?php echo $rep2['IDDot'] ?>" onclick="suite('tous_<?php echo $rep2['IDDot'] ?>')" class="actitre"><span class="triengle"></span><?php echo $rep2['titre'] ?> <span style="float:right;margin-right:50px"></span></div>
                		<div id="event<?php echo $rep2['IDDot'] ?>" class="event"><p style="margin-left:20px"><font color="#FF5300" style="font-size:20px"><strong>Description : </strong></font><br /><br /><?php echo $rep2['description']?><br /><font color="#FF5300" style="font-size:18px">Mantant de dotation ou plafond: </font><?php echo $rep2['montant'] ?>DH<hr class="StHr" /><font color="#FF5300" style="font-size:20px"><strong>Conditions de bénéfice : </strong></font><br /><ul style="font-size:20px;color:red"><?php for($i=0;$i<$cmpp;$i++){echo '<li><span style="color:black">'.$cond[$i].'</span></li>';}if(isset($condPJ))echo $condPJ;?></ul></p>
                  		<br />
                        <center><button class="bouton" onclick="SupDot(<?php echo $rep2['IDDot'] ?>)">Supprimer</button></center>
                            
                        </div>
            		</div>
                    <?php
				}
			
		}
	}
	
	if(isset($_GET['Dotation']))
	{
		$CIN=$_SESSION['CIN'];
		$req1=mysql_query("select count(*) as nombre from dotation") or die(mysql_error);
		$rep1=mysql_fetch_array($req1);
		$nb=$rep1['nombre'];
		if($nb==0)
		{
			echo 'Aucune publication n\'éxiste pour le moment!';
		}
		else
		{
			
				$req=mysql_query("select * from dotation") or die(mysql_error());
				echo '<br />';
				while($rep2=mysql_fetch_array($req))
				{
					$cond=explode("*",$rep2['conditions']);
					$cmpp=count($cond);
					if($rep2['pieceJoint']!='')
					{
						$cond2=explode("*",$rep2['pieceJoint']);
						$condPJ='<li><span style="color:black">'.$cond2[0].' : <a style="color:rgba(1,58,254,1);text-decoration:underline;" href="'.$cond2[1].'">Telecharger ici</a></span></li>';
					}
					else
					{
						$condPJ='';
					}
					 ?>
                    <div id="tous_<?php echo $rep2['IDDot'] ?>">
                    
            			<div id="titre<?php echo $rep2['IDDot'] ?>" onclick="suite('tous_<?php echo $rep2['IDDot'] ?>')" class="actitre"><span class="triengle"></span><?php echo $rep2['titre'] ?> <span style="float:right;margin-right:50px"></span></div>
                		<div id="event<?php echo $rep2['IDDot'] ?>" class="event"><p style="margin-left:20px"><font color="#FF5300" style="font-size:20px"><strong>Description : </strong></font><br /><br /><?php echo $rep2['description']?><br /><font color="#FF5300" style="font-size:18px">Mantant de dotation ou plafond: </font><?php echo $rep2['montant'] ?>DH<hr class="StHr" /><font color="#FF5300" style="font-size:20px"><strong>Conditions de bénéfice : </strong></font><br /><ul style="font-size:20px;color:red"><?php for($i=0;$i<$cmpp;$i++){echo '<li><span style="color:black">'.$cond[$i].'</span></li>';}if(isset($condPJ))echo $condPJ;?></ul></p>
                  
                            
                        </div>
            		</div>
                    <?php
				}
			
		}
	}
	
	if(isset($_GET['AnnulEvent']))
	{
		$IDEvent=$_GET['IDEvent'];
		mysql_query("update evenement set etat='annule' where IDEvent=$IDEvent") or die(mysql_error());
	}
	
	if(isset($_GET['VlEvent']))
	{
		$IDEvent=$_GET['IDEvent'];
		
		$req=mysql_query("select * from evenement where IDEvent=$IDEvent") or die(mysql_error());
		$rep=mysql_fetch_array($req);
		$detail=explode('<br />',$rep['detail']);
		$ln=count($detail);
		$desc="";
		$kx=explode('-',$rep['date']);
		$date=$kx[2].'/'.$kx[1].'/'.$kx[0];
		for($i=0;$i<$ln;$i++)
		{
			$desc.=$detail[$i].'
';
		}
		$rex=$rep['intitule'].'*/*'.$rep['categorie'].'*/*'.$rep['budget'].'*/*'.$date.'*/*'.$rep['lieux'].'*/*'.$desc;
		
		echo $rex;
	}
	
	if(isset($_GET['AnnulVote']))
	{
		$IDEvent=$_GET['IDEvent'];
		mysql_query("update evenement set etat='refuse' where IDEvent=$IDEvent") or die(mysql_error());
	}
	
	if(isset($_GET['EnVotPropo']))
	{
		$IDEvent=$_GET['IDEvent'];
		$req1=mysql_query("select * from evenement where IDEvent = $IDEvent") or die(mysql_error());
		$rep1=mysql_fetch_array($req1);
		mysql_query("update evenement set etat='vote' where IDEvent=$IDEvent") or die(mysql_error());
		$i=0;
		$titre='Appel au vote';
		$date=date('Y-m-d');
		$image='img/important-stamp.jpg';
		$req=mysql_query("select email from compte ") or die(mysql_query());
		$destinataire = '';
		$sujet = 'Participation au vote';
		$article = $message = "Bonjour,
		un nouveau evenement dont l'intitule est : ".$rep1['intitule']." à été lancer en vote, Vous êtes prié de participer au vote a fin de prendre une decision pour la realisation de cette evenement, merci.";$article.="<br />
		<font color=\"#FF5300\" style=\"font-size:20px\"><strong>Description : </strong></font> ".$rep1['detail']."<br /> <br />";
		$article.= $message.="
		P.S : pour voter vous devez vous connecter,en suite dirigez vous sur la page des activités puis sur le menu vous cherchez proposition -> Proposition en vote";
		$article = addslashes($article);
		mysql_query("insert into actualite value('','".$_SESSION['CIN']."','$titre','$date','$image','$article')") or die(mysql_error());
		while($rep=mysql_fetch_array($req))
		{
			if($i!=0)
				$destinataire.=', ';
			else
				$i++;
			$destinataire.=$rep['email'];
		}
		$headers = "From: \"Amicale de solidarité\"<postmaster@localhost>\n";
		$headers .= "Reply-To: postmaster@localhost\n";
		$headers .= "Content-Type: text/plain; charset=\"utf8\"";
		if(mail($destinataire,$sujet,$message,$headers))
		{
        	echo '0';
		}
		else
		{
        	echo "1";
		}
	}
	
	if(isset($_GET['IgnorPropo']))
	{
		$IDEvent=$_GET['IDEvent'];
		mysql_query("update evenement set etat='refuse' where IDEvent=$IDEvent");
		$req10=mysql_query("select IDEvent,intitule,detail,date ,nom,prenom,lieux from evenement,compte where compte.CIN=evenement.CIN and IDEvent=$IDEvent") or die(mysql_error());
		$rep2=mysql_fetch_array($req10);
		

			
				 ?>
                   <div id="tous_<?php echo $rep2['IDEvent'] ?>" style="display:none">
                   
            		<div id="titre<?php echo $rep2['IDEvent'] ?>" onclick="suite('tous_<?php echo $rep2['IDEvent'] ?>')" class="actitre"><span class="triengle"></span><?php echo $rep2['intitule'] ?> <span style="float:right;margin-right:50px"><?php echo $rep2['date'] ?></span></div>
               		<div id="event<?php echo $rep2['IDEvent'] ?>" class="event"><p style="margin-left:20px"><font color="#FF5300" style="font-size:20px"><strong>Description : </strong></font><?php echo $rep2['detail']?><br /> <br /> <font color="#FF5300" style="font-size:20px"><strong>Lieu du déroulement : </strong></font><?php echo $rep2['lieux']?><br /><br /><font color="#FF5300" style="font-size:20px"><strong>Proposition de : </strong></font><?php echo $rep2['nom'].' '.$rep2['prenom']?></p>
                   
                    
                    	<center><div class="boutDet" onclick="detEvent2(<?php echo $rep2['IDEvent'] ?>)"><strong> Détail </strong></div></center>
						
                    </div>
            	</div>
                <?php
		
	}
	
	if(isset($_GET['RefuPropo']))
	{
		$IDEvent=$_GET['IDEvent'];
		$req1=mysql_query("select email,intitule from evenement,compte where evenement.CIN=compte.CIN and IDEvent=$IDEvent") or die(mysql_error());
		$rep=mysql_fetch_array($req1);
		mysql_query("update evenement set etat='refuse' where IDEvent=$IDEvent");
		$mail=$rep['email'];
		$mail=addslashes($mail);
		$sujet = 'Réponse sur proposition';
		$message = "Bonjour, nous regrétons de vous informer que votre proposition dont l'intitule est : ".$rep['intitule'].' a été reffuser par les membre du bureau de l\'association';
		$destinataire = $mail;
		$headers = "From: \"Amicale de solidarité\"<postmaster@localhost>\n";
		$headers .= "Reply-To: postmaster@localhost\n";
		$headers .= "Content-Type: text/plain; charset=\"utf8\"";
		mail($destinataire,$sujet,$message,$headers);
		$req10=mysql_query("select IDEvent,intitule,detail,date ,nom,prenom,lieux from evenement,compte where compte.CIN=evenement.CIN and IDEvent=$IDEvent") or die(mysql_error());
		$rep2=mysql_fetch_array($req10);
		

			
				 ?>
                   <div id="tous_<?php echo $rep2['IDEvent'] ?>" style="display:none">
                   
            		<div id="titre<?php echo $rep2['IDEvent'] ?>" onclick="suite('tous_<?php echo $rep2['IDEvent'] ?>')" class="actitre"><span class="triengle"></span><?php echo $rep2['intitule'] ?> <span style="float:right;margin-right:50px"><?php echo $rep2['date'] ?></span></div>
               		<div id="event<?php echo $rep2['IDEvent'] ?>" class="event"><p style="margin-left:20px"><font color="#FF5300" style="font-size:20px"><strong>Description : </strong></font><?php echo $rep2['detail']?><br /> <br /> <font color="#FF5300" style="font-size:20px"><strong>Lieu du déroulement : </strong></font><?php echo $rep2['lieux']?><br /><br /><font color="#FF5300" style="font-size:20px"><strong>Proposition de : </strong></font><?php echo $rep2['nom'].' '.$rep2['prenom']?></p>
                   
                    
                    	<center><div class="boutDet" onclick="detEvent2(<?php echo $rep2['IDEvent'] ?>)"><strong> Détail </strong></div></center>
						
                    </div>
            	</div>
                <?php
		
	}
	
	if(isset($_GET['DecisFinalNoir']))
	{
		$decision=$_GET['decision'];
		$IDEvent=$_GET['IDEvent'];
		$date=$_GET['date'];
		
		
		if($decision=='refuse')
		{
			mysql_query("update evenement set etat='refuse' where IDEvent=$IDEvent") or die(mysql_error());
		}
		else if($decision=='approuve')
		{
			mysql_query("update evenement set etat='approuve',date='".$date."' where IDEvent=$IDEvent") or die(mysql_error());
		}
	}
	
	if(isset($_GET['DecisFinal']))
	{
		$decision=$_GET['decision'];
		$IDEvent=$_GET['IDEvent'];
		$date=$_GET['date'];
		
		$rvoteN=mysql_query("select count(*) as nb, choix from sondage where IDEvent=".$IDEvent." and choix = 'non'  group by choix") or die(mysql_error());
		$voteN=mysql_fetch_array($rvoteN);
		if($voteN==NULL)
			$VotN=0;
		else
			$VotN=$voteN['nb'];
		$rvoteO=mysql_query("select count(*) as nb, choix from sondage where IDEvent=".$IDEvent." and choix = 'oui'  group by choix") or die(mysql_error());
		$voteO=mysql_fetch_array($rvoteO);
		if($voteO==NULL)
			$VotO=0;
		else
			$VotO=$voteO['nb'];
		$rvoteSO=mysql_query("select count(*) as nb, choix from sondage where IDEvent=".$IDEvent." and choix = 'sans opinion'  group by choix") or die(mysql_error());
		$voteSO=mysql_fetch_array($rvoteSO);
		if($voteSO==NULL)
			$VotSO=0;
		else
			$VotSO=$voteSO['nb'];
		
		$rnb=mysql_query("select count(*) as totale from compte where etat != 'block'") or die(mysql_error());
		$snb=mysql_fetch_array($rnb);
		$totale=$snb['totale'];
		$vnb=mysql_query("select count(*) as drari from sondage where IDEvent=".$IDEvent."") or die(mysql_error());
		$vsnb=mysql_fetch_array($vnb);
		$voteur=$vsnb['drari'];
		$pct=($voteur/$totale)*100;
		
		$pctn=($VotN/$voteur)*100;
		$pcto=($VotO/$voteur)*100;
		$pctso=($VotSO/$voteur)*100;
		
		$req=mysql_query("select * from evenement where IDEvent=$IDEvent") or die(mysql_error());
		$rep=mysql_fetch_array($req);
		
		$dt=date("Y-m-d");
		$titre='resultat du vote: '.$rep['intitule'].'';
		if($decision=='refuse')
		{
			mysql_query("update evenement set etat='refuse' where IDEvent=$IDEvent") or die(mysql_error());
			$img='img/1408226102_i_have_no_idea.png';
			$article='Après le vote sur la proposition dont l\'intitulé est : <strong>'.$rep['intitule'].'</strong>, le résultat à été négatif, du a cela cette proposition a été <font style="color:red">refusée</font>.<br />Les résultats du vote est comme suit : le taux des participants au vote était de : <strong>'.round($pct,2).'%</strong> de l\'ensemble des membres de l\'assocation, dont <strong>'.round($pctn,2).'%</strong> ont voté par Non, alors que <strong>'.round($pcto,2).'%</strong> ont voté par Oui, et le reste <strong>'.round($pctso,2).'%</strong> n\'ont pas d\'opinion.<br /> Bonne journée.';
			
		}
		else if($decision=='approuve')
		{
			$img='img/1408226114_big_smile.png';
			mysql_query("update evenement set etat='approuve',date='".$date."' where IDEvent=$IDEvent") or die(mysql_error());
			$article='Après le vote sur la proposition dont l\'intitulé est : <strong>'.$rep['intitule'].'</strong>, le résultat à été positif, du a cela cette proposition a été <font style="color:red">approuvée</font>.<br />Les résultats du vote est comme suit : le taux des participants au vote ètait de : <strong>'.round($pct,2).'%</strong> de l\'ensemble des membres de l\'assocation, dont <strong>'.round($pctn,2).'%</strong> ont voté par Non, alors que <strong>'.round($pcto,2).'%</strong> ont voté par Oui, et le reste <strong>'.round($pctso,2).'%</strong> n\'ont pas d\'opinion.<br /><br /><font color="#FF5300" style="font-size:20px"><strong>Description de l\'événement : </strong></font>'.$rep['detail'].'<br /> Bonne journée.';
		}
		$article=addslashes($article);
		mysql_query("insert into actualite values ('','".$_SESSION['CIN']."','$titre','$dt','$img','$article')") or die(mysql_error());
	}
	
	if(isset($_GET['StatPropo']))
	{
		$IDEvent=$_GET['IDEvent'];
		$action=$_GET['action'];
		$txt="";
		
		if($action=='oui')
		{
			$req1=mysql_query("select count(*) as nbv from sondage where IDEvent=$IDEvent") or die(mysql_error());
			$req2=mysql_query("select count(*) as nbc from compte where etat != 'block'") or die(mysql_error());
			$rep1=mysql_fetch_array($req1);
			$rep2=mysql_fetch_array($req2);
			$nbv=$rep1['nbv'];
			$nbc=$rep2['nbc'];
			$pct=($nbv/$nbc)*100;
			$req=mysql_query("select nom, prenom, compte.CIN as CIN, choix, motive from sondage, compte where sondage.CIN = compte.CIN and sondage.IDEvent = $IDEvent") or die(mysql_error());
			
			$txt.='<font size="+1"><strong>'.$nbv.'</strong> personnes ont voter, <strong>'.$pct.'%</strong> du total des membres</font>';
			
			
	$txt.='<div class="col-md-6">
          		<table class="table table-striped" style="width:99.9%">
            		<thead>
              			<tr>
                			<th>CIN</th>
                			<th>Nom</th>
                			<th>Commentaire</th>
                			<th>choix</th>
              			</tr>
            		</thead>
            		<tbody>';
					while($rep=mysql_fetch_array($req))
					{
						$txt.='<tr>
									<th>'.$rep['CIN'].'</th>
									<th>'.$rep['nom'].' '.$rep['prenom'].'</th>
									<th>'.$rep['motive'].'</th>
									<th>'.$rep['choix'].'</th>';
					}
          	 $txt.='</tbody>
          		</table>
        	</div>';
			
				
		}
		else
		{
			$req1=mysql_query("select count(*) as nbv from compte where etat!='block' and compte.CIN not in (select distinct(CIN) from sondage where IDEvent=$IDEvent)") or die(mysql_error());
			$req2=mysql_query("select count(*) as nbc from compte where etat != 'block'") or die(mysql_error());
			$rep1=mysql_fetch_array($req1);
			$rep2=mysql_fetch_array($req2);
			$nbv=$rep1['nbv'];
			$nbc=$rep2['nbc'];
			$pct=($nbv/$nbc)*100;
			$req=mysql_query("select * from compte where etat!='block' and CIN not in (select CIN from sondage where IDEvent = $IDEvent)") or die(mysql_error());
			
			$txt.='<font size="+1"><strong>'.$nbv.'</strong> personnes n\'ont pas voter, <strong>'.$pct.'%</strong> du total des membres</font>';
			
			
	$txt.='<div class="col-md-6">
          		<table class="table table-striped" style="width:99.9%">
            		<thead>
              			<tr>
                			<th>CIN</th>
                			<th>Nom</th>
                			<th>Téléphone</th>
                			<th>E-mail</th>
              			</tr>
            		</thead>
            		<tbody>';
					while($rep=mysql_fetch_array($req))
					{
						$txt.='<tr>
									<th>'.$rep['CIN'].'</th>
									<th>'.$rep['nom'].' '.$rep['prenom'].'</th>
									<th>'.$rep['telephone'].'</th>
									<th>'.$rep['email'].'</th>';
					}
          	 $txt.='</tbody>
          		</table>
        	</div>
			
					<center><button class="bouton" onclick="rappel('.$IDEvent.')" title="Rappelle au vote"> Rappelle </button></center>';
		}
		
		
		
		echo $txt;
		
	}
	
	if(isset($_GET['RappVote']))
	{
		$IDEvent=$_GET['IDEvent'];
		$req2=mysql_query("select * from  evenement where IDEvent = $IDEvent") or die(mysql_error());
		$rep2=mysql_fetch_array($req2);
		$i=0;
		$destinataire='';
		$req=mysql_query("select email from  compte where CIN not in (select CIN from sondage where IDEvent = $IDEvent)") or die(mysql_error());
		$message = "Bonjour,
			un nouveau evenement dont l'intitule est : ".$rep2['intitule']." a était lancer en vote, Vous étes priez de participer au vote a fin de prendre une decision pour la realisation de cette evenement, merci.
			P.S : pour voter vous devez vous connecter et allez sur la page des activités puis sur le menu vous cherchez proposition -> Proposition en vote";
		$sujet = 'Participation au vote';
		while($rep=mysql_fetch_array($req))
		{
			if($i!=0)
				$destinataire.=', ';
			else
				$i++;
			$destinataire.=$rep['email'];
		}
		$headers = "From: \"Amicale de solidarité\"<postmaster@localhost>\n";
		$headers .= "Reply-To: postmaster@localhost\n";
		$headers .= "Content-Type: text/plain; charset=\"utf8\"";
		if(mail($destinataire,$sujet,$message,$headers))
		{
        	echo '0';
		}
		else
		{
        	echo "1";
		}
		
	}
	
	if(isset($_GET['Voter']))
	{
		$vote=$_GET['vote'];
		$motive=$_GET['motive'];
		$IDEvent=$_GET['IDEvent'];
		
		mysql_query("insert into sondage (CIN, IDEvent, choix, motive) values('".$_SESSION['CIN']."',$IDEvent,'$vote','$motive')") or die(mysql_error());
	}
	
	if(isset($_GET['HistVote']))
	{
		$CIN=$_SESSION['CIN'];
		$req1=mysql_query("select count(*) as nombre from evenement,sondage where sondage.IDEvent=evenement.IDEvent") or die(mysql_error());
		$rep1=mysql_fetch_array($req1);
		$nb=$rep1['nombre'];
		if($nb==0)
		{
			$txt = '0';
		}
		else
		{
			$reqEtat=$req=mysql_query("select distinct(etat) as etat from evenement,sondage where sondage.IDEvent=evenement.IDEvent order by etat") or die(mysql_error());
			$txt='';
			while($repEt=mysql_fetch_array($reqEtat))
			{
				$req=mysql_query("select * from evenement,sondage where sondage.IDEvent=evenement.IDEvent and etat='".$repEt['etat']."' GROUP BY evenement.IDEvent order by evenement.IDEvent asc") or die(mysql_error());
				
				if($repEt['etat']=='annule')
					$etat='propositions annulées';
				if($repEt['etat']=='approuve')
					$etat='propositions approuvées';
				if($repEt['etat']=='refuse')
					$etat='propositions refusées';
				if($repEt['etat']=='realise')
					$etat='propositions réalisées';
				if($repEt['etat']=='vote')
					$etat='propositions toujours en vote';
					
				$txt.="<h2 align='center' style='color:rgba(255,87,15,1)'>".$etat."</h2>";
				$comp=0;
				while($rep2=mysql_fetch_array($req))
				{
					$rvoteN=mysql_query("select count(*) as nb, choix from sondage where IDEvent=".$rep2['IDEvent']." and choix = 'non'  group by choix") or die(mysql_error());
					$voteN=mysql_fetch_array($rvoteN);
					if($voteN==NULL)
						$VotN=0;
					else
						$VotN=$voteN['nb'];
					$rvoteO=mysql_query("select count(*) as nb, choix from sondage where IDEvent=".$rep2['IDEvent']." and choix = 'oui'  group by choix") or die(mysql_error());
					$voteO=mysql_fetch_array($rvoteO);
					if($voteO==NULL)
						$VotO=0;
					else
						$VotO=$voteO['nb'];
					$rvoteSO=mysql_query("select count(*) as nb, choix from sondage where IDEvent=".$rep2['IDEvent']." and choix = 'sans opinion'  group by choix") or die(mysql_error());
					$voteSO=mysql_fetch_array($rvoteSO);
					if($voteSO==NULL)
						$VotSO=0;
					else
						$VotSO=$voteSO['nb'];
					
					$rnb=mysql_query("select count(*) as totale from compte where etat != 'block'") or die(mysql_error());
					$snb=mysql_fetch_array($rnb);
					$totale=$snb['totale'];
					$vnb=mysql_query("select count(*) as drari from sondage where IDEvent=".$rep2['IDEvent']."") or die(mysql_error());
					$vsnb=mysql_fetch_array($vnb);
					$voteur=$vsnb['drari'];
					$mvote=mysql_query("select * from sondage where IDEvent=".$rep2['IDEvent']." and CIN ='".$_SESSION['CIN']."' ") or die(mysql_error());
					$mkayn=mysql_fetch_array($mvote);
					
					
					$pct=($voteur/$totale)*100;
					
					
                     
                    $txt.='<div id="tous_'.$rep2['IDEvent'].'">
                    
            			<div id="titre'.$rep2['IDEvent'].'" onclick="suite(\'tous_'.$rep2['IDEvent'].'\')" class="actitre"><span class="triengle"></span>'.$rep2['intitule'].'<span style="float:right;margin-right:50px">'.'</span></div>
                		<div id="event'.$rep2['IDEvent'].'" class="event">';
						
						$txt.='<p style="margin-left:20px"><font color="#FF5300" style="font-size:20px"><strong>Description : </strong></font>'.$rep2['detail'].'<br /><br /><font color="#FF5300" style="font-size:20px"><strong>Lieux du déroulement : </strong></font>'.$rep2['lieux'].'</p>
                        &nbsp; &nbsp; &nbsp; &nbsp;';
						
						if($_SESSION['statue']=='admin' or $_SESSION['statue']=='membre')
						{
							$txt.='<font color="#FF5300" style="font-size:20px"><strong>statistique du vote : </strong></font><span id="stat'.$rep2['IDEvent'].'"><canvas style="margin-top:20px;" id="myChart'.$rep2['IDEvent'].'" width="150" height="150"></canvas></span><br />';
						}
						
						$txt.='<br />
						&nbsp; &nbsp; &nbsp; <font color="#FF5300" style="font-size:20px"><strong>Total des participants en vote : </strong></font> '.$pct.'%';
						
                        
                       		if($_SESSION['statue']=='admin' or $_SESSION['statue']=='membre')
							{
								$txt.='<br />&nbsp; &nbsp; &nbsp; &nbsp;<font color="#FF5300" style="font-size:20px;"><strong>Plus de détail : </strog></font><img style="margin-left:30px;cursor:pointer" onclick="stat('.$rep2['IDEvent'].')" src="img/1408205558_kchart.png" align="middle" height="80" width="80" title="statistique" />';
							}
                  		
							
							
							
							
                        $txt.='</div>
            		</div>/0*/fr9/*0/'.$VotN.'/'.$VotO.'/'.$VotSO.'/'.$rep2['IDEvent'].'/0*/fra9/*0/';
					$comp++;
				}
			}
			
		}
		echo $txt;
	}
	
	if(isset($_GET['LesPropo']))
	{
		$CIN=$_SESSION['CIN'];
		$req1=mysql_query("select count(*) as nombre from evenement where etat='vote'") or die(mysql_error);
		$rep1=mysql_fetch_array($req1);
		$nb=$rep1['nombre'];
		if($nb==0)
		{
			$txt = '0';
		}
		else
		{
			$reqEtat=$req=mysql_query("select distinct(etat) from evenement where etat='vote' order by date") or die(mysql_error());
			while($repEt=mysql_fetch_array($reqEtat))
			{
				$req=mysql_query("select * from evenement where etat='vote' order by IDEvent asc") or die(mysql_error());
				
				if($repEt['etat']=='vote')
					$etat='propositions en vote';
					$txt='';	
				echo "<h2 align='center' style='color:rgba(255,87,15,1)'>".$etat."</h2>";
				$comp=0;
				while($rep2=mysql_fetch_array($req))
				{
					$rvoteN=mysql_query("select count(*) as nb, choix from sondage where IDEvent=".$rep2['IDEvent']." and choix = 'non'  group by choix") or die(mysql_error());
					$voteN=mysql_fetch_array($rvoteN);
					if($voteN==NULL)
						$VotN=0;
					else
						$VotN=$voteN['nb'];
					$rvoteO=mysql_query("select count(*) as nb, choix from sondage where IDEvent=".$rep2['IDEvent']." and choix = 'oui'  group by choix") or die(mysql_error());
					$voteO=mysql_fetch_array($rvoteO);
					if($voteO==NULL)
						$VotO=0;
					else
						$VotO=$voteO['nb'];
					$rvoteSO=mysql_query("select count(*) as nb, choix from sondage where IDEvent=".$rep2['IDEvent']." and choix = 'sans opinion'  group by choix") or die(mysql_error());
					$voteSO=mysql_fetch_array($rvoteSO);
					if($voteSO==NULL)
						$VotSO=0;
					else
						$VotSO=$voteSO['nb'];
					
					$rnb=mysql_query("select count(*) as totale from compte where etat != 'block'") or die(mysql_error());
					$snb=mysql_fetch_array($rnb);
					$totale=$snb['totale'];
					$vnb=mysql_query("select count(*) as drari from sondage where IDEvent=".$rep2['IDEvent']."") or die(mysql_error());
					$vsnb=mysql_fetch_array($vnb);
					$voteur=$vsnb['drari'];
					$mvote=mysql_query("select * from sondage where IDEvent=".$rep2['IDEvent']." and CIN ='".$_SESSION['CIN']."' ") or die(mysql_error());
					$mkayn=mysql_fetch_array($mvote);
					
					
					$pct=($voteur/$totale)*100;
					
					
                     
                    $txt.='<div id="tous_'.$rep2['IDEvent'].'">
                    
            			<div id="titre'.$rep2['IDEvent'].'" onclick="suite(\'tous_'.$rep2['IDEvent'].'\')" class="actitre"><span class="triengle"></span>'.$rep2['intitule'].'<span style="float:right;margin-right:50px">'.$rep2['date'].'</span></div>
                		<div id="event'.$rep2['IDEvent'].'" class="event">';
						if($pct > 66.66 and ($_SESSION['statue']=='admin' or $_SESSION['statue']=='membre'))
						{
						 	$txt.='<center><img src="img/Ambox_warning_psycho.gif" height="120" width="120" title="warning" /><br />
                        	<font size="+2" style="color:rgba(51,51,51,1)">Le taux de vote sur cet evenement à dépassé 66%, en tant que membre du bureau de l\'association vous avez le droit de prendre la décision finale concernant cet evenement</font><br />';
                        	if($voteO>=$voteN)
                        		$txt.='<font size="+1">Le resultat du vote est positif, l\'evenement doit être approuver : </font> <button onclick="decision(\'approuve\','.$rep2['IDEvent'].',\''.$rep2['date'].'\')" class="bouton"> Approuver </button><br />
								Refuser malgrès le résultat : <button onclick="DecisNoir(\'refuse\','.$rep2['IDEvent'].',\''.$rep2['date'].'\')" class="bouton"> Refuser </button><br />';
                        	else
                        		$txt.='<font size="+1">Le resultat du vote est négatif, l\'evenement doir être refuser : </font> <button onclick="decision(\'refuse\','.$rep2['IDEvent'].',\''.$rep2['date'].'\')" class="bouton"> Refuser </button><br />
								Approuver malgrer le résultat : <button onclick="DecisNoir(\'approuve\','.$rep2['IDEvent'].',\''.$rep2['date'].'\')" class="bouton"> Approuver </button><br />';
                       		$txt.='</center> ';
						}
						$txt.='<p style="margin-left:20px"><font color="#FF5300" style="font-size:20px"><strong>Description : </strong></font>'.$rep2['detail'].'<br /><br /><font color="#FF5300" style="font-size:20px"><strong>Lieux du déroulement : </strong></font>'.$rep2['lieux'].'</p>
                        &nbsp; &nbsp; &nbsp; &nbsp;';
						
						if($_SESSION['statue']=='admin' or $_SESSION['statue']=='membre')
						{
							$txt.='<font color="#FF5300" style="font-size:20px"><strong>statistique du vote : </strong></font><span id="stat'.$rep2['IDEvent'].'"><canvas style="margin-top:20px;" id="myChart'.$rep2['IDEvent'].'" width="150" height="150"></canvas></span><br />';
						}
						
						$txt.='<br />
						&nbsp; &nbsp; &nbsp; <font color="#FF5300" style="font-size:20px"><strong>Total des participants en vote : </strong></font> '.$pct.'%';
						
                        
                       		if($_SESSION['statue']=='admin' or $_SESSION['statue']=='membre')
							{
								$txt.='<br />&nbsp; &nbsp; &nbsp; &nbsp;<font color="#FF5300" style="font-size:20px;"><strong>Plus de detail : </strog></font><img style="margin-left:30px;cursor:pointer" onclick="stat('.$rep2['IDEvent'].')" src="img/1408205558_kchart.png" align="middle" height="80" width="80" title="statistique" />';
							}
                  		if($mkayn==NULL)
                            $txt.='<center><div id="Cvote'.$rep2['IDEvent'].'" class="boutDet" onclick="Voter('.$rep2['IDEvent'].','.$comp.')"><strong> Voter </strong></div></center>';
						else
							$txt.='<center><div id="Cvote" class="boutDet" onclick="document.getElementById(\'message\').innerHTML=\'Vous avez déja voter sur cet evenement !\';document.getElementById(\'message\').style.height=\'auto\';fen();$(\'#message\').fadeIn(\'fast\');recalPose()"><strong> Vote </strong></div></center>';
							
							if($_SESSION['statue']=='admin' or $_SESSION['statue']=='membre')
						{
							$txt.='<font color="#FF5300" style="font-size:20px"><strong>Annuler le vote : </strong></font><button class="bouton" onclick=AnnuleVote('.$rep2['IDEvent'].')> Annuler </button><br />';
						}
							
							
                        $txt.='</div>
            		</div>/0*/fr9/*0/'.$VotN.'/'.$VotO.'/'.$VotSO.'/'.$rep2['IDEvent'].'/0*/fra9/*0/';
					$comp++;
				}
			}
			
		}
		echo $txt;
	}
	
	if(isset($_GET['GestPropo']))
	{
		$req1=mysql_query("select distinct(etat) from evenement where etat='attent' or etat='refuse' order by etat asc") or die(mysql_error());
		while($rep1=mysql_fetch_array($req1))
		{
			$req=mysql_query("select IDEvent, date, intitule, detail, lieux, nom, prenom, evenement.etat as eta from evenement,compte where evenement.CIN=compte.CIN and evenement.etat='".$rep1['etat']."' ") or die(mysql_error());
			if($rep1['etat']=='refuse')
				$etat='propositions refusés';
			if($rep1['etat']=='attent')
				$etat='propositions en attente';
			echo "<h2 align='center' style='color:rgba(255,87,15,1)'>".$etat."</h2>";
			if($rep1['etat']=='refuse')
			echo '<div id="Brefus">';
			while($rep2=mysql_fetch_array($req))
			{
				 ?>
                   <div id="tous_<?php echo $rep2['IDEvent'] ?>">
                   
            		<div id="titre<?php echo $rep2['IDEvent'] ?>" onclick="suite('tous_<?php echo $rep2['IDEvent'] ?>')" class="actitre"><span class="triengle"></span><?php echo $rep2['intitule'] ?> <span style="float:right;margin-right:50px"><?php echo $rep2['date'] ?></span></div>
               		<div id="event<?php echo $rep2['IDEvent'] ?>" class="event"><p style="margin-left:20px"><font color="#FF5300" style="font-size:20px"><strong>Description : </strong></font><?php echo $rep2['detail']?><br /> <br /> <font color="#FF5300" style="font-size:20px"><strong>Lieu du déroulement : </strong></font><?php echo $rep2['lieux']?><br /><br /><font color="#FF5300" style="font-size:20px"><strong>Proposition de : </strong></font><?php echo $rep2['nom'].' '.$rep2['prenom']?></p>
                   <?php if($rep2['eta']=='attent') { ?> 
                 	<div style="width:55%;margin-left:auto;margin-right:auto">
            	         <div style="float:left" class="boutDet" onclick="EnVote(<?php echo $rep2['IDEvent'] ?>)"><strong>Lancer en Vote</strong></div>
                         <div style="float:left;margin-left:50px" class="boutDet" onclick="Ignorer(<?php echo $rep2['IDEvent'] ?>)"><strong>Refuser</strong></div>
                         <div style="float:left;margin-left:50px" class="boutDet" onclick="Refuser(<?php echo $rep2['IDEvent'] ?>)"><strong>Ignorer</strong></div>
                    </div>
                    <?php } ?>
                    <?php if($rep2['eta']=='refuse') { ?>
                    	<center><div class="boutDet" onclick="detEvent2(<?php echo $rep2['IDEvent'] ?>)"><strong> Détail </strong></div></center>
						<?php } ?>
                    </div>
            	</div>
                <?php
			}
			if($rep1['etat']=='refuse')
			echo '</div>';
			
		}
	}
	
	if(isset($_GET['GestEvent']))
	{
		$date=date('Y-m-d');
		$req1=mysql_query("select count(*) as nombre from evenement where date<'$date' and etat='approuve'") or die(mysql_error);
		$rep1=mysql_fetch_array($req1);
		$nb=$rep1['nombre'];
		if($nb==0)
		{
			echo 'Aucun evenment a gérer !';
		}
		else
		{
			$reqEtat=$req=mysql_query("select distinct(etat) from evenement where date<'$date' and etat='approuve' order by etat") or die(mysql_error());
			while($repEt=mysql_fetch_array($reqEtat))
			{
				$req=mysql_query("select * from evenement where date<'$date' and etat='approuve' order by date DESC") or die(mysql_error());
				
				if($repEt['etat']=='approuve')
					$etat='événement sensé être réaliser';
				echo "<h2 align='center' style='color:rgba(255,87,15,1)'>".$etat."</h2>";
				while($rep2=mysql_fetch_array($req))
				{
					 ?>
                    <div id="tous_<?php echo $rep2['IDEvent'] ?>">
                    
            			<div id="titre<?php echo $rep2['IDEvent'] ?>" onclick="suite('tous_<?php echo $rep2['IDEvent'] ?>')" class="actitre"><span class="triengle"></span><?php echo $rep2['intitule'] ?> <span style="float:right;margin-right:50px"><?php echo $rep2['date'] ?></span></div>
                		<div id="event<?php echo $rep2['IDEvent'] ?>" class="event"><p style="margin-left:20px"><font color="#FF5300" style="font-size:20px"><strong>Description : </strong></font><?php echo $rep2['detail']?><br /> <br /> <font color="#FF5300" style="font-size:20px"><strong>Lieu du déroulement : </strong></font><?php echo $rep2['lieux']?></p>
                  
                            <center>Marqué comme evenement réalisé : <div class="boutDet" onclick="RealisEvent(<?php echo $rep2['IDEvent'] ?>)"><strong>Réaliser</strong></div>
                            <br /><br />
                            Marqué comme evenement Annulé : <div class="boutDet" onclick="AnnulEvent(<?php echo $rep2['IDEvent'] ?>)"><strong>Annuler</strong></div></center>
                        </div>
            		</div>
                    <?php
				}
			}
		}
	}
	
	if(isset($_GET['MesPropo']))
	{
		$CIN=$_SESSION['CIN'];
		$req1=mysql_query("select count(*) as nombre from evenement where CIN='$CIN'") or die(mysql_error);
		$rep1=mysql_fetch_array($req1);
		$nb=$rep1['nombre'];
		if($nb==0)
		{
			echo 'Vous n\'avez fait aucune proposition pour le moment!'.$nb;
		}
		else
		{
			$reqEtat=$req=mysql_query("select distinct(etat) from evenement where CIN = '$CIN' order by etat") or die(mysql_error());
			while($repEt=mysql_fetch_array($reqEtat))
			{
				$req=mysql_query("select * from evenement where CIN='$CIN' and etat='".$repEt['etat']."' order by date DESC") or die(mysql_error());
				if($repEt['etat']=='annule')
					$etat='propositions annulées';
				if($repEt['etat']=='approuve')
					$etat='propositions approuvées';
				if($repEt['etat']=='refuse')
					$etat='propositions refusées';
				if($repEt['etat']=='attent')
					$etat='propositions en attente';
				if($repEt['etat']=='realise')
					$etat='propositions réalisées';
				if($repEt['etat']=='vote')
					$etat='propositions en vote';	
				echo "<h2 align='center' style='color:rgba(255,87,15,1)'>".$etat."</h2>";
				while($rep2=mysql_fetch_array($req))
				{
					 ?>
                    <div id="tous_<?php echo $rep2['IDEvent'] ?>">
                    
            			<div id="titre<?php echo $rep2['IDEvent'] ?>" onclick="suite('tous_<?php echo $rep2['IDEvent'] ?>')" class="actitre"><span class="triengle"></span><?php echo $rep2['intitule'] ?> <span style="float:right;margin-right:50px"><?php echo $rep2['date'] ?></span></div>
                		<div id="event<?php echo $rep2['IDEvent'] ?>" class="event"><p style="margin-left:20px"><font color="#FF5300" style="font-size:20px"><strong>Description : </strong></font><?php echo $rep2['detail']?><br /> <br /> <font color="#FF5300" style="font-size:20px"><strong>Lieu du déroulement : </strong></font><?php echo $rep2['lieux']?></p>
                  
                            <center><div class="boutDet" onclick="detEvent2(<?php echo $rep2['IDEvent'] ?>)"><strong>Détails</strong></div></center>
                        </div>
            		</div>
                    <?php
				}
			}
		}
	}
	
	if(isset($_GET['AjoutPropo']))
	{
		$intitule=addslashes($_GET['intitule']);
		$categ=$_GET['categ'];
		$budget=$_GET['budget'];
		if($budget=='')$budget=0;
		$date=$_GET['date'];
		$lieu=addslashes($_GET['lieu']);
		$desc=addslashes($_GET['description']);
		$etat=addslashes($_GET['etat']);
		$CIN=$_SESSION['CIN'];
		mysql_query("insert into evenement values('','$CIN','$intitule','$categ',$budget,'$date','$lieu','$desc','$etat')") or die(mysql_error());
		if($etat=='vote')
		{
			$i=0;
			$req=mysql_query("select email from compte ") or die(mysql_query());
			$destinataire = '';
			$sujet = 'Participation au vote';
			$titre='Appel au vote';
			$date=date('Y-m-d');
			$image='img/important-stamp.jpg';
			$article = $message = "Bonjour,
		un nouveau evenement dont l'intitule est : ".$intitule." à été lancé en vote, Vous êtes prié de participer au vote a fin de prendre une decision pour la realisation de cette evenement, merci.";$article.="<br />
		<font color=\"#FF5300\" style=\"font-size:20px\"><strong>Description : </strong></font> ".$desc."<br /> <br />";
		$message.="P.S : pour voter vous devez vous connecter et allez sur la page des activités puis sur le menu vous cherchez proposition -> Proposition en vote";
		$article = addslashes($article);
		mysql_query("insert into actualite value('','".$_SESSION['CIN']."','$titre','$date','$image','$article')") or die(mysql_error());
			while($rep=mysql_fetch_array($req))
			{
				if($i!=0)
					$destinataire.=', ';
				else
					$i++;
				$destinataire.=$rep['email'];
			}
			$headers = "From: \"Amicale de solidarité\"<postmaster@localhost>\n";
			$headers .= "Reply-To: postmaster@localhost\n";
			$headers .= "Content-Type: text/plain; charset=\"utf8\"";
			if(mail($destinataire,$sujet,$message,$headers))
			{
        		echo '0';
			}
			else
			{
        		echo "1";
			}
		}
	}
	
	if(isset($_GET['AddCom']))
	{
		$IDEvent=$_GET['IDEvent'];
		$comm=$_GET['commentaire'];
		$comm=nl2br($comm);
		$comm=addslashes($comm);
		
		
		mysql_query("insert into commenter (CIN,IDEvent,commentaire) values('".$_SESSION['CIN']."','$IDEvent','$comm')") or die(mysql_error());
	}
	
	
	
	if(isset($_GET['Rech']))
	{
		$val=$_GET['val'];
		$cat=$_GET['MetRech'];
		$role=$_GET['role'];
		if($cat=='CIN')
		{
			$req=mysql_query("select * from compte where (CIN like '%$val' or CIN like '$val%' or CIN like '%$val%' or CIN ='$val') and statue='$role'");
		}
		else
		{
			$req=mysql_query("select * from compte where (nom like '%$val' or nom like '$val%' or nom like '%$val%' or nom ='$val') and statue='$role'");
		}
		$txt="";
		while($rep=mysql_fetch_array($req))
		{
			$txt.="<tr";
			if($_SESSION['CIN']==$rep['CIN'])
			$txt.=' style="color:red;font-size:17px"';
			$txt.=" id='".$rep['CIN']."'><td><strong>".$rep['CIN']."<strong></td><td>".$rep['nom']." ".$rep['prenom']."</td><td>".$rep['email']."</td><td>".$rep['telephone']."</td><td>";
			if($rep['etat']=="block")
				$txt.="<font color='#FF0000'>Désactivé</font>";
			else
				$txt.="<font color='#00F400'>Activé</font>";
				$txt.="</td>";
			if($_SESSION['statue']!=$role)
			{
				$txt.='<td>';
				if($rep['etat']=="block")$txt.='<img onclick="ComptOp(\'actif\',\''.$rep['CIN'].'\')" style="cursor:pointer;margin-left:6px" title="Activer compte" src="img/1407346268_Security_Firewall_ON.png" height="30" width="30" />';
				if($rep['etat']=="actif")$txt.='<img onclick="ComptOp(\'block\',\''.$rep['CIN'].'\')" style="cursor:pointer;margin-left:6px" title="Desactiver Compte" src="img/1407347349_Security_Firewall_OFF.png" height="30" width="30" />';
				if($rep['statue']=="adherent")$txt.='<img onclick="ComptProm(\'membre\',\''.$rep['CIN'].'\')" style="cursor:pointer;margin-left:6px" title="Promouvoir au statut membre du bureau" src="img/promouvoir.png" height="30" width="30" />';
				if($rep['statue']=="membre")$txt.='<img onclick="ComptProm(\'adherent\',\''.$rep['CIN'].'\')" style="cursor:pointer;margin-left:6px" title="Dégrader au statut adherent" src="img/remove_user.png" height="30" width="30" /></td>';
			}
			$txt.="</tr>";
		}
		?>
        <div class="col-md-6">
          <table class="table table-striped" style="width:99.9%">
            <thead>
              <tr>
                <th>CIN</th>
                <th>Nom</th>
                <th>E-mail</th>
                <th>Téléphone</th>
                <th>Etat compte</th>
                <?php if($_SESSION['statue']!=$role or ($_SESSION['statue']=="membre" and $role=="adherent")) {?>
                <th>Opération</th>    
                <?php } ?>
				            
              </tr>
            </thead>
            <tbody>
              <?php echo $txt;  ?>
            </tbody>
          </table>
        </div>
        <?php
	}
	
	if(isset($_GET['OpCmp']))
	{
		$CIN=$_GET['CIN'];
		$req=mysql_query("select statue from compte where CIN = '$CIN' ") or die(mysql_error());
		$rep=mysql_fetch_array($req);
		$NvEtat=$_GET['etat'];
		if((($_SESSION['statue']=="admin" and ($rep['statue']=="membre" or $rep['statue']=="adherent")) or ($_SESSION['statue']=="membre" and $rep['statue']=="adherent")) and ($NvEtat=="block" or $NvEtat=="actif"))
		{
			mysql_query("update compte set etat='$NvEtat' where CIN='$CIN' ") or die(mysql_error());
			$req=mysql_query("select * from compte where CIN = '$CIN' ") or die(mysql_error());
			$rep=mysql_fetch_array($req);
			$txt="<td><strong>".$rep['CIN']."<strong></td><td>".$rep['nom']." ".$rep['prenom']."</td><td>".$rep['email']."</td><td>".$rep['telephone']."</td><td>";
			if($rep['etat']=="block")
				$txt.="<font color='#FF0000'>Désactivé</font>";
			else
				$txt.="<font color='#00F400'>Activé</font>";
			$txt.="</td>";
			$txt.='<td>';
			if($rep['etat']=="block")$txt.='<img onclick="ComptOp(\'actif\',\''.$rep['CIN'].'\')" style="cursor:pointer;" title="Activer compte" src="img/1407346268_Security_Firewall_ON.png" height="30" width="30" />';
			if($rep['etat']=="actif")$txt.='<img onclick="ComptOp(\'block\',\''.$rep['CIN'].'\')" style="cursor:pointer;" title="Desactiver Compte" src="img/1407347349_Security_Firewall_OFF.png" height="30" width="30" />';
			if($_SESSION['statue']=='admin')
			{
				if($rep['statue']=="adherent")$txt.='<img onclick="ComptProm(\'membre\',\''.$rep['CIN'].'\')" style="cursor:pointer;margin-left:6px" title="Promouvoir au statut membre du bureau" src="img/promouvoir.png" height="30" width="30" />';
				if($rep['statue']=="membre")$txt.='<img onclick="ComptProm(\'adherent\',\''.$rep['CIN'].'\')" style="cursor:pointer;margin-left:6px" title="Dégrader au statut adherent" src="img/remove_user.png" height="30" width="30" /></td>';
			}
			$txt.='</td>';
			echo $txt;
		}
		else
		  echo "non";
	}
	
	if(isset($_GET['PromCmp']))
	{
		$CIN=$_GET['CIN'];
		$CINCrt=$_SESSION['CIN'];
		$NvStat=$_GET['statue'];
		if(($_SESSION['statue']=="membre") or ($_SESSION['statue']=="admin" and $NvStat == "admin"))
		{
			echo "non";
		}
		else if($_SESSION['statue']=="admin" and $NvStat != "admin" and ($NvStat == "membre" or $NvStat == "adherent"))
		{
			mysql_query("update compte set statue='$NvStat' where CIN='$CIN'") or die(mysql_error());
		}
	}
	
	if(isset($_GET['GrCmp']))
	{
		$txt="";
		$role=$_GET['role'];
		if($_SESSION['statue']=='adherent')
		{
		echo 'sir f7alk al7mar mamrbich';
		}
		else 
		{
			$req=mysql_query("select * from compte where statue='$role'") or die(mysql_error());
			if($_SESSION['statue']=='membre')
			{
				if($role=='admin')
				{
					echo 'walayni wjhak 9as7 tanta 3awd, tu na pas se droit !';
				}
				else
				{
					while($rep=mysql_fetch_array($req))
					{
						$txt.="<tr";
						if($_SESSION['CIN']==$rep['CIN'])
						$txt.=' style="color:red;font-size:17px"';
						$txt.=" id='".$rep['CIN']."'><td><strong>".$rep['CIN']."<strong></td><td>".$rep['nom']." ".$rep['prenom']."</td><td>".$rep['email']."</td><td>".$rep['telephone']."</td><td>";
						if($rep['etat']=="block")
							$txt.="<font color='#FF0000'>Désactivé</font>";
						else
							$txt.="<font color='#00F400'>Activé</font>";
						$txt.="</td>";
						
						if($role=="adherent")
						{
							$txt.='<td>';
							if($rep['etat']=="block")$txt.='<img onclick="ComptOp(\'actif\',\''.$rep['CIN'].'\')" style="cursor:pointer;" title="Activer compte" src="img/1407346268_Security_Firewall_ON.png" height="30" width="30" />';
							if($rep['etat']=="actif")$txt.='<img onclick="ComptOp(\'block\',\''.$rep['CIN'].'\')" style="cursor:pointer;" title="Desactiver Compte" src="img/1407347349_Security_Firewall_OFF.png" height="30" width="30" /></td>';
						}
						$txt.="</tr>";
					}
				}
			}
			else if($_SESSION['statue']=='admin')
			{
				while($rep=mysql_fetch_array($req))
				{
					$txt.="<tr";
					if($_SESSION['CIN']==$rep['CIN'])
					$txt.=' style="color:red;font-size:17px"';
					$txt.=" id='".$rep['CIN']."'><td><strong>".$rep['CIN']."<strong></td><td>".$rep['nom']." ".$rep['prenom']."</td><td>".$rep['email']."</td><td>".$rep['telephone']."</td><td>";
					if($rep['etat']=="block")
							$txt.="<font color='#FF0000'>Désactivé</font>";
						else
							$txt.="<font color='#00F400'>Activé</font>";
						$txt.="</td>";
					if($_SESSION['statue']!=$role)
					{
						$txt.='<td>';
						if($rep['etat']=="block")$txt.='<img onclick="ComptOp(\'actif\',\''.$rep['CIN'].'\')" style="cursor:pointer;margin-left:6px" title="Activer compte" src="img/1407346268_Security_Firewall_ON.png" height="30" width="30" />';
						if($rep['etat']=="actif")$txt.='<img onclick="ComptOp(\'block\',\''.$rep['CIN'].'\')" style="cursor:pointer;margin-left:6px" title="Desactiver Compte" src="img/1407347349_Security_Firewall_OFF.png" height="30" width="30" />';
						if($rep['statue']=="adherent")$txt.='<img onclick="ComptProm(\'membre\',\''.$rep['CIN'].'\')" style="cursor:pointer;margin-left:6px" title="Promouvoir au statut membre du bureau" src="img/promouvoir.png" height="30" width="30" />';
						if($rep['statue']=="membre")$txt.='<img onclick="ComptProm(\'adherent\',\''.$rep['CIN'].'\')" style="cursor:pointer;margin-left:6px" title="Dégrader au statut adherent" src="img/remove_user.png" height="30" width="30" /></td>';
					}
					$txt.="</tr>";
				}
			}
		}
		
		
		?>
        <div class="col-md-6">
          <table class="table table-striped" style="width:99.9%">
            <thead>
              <tr>
                <th>CIN</th>
                <th>Nom</th>
                <th>E-mail</th>
                <th>Téléphone</th>
                <th>Etat compte</th>
                <?php if($_SESSION['statue']!=$role or ($_SESSION['statue']=="membre" and $role=="adherent")) {?>
                <th>Opération</th>    
                <?php } ?>
				            
              </tr>
            </thead>
            <tbody>
              <?php echo $txt;  ?>
            </tbody>
          </table>
        </div>
        <?php
	}
	
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
    <div id="verif" style="display:none;color:red;z-index:100000;box-shadow:0px 0px 4px black;position:absolute;background-color:white;width:200px;height:35px;right:-172px;top:180px;text-shadow:0px 0px 3px rgba(0,0,0,0.3)"><span style="height:0px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span></div>
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
	
	if(isset($_GET["inscription3"]))
	{
		
		$cin=$_GET["cin"];
		$nom=addslashes($_GET["nom"]);
		$prenom=addslashes($_GET["prenom"]);
		$email=addslashes($_GET["email"]);
		$tele=$_GET["tele"];
		$fonction=addslashes($_GET["fonction"]);
		
		mysql_query("update compte set nom='$nom', prenom='$prenom', email='$email', telephone='$tele', fonction='$fonction' where CIN='".$_SESSION['CIN']."'") or die(mysql_error());  //////AAAAAAAAAAAAAKHIR STAR FLAPPLICATION YOUUUHOUUUUUUUUUUUU
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
		if(isset($_GET['role']))$role=$_GET['role'];
		
		
		$req=mysql_query("select * from `compte` where `CIN` = '$cin'")  or die(mysql_error());
		$rep=mysql_fetch_array($req) ;
		
		if($rep==NULL)
		{
			
			$req2=mysql_query("select * from compte where login = '$login'") or die(mysql_error());
			$rep2=mysql_fetch_array($req2);
			if($rep2==NULL)
			{
				if(!isset($role))$requete="insert into compte values('$cin','adherent','$nom','$prenom','$email','$tele','$fonction','$login','$pswd','actif')";
				else $requete="insert into compte values('$cin','".$role."','$nom','$prenom','$email','$tele','$fonction','$login','$pswd','actif')";
				mysql_query($requete) or die(mysql_error());
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
			$headers .= "Content-Type: text/plain; charset=\"utf8\"";
			if(mail($destinataire,$sujet,$message,$headers))
			{
        		echo $mail;
			}
			else
			{
        		echo "echec";
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
				session_start();
				$_SESSION['login'] = $login;
				$_SESSION['Utilisateur'] = $rep2['nom'].' '.$rep2['prenom'];
				$_SESSION['statue']=$rep2['statue'];
				$_SESSION['CIN']=$rep2['CIN'];
				echo 1;
			}
			else echo 2;
		}
		else echo 3;
	}
	
	if(isset($_GET['detAct2']))
	{
		$IDact=$_GET['IDact'];
		$req=mysql_query("SELECT * FROM actualite WHERE IDact = $IDact") or die(mysql_error());
		$rep=mysql_fetch_array($req);
		$txt="";
		$txt.='<div class="detArticl" id="detArticl">
                					<blockquote><span style="float:left"><h3 style="color:rgba(230,45,10,1)">'.$rep['titre'].'</h3></span><span style="margin-right:25px;float:right"><h4 style="color:rgba(230,45,10,1)">'.$rep['date'].'</h4></span></blockquote><br /><br /><br /><br />';
                				if($rep['image']!=""){	$txt.=	'<img style="margin-right:15px;margin-left:5px" align="left" src="'.$rep['image'].'" width="150" height="110" /> ';}	 
								$txt.='<p>';
								
									$txt.='&nbsp;&nbsp;'.nl2br($rep['contenue']);
								
								$txt.='</p>
								<div style="height:40px;width:50%;margin-left:auto;margin-right:auto"><button style="float:left" class="bouton" onclick="EditAct('.$IDact.')">Editer</button><button style="float:Right" class="bouton" onclick="SupAct('.$IDact.')">Supprimer</button></div>
                	</div><br /><center><img style="cursor:pointer" src="img/1405874324_Undo.png" title="Retour" onclick="undo()" height="50" width="50"  /></center>';
		echo $txt;
	}
	
	if(isset($_GET['detAct']))
	{
		$IDact=$_GET['IDact'];
		$req=mysql_query("SELECT * FROM actualite WHERE IDact = $IDact") or die(mysql_error());
		$rep=mysql_fetch_array($req);
		$txt="";
		$txt.='<div class="detArticl" id="detArticl">
                					<blockquote><span style="float:left"><h3 style="color:rgba(230,45,10,1)">'.$rep['titre'].'</h3></span><span style="margin-right:25px;float:right"><h4 style="color:rgba(230,45,10,1)">'.$rep['date'].'</h4></span></blockquote><br /><br /><br /><br />';
                				if($rep['image']!=""){	$txt.=	'<img style="margin-right:15px;margin-left:5px" align="left" src="'.$rep['image'].'" width="150" height="110" /> ';}	 
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
                                    $txt.='<img style="margin-right:5px"  src="'.$photos[$i].'" height="250" width="250" />';
								}
							
                       
                        
						
								}
						 $txt.='</marquee><center><img style="cursor:pointer" src="img/1405874324_Undo.png" title="Retour" onclick="undo()" height="50" width="50"  /></center>';		
								
                	$txt.='</div><br />';
					$txt.='<blockquote><h1 class="Com">Commentaire</h1></blockquote>
            				<hr class="StHr" /> 
								<div id="LesCom">';
					$req2=mysql_query("select count(*) as nb from commenter,compte,evenement,deroulement where commenter.CIN = compte.CIN and commenter.IDEvent=evenement.IDEvent and evenement.IDEvent=deroulement.IDEvent and commenter.IDEvent=$IDEvent") or die(mysql_error());
					$rep2=mysql_fetch_array($req2);
					$nb=$rep2['nb'];
					if($rep2['nb']==0)
					{
						$txt.='&nbsp;&nbsp;&nbsp;N\'hésitez pas a ajouter vos commentaires !';
					}
					else
					{
						$req2=mysql_query("select commenter.CIN as CIN,`commenter`.date as date,`compte`.prenom as prenom,`compte`.nom as nom, commenter.commentaire as commentaire from commenter,compte,evenement,deroulement where `commenter`.`CIN` = `compte`.`CIN` and commenter.IDEvent=evenement.IDEvent and evenement.IDEvent=deroulement.IDEvent and commenter.IDEvent=$IDEvent order by commenter.date ASC") or die(mysql_error());
						while($rep2=mysql_fetch_array($req2))
						{
							$date=explode(' ',$rep2['date']);
							$txt.=	'<div class="BlocCom" id="'.$rep2['CIN'].'_'.$date[1].'_'.$date[0].'">
            							<h3 style="color:rgba(230,45,10,1);">'.$date[0].' &nbsp; &nbsp; &nbsp; &nbsp; '.$date[1].'</h3>
                						<font size="+1" style="cursor:default"><strong>'.$rep2['prenom'].' '.$rep2['nom'].' :</strong></font>
										'.nl2br($rep2['commentaire']).'
            						</div>'; 
						}
					}
			
            $txt.=	'</div>
            		<hr class="StHr" /> 
           			<div class="CreCom">
            	 		<blockquote><h3 style="" ><label for="Commentaire">Ajouter Votre commentaire : </label></h3></blockquote>
                 		<textarea  name="Com" class="textarea" id="Commentaire" placeholder="Ecrire un comentaire ici..."></textarea>
                 		<div class="BarCom"><div onclick="AjoutCom()" class="BtnShar" align="center" >Publier</div></div>
            		</div>/0*/fr9/*0/'.$nb;
		echo $txt;
		
	}
	
	if(isset($_GET['VerifCom']))
	{
		$NbCom=$_GET['NbCom'];
		$IDComEvent=$_GET['IDComEvent'];
		
		$req1=mysql_query("select count(*) as nb from commenter,compte,evenement where commenter.CIN = compte.CIN and commenter.IDEvent=evenement.IDEvent and commenter.IDEvent=$IDComEvent") or die(mysql_error());
		$rep2=mysql_fetch_array($req1);
		$nb=$rep2['nb'];
		if($nb==$NbCom)
		{
			echo -1;
		}
		else if($nb>$NbCom)
		{
			$dif = $nb-$NbCom;
			$dif = abs($dif);
				$txt="";
				$req2=mysql_query("select commenter.CIN as CIN,`commenter`.date as date,`compte`.prenom as prenom,`compte`.nom as nom, commenter.commentaire as commentaire from commenter,compte,evenement where `commenter`.`CIN` = `compte`.`CIN` and commenter.IDEvent=evenement.IDEvent and commenter.IDEvent=$IDComEvent order by commenter.date Desc") or die(mysql_error());
				for($i=0;$i<$dif;$i++)
				{
					$rep2=mysql_fetch_array($req2);
					$date=explode(' ',$rep2['date']);
					$txt.=	'
            					<h3 style="color:rgba(230,45,10,1);">'.$date[0].' &nbsp; &nbsp; &nbsp; &nbsp; '.$date[1].'</h3>
                				<font size="+1" style="cursor:default"><strong>'.$rep2['prenom'].' '.$rep2['nom'].' :</strong></font>
								'.nl2br($rep2['commentaire']).'/0*/fr9/*0/'.$rep2['CIN'].'_'.$date[1].'_'.$date[0].'/0*/fr9/*0/'.$rep2['CIN'].'/0*/fr9/*0/'; 
				}
				$txt.='/0*/fra9/*0/'.$nb;
				echo $txt;
			
		}
		else
		{
			echo $nb;
		}
	}
	
	if(isset($_GET['detEvent2']))
	{
		$IDEvent=$_GET['IDEvent'];
		$req=mysql_query("SELECT * FROM evenement where IDEvent = $IDEvent") or die(mysql_error());
		$rep=mysql_fetch_array($req);
		$txt="";
		
		$txt.='<div class="detArticl" id="detArticl">
                					<blockquote><span style="float:left"><h3 style="color:rgba(230,45,10,1)">'.$rep['intitule'].'</h3></span><span style="margin-right:25px;float:right"><h4 style="color:rgba(230,45,10,1)">'.$rep['date'].'</h4></span></blockquote><br /><br /><br /><br />';
                				
							
								$txt.='<p>';
								
									$txt.='&nbsp;&nbsp;<font color="#FF5300" style="font-size:20px"><strong>Description : </strong></font>'.nl2br($rep['detail']);
								
								$txt.='<br /><br />&nbsp;&nbsp;<font color="#FF5300" style="font-size:20px"><strong>Lieu : </strong></font>'.$rep['lieux'].'</p>';
								
								
								
								
                	$txt.='<br /><center><img style="cursor:pointer" src="img/1405874324_Undo.png" title="Retour" onclick="undo()" height="50" width="50"  /></center></div>';
					
					
					
					if($rep['etat']=='approuve' || $rep['etat'] == 'realise' || $rep['etat'] == 'realise')
					{
					
					$txt.='<br />';
					$txt.='<blockquote><h1 class="Com">Commentaire</h1></blockquote>
            				<hr class="StHr" /> 
								<div id="LesCom">';
					$req2=mysql_query("select count(*) as nb from commenter,compte,evenement where commenter.CIN = compte.CIN and commenter.IDEvent=evenement.IDEvent and commenter.IDEvent=$IDEvent") or die(mysql_error());
					$rep2=mysql_fetch_array($req2);
					$nb=$rep2['nb'];
					if($rep2['nb']==0)
					{
						$txt.='&nbsp;&nbsp;&nbsp;N\'hésitez pas a ajouter vos commentaires !';
					}
					else
					{
						$req2=mysql_query("select commenter.CIN as CIN,`commenter`.date as date,`compte`.prenom as prenom,`compte`.nom as nom, commenter.commentaire as commentaire from commenter,compte,evenement where `commenter`.`CIN` = `compte`.`CIN` and commenter.IDEvent=evenement.IDEvent and commenter.IDEvent=$IDEvent order by commenter.date ASC") or die(mysql_error());
						while($rep2=mysql_fetch_array($req2))
						{
							$date=explode(' ',$rep2['date']);
							$txt.=	'<div class="BlocCom" id="'.$rep2['CIN'].'_'.$date[1].'_'.$date[0].'">
            							<h3 style="color:rgba(230,45,10,1);">'.$date[0].' &nbsp; &nbsp; &nbsp; &nbsp; '.$date[1].'</h3>
                						<font size="+1" style="cursor:default"><strong>'.$rep2['prenom'].' '.$rep2['nom'].' :</strong></font>
										'.nl2br($rep2['commentaire']).'
            						</div>'; 
						}
					}
			
            $txt.=	'</div>
            		<hr class="StHr" /> 
           			<div class="CreCom">
            	 		<blockquote><h3 style="" ><label for="Commentaire">Ajouter Votre commentaire : </label></h3></blockquote>
                 		<textarea  name="Com" class="textarea" id="Commentaire" placeholder="Ecrire un comentaire ici..."></textarea>
                 		<div class="BarCom"><div onclick="AjoutCom()" class="BtnShar" align="center" >Publier</div></div>
            		</div>/0*/fr9/*0/'.$nb;
					
					}
		echo $txt;
		
	}

?>