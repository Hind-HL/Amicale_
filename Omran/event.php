<?php
	include('connectdb.php');
			$an=$_GET['an'];
			$req1=mysql_query("select distinct(categorie) from evenement where date between '".$an."-01-01' and '".$an."-12-31' ") or die(mysql_error());
			while($rep1=mysql_fetch_array($req1))
			{
				
				$req2=mysql_query("select evenement.IDEvent IDEvent,deroulement.galerie galerie, evenement.date date,deroulement.description detail,evenement.intitule intitule from evenement,deroulement where categorie='".$rep1['categorie']."' and date between '".$an."-01-01' and '".$an."-12-31' and evenement.IDEvent=deroulement.IDEvent and evenement.etat= 'realise' ") or die(mysql_error());
				$req3=mysql_query("select evenement.IDEvent IDEvent,deroulement.galerie galerie, evenement.date date,deroulement.description detail,evenement.intitule intitule from evenement,deroulement where categorie='".$rep1['categorie']."' and date between '".$an."-01-01' and '".$an."-12-31' and evenement.IDEvent=deroulement.IDEvent and evenement.etat= 'realise' ") or die(mysql_error());
				$rep3=mysql_fetch_array($req3);
				if($rep3!=NULL)
							echo "<h2 align='center' style='color:rgba(255,87,15,1)'>".$rep1['categorie']."</h2>";
				while($rep2=mysql_fetch_array($req2))
				{
					$photos=explode("*",$rep2['galerie']);
					$cmp=count($photos)
					?>
                    <?php 
					 	
					 ?>
                    <div id="tous_<?php echo $rep2['IDEvent'] ?>">
                    
            			<div id="titre<?php echo $rep2['IDEvent'] ?>" onclick="suite('tous_<?php echo $rep2['IDEvent'] ?>')" class="actitre"><span class="triengle"></span><?php echo $rep2['intitule'] ?> <span style="float:right;margin-right:50px"><?php echo $rep2['date'] ?></span></div>
                		<div id="event<?php echo $rep2['IDEvent'] ?>" class="event"><p align="center"><?php echo $rep2['detail']?></p>
                    <?php    
					if($rep2['galerie']!="")
				{
					?>
                        <marquee onMouseOver="this.stop()" onMouseOut="this.start()" style="margin-top:40px" align="middle" direction="left">
                        	<?php
							
								for($i=0;$i<$cmp;$i++)
								{
									?>
                                    	<img  src="backoffice/<?php echo $photos[$i]; ?> " height="250" width="250" />
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
?>