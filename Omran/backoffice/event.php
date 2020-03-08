<?php


	include('connectdb.php');
	if(isset($_GET['an']))
	{
			$an=$_GET['an'];
			$req1=mysql_query("select distinct(categorie) from evenement where date between '".$an."-01-01' and '".$an."-12-31' ") or die(mysql_error());
			while($rep1=mysql_fetch_array($req1))
			{
				
				$req2=mysql_query("select evenement.lieux lieux,evenement.IDEvent IDEvent,deroulement.galerie galerie, evenement.date date,deroulement.description detail,evenement.intitule intitule from evenement,deroulement where categorie='".$rep1['categorie']."' and date between '".$an."-01-01' and '".$an."-12-31' and evenement.IDEvent=deroulement.IDEvent and evenement.etat= 'realise' ") or die(mysql_error());
				$req3=mysql_query("select evenement.IDEvent IDEvent,deroulement.galerie galerie, evenement.date date,deroulement.description detail,evenement.intitule intitule from evenement,deroulement where categorie='".$rep1['categorie']."' and date between '".$an."-01-01' and '".$an."-12-31' and evenement.IDEvent=deroulement.IDEvent and evenement.etat= 'realise' ") or die(mysql_error());
				$rep3=mysql_fetch_array($req3);
				if($rep3!=NULL)
							echo "<h2 align='center' style='color:rgba(255,87,15,1)'>".$rep1['categorie']."</h2>";
				while($rep2=mysql_fetch_array($req2))
				{
					$photos=explode("*",$rep2['galerie']);
					$cmp=count($photos)
					?>
                    
                    <div id="tous_<?php echo $rep2['IDEvent'] ?>">
                    
            			<div id="titre<?php echo $rep2['IDEvent'] ?>" onclick="suite('tous_<?php echo $rep2['IDEvent'] ?>')" class="actitre"><span class="triengle"></span><?php echo $rep2['intitule'] ?> <span style="float:right;margin-right:50px"><?php echo $rep2['date'] ?></span></div>
                		<div id="event<?php echo $rep2['IDEvent'] ?>" class="event"><p style="margin-left:20px"><font color="#FF5300" style="font-size:20px"><strong>Description  : </strong></font><?php echo $rep2['detail']?><br /><br /><font color="#FF5300" style="font-size:20px"><strong>Lieu du déroulement : </strong></font><?php echo $rep2['lieux']?></p>
                    <?php    
					if($rep2['galerie']!="")
				{
					?>
                        <marquee onMouseOver="this.stop()" onMouseOut="this.start()" style="margin-top:40px" align="middle" direction="left">
                        	<?php
							
								for($i=0;$i<$cmp;$i++)
								{
									?>
                                    	<img  src="<?php echo $photos[$i]; ?> " height="250" width="250" />
                                    <?php
									
								}
							?>
                        </marquee>
                        <?php
						
				}
							?>
                            <center><div class="boutDet" onclick="detEvent(<?php echo $rep2['IDEvent'] ?>)"><strong>Détails</strong></div></center>
                        </div>
            		</div>
                    <?php
						
				}
			}
	}
	
	if(isset($_GET['EventAvnir']))
	{
		$reqCnt=mysql_query("select count(*) as nb from evenement where etat='approuve'");
		$repCnt=mysql_fetch_array($reqCnt);
		$nb=$repCnt['nb'];
		if($nb!=0)
		{
		
			$req1=mysql_query("select distinct(categorie) from evenement where etat='approuve' ") or die(mysql_error());
			while($rep1=mysql_fetch_array($req1))
			{
				
				$req2=mysql_query("select * from evenement where categorie='".$rep1['categorie']."' and etat= 'approuve' ") or die(mysql_error());
				$req3=mysql_query("select * from evenement where categorie='".$rep1['categorie']."' and etat= 'approuve' ") or die(mysql_error());
				$rep3=mysql_fetch_array($req3);
				if($rep3!=NULL)
							echo "<h2 align='center' style='color:rgba(255,87,15,1)'>".$rep1['categorie']."</h2>";
				while($rep2=mysql_fetch_array($req2))
				{
					?>
                    <?php 
					 	
					 ?>
                    <div id="tous_<?php echo $rep2['IDEvent'] ?>">
                    
            			<div id="titre<?php echo $rep2['IDEvent'] ?>" onclick="suite('tous_<?php echo $rep2['IDEvent'] ?>')" class="actitre"><span class="triengle"></span><?php echo $rep2['intitule'] ?> <span style="float:right;margin-right:50px"><?php echo $rep2['date'] ?></span></div>
                		<div id="event<?php echo $rep2['IDEvent'] ?>" class="event"><p style="margin-left:20px"><font color="#FF5300" style="font-size:20px"><strong>Description  : </strong></font><?php echo $rep2['detail']?><br /><br /><font color="#FF5300" style="font-size:20px"><strong>Lieu du déroulement : </strong></font><?php echo $rep2['lieux']?></p>
                  
                            <center><div class="boutDet" onclick="detEvent2(<?php echo $rep2['IDEvent'] ?>)"><strong>Détails</strong></div></center>
                        </div>
            		</div>
                    <?php
						
				}
			}
		}
		else
		{
			echo '<br /><h2>Aucun evenement n\'est planifié pour le moment !</h2><br />';
		}
	}
?>