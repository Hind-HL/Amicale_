<?php
include('connectdb.php');

if(isset($_GET['typop']))
{
	$type=$_GET['typop'];
	if($type=="ac")
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
		$req=mysql_query("SELECT * FROM `actualite` where date between '".$date2."' and '".$date."' ORDER BY IDAct desc") or die(mysql_error());
		$req2=mysql_query("SELECT count(*) as nbr FROM `actualite` where date between '".$date2."' and '".$date."' group by(IDact)") or die(mysql_error());
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
			$elem = explode("\n",$rep['contenue']);
			$tl=count($elem);
			if($tl>2)$tl=2;
			if($cont%4==0){$reponse.='<div id="cont'.$bloc.'" ';if($bloc>1){$reponse.='style="display:none"';}$reponse.='>';}
			$reponse.='<div class="conAct" style="height:180px;overflow:hidden">
                					<blockquote><span style="float:left"><h3 style="color:rgba(230,45,10,1)"><a style="cursor:pointer" onclick="detail(\''.$rep['IDact'].'\')">'.$rep['titre'].'</a></h3></span><span style="margin-right:25px;float:right"><h4 style="color:rgba(230,45,10,1)">'.$rep['date'].'</h4></span></blockquote><br /><br /><br />';
                				if($rep['image']!=""){	$reponse.=	'<img style="margin-right:5px;margin-left:5px" align="left" src="backoffice/'.$rep['image'].'" width="100" height="70" /> ';}	 
								$reponse.='<p>';
								for($i=0;$i<$tl;$i++)
								{
									$reponse.='&nbsp;&nbsp;'.nl2br($elem[$i]);
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
	
	if($type=="cn")
	{
		?> <h2 class="title" style="font-family:Georgia, 'Times New Roman', Times, serif;">AL OMRANE MEKNES (SIÉGE SOCIAL)</h2>
        <p style="margin-left:50px">	<strong>Adresse :</strong>
			Rue Ibn Sina , BP 253, Ville Nouvelle<br />
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meknes<br />
			<strong>Téléphone :</strong> +212 (0) 5 35 51 05 54<br />
			<strong>Fax :</strong> +212 (0) 5 35 51 04 40<br />
			<strong>E-mail :</strong> commercial@alomrane.ma
            </p>
            <center><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1655.8187627868053!2d-5.5317130000000425!3d33.898987999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda044e319ab479f%3A0x9bdfe79360652d51!2sAlOmrane+Mekn%C3%A8s!5e0!3m2!1sfr!2sfr!4v1405936385347" width="600" height="450" frameborder="0" style="border:0"></iframe></center>
            
            <h3 class="title" style="font-family:Georgia, 'Times New Roman', Times, serif;font-size:18px"><blockquote>AGENCE EL MENZEH</blockquote></h3>
            <p style="margin-left:50px">	<strong>Adresse :</strong>
			Immeuble A MG1 Al Boustane, 4C WISLANE 50045<br /> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meknes<br />
			<strong>Téléphone :</strong> +212 (0) 5 35 54 90 89<br />
			<strong>Fax :</strong> +212 (0) 5 35 54 91 62<br />
			<strong>E-mail :</strong> commercial@alomrane.ma
            </p>
            
            <h3 class="title" style="font-family:Georgia, 'Times New Roman', Times, serif;font-size:18px"><blockquote>AGENCE ERRACHIDIA</blockquote></h3>
            <p style="margin-left:50px">	<strong>Adresse :</strong>
			355 Délégation de l'habitat Boutalanine <br /> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Errachidia<br />
			<strong>Téléphone :</strong> +212 (0) 5 35 79 00 86<br />
			<strong>Fax :</strong> +212 (0) 5 35 79 18 33<br />
			<strong>E-mail :</strong> commercial@alomrane.ma
            </p>
          <?php
	}
	
	if($type=="cl")
	{
		
		$d = date('j');
		$m = date('n');
		$y = date('Y');
		if(isset($_GET['mois']))
		{
			$m=$_GET['mois'];
			$y=$_GET['an'];
		}
		
		$Tcourant=strtotime("$y-$m-$d");
		$NomMois = date('F',$Tcourant);
		$nbrJour = date('t',$Tcourant);
		$cmp=0;
		
		switch ($NomMois)
		{
			case 'January' : $NomMois = 'Janvier';break;
			case 'February' : $NomMois = 'Février';break;
			case 'March' : $NomMois = 'Mars';break;
			case 'April' : $NomMois = 'Avrile';break;
			case 'May' : $NomMois = 'Mai';break;
			case 'June' : $NomMois = 'Juin';break;
			case 'July' : $NomMois = 'Juillet';break;
			case 'August' : $NomMois = 'Août';break;
			case 'September' : $NomMois = 'Septembre';break;
			case 'October' : $NomMois = 'Octobre';break;
			case 'November' : $NomMois = 'Novembre';break;
			case 'December' : $NomMois = 'Décembre';break;
		}
		
		$req=mysql_query("select count(*) nb from evenement where date between '".$y.'-'.$m.'-'."01' and '".$y.'-'.$m.'-'."31'") or die(mysql_error());
		$rep=mysql_fetch_array($req);
		//$nb=count($req);
		$nb=$rep['nb'];
		$cont = array();
		$cour=0;
		if($nb!=0)
		{
			$reqt=mysql_query("select * from evenement where date between '".$y.'-'.$m.'-'."01' and '".$y.'-'.$m.'-'."31' and etat in('approuve','realise','annule') order by date asc") or die(mysql_error());
			while($rept=mysql_fetch_array($reqt))
			{
				$cont[]=$rept;
			}
		}
		if($m<10)
		{
			$mv='0'.$m;
		}
		else
			$mv=$m;
			
		
		
		
		
		
		?>
        	<div style="margin-top:8px;margin-left:8px;position:absolute">
            	<div class="boutCalG" onclick="mPres(<?php echo $m ?>,<?php echo $y ?>)">
            		<img src="img/1406103017_Previous.png" height="15px" width="15px" style="margin-top:16%;margin-left:27%" />
                </div><div class="boutCalD" onclick="mSuiv(<?php echo $m ?>,<?php echo $y ?>)">
                	<img src="img/1406103012_Next.png" height="15px" width="15px" style="margin-top:16%;margin-left:27%" />
                </div>
        		<div <?php if($m == date('m')) echo 'class="CalActC"'; else {echo 'class="CalAct" onclick="affichage()"';} ?> "><strong>Ajourd'hui</strong></div>
            </div>
        	<center><span class="dat"><?php echo $NomMois." &nbsp;".$y ?></span></center><br />
			<table  style="border-width:1px; border-style:solid;border-color:rgba(40%,40%,40%,0.6);border-collapse:collapse" cellspacing="0"  width="95%" align="center" >
            	<tr class="calTete">
                	<td width="14.28%" >Lundi</td>
                    <td width="14.28%" >Mardi</td>
                    <td width="14.28%" >Mercredi</td>
                    <td width="14.28%" >Jeudi</td>
                    <td width="14.28%" >Vendredi</td>
                    <td width="14.28%" >Samedi</td>
                    <td width="14.28%" >Dimanche</td>
                </tr>
                <?php 
					echo '<tr class="calCorp">';
					for($i=1;$i<$nbrJour+1;$i++, $cmp++)
					{
						if($i<=9)
						{
							$jr='0'.$i;
						}
						else
						{
							$jr=$i;
						}
						$temCourant=strtotime("$y-$m-$i");
						if($i == 1)
						{
							$PremJour =date("N",$temCourant);
							$mp=$m-1;
							$yp=$y;
							if($mp==0)
							{
								$mp=12;
								$yp-=$yp;
							}
							$TPcourant=strtotime("$yp-$mp-$d");
							$NomPMois = date('F',$TPcourant);
							$nbrJourP = date('t',$TPcourant);
							if($PremJour==1)
							{
								$nbrJourP=$nbrJourP-6;
							}
							else
								$nbrJourP=$nbrJourP-($PremJour-2);
							if($PremJour==1)
							{
								for($j=1;$j<8;$j++,$cmp++)
								{
									echo '<td style="color:rgba(80%,80%,80%,0.8)" valign="top" align="center">'.$nbrJourP.'</td>';
									$nbrJourP=$nbrJourP+1;
								}
							}
							for($j=1;$j<$PremJour;$j++,$cmp++)
							{
								echo '<td style="color:rgba(80%,80%,80%,0.8)" valign="top" align="center">'.$nbrJourP.'</td>';
								$nbrJourP=$nbrJourP+1;
							}
						}
						if($cmp % 7 == 0)
						{
							echo '</tr><tr class="calCorp">';
							
						}
						echo '<td valign="top" align="center"';if ($i==$d and $m == date('m'))echo 'style="background-image:linear-gradient(rgba(255,250,246,1) 0%,rgba(255,238,230,1) 50%,rgba(255,234,222,1) 50%,rgba(255,245,240,1) 100%)"';  echo '>'.$i.'<br />';if($nb!=0)while($cont[$cour]['date']==$y.'-'.$mv.'-'.$jr){echo '<div '; if($cont[$cour]['etat']=='approuve'){echo ' class="envetCalAp" onclick="detEvent2('.$cont[$cour]['IDEvent'].')"';} if($cont[$cour]['etat']=='realise'){echo ' class="envetCalRe" onclick="detEvent('.$cont[$cour]['IDEvent'].')"';}if($cont[$cour]['etat']=='annule')echo ' class="envetCalAn" title="Event annuler"'; echo '>'.$cont[$cour]['intitule'].'</div>';if($cour<($nb-1))$cour++;else break;} echo '</td>';
						
					}
					echo '</tr>';
				?>
            </table>
		<?php
		echo '****'.$m;
        
	}
}
?>

