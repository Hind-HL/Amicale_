// JavaScript Document



								var data = 
								[	
									{
        								value: 0,
        								color: "#46BFBD",
        								highlight: "#5AD3D1",
        								label: "Oui"
    								},
    								{
        								value: 0,
        								color:"#F7464A",
        								highlight: "#FF5A5E",
        								label: "Non"
    								},
    								{
        								value: 0,
        								color: "#FDB45C",
        								highlight: "#FFC870",
        								label: "Sans opignion"
    								}
								]

beep = new Audio()
beep.src="Pling.wav"
beep.controls="controls"


	function CalAn()
	{
		dt = new Date()
		y=dt.getFullYear()
		deroulement(y);
		opt=""
		for(i=0;i<=10;i++)
		{
			opt=opt+"<option>"+(y-i)+"</option>"
		}
		return opt
	}

function sa3a()
	{
		
		d = new Date()
		
		
		h = d.getHours()
		m = d.getMinutes()
		s = d.getSeconds()
		
		if (h<=9)
			h="0"+h
		if (m<=9)
			m="0"+m
		if (s<=9)
			s="0"+s
			
			str = (h+":"+m+":"+s)
			
		
		document.getElementById('sa3a').innerHTML=str
	}
	


	 	if (window.XMLHttpRequest)
  		{// code for IE7+, Firefox, Chrome, Opera, Safari
  			xmlhttp=new XMLHttpRequest();
  		}
		else
  		{// code for IE6, IE5
  			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  		}
		
		
	
	
    	CIN = new RegExp(/^[A-Za-z]{1,2}[0-9]{5,7}$/);
		nomr = new RegExp(/^([A-Za-z][A-Za-z\â\ê\ô\û\ä\ï\ü\ö\ë\î\à\ç\é\è\ù \']{1,})+$/);
		prenomr = new RegExp(/^[A-Za-z ]{3,}$/);
		loginr = new RegExp(/^[A-Za-z\é\è\ù\à\ç\â\ê\ô\û\ä\ï\ü\ö\ë\î].+$/)
		pswd = new RegExp(/^(?=.*\d).{6,20}$/);
		emailr = new RegExp(/^[A-Za-z\é\è\ù\à\ç\â\ê\ô\û\ä\ï\ü\ö\ë\î][A-Za-z1-9\é\è\ù\à\ç\â\ê\ô\û\ä\ï\ü\ö\ë\î\'\.\*_\-]+@([A-Za-z]([A-Za-z1-9\-_]+)\.)+[A-Za-z]{2,5}$/);
		telephone = new RegExp(/^(([0-9]{2} ){4}[0-9]{2})|([0-9]{10})$/);
		type=""
		IID=""
		axb=""
		axb2=""
		activat = ""
		hting = 0
		test = 0
		HonaActiv=""
		statu=document.getElementById('statue').value
		CINm=document.getElementById('CINm').value
		NbCom=0
		ComEvent=0
		EventCour=0;
		MenuCour=1;
		CondNb=2;
		ckbox=0
		
		function verific(a)
		{
			if(a.checked==true)
			{
				if(ckbox==6)
				{
					if(a.checked==true)
						a.checked=false
				}
				else if(ckbox<6)
				{
					ckbox++
				}
			}
			else
			{
				ckbox--
			}
		}
		
		function SlidImg()
		{
			caze=document.getElementsByName('img[]')
			n=caze.length
			sest=0
			img=''
			for(i=0;i<n;i++)
			{
				if(caze.item(i).checked==true)
				{
					img+=caze.item(i).value
					if(i!=n-1)
						img+='*'
					sest=1
				}
			}
			if(sest==0)
				alert('Vous devez choisir au moin une image')
			else
			{
				xmlhttp.onreadystatechange=function()
  				{
  					if (xmlhttp.readyState==4 && xmlhttp.status==200)
    				{
						ferme()
						setTimeout(function(){top.location.href="index.php"},450)
					}
				}
				xmlhttp.open("GET","sgbd.php?ImageSlider2=ok&img="+img,true);
				xmlhttp.send(null);
			}
		}
		
		function SlidImage()
		{
			ckbox=0
			document.getElementById('form').style.height=('550px')
			document.getElementById('form').style.width=('800px')
			document.getElementById('message').style.backgroundColor=('rgba(255,255,255,0.2)')
			document.getElementById('message').style.height=('95%')
			
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					rep=xmlhttp.responseText
					contenue=rep.split("//**//")
					ckbox=contenue[1]
					document.getElementById('message').innerHTML=contenue[0]
					$('#message').fadeIn('fast')
					fen()
					recalPose()
				}
			}
			xmlhttp.open("GET","sgbd.php?ImageSlider=ok",true);
			xmlhttp.send(null);
		}
		
		function inscription3()
		{
			cin = document.getElementById('CIN').value
			verif=document.getElementById("verif")
			nom = document.getElementById("nom").value;
			prenom = document.getElementById("prenom").value;
			email = document.getElementById("email").value;
			email = email.toLowerCase()
			tele = document.getElementById("telephone").value;
			fonction = document.getElementById("fonction").value;
			
			if(cin != "" && nom != "" && prenom != "" && email != "" && tele != "" && fonction != "")
			{
				if(CIN.test(cin)==false)
				{
					verif.style.top="95px"
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>ex : D114455 ou AB12354</small></small>'
					$("#verif").fadeIn("slow");
					document.getElementById('CIN').value
					document.getElementById('CIN').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
				}
				else if(nomr.test(nom)==false)
				{
					verif.style.top="153px"
					$("#verif").fadeIn("slow");
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>ex : Tayeb, El Hadi ...</small></small>'
					document.getElementById('nom').value
					document.getElementById('nom').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
				}
				else if(prenomr.test(prenom)==false)
				{
					verif.style.top="211px"
					$("#verif").fadeIn("slow");
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>ex : Yassine, Abd elali ...</small></small>'
					document.getElementById('prenom').value
					document.getElementById('prenom').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)					
				}
				else if(emailr.test(email)==false)
				{
					verif.style.top="269px"
					$("#verif").fadeIn("slow");
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>ex : exemple@gmail.com ...</small></small>'
					document.getElementById('email').value
					document.getElementById('email').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)	
				}
				else if(telephone.test(tele)==false)
				{
					verif.style.top="327px"
					$("#verif").fadeIn("slow");
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>ex : 06 11 22 33 44, 0611223344 ...</small></small>'
					document.getElementById('telephone').value
					document.getElementById('telephone').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)	
				}
				else
				{
					xmlhttp.onreadystatechange=function()
  					{
  						if (xmlhttp.readyState==4 && xmlhttp.status==200)
    					{
							document.getElementById("message").innerHTML="Modification effectué Mr(Mdm)."+nom+" "+prenom
							$('#message').fadeIn('fast')
							fen()
							recalPose()
						}
 		 			}

	
					xmlhttp.open("GET","sgbd.php?inscription3=ok&cin="+cin+"&nom="+nom+"&prenom="+prenom+"&email="+email+"&tele="+tele+"&fonction="+fonction,true);
					xmlhttp.send(null);
				}
			}	
		}
		
		function AjouterCond()
		{
			tab=document.getElementById('AjDt')
			AjoCo = document.getElementById('LesCond').innerHTML
			document.getElementById('LesCond').parentNode.removeChild(document.getElementById('LesCond'))
			$('<tr></tr>').appendTo(tab).html('<td><label for="CondDot'+CondNb+'">Condition de bénéfice '+CondNb+' <font color="red">*</font></label></td><td> : </td><td align="right"> <input type="text" id="CondDot'+CondNb+'" name="CondDot[]" placeholder="Condition" /></td>')
			$('<tr style="opacity:0.2" id="LesCond"></tr>').appendTo(tab).html(AjoCo)
			CondNb++
		}
		
		function Decouvert()
		{
			if(EventCour!=1)
			{
				document.getElementById('MenuEvent'+MenuCour).className=""
				MenuCour=1
				document.getElementById('MenuEvent'+MenuCour).className="current"
				activat = ""
				hting = 0
				test = 0
				ed = new Date()
				ey=ed.getFullYear()
				setTimeout(function(){$('#sana').fadeIn('slow')},450)
				deroulement(ey)
				EventCour=1
			}
		}
		
		function EventAvnir()
		{
			if(EventCour!=2)
			{
				document.getElementById('MenuEvent'+MenuCour).className=""
				MenuCour=2
				document.getElementById('MenuEvent'+MenuCour).className="current"
				activat = ""
				hting = 0
				test=0
				$('#sana').fadeOut('slow')
				$('#hona').fadeOut("slow")
				xmlhttp.onreadystatechange=function()
  				{
  					if (xmlhttp.readyState==4 && xmlhttp.status==200)
    				{
						rep=xmlhttp.responseText
						document.getElementById("hona").innerHTML=rep
						setTimeout(function(){$('#hona').fadeIn('slow')},400)
						EventCour=2
						
						
					}
				}
				xmlhttp.open("GET","event.php?EventAvnir=ok",true);
				xmlhttp.send(null);
			}
		}
		
		function PropoEvent()
		{
			if(EventCour!=3)
			{
				document.getElementById('MenuEvent'+MenuCour).className=""
				MenuCour=3
				document.getElementById('MenuEvent'+MenuCour).className="current"
				$('#sana').fadeOut('slow')
				$('#hona').fadeOut("slow")
				txt='<div class="container"><div class="FormProp"><h1 style="margin-left:230px">Proposition Event</h1> <div id="verif" style="display:none;color:red;z-index:100;box-shadow:0px 0px 4px black;position:absolute;background-color:white;width:200px;height:35px;right:-54px;top:95px;text-shadow:0px 0px 3px rgba(0,0,0,0.3)"><span style="height:0px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span></div><table border="1" cellspacing="0" align="center" width="80%"><tr><td><label for="IntitulEvent">Intitulé de l\'événement <font color="red">*</font></label></td><td> : </td> <td align="right"> <input type="text" id="IntitulEvent" placeholder="Intitule" /></td></tr><tr><td><label for="CategEvent">Catégorie <font color="red">*</font>  </label></td><td> : </td><td align="right"><select id="CategEvent" ><option>-- Choisissez une catégorie --</option><option>Voyages</option><option>Activités culturelles</option><option>Activités sportives</option><option>Fêtes & Receptions</option><option>Divers</option></select></td></tr><tr><td><label for="BudgetEvent">Estimation budget  </label></td> <td> : </td><td align="right"><input type="text" id="BudgetEvent" placeholder="Budget en DH" /></td></tr><tr><td><label for="DateEvent">Date prévisionnelle <font color="red">*</font> </label></td><td> : </td><td align="right"><input type="text" id="DateEvent" onClick="ds_sh(this);" placeholder="Date" /></td></tr><tr><td><label for="LieuEvent">Lieu du déroulement <font color="red">*</font> </label></td><td> : </td><td align="right"><input type="text" id="LieuEvent" placeholder="Adresse"/></td></tr><tr><td><label for="DescEvent">Description <font color="red">*</font> </label></td><td> : </td><td align="right"><textarea id="DescEvent" placeholder="Description"></textarea></td></tr>'
				if(statu=='admin' || statu=='membre')
				txt+='</tr><tr><td><label for="EtatEvent"> Etat <font color="red">*</font>  </label></td><td> : </td><td align="right"><select id="EtatEvent" ><option>-- Choisissez l\'etat --</option><option>Approuvé</option><option>Vote</option></select></td></tr>'
				else
				txt+='</tr><tr><td>&nbsp;</td><td> &nbsp; </td><td align="right">&nbsp;</td></tr>'
				txt+='<tr><td align="center" colspan="3"><button class="bouton" onclick="ValProp()"> Valider </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table></div><center><strong style="text-shadow:0px 0px 4px rgba(102,102,102,0.5);color:red;font-size:20px">Note : </strong>Les Champs marqués avec un étoile <font color="red">*</font> doivent obligatoirement être remplis</center></div>';
				
				
				setTimeout(function()
				{
					document.getElementById("hona").innerHTML=txt
					$('#hona').fadeIn("slow")
				},500)
				EventCour=3
			}
		}
		
		function GestEvent()
		{
			
			if(EventCour!=9)
			{
				document.getElementById('MenuEvent'+MenuCour).className=""
				MenuCour=5
				document.getElementById('MenuEvent'+MenuCour).className="current"
				$('#sana').fadeOut('slow')
				$('#hona').fadeOut("slow")
				activat = ""
				hting = 0
				test = 0
				xmlhttp.onreadystatechange=function()
  				{
  					if (xmlhttp.readyState==4 && xmlhttp.status==200)
    				{
						document.getElementById('hona').innerHTML=xmlhttp.responseText
						setTimeout(function(){$('#hona').fadeIn('slow')},400)
						EventCour=9
					}
				}
				xmlhttp.open("GET","sgbd.php?GestEvent=ok",true);
				xmlhttp.send(null);
			}
		}
		
		function AnnulEvent(IDEv)
		{
			document.getElementById("message").innerHTML="êtes vous sûr de vouloir marquer cet événement comme événement annuler?<br /><div style='width:80%;margin-left:auto;margin-right:auto'><button style='float:left' class='bouton' onclick='OuiAnnule("+IDEv+")'> OUI </button><button style='float:right' class='bouton' onclick='ferme()'> Annuler </button></div>"
			$('#message').fadeIn('fast')
			document.getElementById('form').style.height='auto'
			fen()
			recalPose()
		}
		
		function OuiAnnule(IDEv)
		{
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					$('#message').fadeOut('fast')
					document.getElementById("message").innerHTML="Evénement Annuler<br /><button class='bouton' onclick='ferme()'> OK </button>"
					$('#message').fadeIn('fast')
					$('#tous_'+IDEv).fadeOut('slow')
					recalPose()
				}
			}
			xmlhttp.open("GET","sgbd.php?AnnulEvent=ok&IDEvent="+IDEv,true);
			xmlhttp.send(null);
		}
		
		function RealisEvent(IDEv)
		{
			oldBody = document.body.innerHTML
			$('#hona').fadeOut("slow")
			txt=""
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					rp = xmlhttp.responseText
					elem=rp.split('*/*')
					txt+='<div class="container"><div class="FormProp"><h1 style="margin-left:230px">Réalisation Event</h1><div id="verif" style="display:none;color:red;z-index:100;box-shadow:0px 0px 4px black;position:absolute;background-color:white;width:200px;height:35px;right:-54px;top:95px;text-shadow:0px 0px 3px rgba(0,0,0,0.3)"><span style="height:0px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span></div><form action="upload.php" method="post" enctype="multipart/form-data" onsubmit="return EventSala(\''+IDEv+'\')"><table border="1" cellspacing="0" align="center" width="80%"><tr><td><label for="IntitulEvent">Intitulé de l\'événement <font color="red">*</font></label></td><td> : </td><td align="right"> <input type="text" id="IntitulEvent" placeholder="Intitule" value="'+elem[0]+'" disabled="disabled" /></td></tr><tr><td><label for="CategEvent">Catégorie <font color="red">*</font>  </label></td><td> : </td><td align="right"><input type="text" id="CategEvent" value="'+elem[1]+'" disabled="disabled" /></td> </tr><tr><td><label for="BudgetEvent">Estimation budget  </label></td><td> : </td><td align="right"><input type="text" id="BudgetEvent" name="budget" placeholder="Budget en DH" value="'+elem[2]+'"  /></td></tr> <tr><td><label for="DateEvent">Date prévisionnelle <font color="red">*</font> </label></td><td> : </td><td align="right"><input type="text" id="DateEvent" onClick="ds_sh(this);" placeholder="Date" value="'+elem[3]+'" name="date" /></td></tr><tr><td><label for="LieuEvent">Lieu du déroulement <font color="red">*</font> </label></td><td> : </td><td align="right"><input type="text" id="LieuEvent" placeholder="Adresse" name="lieux" value="'+elem[4]+'" /></td></tr><tr><td><label for="DescEvent">Description <font color="red">*</font> </label></td><td> : </td><td align="right"><textarea name="Desc" id="DescEvent" placeholder="Description">'+elem[5]+'</textarea></td></tr><tr><td>&nbsp;</td><td>&nbsp;  </td><td align="right">&nbsp;</td></tr><tr><td>Galerie d\'images</td><td> : </td><td align="right"><input type="file" multiple id="images[]" name="images[]" /></td></tr><tr><td align="center" colspan="3"><input type="submit" name="valid" class="bouton" value="Valider" /><input type ="hidden" name="IDEvent" value="'+IDEv+'" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> </form></div><center><strong style="text-shadow:0px 0px 4px rgba(102,102,102,0.5);color:red;font-size:20px">Note : </strong>Les Champs marqués avec un étoile <font color="red">*</font> doivent obligatoirement être rempli</center><br /><center><img style="cursor:pointer" src="img/1405874324_Undo.png" title="Retour" onclick="undo()" height="50" width="50"  /></center></div>';
					
					setTimeout(function()
					{
						document.getElementById("hona").innerHTML=txt
						$('#hona').fadeIn("slow")
					},500)
				}
			}
			xmlhttp.open("GET","sgbd.php?VlEvent=ok&IDEvent="+IDEv,true);
			xmlhttp.send(null);	
		}
		
		
		
		function AjDot()
		{
			intituleT    = new RegExp(/^[A-Za-z\é\è\ù\à\ç\â\ê\ô\û\ä\ï\ü\ö\ë\î][A-Za-z\é\è\ù\à\ç\â\ê\ô\û\ä\ï\ü\ö\ë\î\'\.\*_\-\,0-9 ]{3,}$/)
			montantT      = new RegExp(/^[0-9]+$/)
			condT        = new RegExp(/^[A-Za-z\é\è\ù\à\ç\â\ê\ô\û\ä\ï\ü\ö\ë\î][A-Za-z\é\è\ù\à\ç\â\ê\ô\û\ä\ï\ü\ö\ë\î\'\.\*_\-\,0-9 \n:;\$\&\/\<\>]{3,}$/)
			descriptionT = new RegExp(/^[A-Za-z\é\è\ù\à\ç\â\ê\ô\û\ä\ï\ü\ö\ë\î\'\.\*_\-\,0-9 \n:;\$\&\/\<\>\%"]{30,}$/)
			
			Intitule=document.getElementById('IntitulDot').value
			Desc=document.getElementById('DescDot').value
			Cond=document.getElementById('CondDot1').value
			Mont=document.getElementById('MontDot').value
			verif=document.getElementById('verif')
			if(Intitule=='' || Desc=='' || Cond=='' || Mont=='')
			{
				document.getElementById('message').innerHTML="Tous les champs sont obligatoires !<br /><button class='bouton' onclick='ferme()'>OK</button>"
				document.getElementById('form').style.height='auto'
				fen()
				recalPose()
				return false
			}
			else
			{
				if(intituleT.test(Intitule)==true && montantT.test(Mont)==true && descriptionT.test(Desc)==true && condT.test(Cond))
				{
					rt = /\n/i
					Desc=Desc.replace(rt,'<br />')
					document.getElementById('DescDot').value=Desc
					return true
				}
				else if(intituleT.test(Intitule)==false)
				{
					document.getElementById('verif').style.top='95px'
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect !<br /><small><small>ex : Naissance, Achat immobilié...</small></small>'
					$("#verif").fadeIn("slow");
					document.getElementById('IntitulDot').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
					return false
				}
				else if(descriptionT.test(Desc)==false)
				{
					document.getElementById('verif').style.top='145px'
					document.getElementById('verif').style.right='-105px'
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>description trop courte <small>Min 30 caractères</small>'
					$("#verif").fadeIn("slow");
					document.getElementById('DescDot').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow");setTimeout(function(){verif.style.right="-70px"},450) },2000)
					return false
				}
				else if(montantT.test(Mont)==false)
				{
					
					document.getElementById('verif').style.top='320px'
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect !<br /><small><small>ex : 2000, 5000...</small></small>'
					$("#verif").fadeIn("slow");
					document.getElementById('MontDot').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
					return false
				}
				else if(condT.test(Cond)==false)
				{
					document.getElementById('verif').style.top='440px'
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect !'
					$("#verif").fadeIn("slow");
					document.getElementById('CondDot1').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
					return false
				}
			}
						
 		}
		
		function SpDot()
		{
			if(EventCour!=11)
			{
				document.getElementById('MenuEvent'+MenuCour).className=""
				MenuCour=6
				document.getElementById('MenuEvent'+MenuCour).className="current"
				$('#sana').fadeOut('slow')
				$('#hona').fadeOut("slow")
				activat = ""
				hting = 0
				test = 0
				xmlhttp.onreadystatechange=function()
  				{
  					if (xmlhttp.readyState==4 && xmlhttp.status==200)
    				{
						setTimeout(function(){document.getElementById('hona').innerHTML=xmlhttp.responseText;$('#hona').fadeIn('slow')},400)
						EventCour=11
					}
				}
				xmlhttp.open("GET","sgbd.php?SpDot=ok",true);
				xmlhttp.send(null);
			}
		}
		
		function SupDot(IDD)
		{
			document.getElementById('message').innerHTML="Voulez vous supprimer cette publication ?<br /><div style='width:80%;margin-left:auto;margin-right:auto'><button style='float:right' class='bouton' onclick='ferme()'> Annuler </button><button style='float:left' class='bouton' onclick='OuiSup("+IDD+")'> OUI </button></div>"
			$('#message').fadeIn('fast')
			document.getElementById('form').style.height='auto'
			fen()
		}
		
		function OuiSup(IDD)
		{
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					$('#message').fadeOut('fast')
					document.getElementById("message").innerHTML="Article supprimé !<br /><button class='bouton' onclick='ferme()'> OK </button>"
					$('#message').fadeIn('fast')
					$('#tous_'+IDD).fadeOut('slow')
					recalPose()
				}
			}
			xmlhttp.open("GET","sgbd.php?SprDot=ok&IDDot="+IDD,true);
			xmlhttp.send(null);
		}
		
		function MesArticle()
		{
			if(EventCour!=1)
			{
				courant=1
				$('#hona').fadeOut('slow')
				document.getElementById('MenuEvent'+MenuCour).className=""
				MenuCour=1
				document.getElementById('MenuEvent'+MenuCour).className="current"
				xmlhttp.onreadystatechange=function()
  				{
  					if (xmlhttp.readyState==4 && xmlhttp.status==200)
    				{
						cont=xmlhttp.responseText
						contenue=cont.split('*ifra9hom*');
						cmp = contenue[1]
						txt="<br /><center><span id='npage'>"
						for(i=1;i<=cmp;i++)
						{
							txt+="<a style='cursor:pointer'"
							if(courant!=i)txt+="class='page'"
							else txt+="class='pagec'"
							 txt+="onclick=next("+i+")>"+i+"</a> &nbsp;"
						}
						txt+="</span></center>"
						cont=contenue[0]
						setTimeout(function(){document.getElementById('hona').innerHTML=cont+txt;$('#hona').fadeIn('slow')},450)
						EventCour=1;
					}
				}
				xmlhttp.open("GET","sgbd.php?MesArticle=ok",true);
				xmlhttp.send(null);
			}
		}
		
		function detail2(a)
		{
			$('#hona').fadeOut("slow")
			oldBody = document.body.innerHTML
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					document.getElementById("hona").innerHTML=xmlhttp.responseText
					$('#hona').fadeIn("slow")
					h=$('#detArticl').height()
					$('#detArticl').height(h+30)
				}
			}
			
			xmlhttp.open("GET","sgbd.php?detAct2=ok&IDact="+a,true);
			xmlhttp.send(null);
		}
		
		function SupAct(IDAct)
		{
			document.getElementById('message').innerHTML="Voulez vous supprimer cet article ?<br /><div style='width:80%;margin-left:auto;margin-right:auto'><button style='float:right' class='bouton' onclick='ferme()'> Annuler </button><button style='float:left' class='bouton' onclick='OuiSupA("+IDAct+")'> OUI </button></div>"
			$('#message').fadeIn('fast')
			document.getElementById('form').style.height='auto'
			fen()
			recalPose()
		}
		
		function OuiSupA(IDAct)
		{
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					ferme()
					EventCour=999999
					MesArticle()
				}
			}
			xmlhttp.open("GET","sgbd.php?SprAct=ok&IDAct="+IDAct,true);
			xmlhttp.send(null);
		}
		
		function EditAct(IDact)
		{
			$('#hona').fadeOut("slow")
			oldBody = document.body.innerHTML
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					txt=xmlhttp.responseText
					setTimeout(function(){document.getElementById('hona').innerHTML=txt;$('#hona').fadeIn('slow')},450)
				}
			}
			xmlhttp.open("GET","sgbd.php?EditAct=ok&IDact="+IDact,true);
			xmlhttp.send(null);
		}
		
		function AjAct()
		{
			intituleT    = new RegExp(/^[A-Za-z\é\è\ù\à\ç\â\ê\ô\û\ä\ï\ü\ö\ë\î][A-Za-z\é\è\ù\à\ç\â\ê\ô\û\ä\ï\ü\ö\ë\î\'\.\*_\-\,0-9 :;,?!]{3,}$/)
			descriptionT = new RegExp(/^[A-Za-z\é\è\ù\à\ç\â\ê\ô\û\ä\ï\ü\ö\ë\î\'\.\*_\-\,0-9 \n:;\$\&\/\<\>"%#=]{50,}$/)
			
			Intitule=document.getElementById('IntitulAct').value
			Desc=document.getElementById('TextAct').value
			if(Intitule=='' || Desc=='')
			{
				document.getElementById('message').innerHTML="Tous les champs sont obligatoires !<br /><button class='bouton' onclick='ferme()'>OK</button>"
				document.getElementById('form').style.height='auto'
				fen()
				recalPose()
				return false
			}
			else
			{
				if(intituleT.test(Intitule)==true &&descriptionT.test(Desc)==true)
				{
					rt = /\n/i
					Desc=Desc.replace(rt,'<br />')
					document.getElementById('TextAct').value=Desc
					return true
				}
				else if(intituleT.test(Intitule)==false)
				{
					document.getElementById('verif').style.top='95px'
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect !<br /><small><small>ex : Naissance, Achat immobilié...</small></small>'
					$("#verif").fadeIn("slow");
					document.getElementById('IntitulAct').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
					return false
				}
				else if(descriptionT.test(Desc)==false)
				{
					document.getElementById('verif').style.top='145px'
					document.getElementById('verif').style.right='-105px'
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>description trop courte <small>Min 50 caractères</small>'
					$("#verif").fadeIn("slow");
					document.getElementById('TextAct').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow");setTimeout(function(){verif.style.right="-24px"},450) },2000)
					return false
				}
			}
		}
		
		function affichage()
		{
			type=getType()
			txt=""
				
			courant=1
			$('#hona').fadeOut("slow")
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					cont=xmlhttp.responseText
					if(type=='ac')
					{
						
						contenue=cont.split('*ifra9hom*');
						cmp = contenue[1]
						txt="<br /><center><span id='npage'>"
						for(i=1;i<=cmp;i++)
						{
							txt+="<a style='cursor:pointer'"
							if(courant!=i)txt+="class='page'"
							else txt+="class='pagec'"
							 txt+="onclick=next("+i+")>"+i+"</a> &nbsp;"
						}
						txt+="</span></center>"
						cont=contenue[0]
					}
					if(type=='cl')
					{
						contenue=cont.split('****');
						cont=contenue[0]
						mois = contenue[1]
					}
					document.getElementById("hona").innerHTML=cont+txt
					$('#hona').fadeIn("slow")
					
				}
			}
			xmlhttp.open("GET","afch.php?typop="+type,true);
			xmlhttp.send(null);
			
		}
		
		function EditArticle()
		{
			if(EventCour!=10)
			{
				document.getElementById('MenuEvent'+MenuCour).className=""
				MenuCour=2
				document.getElementById('MenuEvent'+MenuCour).className="current"
				$('#hona').fadeOut("slow")
				txt=' <div class="container"><div class="FormProp"><h1 style="margin-left:230px">Ajout article</h1><div id="verif" style="display:none;color:red;z-index:100;box-shadow:0px 0px 4px black;position:absolute;background-color:white;width:200px;height:35px;right:-24px;top:95px;text-shadow:0px 0px 3px rgba(0,0,0,0.3)"><span style="height:0px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span></div><form onsubmit="return AjAct()" action="upload.php" method="post" enctype="multipart/form-data"><table id="AjDt" border="1" cellspacing="0" align="center" width="80%" style="height:auto"><tr><td><label for="IntitulAct">Titre de l\'article <font color="red">*</font></label></td><td> : </td><td align="right"> <input type="text" id="IntitulAct" name="IntitulAct" placeholder="Titre de l\'article" /></td></tr> <tr><td><label for="TextAct">Article <font color="red">*</font> </label></td><td> : </td><td align="right"><textarea style="width:400px" name="TextAct" id="TextAct" placeholder="Tappez votre text ici ..."></textarea></td></tr><tr><td> <label>Image<label> </td><td> : </td><td align="right"><div class="upload"><input type="file" id="Ijoint" name="Ijoint"/></div></td></tr><tr><td align="center" colspan="3"><input type="submit" name="pipi" class="bouton"  value="Valider" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table></form></div><center><strong style="text-shadow:0px 0px 4px rgba(102,102,102,0.5);color:red;font-size:20px">Note : </strong>Les Champs marqués avec une étoile <font color="red">*</font> doivent obligatoirement être rempli</center></div>'
				setTimeout(function(){document.getElementById('hona').innerHTML=txt;$('#hona').fadeIn('slow')},450)
				EventCour=2
			}
		}
		
		function AjtDot()
		{
			if(EventCour!=10)
			{
				document.getElementById('MenuEvent'+MenuCour).className=""
				MenuCour=6
				document.getElementById('MenuEvent'+MenuCour).className="current"
				$('#sana').fadeOut('slow')
				$('#hona').fadeOut("slow")
				txt='<div class="container"><div class="FormProp"><h1 style="margin-left:230px">Ajout dotations</h1><div id="verif" style="display:none;color:red;z-index:100;box-shadow:0px 0px 4px black;position:absolute;background-color:white;width:200px;height:35px;right:-70px;top:95px;text-shadow:0px 0px 3px rgba(0,0,0,0.3)"><span style="height:0px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span></div><form onsubmit="return AjDot()" action="upload.php" method="post" enctype="multipart/form-data"><table id="AjDt" border="1" cellspacing="0" align="center" width="80%" style="height:auto"><tr><td><label for="IntitulDot">Intitulé de Dotation <font color="red">*</font></label></td><td> : </td><td align="right"> <input type="text" id="IntitulDot" name="IntitulDot" placeholder="Intitulé" /></td></tr> <tr><td><label for="DescDot">Description <font color="red">*</font> </label></td><td> : </td><td align="right"><textarea name="DescDot" id="DescDot" placeholder="Description"></textarea></td></tr><tr><td><label for="MontlDot">Montant <font color="red">*</font></label></td><td> : </td><td align="right"> <input type="text" id="MontDot" name="MontDot" placeholder="Montant en HD" /></td></tr><tr><td> <input type="text" id="CdPjDot" name="CdPjDot" placeholder="Condition avec pièce jointe" /></td><td> : </td><td align="right"><div class="upload"><input type="file" id="Pjoint" name="Pjoint"/></div></td></tr><tr><td><label for="CondDot1">Condition de bénéfice 1 <font color="red">*</font></label></td><td> : </td><td align="right"> <input type="text" id="CondDot1" name="CondDot[]" placeholder="Condition" /></td></tr><tr style="opacity:0.2" id="LesCond"><td><img onclick="AjouterCond()"  align="top" style="cursor:pointer" title="Ajouter condition" src="img/1408592769_icon-ios7-plus-empty.png" height="30" width="30" />Ajouter condition</td><td> : </td><td align="right"> <input type="text" id="CondDot" name="CondDot[]" placeholder="Condition" disabled="disabled" /></td> </tr></table><table border="1" cellspacing="0" align="center" width="80%" style="height:auto"><tr><td align="center" colspan="3"><input type="submit" name="caca" class="bouton"  value="Valider" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table></form></div><center><strong style="text-shadow:0px 0px 4px rgba(102,102,102,0.5);color:red;font-size:20px">Note : </strong>Les Champs marqués avec une étoile <font color="red">*</font> doivent obligatoirement être rempli</center></div>'
				
				
				setTimeout(function(){document.getElementById('hona').innerHTML=txt;$('#hona').fadeIn('slow')},450)
				EventCour=10			
			}
		}
		
		function EventSala(IDEv)
		{
			
			intituleT    = new RegExp(/^[A-Za-z\é\è\ù\à\ç\â\ê\ô\û\ä\ï\ü\ö\ë\î\'\.\*_\-\,0-9 ]{3,}$/)
			dateT        = new RegExp(/^(([0-2][0-9])|(3[01]))\/((0[0-9])|(1[12]))\/([2-3][0-9]([0-9]{2}))$/)
			dateT2       = new RegExp(/^([2-3][0-9]([0-9]{2}))\-((0[0-9])|(1[12]))\-(([0-2][0-9])|(3[01]))$/)
			budgetT      = new RegExp(/^[0-9]+$/)
			lieuT        = new RegExp(/^[A-Za-z\é\è\ù\à\ç\â\ê\ô\û\ä\ï\ü\ö\ë\î\'\.\*_\-\,0-9 ]{3,}$/)
			descriptionT = new RegExp(/^[A-Za-z\é\è\ù\à\ç\â\ê\ô\û\ä\ï\ü\ö\ë\î\'\.\*_\-\,0-9 \n:;\$\&\/\<\>\%"]{50,}$/)
			
			intitule=document.getElementById('IntitulEvent').value
			categ = document.getElementById('CategEvent').value
			budget = document.getElementById('BudgetEvent').value
			date = document.getElementById('DateEvent').value
			lieu = document.getElementById('LieuEvent').value
			description = document.getElementById('DescEvent').value
			verif=document.getElementById('verif')
			
			if(intitule != '' && categ != '' && date != '' && lieu != '' && description != '')
			{
				if(intituleT.test(intitule)==true  && (dateT.test(date)==true || dateT2.test(date)==true) && lieuT.test(lieu)==true && descriptionT.test(description)==true)
				{
					if(budget!='')
					{
						if( budgetT.test(budget)==false)
						{
							verif.style.top="193px"
							verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span	>Incorrect !<br /><small><small>ex : 5000, 12000...</small></small>'
							$("#verif").fadeIn("slow");
							document.getElementById('BudgetEvent').focus()
							setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
							return false
						}
					}
					r = /\n/i
					description = description.replace(r,'<br />')
					
					document.getElementById('DescEvent').value=description
				
				if(dateT.test(date)==true)
				{
					element=date.split('/')
					yr=element[2]
					ms=element[1]
					jr=element[0]
					date=yr+'-'+ms+'-'+jr
					
					document.getElementById('DateEvent').value=date
				}
					
					return true
					
					
				}
				else if(intituleT.test(intitule)==false)
				{
					verif.style.top="95px"
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect !<br /><small><small>ex : excurtion, match de foot...</small></small>'
					$("#verif").fadeIn("slow");
					document.getElementById('IntitulEvent').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
					return false
				}
					
				else if(dateT.test(date)==false && dateT2.test(date)==false)
				{
					verif.style.top="242px"
					verif
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect !<br /><small><small>Choisissez une date a partire du calendrier.</small></small>'
					$("#verif").fadeIn("slow");
					document.getElementById('DateEvent').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
					return false
				}
				else if(lieuT.test(lieu)==false)
				{
					verif.style.top="291px"
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect !<br /><small><small>Vous avez utiliser des caractéres non autoriser (@</small></small>'
					$("#verif").fadeIn("slow");
					document.getElementById('LieuEvent').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
					return false
				}
				else if(descriptionT.test(description)==false)
				{
					verif.style.top="340px"
					verif.style.right="-104px"
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>description trop courte'
					$("#verif").fadeIn("slow");
					document.getElementById('DescEvent').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow");setTimeout(function(){verif.style.right="-54px"},450) },2000)
					return false
				}
			}
			else if(intitule == '')
			{
				verif.style.top="95px"
				verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Champ obligatoire'
				$("#verif").fadeIn("slow");
				document.getElementById('IntitulEvent').focus()
				setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
				return false
			}
			else if(categ == '')
			{
				verif.style.top="144px"
				verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Champ obligatoire'
				$("#verif").fadeIn("slow");
				document.getElementById('CategEvent').focus()
				setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
				return false
			}
			else if(date == '')
			{
				verif.style.top="242px"
				verif
				verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Champ obligatoire'
				$("#verif").fadeIn("slow");
				document.getElementById('DateEvent').focus()
				setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
				return false
			}
			else if(lieu == '')
			{
				verif.style.top="291px"
				verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Champ obligatoire'
				$("#verif").fadeIn("slow");
				document.getElementById('LieuEvent').focus()
				setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
				return false
			}
			else if(description == '')
			{
				verif.style.top="340px"
				verif.style.right="-104px"
				verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Champ obligatoire'
				$("#verif").fadeIn("slow");
				document.getElementById('DescEvent').focus()
				setTimeout(function(){ $('#verif').fadeOut("slow");setTimeout(function(){verif.style.right="-54px"},450) },2000)
				return false
			}
			
 		}
		
		function Dotations()
		{
			if(EventCour!=8)
			{
				document.getElementById('MenuEvent'+MenuCour).className=""
				MenuCour=4
				document.getElementById('MenuEvent'+MenuCour).className="current"
				$('#sana').fadeOut('slow')
				$('#hona').fadeOut("slow")
				activat = ""
				hting = 0
				test = 0
				xmlhttp.onreadystatechange=function()
  				{
  					if (xmlhttp.readyState==4 && xmlhttp.status==200)
    				{
						setTimeout(function(){document.getElementById('hona').innerHTML=xmlhttp.responseText;$('#hona').fadeIn('slow')},400)
						EventCour=8
					}
				}
				xmlhttp.open("GET","sgbd.php?Dotation=ok",true);
				xmlhttp.send(null);
			}
		}
		
		function MesPropos()
		{
			if(EventCour!=4)
			{
				document.getElementById('MenuEvent'+MenuCour).className=""
				MenuCour=3
				document.getElementById('MenuEvent'+MenuCour).className="current"
				$('#sana').fadeOut('slow')
				$('#hona').fadeOut("slow")
				activat = ""
				hting = 0
				test = 0
				xmlhttp.onreadystatechange=function()
  				{
  					if (xmlhttp.readyState==4 && xmlhttp.status==200)
    				{
						setTimeout(function(){document.getElementById('hona').innerHTML=xmlhttp.responseText;$('#hona').fadeIn('slow')},400)
						EventCour=4
					}
				}
				xmlhttp.open("GET","sgbd.php?MesPropo=ok",true);
				xmlhttp.send(null);
			}
		}
		
		function LesPropos()
		{
			if(EventCour!=5)
			{
				document.getElementById('MenuEvent'+MenuCour).className=""
				MenuCour=3
				document.getElementById('MenuEvent'+MenuCour).className="current"
				$('#sana').fadeOut('slow')
				$('#hona').fadeOut("slow")
				activat = ""
				hting = 0
				test = 0
				elem = new Array()
				numir = new Array()
				xmlhttp.onreadystatechange=function()
  				{
  					if (xmlhttp.readyState==4 && xmlhttp.status==200)
    				{
						if(xmlhttp.responseText!=0)
						{	
							rep=xmlhttp.responseText
							element=rep.split('/0*/fra9/*0/')
							txt=''
							document.getElementById("hona").innerHTML=''
							for(i=0;i<(element.length-1);i++)
							{
								elem[i]=element[i].split('/0*/fr9/*0/')
								document.getElementById("hona").innerHTML+=elem[i][0]
								ksm=elem[i][1]
								numir[i]=ksm.split('/')
							}
							for(j=0;j<numir.length;j++)
							{
								Cnon= numir[j][0]
								Coui= numir[j][1]
								CSO= numir[j][2]
								id = numir[j][3]
								Cnon = parseInt(Cnon)
								Coui = parseInt(Coui)
								CSO = parseInt(CSO)
								
								if(statu=='membre' || statu=='admin')
								{
									if(Cnon == 0 && Coui == 0 && CSO == 0)
									{
										document.getElementById('stat'+id).innerHTML="Personne n'a voté pour le moment !"
									}
									else
									{
									
										var data = 
										[	
											{
        										value: 0,
        										color: "#46BFBD",
        										highlight: "#5AD3D1",
        										label: "Oui"
    										},
    										{
        										value: 0,
        											color:"#F7464A",
        										highlight: "#FF5A5E",
        										label: "Non"
    										},
    										{
        										value: 0,
        										color: "#FDB45C",
        										highlight: "#FFC870",
        										label: "Sans opignion"
    										}
										]
	
							
					 			
					
										var ctx = document.getElementById("myChart"+id).getContext("2d");
										var myDoughnutChart = new Chart(ctx).Doughnut(data)
										myDoughnutChart.segments[0].value = Coui;
										myDoughnutChart.segments[1].value = Cnon;
										myDoughnutChart.segments[2].value = CSO;
										myDoughnutChart.update();
									}
								}
							}
						}
						else
						{
							document.getElementById('hona').innerHTML='<br />Aucune proposition n\'est en vote pour le moment!<br />'
						}
							
						
							
						
						setTimeout(function(){$('#hona').fadeIn('slow')},400)
						
						EventCour=5
						
						
						
						
						
						
						EventCour=5
					}
				}
				xmlhttp.open("GET","sgbd.php?LesPropo=ok",true);
				xmlhttp.send(null);
			}
		}
		
		function HistVote()
		{
			if(EventCour!=7)
			{
				document.getElementById('MenuEvent'+MenuCour).className=""
				MenuCour=3
				document.getElementById('MenuEvent'+MenuCour).className="current"
				$('#sana').fadeOut('slow')
				$('#hona').fadeOut("slow")
				activat = ""
				hting = 0
				test = 0
				elem = new Array()
				numir = new Array()
				xmlhttp.onreadystatechange=function()
  				{
  					if (xmlhttp.readyState==4 && xmlhttp.status==200)
    				{
						if(xmlhttp.responseText!=0)
						{	
							rep=xmlhttp.responseText
							element=rep.split('/0*/fra9/*0/')
							txt=''
							document.getElementById("hona").innerHTML=''
							for(i=0;i<(element.length-1);i++)
							{
								elem[i]=element[i].split('/0*/fr9/*0/')
								document.getElementById("hona").innerHTML+=elem[i][0]
								ksm=elem[i][1]
								numir[i]=ksm.split('/')
							}
							for(j=0;j<numir.length;j++)
							{
								Cnon= numir[j][0]
								Coui= numir[j][1]
								CSO= numir[j][2]
								id = numir[j][3]
								Cnon = parseInt(Cnon)
								Coui = parseInt(Coui)
								CSO = parseInt(CSO)
								
								if(statu=='membre' || statu=='admin')
								{
									if(Cnon == 0 && Coui == 0 && CSO == 0)
									{
										document.getElementById('stat'+id).innerHTML="Personne n'a voté pour le moment !"
									}
									else
									{
									
										var data = 
										[	
											{
        										value: 0,
        										color: "#46BFBD",
        										highlight: "#5AD3D1",
        										label: "Oui"
    										},
    										{
        										value: 0,
        											color:"#F7464A",
        										highlight: "#FF5A5E",
        										label: "Non"
    										},
    										{
        										value: 0,
        										color: "#FDB45C",
        										highlight: "#FFC870",
        										label: "Sans opignion"
    										}
										]
	
							
					 			
					
										var ctx = document.getElementById("myChart"+id).getContext("2d");
										var myDoughnutChart = new Chart(ctx).Doughnut(data)
										myDoughnutChart.segments[0].value = Coui;
										myDoughnutChart.segments[1].value = Cnon;
										myDoughnutChart.segments[2].value = CSO;
										myDoughnutChart.update();
									}
								}
							}
						}
						else
						{
							document.getElementById('hona').innerHTML='<br />Aucune proposition n\'est en vote pour le moment!<br />'
						}
							
						
							
						
						setTimeout(function(){$('#hona').fadeIn('slow')},400)
						
						EventCour=7
						
					}
				}
				xmlhttp.open("GET","sgbd.php?HistVote=ok",true);
				xmlhttp.send(null);
			}
		}
		
		function GestPropos()
		{
			if(EventCour!=6)
			{
				document.getElementById('MenuEvent'+MenuCour).className=""
				MenuCour=3
				document.getElementById('MenuEvent'+MenuCour).className="current"
				$('#sana').fadeOut('slow')
				$('#hona').fadeOut("slow")
				activat = ""
				hting = 0
				test = 0
				
				xmlhttp.onreadystatechange=function()
  				{
  					if (xmlhttp.readyState==4 && xmlhttp.status==200)
    				{
						document.getElementById('hona').innerHTML=xmlhttp.responseText
						setTimeout(function(){$('#hona').fadeIn("slow")},450)
						EventCour=6
					}
				}
				xmlhttp.open("GET","sgbd.php?GestPropo=ok",true);
				xmlhttp.send(null);
			}
		}
		
		function Ignorer(IDEv)
		{
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					document.getElementById("message").innerHTML="Un mail a été envoyé au propriétaire de cette poroposition a fin de l'informer de votre décision"
					$('#message').fadeIn('fast')
					$('#tous_'+IDEv).fadeOut('slow')
					
					setTimeout(function(){document.getElementById('tous_'+IDEv).parentNode.removeChild(document.getElementById('tous_'+IDEv));activat = "";hting = 0;	test = 0;$('<div></div>').appendTo(document.getElementById('Brefus')).html(xmlhttp.responseText);$('#tous_'+IDEv).fadeIn('slow');setTimeout(function(){document.getElementById('form').style.height='auto';fen()},1000);},450)
					EventCour=6
				}
			}
			xmlhttp.open("GET","sgbd.php?RefuPropo=ok&IDEvent="+IDEv,true);
			xmlhttp.send(null);
		}
		
		function Refuser(IDEv)
		{
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					document.getElementById("message").innerHTML="Proposition Ignorer<br /><button class='bouton' onclick='ferme()'> OK </button>"
					$('#message').fadeIn('fast')
					$('#tous_'+IDEv).fadeOut('slow')
					
					setTimeout(function(){document.getElementById('tous_'+IDEv).parentNode.removeChild(document.getElementById('tous_'+IDEv));activat = "";hting = 0;	test = 0;$('<div></div>').appendTo(document.getElementById('Brefus')).html(xmlhttp.responseText);$('#tous_'+IDEv).fadeIn('slow');setTimeout(function(){document.getElementById('message').style.height='auto';document.getElementById('form').style.height='auto';fen()},1000);},450)
					EventCour=6
				}
			}
			xmlhttp.open("GET","sgbd.php?IgnorPropo=ok&IDEvent="+IDEv,true);
			xmlhttp.send(null);
		}
		
		function OuiAnnul(IDEv)
		{
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					$('#message').fadeOut('fast')
					document.getElementById("message").innerHTML="Vote Annuler<br /><button class='bouton' onclick='ferme()'> OK </button>"
					$('#message').fadeIn('fast')
					$('#tous_'+IDEv).fadeOut('slow')
					recalPose()
				}
			}
			xmlhttp.open("GET","sgbd.php?AnnulVote=ok&IDEvent="+IDEv,true);
			xmlhttp.send(null);
		}
		
		function AnnuleVote(IDEv)
		{
			
					document.getElementById("message").innerHTML="êtes vous sûr de vouloir annuler le vote ?<br /><div style='width:80%;margin-left:auto;margin-right:auto'><button style='float:left' class='bouton' onclick='ferme()'> Annuler </button><button style='float:right' class='bouton' onclick='OuiAnnul("+IDEv+")'> OUI </button></div>"
					$('#message').fadeIn('fast')
					document.getElementById('form').style.height='auto'
					fen()
					recalPose()
	
		}
		
		function EnVote(IDEv)
		{
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					document.getElementById("message").innerHTML="Cette proposition a été bien mise en vote.<br />un mail est envoyer a tous les fonctionnaires a fin de leur inviter au vote avec un article publier dans l'actualité<br /><button class='bouton' onclick='ferme()'>OK</button>"
					document.getElementById('form').style.height='auto'
					$('#message').fadeIn('fast')
					$('#tous_'+IDEv).fadeOut('slow')
					
					setTimeout(function(){document.getElementById('tous_'+IDEv).parentNode.removeChild(document.getElementById('tous_'+IDEv));fen()},450)
					EventCour=6
				}
			}
			xmlhttp.open("GET","sgbd.php?EnVotPropo=ok&IDEvent="+IDEv,true);
			xmlhttp.send(null);
		}
		
		
		function stat(IDEv)
		{
			document.getElementById('form').style.width=('850px')
			document.getElementById('message').style.display="none"
			document.getElementById('message').style.width='auto'
			texst='<div id="manu" style="width:350px;margin-left:auto;margin-right:auto;height:60px;margin-bottom:10px" >'
			texst+='<img title="Voir les non participants" style="float:left;cursor:pointer" src="img/1408209084_thumbs_down.png" height="60" width="60" onclick="PasVote('+IDEv+')"/>'
			texst+='<img title="voir les participants" src="img/1408209080_thumbs_up.png" style="float:right;cursor:pointer" height="60" width="60" onclick="Vote('+IDEv+')" /></div>'
			texst+=document.getElementById('form').innerHTML
			document.getElementById('form').innerHTML=texst
			fen()
			recalPose()
		}
		
		function PasVote(IDE)
		{
			
			
			if(document.getElementById('message').style.display!="none")
			{
				$('#message').fadeOut("fast")
				if(axb2!='b1')
				setTimeout(function()
				{
					document.getElementById('message').innerHTML=""
					LeVoteur(IDE,'non')
					setTimeout(function(){$('#message').fadeIn("slow")},450)
				},200)
			}
			else
			{
				document.getElementById('message').innerHTML=""
				LeVoteur(IDE,'non')
				setTimeout(function(){$('#message').fadeIn("slow")},450)
			}
			
			
			TailHona('b1')
		}
		function LeVoteur(IDEven,action)
		{
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					document.getElementById('message').innerHTML=xmlhttp.responseText
				}
			}
			xmlhttp.open("GET","sgbd.php?StatPropo=ok&IDEvent="+IDEven+"&action="+action,true);
			xmlhttp.send(null);
		}
		
		function rappel(IDE)
		{
			document.getElementById('manu').style.display='none'
			document.getElementById('message').innerHTML=('<img src="img/loading.gif" height="60" width="60" /><br /><center>Chargement en cours !</center>')
			document.getElementById('message').style.height='auto'
			document.getElementById('message').style.width='330px'
			document.getElementById('form').style.height='auto'
			document.getElementById('form').style.width='auto'
			recalPose()
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					if(xmlhttp.responseText==0)
						document.getElementById('message').innerHTML='Un mail à été envoyer aux les membres qui n\'ont pas encore voter'
					else
						document.getElementById('message').innerHTML='Fail, réssayre plus tard'
				}
			}
			xmlhttp.open("GET","sgbd.php?RappVote=ok&IDEvent="+IDE,true);
			xmlhttp.send(null);
			
		}
		
		function DecisNoir(decis,IDEv,date)
		{
			dtElem=date.split('-')
			Dte=dtElem[2]+'/'+dtElem[1]+'/'+dtElem[0]
			if(decis=='approuve')
			{
				$('#message').fadeIn('fast');
				document.getElementById('form').style.height='auto'
				document.getElementById('message').style.height='auto'
				document.getElementById('message').innerHTML='Date de réalisation : <input value="'+Dte+'" type="text" id="DateEvent3" onClick="ds_sh(this);" placeholder="Date" /><br /><button class="bouton"  onclick="datek=document.getElementById(\'DateEvent3\').value;Delem=datek.split(\'/\');datev=Delem[2]+\'-\'+Delem[1]+\'-\'+Delem[0];SuitDecisN(\''+decis+'\','+IDEv+',datev);ferme();"> OK </button>'
				fen();
				recalPose()
			}
			else
			{
				SuitDecisN(decis,IDEv,date)
				$('#message').fadeIn('fast');
				document.getElementById('form').style.height='auto'
				document.getElementById('message').style.height='auto'
				document.getElementById('message').innerHTML='la proposition est refusée<br /><button class="bouton" onclick="ferme()"> OK </button>'
				setTimeout(function(){fen()},350);
				recalPose()
			}
		}
		
		function SuitDecisN(deci,IDE,dat)
		{
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					$('#tous_'+IDE).fadeOut('fast')
				}
			}
			xmlhttp.open("GET","sgbd.php?DecisFinalNoir=ok&decision="+deci+"&IDEvent="+IDE+"&date="+dat,true);
			xmlhttp.send(null);
		}
		
		function decision(decis,IDEv,date)
		{
			dtElem=date.split('-')
			Dte=dtElem[2]+'/'+dtElem[1]+'/'+dtElem[0]
			if(decis=='approuve')
			{
				$('#message').fadeIn('fast');
				document.getElementById('form').style.height='auto'
				document.getElementById('message').style.height='auto'
				document.getElementById('message').innerHTML='Date finale : <input value="'+Dte+'" type="text" id="DateEvent2" onClick="ds_sh(this);" placeholder="Date" /><br /><button class="bouton"  onclick="datek=document.getElementById(\'DateEvent2\').value;Delem=datek.split(\'/\');datev=Delem[2]+\'-\'+Delem[1]+\'-\'+Delem[0];SuitDecis(\''+decis+'\','+IDEv+',datev);ferme();"> OK </button>'
				fen();
				recalPose()
			}
			else
			{
				SuitDecis(decis,IDEv,date)
				$('#message').fadeIn('fast');
				document.getElementById('form').style.height='auto'
				document.getElementById('message').style.height='auto'
				document.getElementById('message').innerHTML='la proposition est refusée<br /><button class="bouton" onclick="ferme()"> OK </button>'
				setTimeout(function(){fen()},350);
				recalPose()
			}
		}
		
		function SuitDecis(deci,IDE,dat)
		{
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					$('#tous_'+IDE).fadeOut('fast')
				}
			}
			xmlhttp.open("GET","sgbd.php?DecisFinal=ok&decision="+deci+"&IDEvent="+IDE+"&date="+dat,true);
			xmlhttp.send(null);
		}
		
		function Vote(IDE)
		{
			
			
			if(document.getElementById('message').style.display!="none")
			{
				$('#message').fadeOut("fast")
				if(axb2!='b2')
				setTimeout(function()
				{
					document.getElementById('message').innerHTML=""
					LeVoteur(IDE,'oui')
					setTimeout(function(){$('#message').fadeIn("slow")},450)
				},200)
			}
			else
			{
				document.getElementById('message').innerHTML=""
				LeVoteur(IDE,'oui')
				setTimeout(function(){$('#message').fadeIn("slow")},450)
			}
			
			
			TailHona('b2')
		}
		
		
		function Voter(Idevent,mn)
		{
			document.getElementById('message').innerHTML='<div class="FormProp" style="padding-left:10px"><table style="height:180px;width:250px" cellspacing="0" border="0"><tr><td rowspan="3">Votre choix </td><td rowspan="3">:</td><td>Sans opinion<td>:</td><td> <input type="radio" name="vote" value=\'sans opinion\' /></td></td><tr><td>Oui</td><td>:</td> <td><input type="radio" name="vote" value=\'oui\' /></td></tr><tr><td>Non</td><td>:</td><td><input type="radio" name="vote" value=\'non\' /></td></tr></tr><tr><td>Vos remarques</td> <td>:</td> <td colspan="3"><textarea style="width:200px;height:50px" class="area" id="remarque" placeholder="Remarque ..."></textarea></td></tr></table></div><center><button style="margin-bottom:10px" class="bouton" onclick="ValidVote('+Idevent+','+mn+')">Voter</button></center>'
			document.getElementById('form').style.width='auto'
			document.getElementById('form').style.height='auto'
			fen()
			$('#message').fadeIn('fast')
			recalPose()
			
			
		}
		
		function ValidVote(IDevent,mn)
		{
			choix = document.getElementsByName('vote')
			remarque = document.getElementById('remarque').value
			n = choix.length
			vote=''
			for(i=0;i<n;i++)
			{
				if(choix.item(i).checked==true)
				{
					vote = choix.item(i).value
					break	
				}
			}
			if(vote=='')
			{
				alert('Vous devez faire un choix avant de valider votre vote')
			}
			else
			{
				xmlhttp.onreadystatechange=function()
  				{
  					if (xmlhttp.readyState==4 && xmlhttp.status==200)
    				{
						$('#Cvote'+IDevent).fadeOut('fast')
						$('<div></div>').appendTo(document.getElementById('event'+IDevent)).html('<center><br /><font color="blue" size="+1">Votre vote a étais valider !</font></center>')
						for(i=0;i<n;i++)
						{
							if(choix.item(i).checked==true)
							{
							choix.item(i).checked=false
							break	
							}
						}
						ferme()
						
						if(statu=='membre' || statu == 'admin')
						{
							Cnon= numir[mn][0]
							Coui= numir[mn][1]
							CSO= numir[mn][2]
							id = numir[mn][3]
							Cnon = parseInt(Cnon)
							Coui = parseInt(Coui)
							CSO = parseInt(CSO)
							
							console.log(Cnon+' '+Coui+' '+CSO)
							
							
								
								var data = 
								[	
									{
        								value: Coui,
        								color: "#46BFBD",
        								highlight: "#5AD3D1",
        								label: "Oui"
    								},
    								{
        								value: Cnon,
        								color:"#F7464A",
        								highlight: "#FF5A5E",
        								label: "Non"
    								},
    								{
        								value: CSO,
        								color: "#FDB45C",
        								highlight: "#FFC870",
        								label: "Sans opignion"
    								}
								]
							}
							
						var ctx = document.getElementById("myChart"+IDevent).getContext("2d");
						var myDoughnutChart = new Chart(ctx).Doughnut(data)
						
						if(vote=='oui')
						{
							myDoughnutChart.segments[0].value = Coui+1;
						}
						if(vote=='non')	
						{
							myDoughnutChart.segments[1].value = Cnon+1;
						}
						if(vote=='sans opinion')
						{
							myDoughnutChart.segments[2].value = CSO+1;
						}
							
						myDoughnutChart.update();
					}
					
				}
				xmlhttp.open("GET","sgbd.php?Voter=ok&IDEvent="+IDevent+"&vote="+vote+"&motive="+remarque,true);
				xmlhttp.send(null);
				
				
			}
		}
		
		function ValProp()
		{
			
			intituleT    = new RegExp(/^[A-Za-z\é\è\ù\à\ç\â\ê\ô\û\ä\ï\ü\ö\ë\î\'\.\*_\-\,0-9 ]{3,}$/)
			dateT        = new RegExp(/^(([0-2][0-9])|(3[01]))\/((0[0-9])|(1[12]))\/([2-3][0-9]([0-9]{2}))$/)
			budgetT      = new RegExp(/^[0-9]+$/)
			lieuT        = new RegExp(/^[A-Za-z\é\è\ù\à\ç\â\ê\ô\û\ä\ï\ü\ö\ë\î\'\.\*_\-\,0-9 ]{3,}$/)
			descriptionT = new RegExp(/^[A-Za-z\é\è\ù\à\ç\â\ê\ô\û\ä\ï\ü\ö\ë\î\'\.\*_\-\,0-9 \n:;\$\&\/\<\>\%"]{50,}$/)
			
			intitule=document.getElementById('IntitulEvent').value
			categ = document.getElementById('CategEvent').value
			budget = document.getElementById('BudgetEvent').value
			date = document.getElementById('DateEvent').value
			lieu = document.getElementById('LieuEvent').value
			description = document.getElementById('DescEvent').value
			if(statu=='admin' || statu=='membre')
				etatP=document.getElementById('EtatEvent').value
			else
				etatP='attent'
			verif=document.getElementById('verif')
			
			if(intitule != '' && categ != '-- Choisissez une catégorie --' && date != '' && lieu != '' && description != '')
			{
				if(statu=='admin' || statu=='membre')
				{
					if(etatP=='-- Choisissez l\'etat --')
					{
						verif.style.top="514px"
						verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Champ obligatoire'
						$("#verif").fadeIn("slow");
						document.getElementById('EtatEvent').focus()
						setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
						return false
					}
				}
				if(intituleT.test(intitule)==true  && dateT.test(date)==true && lieuT.test(lieu)==true && descriptionT.test(description)==true)
				{
					if(budget!='')
					{
						if( budgetT.test(budget)==false)
						{
							verif.style.top="193px"
							verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span	>Incorrect !<br /><small><small>ex : 5000, 12000...</small></small>'
							$("#verif").fadeIn("slow");
							document.getElementById('BudgetEvent').focus()
							setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
							return false
						}
					}
					r = /\n/i
					description = description.replace(r,'<br />')
					if(etatP=="attent")
					msg='Votre proposition a bien été validé<br />il sera verifié par l\'administrateur ou les membre du bureau'
					if(etatP=='Approuvé')
					{
						etatP='approuve'
						msg='Cet evenement à été plannifié pour le '+date
					}
					if(etatP=='Vote')
					{
						etatP='vote'
						msg='Votre proposition a bien était enregister<br />il sera approuver apresle vote'
					}
					element=date.split('/')
					yr=element[2]
					ms=element[1]
					jr=element[0]
					date=yr+'-'+ms+'-'+jr
					xmlhttp.onreadystatechange=function()
  					{
  						if (xmlhttp.readyState==4 && xmlhttp.status==200)
    					{
							if(etatP=='vote' && xmlhttp.responseText==0)
							{
								msg='Votre proposition à été bien mis en vote.<br />un mail a étais envoyer a tous les fonctionnaires a fin de leur inviter au vote'
							}
							document.getElementById('IntitulEvent').value = ''
							document.getElementById('BudgetEvent').value = ''
							document.getElementById('DateEvent').value = ''
							document.getElementById('LieuEvent').value = ''
							document.getElementById('DescEvent').value = ''
							
							document.getElementById("message").innerHTML=msg
							$("#message").fadeIn('fast')
							fen()
							recalPose()
						}
					}
					xmlhttp.open("GET","sgbd.php?AjoutPropo=ok&intitule="+intitule+"&categ="+categ+"&budget="+budget+'&date='+date+'&lieu='+lieu+'&description='+description+'&etat='+etatP,true);
					xmlhttp.send(null);
				}
				else if(intituleT.test(intitule)==false)
				{
					verif.style.top="95px"
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect !<br /><small><small>ex : excurtion, match de foot...</small></small>'
					$("#verif").fadeIn("slow");
					document.getElementById('IntitulEvent').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
				}
					
				else if(dateT.test(date)==false)
				{
					verif.style.top="242px"
					verif
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect !<br /><small><small>Choisissez une date a partire du calendrier.</small></small>'
					$("#verif").fadeIn("slow");
					document.getElementById('DateEvent').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
				}
				else if(lieuT.test(lieu)==false)
				{
					verif.style.top="291px"
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect !<br /><small><small>Vous avez utiliser des caractéres non autoriser (@</small></small>'
					$("#verif").fadeIn("slow");
					document.getElementById('LieuEvent').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
				}
				else if(descriptionT.test(description)==false)
				{
					verif.style.top="340px"
					verif.style.right="-104px"
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>description trop courte'
					$("#verif").fadeIn("slow");
					document.getElementById('DescEvent').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow");setTimeout(function(){verif.style.right="-54px"},450) },2000)
				}
			}
			else if(intitule == '')
			{
				verif.style.top="95px"
				verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Champ obligatoire'
				$("#verif").fadeIn("slow");
				document.getElementById('IntitulEvent').focus()
				setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
			}
			else if(categ == '-- Choisissez une catégorie --')
			{
				verif.style.top="144px"
				verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Champ obligatoire'
				$("#verif").fadeIn("slow");
				document.getElementById('CategEvent').focus()
				setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
			}
			else if(date == '')
			{
				verif.style.top="242px"
				verif
				verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Champ obligatoire'
				$("#verif").fadeIn("slow");
				document.getElementById('DateEvent').focus()
				setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
			}
			else if(lieu == '')
			{
				verif.style.top="291px"
				verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Champ obligatoire'
				$("#verif").fadeIn("slow");
				document.getElementById('LieuEvent').focus()
				setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
			}
			else if(description == '')
			{
				verif.style.top="340px"
				verif.style.right="-104px"
				verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Champ obligatoire'
				$("#verif").fadeIn("slow");
				document.getElementById('DescEvent').focus()
				setTimeout(function(){ $('#verif').fadeOut("slow");setTimeout(function(){verif.style.right="-54px"},450) },2000)
			}
			
 		}
		
		function AjoutCom()
		{
			comm=document.getElementById('Commentaire').value
			r=/\n/i
			comm=comm.replace(r, "<br />")
			if(comm!='')
			{
				xmlhttp.onreadystatechange=function()
  				{
					if (xmlhttp.readyState==4 && xmlhttp.status==200)
    				{
						document.getElementById('Commentaire').value=""
						document.getElementById('Commentaire').disabled=true
					}
				}
			
			
				xmlhttp.open("GET","sgbd.php?AddCom=ok&IDEvent="+ComEvent+"&commentaire="+comm,true);
				xmlhttp.send(null);
			}
		}
		
		function listner()
		{
			if (window.XMLHttpRequest)
  			{
  				requette=new XMLHttpRequest();
  			}
			else
  			{
  				requette=new ActiveXObject("Microsoft.XMLHTTP");
  			}
			
			requette.onreadystatechange=function()
  			{
				if (requette.readyState==4 && requette.status==200)
    			{
					rep=requette.responseText
					
					if(rep==-1)
					{
						
					}
					else if(isNaN(rep))
					{
						
						elem=rep.split("/0*/fra9/*0/")
						dif=elem[1]-NbCom
						cont=elem[0].split("/0*/fr9/*0/")
						j=0
						for(i=0;i<dif;i++)
						{
							k=(3*i)+1
							l=(3*i)
							n=k=(3*i)+2
							console.log(cont[l])
							$('<div style="" class="BlocCom" id="'+cont[k]+'"></div>').appendTo(document.getElementById('LesCom')).html(cont[l])
							$('#'+cont[k]).fadeIn('slow');
							console.log(CINm)
							console.log(cont[n])
							if(CINm!=cont[n]){beep.play();}
							else document.getElementById('Commentaire').disabled=false
							j++
						}
						NbCom=elem[1]
						
					}
					else
					{
						 NbCom=rep
					}
				}
			}
			
			
			requette.open("GET","sgbd.php?VerifCom=ok&NbCom="+NbCom+"&IDComEvent="+ComEvent,true);
			requette.send(null);
		}
		
		function lanceListner()
		{
			listnerx=setInterval(listner,2000)
		}
		
		function ComptProm(stat,CodIN)
		{
			xmlhttp.onreadystatechange=function()
  			{
				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					
					if(xmlhttp.responseText=="non")
						alert('7chouma asa7bi tu na pas le droit de faire ça! tu fait les bitises, méchant')
					else
					{
						$('#'+CodIN).fadeOut('slow')
						setTimeout(function(){if(stat=="membre"){chnou='promu'}else{chnou='degrader'}alert('Le compte dont le CIN est : '+CodIN+', est '+chnou+' au rong '+stat)},650)
					}
					
				}
			}
			
			
			xmlhttp.open("GET","sgbd.php?PromCmp=ok&CIN="+CodIN+"&statue="+stat,true);
			xmlhttp.send(null);
		}
		
		function ComptOp(eta,CodIN)
		{
			xmlhttp.onreadystatechange=function()
  			{
				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					
					if(xmlhttp.responseText=="non")
						alert('7chouma asa7bi tu na pas le droit de faire ça! tu fait les bitises, méchant')
					else
					{
						$('#'+CodIN).fadeOut('slow')
						setTimeout(function()
						{
							$('#'+CodIN).html(xmlhttp.responseText)
							$('#'+CodIN).fadeIn("slow")
						},600)
					}
					
				}
			}
			
			
			xmlhttp.open("GET","sgbd.php?OpCmp=ok&CIN="+CodIN+"&etat="+eta,true);
			xmlhttp.send(null);
		}
		
		function gestion()
		{
			document.getElementById('form').style.width=('850px')
			document.getElementById('message').style.display="none"
			document.getElementById('message').style.width='auto'
			texst='<div  id="manu" style="width:350px;margin-left:auto;margin-right:auto;height:60px;margin-bottom:10px" >'
			texst+='<img title="Crée compte" style="float:left;cursor:pointer" src="img/user-group-new.png" height="60" width="60" onclick="NvCmp()"/>'
			texst+='<img title="Gérer comptes" src="img/Edit-Male-User.png" style="float:right;cursor:pointer" height="60" width="60" onclick="GrCmp()" /></div>'
			texst+=document.getElementById('form').innerHTML
			document.getElementById('form').innerHTML=texst
			fen()
			recalPose()
		}
		
		function NvCmp()
		{
			cont='<div style="margin-top:20px;margin-bottom:10px;width:800px" class="container">'
			cont+='<section id="content2">'
    		cont+='<div id="verif" style="display:none;color:red;z-index:100000;box-shadow:0px 0px 4px black;position:absolute;background-color:white;width:200px;height:35px;right:-172px;top:95px;text-shadow:0px 0px 3px rgba(0,0,0,0.3)"><span style="height:0px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span></div>'
			cont+='<form onsubmit="return false;">'
			cont+='<h1>Inscription Form</h1>'
            cont+='<div>&nbsp;&nbsp;&nbsp;&nbsp; Votre CIN : &nbsp;&nbsp;&nbsp;&nbsp;<input class="test" type="text" placeholder="CIN" required="" id="CIN" /></div>'
            cont+='<div>Nom d\'utilisateur : <input class="test" type="text" placeholder="Username" required="" id="username2" /></div>'
			cont+='<div>&nbsp;&nbsp; Mot de passe : &nbsp;&nbsp;<input type="password" placeholder="Mot de passe" required="" id="password2" /></div>'
			cont+='<div>&nbsp;&nbsp;&nbsp; confirmation : &nbsp;&nbsp;&nbsp;<input type="password" placeholder="confirmation" required="" id="password3" /></div>'
            cont+='<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nom : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class="test" type="text" placeholder="Nom" required="" id="nom" /></div>'
            cont+='<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Prenom : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class="test" type="text" placeholder="Prenom" required="" id="prenom" /></div>'
            cont+='<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; E-mail : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class="test" type="text" placeholder="Exemple@exemple.com" required="" id="email" /></div>'
            cont+='<div>&nbsp;&nbsp;&nbsp;&nbsp; Télephone : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class="test" type="text" placeholder="06 XX XX XX XX" required="" id="telephone" /></div>'
			cont+='<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Role : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select class="selection" id="role"><option>-- Choisissez un role --</option><option>adherent</option>'
			if(statu=="admin")
			{
				cont+='<option>membre</option>'
				cont+='<option>admin</option>'
			}
			cont+='</select></div>'
			cont+='<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fonction : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class="test" type="text" placeholder="Fonction occupé" required="" id="fonction" /></div>'
			cont+='<div><input type="submit"  onclick="inscription2()" value="Valider" /></div>'
			cont+='</form><!-- form -->'
			cont+='</section></div><!-- container -->'
			
			if(document.getElementById('message').style.display!="none")
			{
				$('#message').fadeOut("fast")
				if(axb2!='b1')
				setTimeout(function()
				{
					document.getElementById('message').innerHTML=cont
					document.getElementById('message').style.backgroundColor=('rgba(245,245,245,0)')
					setTimeout(function(){$('#message').fadeIn("slow")},350)
				},200)
			}
			else
			{
				document.getElementById('message').innerHTML=cont
				document.getElementById('message').style.backgroundColor=('rgba(245,245,245,0)')
				setTimeout(function(){$('#message').fadeIn("slow")},350)
			}
			
			
			TailHona('b1')
		}
		
		function GrCmp()
		{
			text='<center><select class="selection" id="StatuRol" onchange="grp(this.value)"><option>-- Choissisez le role --</option><option>adherent</option><option>membre</option>'
			if(statu=="admin")text+='<option>admin</option>'
			text+='</select><div id="recherche" style="display:none"><select id="MetRech" onchange="MetRech(this.value)" class="selection" style="width:200px;margin-left:10px"><option>-- Chercher par : --</option><option>CIN</option><option>Nom de famille</option></select><input id="ZonRech" style="background:url(img/search.png) no-repeat" class="ZonText" type="text" onkeyup="Sir9lab(this.value)" disabled="disabled" /></div></center><div id="messageCont" style="display:none;height:330px;overflow:auto"></div>'
			if(document.getElementById('message').style.display!="none")
			{
				$('#message').fadeOut("fast")
				if(axb2!='b2')
				setTimeout(function()
				{
					
					document.getElementById('message').innerHTML=text
					document.getElementById('message').style.backgroundColor=('rgba(255,255,255,1)')
					$('#message').fadeIn("slow")
				},200)
			}
			
			else
			{
				document.getElementById('message').innerHTML=text
				document.getElementById('message').style.backgroundColor=('rgba(255,255,255,1)')
				$('#message').fadeIn("slow")
				
			}
			TailHona('b2')
		}
		
		function Sir9lab(a)
		{
			role=document.getElementById('StatuRol').value
			MetRech=document.getElementById('MetRech').value
			xmlhttp.onreadystatechange=function()
  			{
				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					document.getElementById('messageCont').innerHTML=xmlhttp.responseText
				}
			}
			
			xmlhttp.open("GET","sgbd.php?Rech=ok&val="+a+'&MetRech='+MetRech+'&role='+role,true);
			xmlhttp.send(null);
		}
		
		function MetRech(a)
		{
			
			if(a!="-- Chercher par : --")
			{
				document.getElementById('ZonRech').value=""
				document.getElementById('ZonRech').disabled=false
			}
			else
			{
				document.getElementById('ZonRech').disabled=true
			}
		}
		
		function grp(role)
		{
			if(document.getElementById('messageCont').style.display!='none')
			{
				$('#messageCont').fadeOut('fast')
			}
			if(role!='-- Choissisez le role --')
			{
				xmlhttp.onreadystatechange=function()
  				{
					if (xmlhttp.readyState==4 && xmlhttp.status==200)
    				{
						document.getElementById('messageCont').innerHTML=xmlhttp.responseText
						$('#messageCont').fadeIn("slow")
						$('#recherche').fadeIn("slow")	
					}
				}
			
			
				xmlhttp.open("GET","sgbd.php?GrCmp=ok&role="+role,true);
				xmlhttp.send(null);
			}
			else
			{
				$('#recherche').fadeOut('fast')	
			}
		}
		function TailHona(axb)
		{
			
			//visible = document.getElementById('message').style.display
			tail = $('#form').height()
			//alert(axb2+' '+axb+' '+tail)
			if(tail<300 && axb!="")
			{
				document.getElementById('message').style.height='450px'
				$('#form').animate(
				{
					height:560,
					top:'14%'					
				},450);
				axb2=axb
			}
			else if(axb2==axb && tail > 300)
			{
				
				document.getElementById('message').style.height=''
				$('#form').animate(
				{
					height:70,
					top:'41.41935483870968%'					
				},450);
				axb2=""
			}
			else if(axb2!=axb && tail > 300)
			{
				axb2=axb
			}
		}
		
		function ValChange()
		{
			document.getElementById('message').style.overflow="visible"
			CIN=document.getElementById('CIN').value
			if(IID=='ChangePasse')
			{
				OldPasse=document.getElementById('password6').value
				NewPasse=document.getElementById('password4').value
				confirmation=document.getElementById('confirm').value
				if(OldPasse!="" && NewPasse!="" && confirmation!="")
				{
					if(pswd.test(NewPasse)==false)
					{
						verif.style.top="236px"
						verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>(6,20) caractére dont au moin un chiffre</small></small>'
						$("#verif").fadeIn("slow");
						document.getElementById('password4').value
						document.getElementById('password4').focus()
						setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
					}
					else if(confirmation!=NewPasse)
					{
						verif.style.top="291px"
						$("#verif").fadeIn("slow");
						verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span><small>n\'est pas identique au mot de passe saisi !</small>'
						document.getElementById('confirm').value
						document.getElementById('confirm').focus()
						setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
					}
					else
					{
						verif.style.top="180px"
						xmlhttp.onreadystatechange=function()
  						{
  							if (xmlhttp.readyState==4 && xmlhttp.status==200)
    						{
								if(xmlhttp.responseText==1)
								{
									verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Mot de passe incorrecte !'
									$("#verif").fadeIn("slow");
									document.getElementById('password6').value=""
									document.getElementById('password6').focus()
									setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
								}
								if(xmlhttp.responseText==0)
								{
									document.getElementById('password6').value=""
									document.getElementById('password4').value=""
									document.getElementById('confirm').value=""
									$('#ChangePasse').fadeOut('fast')
									setTimeout(function(){$('#ChangePasse').fadeIn('fast')},100)
								}
								if(xmlhttp.responseText==3)
								{
									document.getElementById('message').innerHTML="<center>Tu te croi malin ? c'est pas votre CIN, prochain fois je bloquerait votre compte et j'informerait votre responsable</center>"
								}
							}
						}
						
						xmlhttp.open("GET","sgbd.php?ChangePas=ok&CIN="+CIN+'&NewPasse='+NewPasse+'&pswd='+OldPasse,true);
						xmlhttp.send(null);
					}
				}
				
				
			}
			else
			{
				login=document.getElementById('username2').value
				login = login.toLowerCase()
				OldPasse=document.getElementById('password2').value
				if(login!="" && OldPasse!="")
				{
					if(loginr.test(login)==false)
					{
						//verif.style.top="231px"
						verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>ex : exemp123 ou exemp-exemp ...</small></small>'
						$("#verif").fadeIn("slow");
						document.getElementById('username2').value
						document.getElementById('username2').focus()
						setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
					}
					else
					{
						xmlhttp.onreadystatechange=function()
  						{
  							if (xmlhttp.readyState==4 && xmlhttp.status==200)
    						{
								if(xmlhttp.responseText==1)
								{
									verif.style.top="236px"
									verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Mot de passe incorrecte !'
									$("#verif").fadeIn("slow");
									document.getElementById('password2').value=""
									document.getElementById('password2').focus()
									setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
								}
								else if(xmlhttp.responseText==2)
								{
									verif.style.top="181px"
									verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span><small>Le nom d\'utilisateur '+login+' est déja utilisé!</small>'
									$("#verif").fadeIn("slow");
									document.getElementById('username2').value
									document.getElementById('username2').focus()
									setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
								}
								else if(xmlhttp.responseText==0)
								{
									document.getElementById('username2').value=login
									document.getElementById('password2').value=""
									$('#ChangePseud').fadeOut('fast')
									setTimeout(function(){$('#ChangePseud').fadeIn('fast')},100)
								}
								else if(xmlhttp.responseText==3)
								{
									document.getElementById('message').innerHTML="<center>Tu te croi malin ? c'est pas votre CIN, prochain fois je bloquerait votre compte et j'informerait votre responsable</center>"
								}
							}	
						}
						xmlhttp.open("GET","sgbd.php?ChangeLog=ok&CIN="+CIN+'&login='+login+'&pswd='+OldPasse,true);
						xmlhttp.send(null);
					}
				}
			}
			setTimeout(function(){document.getElementById('message').style.overflow="auto"},4000)
		}
		
		
		
		function confcmpt(CIN)
		{
			document.getElementById('form').style.height="auto"
			document.getElementById('message').style.display=""
			document.getElementById('message').style.height="auto"
			fen();
			document.getElementById('message').innerHTML=('<img src="img/loading.gif" height="60" width="60" /><br /><center>Chargement de vos paramètre !</center>')
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					document.getElementById('form').style.width=('auto')
					document.getElementById('message').style.backgroundColor=('rgba(245,245,245,0)')
					document.getElementById('message').innerHTML="";
					document.getElementById('message').style.display="none"
					document.getElementById('message').innerHTML=xmlhttp.responseText
					$('#message').fadeIn("slow")
					recalPose()
				}
			}
			
			xmlhttp.open("GET","sgbd.php?param=ok&CIN="+CIN,true);
			xmlhttp.send(null);
		}
		function Change(ID)
		{
			recalPose();
			IID=ID
			cx=document.getElementsByName('choix')
			if(document.getElementById('ChangePasse').style.display=="" || document.getElementById('ChangePasse').style.display=='block')
				$('#ChangePasse').fadeOut('fast')
			if(document.getElementById('ChangePseud').style.display=="" || document.getElementById('ChangePseud').style.display=='block')
				$('#ChangePseud').fadeOut('fast')
			if(cx.item(0).checked || cx.item(1).checked)
			{
				setTimeout(function(){$('#'+ID).fadeIn("slow");$('#pff').fadeIn("slow");setTimeout(function(){recalPose()},50)},180)
			}
			
		}
		
		
		
		function recalPose()
		{
			largeur = window.innerWidth
			hauteur = window.innerHeight
			toul=$('#form').height()
			l3rd=$('#form').width()
			height=hauteur-toul
			ht=height/2
			width=largeur-l3rd
			wh=width/2
			wh=parseInt(wh)
			wh=(wh*100)/largeur
			ht=parseInt(ht)
			ht=(ht*100)/hauteur
			
			$('#form').animate(
			{
				top : (ht-4)+'%',
				left : (wh-3)+'%'
			},150);	
		}
		
		function inscription()
		{
			
			verif=document.getElementById("verif")
			cin = document.getElementById('CIN').value;
			cin = cin.toUpperCase()
			nom = document.getElementById("nom").value;
			prenom = document.getElementById("prenom").value;
			email = document.getElementById("email").value;
			email = email.toLowerCase()
			tele = document.getElementById("telephone").value;
			fonction = document.getElementById("fonction").value;
			login = document.getElementById("username2").value;
			login = login.toLowerCase()
			password = document.getElementById("password2").value;
			passconf = document.getElementById("password3").value;
			
			if(cin != "" && nom != "" && prenom != "" && email != "" && tele != "" && fonction != "" && login != "" && password != "" && passconf != "")
			{
				if(CIN.test(cin)==false)
				{
					verif.style.top="95px"
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>ex : D114455 ou AB12354</small></small>'
					$("#verif").fadeIn("slow");
					document.getElementById('CIN').value
					document.getElementById('CIN').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
				}
				else if(loginr.test(login)==false)
				{
					verif.style.top="153px"
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>ex : exemp123 ou exemp-exemp ...</small></small>'
					$("#verif").fadeIn("slow");
					document.getElementById('username2').value
					document.getElementById('username2').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
					val=0
				}
				else if(pswd.test(password)==false)
				{
					verif.style.top="211px"
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>(6,20) caractére dont au moin un chiffre</small></small>'
					$("#verif").fadeIn("slow");
					document.getElementById('password2').value
					document.getElementById('password2').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
				}
				else if(password != passconf)
				{
					verif.style.top="269px"
					$("#verif").fadeIn("slow");
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span><small>n\'est pas identique au mot de passe saisi !</small>'
					document.getElementById('password3').value
					document.getElementById('password3').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
				}
				else if(nomr.test(nom)==false)
				{
					verif.style.top="325px"
					$("#verif").fadeIn("slow");
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>ex : Tayeb, El Hadi ...</small></small>'
					document.getElementById('nom').value
					document.getElementById('nom').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
				}
				else if(prenomr.test(prenom)==false)
				{
					verif.style.top="383px"
					$("#verif").fadeIn("slow");
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>ex : Yassine, Abd elali ...</small></small>'
					document.getElementById('prenom').value
					document.getElementById('prenom').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)					
				}
				else if(emailr.test(email)==false)
				{
					verif.style.top="441px"
					$("#verif").fadeIn("slow");
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>ex : exemple@gmail.com ...</small></small>'
					document.getElementById('email').value
					document.getElementById('email').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)	
				}
				else if(telephone.test(tele)==false)
				{
					verif.style.top="498px"
					$("#verif").fadeIn("slow");
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>ex : 06 11 22 33 44, 0611223344 ...</small></small>'
					document.getElementById('telephone').value
					document.getElementById('telephone').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)	
				}
				else
				{
					xmlhttp.onreadystatechange=function()
  					{
  						if (xmlhttp.readyState==4 && xmlhttp.status==200)
    					{
							if(xmlhttp.responseText==1)
							{
								document.getElementById("message").innerHTML="Vous êtes bien inscrit Mr."+nom+" "+prenom
								document.getElementById('CIN').value = "";
								nom = document.getElementById("nom").value = "";
								prenom = document.getElementById("prenom").value = "";
								email = document.getElementById("email").value = "";
								tele = document.getElementById("telephone").value = "";
								fonction = document.getElementById("fonction").value = "";
								login = document.getElementById("username2").value = "";
								password = document.getElementById("password2").value = "";
								passconf = document.getElementById("password3").value = "";
								fen()
								recalPose()
							}
							else if(xmlhttp.responseText==2)
							{
								verif.style.top="153px"
								verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span><small>Le nom d\'utilisateur '+login+' est déja utilisé!</small>'
								$("#verif").fadeIn("slow");
								document.getElementById('username2').value
								document.getElementById('username2').focus()
								setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
							}
							else if(xmlhttp.responseText==3)
							{
								document.getElementById("message").innerHTML="<div id='msg'>Le CIN "+cin+" est déja utiliser par un autre compte!<br />avez vous oublier votre mot de passe ?<button onclick='forgot("+'"'+cin+'"'+")' class='bouton'>Oui</button><button onclick='ferme()' class='bouton'>Non</button></div>"
								fen()
								recalPose()
							}
						}
 		 			}

	
					xmlhttp.open("GET","sgbd.php?inscription=ok&cin="+cin+"&nom="+nom+"&prenom="+prenom+"&email="+email+"&tele="+tele+"&fonction="+fonction+"&login="+login+"&pswd="+password,true);
					xmlhttp.send(null);
				}
			}	
		}
		
		function inscription2()
		{
			
			verif=document.getElementById("verif")
			cin = document.getElementById('CIN').value;
			cin = cin.toUpperCase()
			nom = document.getElementById("nom").value;
			prenom = document.getElementById("prenom").value;
			email = document.getElementById("email").value;
			email = email.toLowerCase()
			tele = document.getElementById("telephone").value;
			fonction = document.getElementById("fonction").value;
			login = document.getElementById("username2").value;
			login = login.toLowerCase()
			password = document.getElementById("password2").value;
			passconf = document.getElementById("password3").value;
			role=document.getElementById('role').value
			
			if(cin != "" && nom != "" && prenom != "" && email != "" && tele != "" && fonction != "" && login != "" && password != "" && passconf != "" && role!="-- Choisissez un role --")
			{
				if(CIN.test(cin)==false)
				{
					verif.style.top="95px"
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>ex : D114455 ou AB12354</small></small>'
					$("#verif").fadeIn("slow");
					document.getElementById('CIN').value
					document.getElementById('CIN').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
				}
				else if(loginr.test(login)==false)
				{
					verif.style.top="153px"
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>ex : exemp123 ou exemp-exemp ...</small></small>'
					$("#verif").fadeIn("slow");
					document.getElementById('username2').value
					document.getElementById('username2').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
					val=0
				}
				else if(pswd.test(password)==false)
				{
					verif.style.top="211px"
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>(6,20) caractére dont au moin un chiffre</small></small>'
					$("#verif").fadeIn("slow");
					document.getElementById('password2').value
					document.getElementById('password2').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
				}
				else if(password != passconf)
				{
					verif.style.top="269px"
					$("#verif").fadeIn("slow");
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span><small>n\'est pas identique au mot de passe saisi !</small>'
					document.getElementById('password3').value
					document.getElementById('password3').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
				}
				else if(nomr.test(nom)==false)
				{
					verif.style.top="325px"
					$("#verif").fadeIn("slow");
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>ex : Tayeb, El Hadi ...</small></small>'
					document.getElementById('nom').value
					document.getElementById('nom').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
				}
				else if(prenomr.test(prenom)==false)
				{
					verif.style.top="383px"
					$("#verif").fadeIn("slow");
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>ex : Yassine, Abd elali ...</small></small>'
					document.getElementById('prenom').value
					document.getElementById('prenom').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)					
				}
				else if(emailr.test(email)==false)
				{
					verif.style.top="441px"
					$("#verif").fadeIn("slow");
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>ex : exemple@gmail.com ...</small></small>'
					document.getElementById('email').value
					document.getElementById('email').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)	
				}
				else if(telephone.test(tele)==false)
				{
					verif.style.top="498px"
					$("#verif").fadeIn("slow");
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Incorrect<br /><small><small>ex : 06 11 22 33 44, 0611223344 ...</small></small>'
					document.getElementById('telephone').value
					document.getElementById('telephone').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)	
				}
				else
				{
					xmlhttp.onreadystatechange=function()
  					{
  						if (xmlhttp.readyState==4 && xmlhttp.status==200)
    					{
							if(xmlhttp.responseText==1)
							{
								
								$('#message').fadeOut('fast')
								setTimeout(function()
								{
									document.getElementById('CIN').value = "";
									nom = document.getElementById("nom").value = "";
									prenom = document.getElementById("prenom").value = "";
									email = document.getElementById("email").value = "";
									tele = document.getElementById("telephone").value = "";
									fonction = document.getElementById("fonction").value = "";
									login = document.getElementById("username2").value = "";
									password = document.getElementById("password2").value = "";
									passconf = document.getElementById("password3").value = "";
									document.getElementById('role').value="-- Choisissez un role --";
									$('#message').fadeIn('fast')
								},200)
								//fen()
								//recalPose()
							}
							else if(xmlhttp.responseText==2)
							{
								verif.style.top="153px"
								verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span><small>Le nom d\'utilisateur '+login+' est déja utilisé!</small>'
								$("#verif").fadeIn("slow");
								document.getElementById('username2').value
								document.getElementById('username2').focus()
								setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
							}
							else if(xmlhttp.responseText==3)
							{
								verif.style.top="95px"
								verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span><small>Le nom CIN '+cin+' est déja utilisé!</small>'
								$("#verif").fadeIn("slow");
								document.getElementById('CIN').focus()
								setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
							}
						}
 		 			}

	
					xmlhttp.open("GET","sgbd.php?inscription=ok&cin="+cin+"&nom="+nom+"&prenom="+prenom+"&email="+email+"&tele="+tele+"&fonction="+fonction+"&login="+login+"&pswd="+password+"&role="+role,true);
					xmlhttp.send(null);
				}
			}
			else if(role=="-- Choisissez un role --")
			{
				verif.style.top="554px"
				$("#verif").fadeIn("slow");
				verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Choisissez un role !'
				document.getElementById('role').focus()
				setTimeout(function(){ $('#verif').fadeOut("slow") },2000)	
			}
		}
		
		function deco()
		{
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					top.location.href="../"
				}	
			}
			
			xmlhttp.open("GET","SessStart.php?deco=ok",true);
			xmlhttp.send(null);
		}
		
		function go(typ)
		{
			url = document.URL
			elem=url.split('/')
			i=elem.length
			url = elem[i-1]
			elem = url.split('?')
			url = elem[0]
			document.cookie = "type="+typ
			if(url!="affiche.php")
			{
				top.location.href="affiche.php"
			}
			else
				affichage()
		}
		
		function getType()
		{
			coki = document.cookie.split(';')
			
			for(i=0;i<coki.length;i++)
			{
				if(coki[i]=='type=cl' || coki[i]=='type=ac' || coki[i]=='type=cn' ||  coki[i]==' type=cl'  ||  coki[i]==' type=ac' || coki[i]==' type=cn')
				{
					typ = coki[i]
					break;
				}
			}
			elem = typ.split('=')
			type = elem[1]
			return type
		}
		courant=1
		cmp=0
		
		
		
		function mPres(m,an)
		{
			if(m==1)
			{
				m=12
				an=an-1
			}
			else
				m-=1
			type=getType()
			$('#hona').fadeOut("slow")
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					cont=xmlhttp.responseText
					contenue=cont.split('****');
					cont=contenue[0]
					mois = contenue[1]
					document.getElementById("hona").innerHTML=contenue[0]
					$('#hona').fadeIn("slow")
				}
			}
			
			
			xmlhttp.open("GET","afch.php?typop="+type+'&mois='+(m)+'&an='+an,true);
			xmlhttp.send(null);
		}
		
		function mSuiv(m,an)
		{
			if(m==12)
			{
				m=1
				an=an+1
			}
			else
				m+=1
			type=getType()
			$('#hona').fadeOut("slow")
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					cont=xmlhttp.responseText
					contenue=cont.split('****');
					cont=contenue[0]
					mois = contenue[1]
					document.getElementById("hona").innerHTML=contenue[0]
					$('#hona').fadeIn("slow")
				}
			}
			
			
			xmlhttp.open("GET","afch.php?typop="+type+'&mois='+(m)+'&an='+an,true);
			xmlhttp.send(null);
		}
		
		function next(a)
		{
			courantc=a
			tx=""
			for(i=1;i<=cmp;i++)
			{
				tx+="<a style='cursor:pointer'"
				if(courantc!=i)tx+="class='page'"
				else tx+="class='pagec'"
				tx+="onclick=next("+i+")>"+i+"</a> &nbsp;"
			}
			document.getElementById('npage').innerHTML=tx
			
			
			$('#cont'+courant).fadeOut('fast')
			setTimeout(function(){$('#cont'+a).fadeIn('slow')},210)
			courant = a
		}
		
		function detail(a)
		{
			$('#hona').fadeOut("slow")
			oldBody = document.body.innerHTML
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					document.getElementById("hona").innerHTML=xmlhttp.responseText
					$('#hona').fadeIn("slow")
					h=$('#detArticl').height()
					$('#detArticl').height(h+30)
				}
			}
			
			xmlhttp.open("GET","sgbd.php?detAct=ok&IDact="+a,true);
			xmlhttp.send(null);
		}
		
		function detEvent(a)
		{
			$('#hona').fadeOut("slow")
			oldBody = document.body.innerHTML
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					rep=xmlhttp.responseText
					elem=rep.split("/0*/fr9/*0/")
					NbCom=elem[1]
					ComEvent=a
					document.getElementById("hona").innerHTML=elem[0]
					$('#hona').fadeIn("slow")
					h=$('#detArticl').height()
					$('#detArticl').height(h+30)
					lanceListner()
				}
			}
			
			xmlhttp.open("GET","sgbd.php?detEvent=ok&IDEvent="+a,true);
			xmlhttp.send(null);
		}
		
		
		function detEvent2(a)
		{
			$('#hona').fadeOut("slow")
			oldBody = document.body.innerHTML
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					rep=xmlhttp.responseText
					elem=rep.split("/0*/fr9/*0/")
					NbCom=elem[1]
					ComEvent=a
					document.getElementById("hona").innerHTML=elem[0]
					$('#hona').fadeIn("slow")
					h=$('#detArticl').height()
					$('#detArticl').height(h+30)
					lanceListner()
				}
			}
			
			xmlhttp.open("GET","sgbd.php?detEvent2=ok&IDEvent="+a,true);
			xmlhttp.send(null);
		}
		
		function undo()
		{
			$('#hona').fadeOut("fast")
			setTimeout(function(){document.body.innerHTML = oldBody},250)
			clearInterval(listnerx)
			
		}
		
		function deroulement(an)
		{
			$('#hona').fadeOut("slow")
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					document.getElementById("hona").innerHTML=xmlhttp.responseText
					$('#hona').fadeIn("slow")
				}
			}
			xmlhttp.open("GET","event.php?an="+an,true);
			xmlhttp.send(null);
		}
		
		
	
		
		
		
		
		
		function suite(id)
		{
			
			num = id.split("_")
			num = num[1]
			idt = "titre"+num
			idc="event"+num

			if(activat==id || (activat!=id && test == 1))
			{
				num2 = activat.split("_")
				num2 = num2[1]
				idt2 = "titre"+num2
				idc2 = "event"+num2
				$('#'+idc2).fadeOut("fast")
				$('#'+activat).animate(
				{
					height:36
				},500)
				document.getElementById(activat).className=""
				document.getElementById(idt2).className="actitre"
				span=document.getElementById(activat).getElementsByTagName("span")
				span.item(0).className="triengle"
				hting = $('#'+id).height()
				test = 0
			}
			if(activat!=id || (activat==id && hting < 500))
			{
				
				document.getElementById(idt).className="open"
				document.getElementById(id).className="tous"
				span=document.getElementById(id).getElementsByTagName("span")
				span.item(0).className="tbas"
				$('#'+id).animate(
				{
					height:500
				},500)
				activat=id
				test = 1
				$('#'+idc).fadeIn("slow")
			}	
		}
		
		
		
		function forgot(cin)
		{
			msg = document.getElementById("message")
			toul = $('#message').height()
			$('#msg').fadeOut('slow')
			$('#message').height(toul)
			msg.innerHTML='<img src="img/loading.gif" width="100" height="100" /><br /><br />Patientez!'
			
			xmlhttp.onreadystatechange=function()
  			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
    			{
					if(emailr.test(xmlhttp.responseText)==true && xmlhttp.responseText!="0")
					{
						ml=""
						mail=xmlhttp.responseText
						elem = mail.split("@")
						cmp = elem[0].length
						if(cmp%2==0)
						{
							quart=parseInt(cmp/4)
							demi=parseInt(cmp/2)
						
							for(i=0;i<cmp;i=i+demi)
							{
								for(j=i;j<i+quart;j++)
								{
									if(!elem[0][j])break;
									ml=ml+elem[0][j]
								}
								for(j=i+quart;j<i+(cmp/2);j++)
								{
									if(j>=cmp)break;
									ml=ml+"*"
								}
							}
						}
						else
						{
							quart=parseInt(cmp/4)
							demi=parseInt(cmp/2)
						
							for(i=0;i<cmp;i=i+demi)
							{
								for(j=i;j<i+quart;j++)
								{
									if(!elem[0][j])break;
									ml=ml+elem[0][j]
								}
								for(j=i+quart;j<(i+(cmp/2))-1;j++)
								{
									if(j>=cmp)break;
									ml=ml+"*"
								}
							}
						}
						msg.innerHTML="Vos coordonnée sont envoyé par message a l'adresse e-mail : <b>"+ml+"@"+elem[1]+"</b>"
						$('#message').height('auto')
					}
					else if(emailr.test(xmlhttp.responseText)==false && xmlhttp.responseText!="0")
					{
						msg.innerHTML="Fail! réssayé plus tard"
					}
					else if(xmlhttp.responseText=="0")
					{
						msg.innerHTML=cin+" ne correspond a aucun utilisateur!"
					}
				}
			}
			
			xmlhttp.open("GET","sgbd.php?forgot=ok&cin="+cin,true);
			xmlhttp.send(null);
			
			
		}
		
	function fen()
  	{
		
    	$('#modal').fadeIn("fast");
      	$('#form').fadeIn("fast");
	
  	}
  
  	function ferme()
  	{
    	$('#modal').fadeOut("fast");
      	$('#form').fadeOut("fast");
		
		URL = document.URL
		elem=URL.split('/')
		til=elem.length
		if(elem[(til-1)]=='Activites.php')
		ds_hi();
		
		setTimeout(function(){if(document.getElementById('manu')){document.getElementById('manu').parentNode.removeChild(document.getElementById('manu'));}document.getElementById('message').innerHTML="";document.getElementById('message').style.backgroundColor=('rgba(255,255,255,1)');$('#form').width('330px');$('#form').height('');document.getElementById('message').style.display='';{document.getElementById('message').style.display='none';$('#form').height('70px')}},400)
  	}
	
	
	function authentification()
		{
			
			
			login = document.getElementById('username').value
			login = login.toLowerCase();
			pswrd = document.getElementById('password').value
			if(login != "" && pswrd != "")
			{
				verif=document.getElementById('verif')
				if(loginr.test(login)==false)
				{
					
				verif.style.top="95px"
					verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Login invalid !<br /><small><small>ex : exemp123 ou exemp-exemp ...</small></small>'
					$("#verif").fadeIn("slow");
					document.getElementById('username').value
					document.getElementById('username').focus()
					setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
					val=0
				}
				else
				{
					xmlhttp.onreadystatechange=function()
  					{
  						if (xmlhttp.readyState==4 && xmlhttp.status==200)
    					{
							if(xmlhttp.responseText==1)
							{
								top.location.href="backoffice/"
							}
							else if(xmlhttp.responseText==2)
							{
								verif.style.top="153px"
								verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span>Mot de passe incorrecte !'
								$("#verif").fadeIn("slow");
								document.getElementById('password').value=""
								document.getElementById('password').focus()
								setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
								val=0
							}
							else if(xmlhttp.responseText==3)
							{
								verif.style.top="95px"
								verif.innerHTML='<span style="height:px;width:0px;position:absolute;left:-26px;top:4px;border:13px solid transparent;border-right:13px solid white"></span><small>Nom d\'utilisateur innéxistant!</small>'
								$("#verif").fadeIn("slow");
								document.getElementById('password').value=""
								document.getElementById('username').focus()
								setTimeout(function(){ $('#verif').fadeOut("slow") },2000)
								val=0
							}
						}
					}
					xmlhttp.open("GET","sgbd.php?auth=ok&login="+login+"&pswd="+pswrd,true);
					xmlhttp.send(null);
				}
			}
			
		}
		
		
		function forgot2()
		{
			fen();
			recalPose();
			document.getElementById('message').innerHTML="<div id=\"msg\">Entrer Votre CIN : <input  type='text' id='CINv' /><button class='bouton' style='margin-top:40px' onclick='cin=recupcin();forgot(cin)'>Valider</button></div>"
		}
		
		function recupcin()
		{
			cin = document.getElementById('CINv').value;
			return cin;
		}
		













































(function(){

	"use strict";

	//Declare root variable - window in the browser, global on the server
	var root = this,
		previous = root.Chart;

	//Occupy the global variable of Chart, and create a simple base class
	var Chart = function(context){
		var chart = this;
		this.canvas = context.canvas;

		this.ctx = context;

		//Variables global to the chart
		var width = this.width = context.canvas.width;
		var height = this.height = context.canvas.height;
		this.aspectRatio = this.width / this.height;
		//High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.
		helpers.retinaScale(this);

		return this;
	};
	//Globally expose the defaults to allow for user updating/changing
	Chart.defaults = {
		global: {
			//Boolean - Whether we should show a stroke on each segment
    		segmentShowStroke : true,

    		//String - The colour of each segment stroke
    		segmentStrokeColor : "#fff",

    		//Number - The width of each segment stroke
    		segmentStrokeWidth : 2,
	
    		//Number - The percentage of the chart that we cut out of the middle
    		percentageInnerCutout : 50, // This is 0 for Pie charts

    		

    		//Boolean - Whether we animate the rotation of the Doughnut
    		animateRotate : true,

    		//Boolean - Whether we animate scaling the Doughnut from the centre
    		animateScale : false,

    		//String - A legend template
    		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
			// Boolean - Whether to animate the chart
			animation: true,

			// Number - Number of animation steps
			animationSteps: 60,

			// String - Animation easing effect
			animationEasing: "easeOutQuart",

			// Boolean - If we should show the scale at all
			showScale: true,

			// Boolean - If we want to override with a hard coded scale
			scaleOverride: false,

			// ** Required if scaleOverride is true **
			// Number - The number of steps in a hard coded scale
			scaleSteps: null,
			// Number - The value jump in the hard coded scale
			scaleStepWidth: null,
			// Number - The scale starting value
			scaleStartValue: null,

			// String - Colour of the scale line
			scaleLineColor: "rgba(0,0,0,.1)",

			// Number - Pixel width of the scale line
			scaleLineWidth: 1,

			// Boolean - Whether to show labels on the scale
			scaleShowLabels: true,

			// Interpolated JS string - can access value
			scaleLabel: "<%=value%>",

			// Boolean - Whether the scale should stick to integers, and not show any floats even if drawing space is there
			scaleIntegersOnly: true,

			// Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
			scaleBeginAtZero: false,

			// String - Scale label font declaration for the scale label
			scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Scale label font size in pixels
			scaleFontSize: 12,

			// String - Scale label font weight style
			scaleFontStyle: "normal",

			// String - Scale label font colour
			scaleFontColor: "#666",

			// Boolean - whether or not the chart should be responsive and resize when the browser does.
			responsive: false,

                        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
                        maintainAspectRatio: true,

			// Boolean - Determines whether to draw tooltips on the canvas or not - attaches events to touchmove & mousemove
			showTooltips: true,

			// Array - Array of string names to attach tooltip events
			tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],

			// String - Tooltip background colour
			tooltipFillColor: "rgba(0,0,0,0.8)",

			// String - Tooltip label font declaration for the scale label
			tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Tooltip label font size in pixels
			tooltipFontSize: 14,

			// String - Tooltip font weight style
			tooltipFontStyle: "normal",

			// String - Tooltip label font colour
			tooltipFontColor: "#fff",

			// String - Tooltip title font declaration for the scale label
			tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Tooltip title font size in pixels
			tooltipTitleFontSize: 14,

			// String - Tooltip title font weight style
			tooltipTitleFontStyle: "bold",

			// String - Tooltip title font colour
			tooltipTitleFontColor: "#fff",

			// Number - pixel width of padding around tooltip text
			tooltipYPadding: 6,

			// Number - pixel width of padding around tooltip text
			tooltipXPadding: 6,

			// Number - Size of the caret on the tooltip
			tooltipCaretSize: 8,

			// Number - Pixel radius of the tooltip border
			tooltipCornerRadius: 6,

			// Number - Pixel offset from point x to tooltip edge
			tooltipXOffset: 10,

			// String - Template string for single tooltips
			tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

			// String - Template string for single tooltips
			multiTooltipTemplate: "<%= value %>",

			// String - Colour behind the legend colour block
			multiTooltipKeyBackground: '#fff',

			// Function - Will fire on animation progression.
			onAnimationProgress: function(){},

			// Function - Will fire on animation completion.
			onAnimationComplete: function(){}

		}
	};

	//Create a dictionary of chart types, to allow for extension of existing types
	Chart.types = {};

	//Global Chart helpers object for utility methods and classes
	var helpers = Chart.helpers = {};

		//-- Basic js utility methods
	var each = helpers.each = function(loopable,callback,self){
			var additionalArgs = Array.prototype.slice.call(arguments, 3);
			// Check to see if null or undefined firstly.
			if (loopable){
				if (loopable.length === +loopable.length){
					var i;
					for (i=0; i<loopable.length; i++){
						callback.apply(self,[loopable[i], i].concat(additionalArgs));
					}
				}
				else{
					for (var item in loopable){
						callback.apply(self,[loopable[item],item].concat(additionalArgs));
					}
				}
			}
		},
		clone = helpers.clone = function(obj){
			var objClone = {};
			each(obj,function(value,key){
				if (obj.hasOwnProperty(key)) objClone[key] = value;
			});
			return objClone;
		},
		extend = helpers.extend = function(base){
			each(Array.prototype.slice.call(arguments,1), function(extensionObject) {
				each(extensionObject,function(value,key){
					if (extensionObject.hasOwnProperty(key)) base[key] = value;
				});
			});
			return base;
		},
		merge = helpers.merge = function(base,master){
			//Merge properties in left object over to a shallow clone of object right.
			var args = Array.prototype.slice.call(arguments,0);
			args.unshift({});
			return extend.apply(null, args);
		},
		indexOf = helpers.indexOf = function(arrayToSearch, item){
			if (Array.prototype.indexOf) {
				return arrayToSearch.indexOf(item);
			}
			else{
				for (var i = 0; i < arrayToSearch.length; i++) {
					if (arrayToSearch[i] === item) return i;
				}
				return -1;
			}
		},
		inherits = helpers.inherits = function(extensions){
			//Basic javascript inheritance based on the model created in Backbone.js
			var parent = this;
			var ChartElement = (extensions && extensions.hasOwnProperty("constructor")) ? extensions.constructor : function(){ return parent.apply(this, arguments); };

			var Surrogate = function(){ this.constructor = ChartElement;};
			Surrogate.prototype = parent.prototype;
			ChartElement.prototype = new Surrogate();

			ChartElement.extend = inherits;

			if (extensions) extend(ChartElement.prototype, extensions);

			ChartElement.__super__ = parent.prototype;

			return ChartElement;
		},
		noop = helpers.noop = function(){},
		uid = helpers.uid = (function(){
			var id=0;
			return function(){
				return "chart-" + id++;
			};
		})(),
		warn = helpers.warn = function(str){
			//Method for warning of errors
			if (window.console && typeof window.console.warn == "function") console.warn(str);
		},
		amd = helpers.amd = (typeof root.define == 'function' && root.define.amd),
		//-- Math methods
		isNumber = helpers.isNumber = function(n){
			return !isNaN(parseFloat(n)) && isFinite(n);
		},
		max = helpers.max = function(array){
			return Math.max.apply( Math, array );
		},
		min = helpers.min = function(array){
			return Math.min.apply( Math, array );
		},
		cap = helpers.cap = function(valueToCap,maxValue,minValue){
			if(isNumber(maxValue)) {
				if( valueToCap > maxValue ) {
					return maxValue;
				}
			}
			else if(isNumber(minValue)){
				if ( valueToCap < minValue ){
					return minValue;
				}
			}
			return valueToCap;
		},
		getDecimalPlaces = helpers.getDecimalPlaces = function(num){
			if (num%1!==0 && isNumber(num)){
				return num.toString().split(".")[1].length;
			}
			else {
				return 0;
			}
		},
		toRadians = helpers.radians = function(degrees){
			return degrees * (Math.PI/180);
		},
		// Gets the angle from vertical upright to the point about a centre.
		getAngleFromPoint = helpers.getAngleFromPoint = function(centrePoint, anglePoint){
			var distanceFromXCenter = anglePoint.x - centrePoint.x,
				distanceFromYCenter = anglePoint.y - centrePoint.y,
				radialDistanceFromCenter = Math.sqrt( distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);


			var angle = Math.PI * 2 + Math.atan2(distanceFromYCenter, distanceFromXCenter);

			//If the segment is in the top left quadrant, we need to add another rotation to the angle
			if (distanceFromXCenter < 0 && distanceFromYCenter < 0){
				angle += Math.PI*2;
			}

			return {
				angle: angle,
				distance: radialDistanceFromCenter
			};
		},
		aliasPixel = helpers.aliasPixel = function(pixelWidth){
			return (pixelWidth % 2 === 0) ? 0 : 0.5;
		},
		splineCurve = helpers.splineCurve = function(FirstPoint,MiddlePoint,AfterPoint,t){
			//Props to Rob Spencer at scaled innovation for his post on splining between points
			//http://scaledinnovation.com/analytics/splines/aboutSplines.html
			var d01=Math.sqrt(Math.pow(MiddlePoint.x-FirstPoint.x,2)+Math.pow(MiddlePoint.y-FirstPoint.y,2)),
				d12=Math.sqrt(Math.pow(AfterPoint.x-MiddlePoint.x,2)+Math.pow(AfterPoint.y-MiddlePoint.y,2)),
				fa=t*d01/(d01+d12),// scaling factor for triangle Ta
				fb=t*d12/(d01+d12);
			return {
				inner : {
					x : MiddlePoint.x-fa*(AfterPoint.x-FirstPoint.x),
					y : MiddlePoint.y-fa*(AfterPoint.y-FirstPoint.y)
				},
				outer : {
					x: MiddlePoint.x+fb*(AfterPoint.x-FirstPoint.x),
					y : MiddlePoint.y+fb*(AfterPoint.y-FirstPoint.y)
				}
			};
		},
		calculateOrderOfMagnitude = helpers.calculateOrderOfMagnitude = function(val){
			return Math.floor(Math.log(val) / Math.LN10);
		},
		calculateScaleRange = helpers.calculateScaleRange = function(valuesArray, drawingSize, textSize, startFromZero, integersOnly){

			//Set a minimum step of two - a point at the top of the graph, and a point at the base
			var minSteps = 2,
				maxSteps = Math.floor(drawingSize/(textSize * 1.5)),
				skipFitting = (minSteps >= maxSteps);

			var maxValue = max(valuesArray),
				minValue = min(valuesArray);

			// We need some degree of seperation here to calculate the scales if all the values are the same
			// Adding/minusing 0.5 will give us a range of 1.
			if (maxValue === minValue){
				maxValue += 0.5;
				// So we don't end up with a graph with a negative start value if we've said always start from zero
				if (minValue >= 0.5 && !startFromZero){
					minValue -= 0.5;
				}
				else{
					// Make up a whole number above the values
					maxValue += 0.5;
				}
			}

			var	valueRange = Math.abs(maxValue - minValue),
				rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange),
				graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
				graphMin = (startFromZero) ? 0 : Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
				graphRange = graphMax - graphMin,
				stepValue = Math.pow(10, rangeOrderOfMagnitude),
				numberOfSteps = Math.round(graphRange / stepValue);

			//If we have more space on the graph we'll use it to give more definition to the data
			while((numberOfSteps > maxSteps || (numberOfSteps * 2) < maxSteps) && !skipFitting) {
				if(numberOfSteps > maxSteps){
					stepValue *=2;
					numberOfSteps = Math.round(graphRange/stepValue);
					// Don't ever deal with a decimal number of steps - cancel fitting and just use the minimum number of steps.
					if (numberOfSteps % 1 !== 0){
						skipFitting = true;
					}
				}
				//We can fit in double the amount of scale points on the scale
				else{
					//If user has declared ints only, and the step value isn't a decimal
					if (integersOnly && rangeOrderOfMagnitude >= 0){
						//If the user has said integers only, we need to check that making the scale more granular wouldn't make it a float
						if(stepValue/2 % 1 === 0){
							stepValue /=2;
							numberOfSteps = Math.round(graphRange/stepValue);
						}
						//If it would make it a float break out of the loop
						else{
							break;
						}
					}
					//If the scale doesn't have to be an int, make the scale more granular anyway.
					else{
						stepValue /=2;
						numberOfSteps = Math.round(graphRange/stepValue);
					}

				}
			}

			if (skipFitting){
				numberOfSteps = minSteps;
				stepValue = graphRange / numberOfSteps;
			}

			return {
				steps : numberOfSteps,
				stepValue : stepValue,
				min : graphMin,
				max	: graphMin + (numberOfSteps * stepValue)
			};

		},
		/* jshint ignore:start */
		// Blows up jshint errors based on the new Function constructor
		//Templating methods
		//Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/
		template = helpers.template = function(templateString, valuesObject){
			 // If templateString is function rather than string-template - call the function for valuesObject
			 if(templateString instanceof Function)
			 	{
			 	return templateString(valuesObject);
			 	}
			 
			var cache = {};
			function tmpl(str, data){
				// Figure out if we're getting a template, or if we need to
				// load the template - and be sure to cache the result.
				var fn = !/\W/.test(str) ?
				cache[str] = cache[str] :

				// Generate a reusable function that will serve as a template
				// generator (and which will be cached).
				new Function("obj",
					"var p=[],print=function(){p.push.apply(p,arguments);};" +

					// Introduce the data as local variables using with(){}
					"with(obj){p.push('" +

					// Convert the template into pure JavaScript
					str
						.replace(/[\r\t\n]/g, " ")
						.split("<%").join("\t")
						.replace(/((^|%>)[^\t]*)'/g, "$1\r")
						.replace(/\t=(.*?)%>/g, "',$1,'")
						.split("\t").join("');")
						.split("%>").join("p.push('")
						.split("\r").join("\\'") +
					"');}return p.join('');"
				);

				// Provide some basic currying to the user
				return data ? fn( data ) : fn;
			}
			return tmpl(templateString,valuesObject);
		},
		/* jshint ignore:end */
		generateLabels = helpers.generateLabels = function(templateString,numberOfSteps,graphMin,stepValue){
			var labelsArray = new Array(numberOfSteps);
			if (labelTemplateString){
				each(labelsArray,function(val,index){
					labelsArray[index] = template(templateString,{value: (graphMin + (stepValue*(index+1)))});
				});
			}
			return labelsArray;
		},
		//--Animation methods
		//Easing functions adapted from Robert Penner's easing equations
		//http://www.robertpenner.com/easing/
		easingEffects = helpers.easingEffects = {
			linear: function (t) {
				return t;
			},
			easeInQuad: function (t) {
				return t * t;
			},
			easeOutQuad: function (t) {
				return -1 * t * (t - 2);
			},
			easeInOutQuad: function (t) {
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t;
				return -1 / 2 * ((--t) * (t - 2) - 1);
			},
			easeInCubic: function (t) {
				return t * t * t;
			},
			easeOutCubic: function (t) {
				return 1 * ((t = t / 1 - 1) * t * t + 1);
			},
			easeInOutCubic: function (t) {
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t;
				return 1 / 2 * ((t -= 2) * t * t + 2);
			},
			easeInQuart: function (t) {
				return t * t * t * t;
			},
			easeOutQuart: function (t) {
				return -1 * ((t = t / 1 - 1) * t * t * t - 1);
			},
			easeInOutQuart: function (t) {
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t;
				return -1 / 2 * ((t -= 2) * t * t * t - 2);
			},
			easeInQuint: function (t) {
				return 1 * (t /= 1) * t * t * t * t;
			},
			easeOutQuint: function (t) {
				return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
			},
			easeInOutQuint: function (t) {
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t * t;
				return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
			},
			easeInSine: function (t) {
				return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
			},
			easeOutSine: function (t) {
				return 1 * Math.sin(t / 1 * (Math.PI / 2));
			},
			easeInOutSine: function (t) {
				return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
			},
			easeInExpo: function (t) {
				return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
			},
			easeOutExpo: function (t) {
				return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
			},
			easeInOutExpo: function (t) {
				if (t === 0) return 0;
				if (t === 1) return 1;
				if ((t /= 1 / 2) < 1) return 1 / 2 * Math.pow(2, 10 * (t - 1));
				return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
			},
			easeInCirc: function (t) {
				if (t >= 1) return t;
				return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
			},
			easeOutCirc: function (t) {
				return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
			},
			easeInOutCirc: function (t) {
				if ((t /= 1 / 2) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
				return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
			},
			easeInElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0) return 0;
				if ((t /= 1) == 1) return 1;
				if (!p) p = 1 * 0.3;
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else s = p / (2 * Math.PI) * Math.asin(1 / a);
				return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
			},
			easeOutElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0) return 0;
				if ((t /= 1) == 1) return 1;
				if (!p) p = 1 * 0.3;
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else s = p / (2 * Math.PI) * Math.asin(1 / a);
				return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
			},
			easeInOutElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0) return 0;
				if ((t /= 1 / 2) == 2) return 1;
				if (!p) p = 1 * (0.3 * 1.5);
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else s = p / (2 * Math.PI) * Math.asin(1 / a);
				if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
				return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
			},
			easeInBack: function (t) {
				var s = 1.70158;
				return 1 * (t /= 1) * t * ((s + 1) * t - s);
			},
			easeOutBack: function (t) {
				var s = 1.70158;
				return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
			},
			easeInOutBack: function (t) {
				var s = 1.70158;
				if ((t /= 1 / 2) < 1) return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
				return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
			},
			easeInBounce: function (t) {
				return 1 - easingEffects.easeOutBounce(1 - t);
			},
			easeOutBounce: function (t) {
				if ((t /= 1) < (1 / 2.75)) {
					return 1 * (7.5625 * t * t);
				} else if (t < (2 / 2.75)) {
					return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
				} else if (t < (2.5 / 2.75)) {
					return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
				} else {
					return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
				}
			},
			easeInOutBounce: function (t) {
				if (t < 1 / 2) return easingEffects.easeInBounce(t * 2) * 0.5;
				return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
			}
		},
		//Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
		requestAnimFrame = helpers.requestAnimFrame = (function(){
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function(callback) {
					return window.setTimeout(callback, 1000 / 60);
				};
		})(),
		cancelAnimFrame = helpers.cancelAnimFrame = (function(){
			return window.cancelAnimationFrame ||
				window.webkitCancelAnimationFrame ||
				window.mozCancelAnimationFrame ||
				window.oCancelAnimationFrame ||
				window.msCancelAnimationFrame ||
				function(callback) {
					return window.clearTimeout(callback, 1000 / 60);
				};
		})(),
		animationLoop = helpers.animationLoop = function(callback,totalSteps,easingString,onProgress,onComplete,chartInstance){

			var currentStep = 0,
				easingFunction = easingEffects[easingString] || easingEffects.linear;

			var animationFrame = function(){
				currentStep++;
				var stepDecimal = currentStep/totalSteps;
				var easeDecimal = easingFunction(stepDecimal);

				callback.call(chartInstance,easeDecimal,stepDecimal, currentStep);
				onProgress.call(chartInstance,easeDecimal,stepDecimal);
				if (currentStep < totalSteps){
					chartInstance.animationFrame = requestAnimFrame(animationFrame);
				} else{
					onComplete.apply(chartInstance);
				}
			};
			requestAnimFrame(animationFrame);
		},
		//-- DOM methods
		getRelativePosition = helpers.getRelativePosition = function(evt){
			var mouseX, mouseY;
			var e = evt.originalEvent || evt,
				canvas = evt.currentTarget || evt.srcElement,
				boundingRect = canvas.getBoundingClientRect();

			if (e.touches){
				mouseX = e.touches[0].clientX - boundingRect.left;
				mouseY = e.touches[0].clientY - boundingRect.top;

			}
			else{
				mouseX = e.clientX - boundingRect.left;
				mouseY = e.clientY - boundingRect.top;
			}

			return {
				x : mouseX,
				y : mouseY
			};

		},
		addEvent = helpers.addEvent = function(node,eventType,method){
			if (node.addEventListener){
				node.addEventListener(eventType,method);
			} else if (node.attachEvent){
				node.attachEvent("on"+eventType, method);
			} else {
				node["on"+eventType] = method;
			}
		},
		removeEvent = helpers.removeEvent = function(node, eventType, handler){
			if (node.removeEventListener){
				node.removeEventListener(eventType, handler, false);
			} else if (node.detachEvent){
				node.detachEvent("on"+eventType,handler);
			} else{
				node["on" + eventType] = noop;
			}
		},
		bindEvents = helpers.bindEvents = function(chartInstance, arrayOfEvents, handler){
			// Create the events object if it's not already present
			if (!chartInstance.events) chartInstance.events = {};

			each(arrayOfEvents,function(eventName){
				chartInstance.events[eventName] = function(){
					handler.apply(chartInstance, arguments);
				};
				addEvent(chartInstance.chart.canvas,eventName,chartInstance.events[eventName]);
			});
		},
		unbindEvents = helpers.unbindEvents = function (chartInstance, arrayOfEvents) {
			each(arrayOfEvents, function(handler,eventName){
				removeEvent(chartInstance.chart.canvas, eventName, handler);
			});
		},
		getMaximumWidth = helpers.getMaximumWidth = function(domNode){
			var container = domNode.parentNode;
			// TODO = check cross browser stuff with this.
			return container.clientWidth;
		},
		getMaximumHeight = helpers.getMaximumHeight = function(domNode){
			var container = domNode.parentNode;
			// TODO = check cross browser stuff with this.
			return container.clientHeight;
		},
		getMaximumSize = helpers.getMaximumSize = helpers.getMaximumWidth, // legacy support
		retinaScale = helpers.retinaScale = function(chart){
			var ctx = chart.ctx,
				width = chart.canvas.width,
				height = chart.canvas.height;
			//console.log(width + " x " + height);
			if (window.devicePixelRatio) {
				ctx.canvas.style.width = width + "px";
				ctx.canvas.style.height = height + "px";
				ctx.canvas.height = height * window.devicePixelRatio;
				ctx.canvas.width = width * window.devicePixelRatio;
				ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
			}
		},
		//-- Canvas methods
		clear = helpers.clear = function(chart){
			chart.ctx.clearRect(0,0,chart.width,chart.height);
		},
		fontString = helpers.fontString = function(pixelSize,fontStyle,fontFamily){
			return fontStyle + " " + pixelSize+"px " + fontFamily;
		},
		longestText = helpers.longestText = function(ctx,font,arrayOfStrings){
			ctx.font = font;
			var longest = 0;
			each(arrayOfStrings,function(string){
				var textWidth = ctx.measureText(string).width;
				longest = (textWidth > longest) ? textWidth : longest;
			});
			return longest;
		},
		drawRoundedRectangle = helpers.drawRoundedRectangle = function(ctx,x,y,width,height,radius){
			ctx.beginPath();
			ctx.moveTo(x + radius, y);
			ctx.lineTo(x + width - radius, y);
			ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
			ctx.lineTo(x + width, y + height - radius);
			ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
			ctx.lineTo(x + radius, y + height);
			ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
			ctx.lineTo(x, y + radius);
			ctx.quadraticCurveTo(x, y, x + radius, y);
			ctx.closePath();
		};


	//Store a reference to each instance - allowing us to globally resize chart instances on window resize.
	//Destroy method on the chart will remove the instance of the chart from this reference.
	Chart.instances = {};

	Chart.Type = function(data,options,chart){
		this.options = options;
		this.chart = chart;
		this.id = uid();
		//Add the chart instance to the global namespace
		Chart.instances[this.id] = this;

		// Initialize is always called when a chart type is created
		// By default it is a no op, but it should be extended
		if (options.responsive){
			this.resize();
		}
		this.initialize.call(this,data);
	};

	//Core methods that'll be a part of every chart type
	extend(Chart.Type.prototype,{
		initialize : function(){return this;},
		clear : function(){
			clear(this.chart);
			return this;
		},
		stop : function(){
			// Stops any current animation loop occuring
			helpers.cancelAnimFrame.call(root, this.animationFrame);
			return this;
		},
		resize : function(callback){
			this.stop();
			var canvas = this.chart.canvas,
				newWidth = getMaximumWidth(this.chart.canvas),
				newHeight = this.options.maintainAspectRatio ? newWidth / this.chart.aspectRatio : getMaximumHeight(this.chart.canvas);

			canvas.width = this.chart.width = newWidth;
			canvas.height =  this.chart.height = newHeight;

			retinaScale(this.chart);

			if (typeof callback === "function"){
				callback.apply(this, Array.prototype.slice.call(arguments, 1));
			}
			return this;
		},
		reflow : noop,
		render : function(reflow){
			if (reflow){
				this.reflow();
			}
			if (this.options.animation && !reflow){
				helpers.animationLoop(
					this.draw,
					this.options.animationSteps,
					this.options.animationEasing,
					this.options.onAnimationProgress,
					this.options.onAnimationComplete,
					this
				);
			}
			else{
				this.draw();
				this.options.onAnimationComplete.call(this);
			}
			return this;
		},
		generateLegend : function(){
			return template(this.options.legendTemplate,this);
		},
		destroy : function(){
			this.clear();
			unbindEvents(this, this.events);
			delete Chart.instances[this.id];
		},
		showTooltip : function(ChartElements, forceRedraw){
			// Only redraw the chart if we've actually changed what we're hovering on.
			if (typeof this.activeElements === 'undefined') this.activeElements = [];

			var isChanged = (function(Elements){
				var changed = false;

				if (Elements.length !== this.activeElements.length){
					changed = true;
					return changed;
				}

				each(Elements, function(element, index){
					if (element !== this.activeElements[index]){
						changed = true;
					}
				}, this);
				return changed;
			}).call(this, ChartElements);

			if (!isChanged && !forceRedraw){
				return;
			}
			else{
				this.activeElements = ChartElements;
			}
			this.draw();
			if (ChartElements.length > 0){
				// If we have multiple datasets, show a MultiTooltip for all of the data points at that index
				if (this.datasets && this.datasets.length > 1) {
					var dataArray,
						dataIndex;

					for (var i = this.datasets.length - 1; i >= 0; i--) {
						dataArray = this.datasets[i].points || this.datasets[i].bars || this.datasets[i].segments;
						dataIndex = indexOf(dataArray, ChartElements[0]);
						if (dataIndex !== -1){
							break;
						}
					}
					var tooltipLabels = [],
						tooltipColors = [],
						medianPosition = (function(index) {

							// Get all the points at that particular index
							var Elements = [],
								dataCollection,
								xPositions = [],
								yPositions = [],
								xMax,
								yMax,
								xMin,
								yMin;
							helpers.each(this.datasets, function(dataset){
								dataCollection = dataset.points || dataset.bars || dataset.segments;
								if (dataCollection[dataIndex]){
									Elements.push(dataCollection[dataIndex]);
								}
							});

							helpers.each(Elements, function(element) {
								xPositions.push(element.x);
								yPositions.push(element.y);


								//Include any colour information about the element
								tooltipLabels.push(helpers.template(this.options.multiTooltipTemplate, element));
								tooltipColors.push({
									fill: element._saved.fillColor || element.fillColor,
									stroke: element._saved.strokeColor || element.strokeColor
								});

							}, this);

							yMin = min(yPositions);
							yMax = max(yPositions);

							xMin = min(xPositions);
							xMax = max(xPositions);

							return {
								x: (xMin > this.chart.width/2) ? xMin : xMax,
								y: (yMin + yMax)/2
							};
						}).call(this, dataIndex);

					new Chart.MultiTooltip({
						x: medianPosition.x,
						y: medianPosition.y,
						xPadding: this.options.tooltipXPadding,
						yPadding: this.options.tooltipYPadding,
						xOffset: this.options.tooltipXOffset,
						fillColor: this.options.tooltipFillColor,
						textColor: this.options.tooltipFontColor,
						fontFamily: this.options.tooltipFontFamily,
						fontStyle: this.options.tooltipFontStyle,
						fontSize: this.options.tooltipFontSize,
						titleTextColor: this.options.tooltipTitleFontColor,
						titleFontFamily: this.options.tooltipTitleFontFamily,
						titleFontStyle: this.options.tooltipTitleFontStyle,
						titleFontSize: this.options.tooltipTitleFontSize,
						cornerRadius: this.options.tooltipCornerRadius,
						labels: tooltipLabels,
						legendColors: tooltipColors,
						legendColorBackground : this.options.multiTooltipKeyBackground,
						title: ChartElements[0].label,
						chart: this.chart,
						ctx: this.chart.ctx
					}).draw();

				} else {
					each(ChartElements, function(Element) {
						var tooltipPosition = Element.tooltipPosition();
						new Chart.Tooltip({
							x: Math.round(tooltipPosition.x),
							y: Math.round(tooltipPosition.y),
							xPadding: this.options.tooltipXPadding,
							yPadding: this.options.tooltipYPadding,
							fillColor: this.options.tooltipFillColor,
							textColor: this.options.tooltipFontColor,
							fontFamily: this.options.tooltipFontFamily,
							fontStyle: this.options.tooltipFontStyle,
							fontSize: this.options.tooltipFontSize,
							caretHeight: this.options.tooltipCaretSize,
							cornerRadius: this.options.tooltipCornerRadius,
							text: template(this.options.tooltipTemplate, Element),
							chart: this.chart
						}).draw();
					}, this);
				}
			}
			return this;
		},
		toBase64Image : function(){
			return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
		}
	});

	Chart.Type.extend = function(extensions){

		var parent = this;

		var ChartType = function(){
			return parent.apply(this,arguments);
		};

		//Copy the prototype object of the this class
		ChartType.prototype = clone(parent.prototype);
		//Now overwrite some of the properties in the base class with the new extensions
		extend(ChartType.prototype, extensions);

		ChartType.extend = Chart.Type.extend;

		if (extensions.name || parent.prototype.name){

			var chartName = extensions.name || parent.prototype.name;
			//Assign any potential default values of the new chart type

			//If none are defined, we'll use a clone of the chart type this is being extended from.
			//I.e. if we extend a line chart, we'll use the defaults from the line chart if our new chart
			//doesn't define some defaults of their own.

			var baseDefaults = (Chart.defaults[parent.prototype.name]) ? clone(Chart.defaults[parent.prototype.name]) : {};

			Chart.defaults[chartName] = extend(baseDefaults,extensions.defaults);

			Chart.types[chartName] = ChartType;

			//Register this new chart type in the Chart prototype
			Chart.prototype[chartName] = function(data,options){
				var config = merge(Chart.defaults.global, Chart.defaults[chartName], options || {});
				return new ChartType(data,config,this);
			};
		} else{
			warn("Name not provided for this chart, so it hasn't been registered");
		}
		return parent;
	};

	Chart.Element = function(configuration){
		extend(this,configuration);
		this.initialize.apply(this,arguments);
		this.save();
	};
	extend(Chart.Element.prototype,{
		initialize : function(){},
		restore : function(props){
			if (!props){
				extend(this,this._saved);
			} else {
				each(props,function(key){
					this[key] = this._saved[key];
				},this);
			}
			return this;
		},
		save : function(){
			this._saved = clone(this);
			delete this._saved._saved;
			return this;
		},
		update : function(newProps){
			each(newProps,function(value,key){
				this._saved[key] = this[key];
				this[key] = value;
			},this);
			return this;
		},
		transition : function(props,ease){
			each(props,function(value,key){
				this[key] = ((value - this._saved[key]) * ease) + this._saved[key];
			},this);
			return this;
		},
		tooltipPosition : function(){
			return {
				x : this.x,
				y : this.y
			};
		}
	});

	Chart.Element.extend = inherits;


	Chart.Point = Chart.Element.extend({
		display: true,
		inRange: function(chartX,chartY){
			var hitDetectionRange = this.hitDetectionRadius + this.radius;
			return ((Math.pow(chartX-this.x, 2)+Math.pow(chartY-this.y, 2)) < Math.pow(hitDetectionRange,2));
		},
		draw : function(){
			if (this.display){
				var ctx = this.ctx;
				ctx.beginPath();

				ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
				ctx.closePath();

				ctx.strokeStyle = this.strokeColor;
				ctx.lineWidth = this.strokeWidth;

				ctx.fillStyle = this.fillColor;

				ctx.fill();
				ctx.stroke();
			}


			//Quick debug for bezier curve splining
			//Highlights control points and the line between them.
			//Handy for dev - stripped in the min version.

			// ctx.save();
			// ctx.fillStyle = "black";
			// ctx.strokeStyle = "black"
			// ctx.beginPath();
			// ctx.arc(this.controlPoints.inner.x,this.controlPoints.inner.y, 2, 0, Math.PI*2);
			// ctx.fill();

			// ctx.beginPath();
			// ctx.arc(this.controlPoints.outer.x,this.controlPoints.outer.y, 2, 0, Math.PI*2);
			// ctx.fill();

			// ctx.moveTo(this.controlPoints.inner.x,this.controlPoints.inner.y);
			// ctx.lineTo(this.controlPoints.outer.x,this.controlPoints.outer.y);
			// ctx.stroke();

			// ctx.restore();



		}
	});

	Chart.Arc = Chart.Element.extend({
		inRange : function(chartX,chartY){

			var pointRelativePosition = helpers.getAngleFromPoint(this, {
				x: chartX,
				y: chartY
			});

			//Check if within the range of the open/close angle
			var betweenAngles = (pointRelativePosition.angle >= this.startAngle && pointRelativePosition.angle <= this.endAngle),
				withinRadius = (pointRelativePosition.distance >= this.innerRadius && pointRelativePosition.distance <= this.outerRadius);

			return (betweenAngles && withinRadius);
			//Ensure within the outside of the arc centre, but inside arc outer
		},
		tooltipPosition : function(){
			var centreAngle = this.startAngle + ((this.endAngle - this.startAngle) / 2),
				rangeFromCentre = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
			return {
				x : this.x + (Math.cos(centreAngle) * rangeFromCentre),
				y : this.y + (Math.sin(centreAngle) * rangeFromCentre)
			};
		},
		draw : function(animationPercent){

			var easingDecimal = animationPercent || 1;

			var ctx = this.ctx;

			ctx.beginPath();

			ctx.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle);

			ctx.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, true);

			ctx.closePath();
			ctx.strokeStyle = this.strokeColor;
			ctx.lineWidth = this.strokeWidth;

			ctx.fillStyle = this.fillColor;

			ctx.fill();
			ctx.lineJoin = 'bevel';

			if (this.showStroke){
				ctx.stroke();
			}
		}
	});

	Chart.Rectangle = Chart.Element.extend({
		draw : function(){
			var ctx = this.ctx,
				halfWidth = this.width/2,
				leftX = this.x - halfWidth,
				rightX = this.x + halfWidth,
				top = this.base - (this.base - this.y),
				halfStroke = this.strokeWidth / 2;

			// Canvas doesn't allow us to stroke inside the width so we can
			// adjust the sizes to fit if we're setting a stroke on the line
			if (this.showStroke){
				leftX += halfStroke;
				rightX -= halfStroke;
				top += halfStroke;
			}

			ctx.beginPath();

			ctx.fillStyle = this.fillColor;
			ctx.strokeStyle = this.strokeColor;
			ctx.lineWidth = this.strokeWidth;

			// It'd be nice to keep this class totally generic to any rectangle
			// and simply specify which border to miss out.
			ctx.moveTo(leftX, this.base);
			ctx.lineTo(leftX, top);
			ctx.lineTo(rightX, top);
			ctx.lineTo(rightX, this.base);
			ctx.fill();
			if (this.showStroke){
				ctx.stroke();
			}
		},
		height : function(){
			return this.base - this.y;
		},
		inRange : function(chartX,chartY){
			return (chartX >= this.x - this.width/2 && chartX <= this.x + this.width/2) && (chartY >= this.y && chartY <= this.base);
		}
	});

	Chart.Tooltip = Chart.Element.extend({
		draw : function(){

			var ctx = this.chart.ctx;

			ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

			this.xAlign = "center";
			this.yAlign = "above";

			//Distance between the actual element.y position and the start of the tooltip caret
			var caretPadding = 2;

			var tooltipWidth = ctx.measureText(this.text).width + 2*this.xPadding,
				tooltipRectHeight = this.fontSize + 2*this.yPadding,
				tooltipHeight = tooltipRectHeight + this.caretHeight + caretPadding;

			if (this.x + tooltipWidth/2 >this.chart.width){
				this.xAlign = "left";
			} else if (this.x - tooltipWidth/2 < 0){
				this.xAlign = "right";
			}

			if (this.y - tooltipHeight < 0){
				this.yAlign = "below";
			}


			var tooltipX = this.x - tooltipWidth/2,
				tooltipY = this.y - tooltipHeight;

			ctx.fillStyle = this.fillColor;

			switch(this.yAlign)
			{
			case "above":
				//Draw a caret above the x/y
				ctx.beginPath();
				ctx.moveTo(this.x,this.y - caretPadding);
				ctx.lineTo(this.x + this.caretHeight, this.y - (caretPadding + this.caretHeight));
				ctx.lineTo(this.x - this.caretHeight, this.y - (caretPadding + this.caretHeight));
				ctx.closePath();
				ctx.fill();
				break;
			case "below":
				tooltipY = this.y + caretPadding + this.caretHeight;
				//Draw a caret below the x/y
				ctx.beginPath();
				ctx.moveTo(this.x, this.y + caretPadding);
				ctx.lineTo(this.x + this.caretHeight, this.y + caretPadding + this.caretHeight);
				ctx.lineTo(this.x - this.caretHeight, this.y + caretPadding + this.caretHeight);
				ctx.closePath();
				ctx.fill();
				break;
			}

			switch(this.xAlign)
			{
			case "left":
				tooltipX = this.x - tooltipWidth + (this.cornerRadius + this.caretHeight);
				break;
			case "right":
				tooltipX = this.x - (this.cornerRadius + this.caretHeight);
				break;
			}

			drawRoundedRectangle(ctx,tooltipX,tooltipY,tooltipWidth,tooltipRectHeight,this.cornerRadius);

			ctx.fill();

			ctx.fillStyle = this.textColor;
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillText(this.text, tooltipX + tooltipWidth/2, tooltipY + tooltipRectHeight/2);
		}
	});

	Chart.MultiTooltip = Chart.Element.extend({
		initialize : function(){
			this.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

			this.titleFont = fontString(this.titleFontSize,this.titleFontStyle,this.titleFontFamily);

			this.height = (this.labels.length * this.fontSize) + ((this.labels.length-1) * (this.fontSize/2)) + (this.yPadding*2) + this.titleFontSize *1.5;

			this.ctx.font = this.titleFont;

			var titleWidth = this.ctx.measureText(this.title).width,
				//Label has a legend square as well so account for this.
				labelWidth = longestText(this.ctx,this.font,this.labels) + this.fontSize + 3,
				longestTextWidth = max([labelWidth,titleWidth]);

			this.width = longestTextWidth + (this.xPadding*2);


			var halfHeight = this.height/2;

			//Check to ensure the height will fit on the canvas
			//The three is to buffer form the very
			if (this.y - halfHeight < 0 ){
				this.y = halfHeight;
			} else if (this.y + halfHeight > this.chart.height){
				this.y = this.chart.height - halfHeight;
			}

			//Decide whether to align left or right based on position on canvas
			if (this.x > this.chart.width/2){
				this.x -= this.xOffset + this.width;
			} else {
				this.x += this.xOffset;
			}


		},
		getLineHeight : function(index){
			var baseLineHeight = this.y - (this.height/2) + this.yPadding,
				afterTitleIndex = index-1;

			//If the index is zero, we're getting the title
			if (index === 0){
				return baseLineHeight + this.titleFontSize/2;
			} else{
				return baseLineHeight + ((this.fontSize*1.5*afterTitleIndex) + this.fontSize/2) + this.titleFontSize * 1.5;
			}

		},
		draw : function(){
			drawRoundedRectangle(this.ctx,this.x,this.y - this.height/2,this.width,this.height,this.cornerRadius);
			var ctx = this.ctx;
			ctx.fillStyle = this.fillColor;
			ctx.fill();
			ctx.closePath();

			ctx.textAlign = "left";
			ctx.textBaseline = "middle";
			ctx.fillStyle = this.titleTextColor;
			ctx.font = this.titleFont;

			ctx.fillText(this.title,this.x + this.xPadding, this.getLineHeight(0));

			ctx.font = this.font;
			helpers.each(this.labels,function(label,index){
				ctx.fillStyle = this.textColor;
				ctx.fillText(label,this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(index + 1));

				//A bit gnarly, but clearing this rectangle breaks when using explorercanvas (clears whole canvas)
				//ctx.clearRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);
				//Instead we'll make a white filled block to put the legendColour palette over.

				ctx.fillStyle = this.legendColorBackground;
				ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);

				ctx.fillStyle = this.legendColors[index].fill;
				ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);


			},this);
		}
	});

	Chart.Scale = Chart.Element.extend({
		initialize : function(){
			this.fit();
		},
		buildYLabels : function(){
			this.yLabels = [];

			var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

			for (var i=0; i<=this.steps; i++){
				this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
			}
			this.yLabelWidth = (this.display && this.showLabels) ? longestText(this.ctx,this.font,this.yLabels) : 0;
		},
		addXLabel : function(label){
			this.xLabels.push(label);
			this.valuesCount++;
			this.fit();
		},
		removeXLabel : function(){
			this.xLabels.shift();
			this.valuesCount--;
			this.fit();
		},
		// Fitting loop to rotate x Labels and figure out what fits there, and also calculate how many Y steps to use
		fit: function(){
			// First we need the width of the yLabels, assuming the xLabels aren't rotated

			// To do that we need the base line at the top and base of the chart, assuming there is no x label rotation
			this.startPoint = (this.display) ? this.fontSize : 0;
			this.endPoint = (this.display) ? this.height - (this.fontSize * 1.5) - 5 : this.height; // -5 to pad labels

			// Apply padding settings to the start and end point.
			this.startPoint += this.padding;
			this.endPoint -= this.padding;

			// Cache the starting height, so can determine if we need to recalculate the scale yAxis
			var cachedHeight = this.endPoint - this.startPoint,
				cachedYLabelWidth;

			// Build the current yLabels so we have an idea of what size they'll be to start
			/*
			 *	This sets what is returned from calculateScaleRange as static properties of this class:
			 *
				this.steps;
				this.stepValue;
				this.min;
				this.max;
			 *
			 */
			this.calculateYRange(cachedHeight);

			// With these properties set we can now build the array of yLabels
			// and also the width of the largest yLabel
			this.buildYLabels();

			this.calculateXLabelRotation();

			while((cachedHeight > this.endPoint - this.startPoint)){
				cachedHeight = this.endPoint - this.startPoint;
				cachedYLabelWidth = this.yLabelWidth;

				this.calculateYRange(cachedHeight);
				this.buildYLabels();

				// Only go through the xLabel loop again if the yLabel width has changed
				if (cachedYLabelWidth < this.yLabelWidth){
					this.calculateXLabelRotation();
				}
			}

		},
		calculateXLabelRotation : function(){
			//Get the width of each grid by calculating the difference
			//between x offsets between 0 and 1.

			this.ctx.font = this.font;

			var firstWidth = this.ctx.measureText(this.xLabels[0]).width,
				lastWidth = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width,
				firstRotated,
				lastRotated;


			this.xScalePaddingRight = lastWidth/2 + 3;
			this.xScalePaddingLeft = (firstWidth/2 > this.yLabelWidth + 10) ? firstWidth/2 : this.yLabelWidth + 10;

			this.xLabelRotation = 0;
			if (this.display){
				var originalLabelWidth = longestText(this.ctx,this.font,this.xLabels),
					cosRotation,
					firstRotatedWidth;
				this.xLabelWidth = originalLabelWidth;
				//Allow 3 pixels x2 padding either side for label readability
				var xGridWidth = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6;

				//Max label rotate should be 90 - also act as a loop counter
				while ((this.xLabelWidth > xGridWidth && this.xLabelRotation === 0) || (this.xLabelWidth > xGridWidth && this.xLabelRotation <= 90 && this.xLabelRotation > 0)){
					cosRotation = Math.cos(toRadians(this.xLabelRotation));

					firstRotated = cosRotation * firstWidth;
					lastRotated = cosRotation * lastWidth;

					// We're right aligning the text now.
					if (firstRotated + this.fontSize / 2 > this.yLabelWidth + 8){
						this.xScalePaddingLeft = firstRotated + this.fontSize / 2;
					}
					this.xScalePaddingRight = this.fontSize/2;


					this.xLabelRotation++;
					this.xLabelWidth = cosRotation * originalLabelWidth;

				}
				if (this.xLabelRotation > 0){
					this.endPoint -= Math.sin(toRadians(this.xLabelRotation))*originalLabelWidth + 3;
				}
			}
			else{
				this.xLabelWidth = 0;
				this.xScalePaddingRight = this.padding;
				this.xScalePaddingLeft = this.padding;
			}

		},
		// Needs to be overidden in each Chart type
		// Otherwise we need to pass all the data into the scale class
		calculateYRange: noop,
		drawingArea: function(){
			return this.startPoint - this.endPoint;
		},
		calculateY : function(value){
			var scalingFactor = this.drawingArea() / (this.min - this.max);
			return this.endPoint - (scalingFactor * (value - this.min));
		},
		calculateX : function(index){
			var isRotated = (this.xLabelRotation > 0),
				// innerWidth = (this.offsetGridLines) ? this.width - offsetLeft - this.padding : this.width - (offsetLeft + halfLabelWidth * 2) - this.padding,
				innerWidth = this.width - (this.xScalePaddingLeft + this.xScalePaddingRight),
				valueWidth = innerWidth/(this.valuesCount - ((this.offsetGridLines) ? 0 : 1)),
				valueOffset = (valueWidth * index) + this.xScalePaddingLeft;

			if (this.offsetGridLines){
				valueOffset += (valueWidth/2);
			}

			return Math.round(valueOffset);
		},
		update : function(newProps){
			helpers.extend(this, newProps);
			this.fit();
		},
		draw : function(){
			var ctx = this.ctx,
				yLabelGap = (this.endPoint - this.startPoint) / this.steps,
				xStart = Math.round(this.xScalePaddingLeft);
			if (this.display){
				ctx.fillStyle = this.textColor;
				ctx.font = this.font;
				each(this.yLabels,function(labelString,index){
					var yLabelCenter = this.endPoint - (yLabelGap * index),
						linePositionY = Math.round(yLabelCenter);

					ctx.textAlign = "right";
					ctx.textBaseline = "middle";
					if (this.showLabels){
						ctx.fillText(labelString,xStart - 10,yLabelCenter);
					}
					ctx.beginPath();
					if (index > 0){
						// This is a grid line in the centre, so drop that
						ctx.lineWidth = this.gridLineWidth;
						ctx.strokeStyle = this.gridLineColor;
					} else {
						// This is the first line on the scale
						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
					}

					linePositionY += helpers.aliasPixel(ctx.lineWidth);

					ctx.moveTo(xStart, linePositionY);
					ctx.lineTo(this.width, linePositionY);
					ctx.stroke();
					ctx.closePath();

					ctx.lineWidth = this.lineWidth;
					ctx.strokeStyle = this.lineColor;
					ctx.beginPath();
					ctx.moveTo(xStart - 5, linePositionY);
					ctx.lineTo(xStart, linePositionY);
					ctx.stroke();
					ctx.closePath();

				},this);

				each(this.xLabels,function(label,index){
					var xPos = this.calculateX(index) + aliasPixel(this.lineWidth),
						// Check to see if line/bar here and decide where to place the line
						linePos = this.calculateX(index - (this.offsetGridLines ? 0.5 : 0)) + aliasPixel(this.lineWidth),
						isRotated = (this.xLabelRotation > 0);

					ctx.beginPath();

					if (index > 0){
						// This is a grid line in the centre, so drop that
						ctx.lineWidth = this.gridLineWidth;
						ctx.strokeStyle = this.gridLineColor;
					} else {
						// This is the first line on the scale
						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
					}
					ctx.moveTo(linePos,this.endPoint);
					ctx.lineTo(linePos,this.startPoint - 3);
					ctx.stroke();
					ctx.closePath();


					ctx.lineWidth = this.lineWidth;
					ctx.strokeStyle = this.lineColor;


					// Small lines at the bottom of the base grid line
					ctx.beginPath();
					ctx.moveTo(linePos,this.endPoint);
					ctx.lineTo(linePos,this.endPoint + 5);
					ctx.stroke();
					ctx.closePath();

					ctx.save();
					ctx.translate(xPos,(isRotated) ? this.endPoint + 12 : this.endPoint + 8);
					ctx.rotate(toRadians(this.xLabelRotation)*-1);
					ctx.font = this.font;
					ctx.textAlign = (isRotated) ? "right" : "center";
					ctx.textBaseline = (isRotated) ? "middle" : "top";
					ctx.fillText(label, 0, 0);
					ctx.restore();
				},this);

			}
		}

	});

	Chart.RadialScale = Chart.Element.extend({
		initialize: function(){
			this.size = min([this.height, this.width]);
			this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
		},
		calculateCenterOffset: function(value){
			// Take into account half font size + the yPadding of the top value
			var scalingFactor = this.drawingArea / (this.max - this.min);

			return (value - this.min) * scalingFactor;
		},
		update : function(){
			if (!this.lineArc){
				this.setScaleSize();
			} else {
				this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
			}
			this.buildYLabels();
		},
		buildYLabels: function(){
			this.yLabels = [];

			var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

			for (var i=0; i<=this.steps; i++){
				this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
			}
		},
		getCircumference : function(){
			return ((Math.PI*2) / this.valuesCount);
		},
		setScaleSize: function(){
			/*
			 * Right, this is really confusing and there is a lot of maths going on here
			 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
			 *
			 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
			 *
			 * Solution:
			 *
			 * We assume the radius of the polygon is half the size of the canvas at first
			 * at each index we check if the text overlaps.
			 *
			 * Where it does, we store that angle and that index.
			 *
			 * After finding the largest index and angle we calculate how much we need to remove
			 * from the shape radius to move the point inwards by that x.
			 *
			 * We average the left and right distances to get the maximum shape radius that can fit in the box
			 * along with labels.
			 *
			 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
			 * on each side, removing that from the size, halving it and adding the left x protrusion width.
			 *
			 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
			 * and position it in the most space efficient manner
			 *
			 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
			 */


			// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
			// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
			var largestPossibleRadius = min([(this.height/2 - this.pointLabelFontSize - 5), this.width/2]),
				pointPosition,
				i,
				textWidth,
				halfTextWidth,
				furthestRight = this.width,
				furthestRightIndex,
				furthestRightAngle,
				furthestLeft = 0,
				furthestLeftIndex,
				furthestLeftAngle,
				xProtrusionLeft,
				xProtrusionRight,
				radiusReductionRight,
				radiusReductionLeft,
				maxWidthRadius;
			this.ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
			for (i=0;i<this.valuesCount;i++){
				// 5px to space the text slightly out - similar to what we do in the draw function.
				pointPosition = this.getPointPosition(i, largestPossibleRadius);
				textWidth = this.ctx.measureText(template(this.templateString, { value: this.labels[i] })).width + 5;
				if (i === 0 || i === this.valuesCount/2){
					// If we're at index zero, or exactly the middle, we're at exactly the top/bottom
					// of the radar chart, so text will be aligned centrally, so we'll half it and compare
					// w/left and right text sizes
					halfTextWidth = textWidth/2;
					if (pointPosition.x + halfTextWidth > furthestRight) {
						furthestRight = pointPosition.x + halfTextWidth;
						furthestRightIndex = i;
					}
					if (pointPosition.x - halfTextWidth < furthestLeft) {
						furthestLeft = pointPosition.x - halfTextWidth;
						furthestLeftIndex = i;
					}
				}
				else if (i < this.valuesCount/2) {
					// Less than half the values means we'll left align the text
					if (pointPosition.x + textWidth > furthestRight) {
						furthestRight = pointPosition.x + textWidth;
						furthestRightIndex = i;
					}
				}
				else if (i > this.valuesCount/2){
					// More than half the values means we'll right align the text
					if (pointPosition.x - textWidth < furthestLeft) {
						furthestLeft = pointPosition.x - textWidth;
						furthestLeftIndex = i;
					}
				}
			}

			xProtrusionLeft = furthestLeft;

			xProtrusionRight = Math.ceil(furthestRight - this.width);

			furthestRightAngle = this.getIndexAngle(furthestRightIndex);

			furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);

			radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI/2);

			radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI/2);

			// Ensure we actually need to reduce the size of the chart
			radiusReductionRight = (isNumber(radiusReductionRight)) ? radiusReductionRight : 0;
			radiusReductionLeft = (isNumber(radiusReductionLeft)) ? radiusReductionLeft : 0;

			this.drawingArea = largestPossibleRadius - (radiusReductionLeft + radiusReductionRight)/2;

			//this.drawingArea = min([maxWidthRadius, (this.height - (2 * (this.pointLabelFontSize + 5)))/2])
			this.setCenterPoint(radiusReductionLeft, radiusReductionRight);

		},
		setCenterPoint: function(leftMovement, rightMovement){

			var maxRight = this.width - rightMovement - this.drawingArea,
				maxLeft = leftMovement + this.drawingArea;

			this.xCenter = (maxLeft + maxRight)/2;
			// Always vertically in the centre as the text height doesn't change
			this.yCenter = (this.height/2);
		},

		getIndexAngle : function(index){
			var angleMultiplier = (Math.PI * 2) / this.valuesCount;
			// Start from the top instead of right, so remove a quarter of the circle

			return index * angleMultiplier - (Math.PI/2);
		},
		getPointPosition : function(index, distanceFromCenter){
			var thisAngle = this.getIndexAngle(index);
			return {
				x : (Math.cos(thisAngle) * distanceFromCenter) + this.xCenter,
				y : (Math.sin(thisAngle) * distanceFromCenter) + this.yCenter
			};
		},
		draw: function(){
			if (this.display){
				var ctx = this.ctx;
				each(this.yLabels, function(label, index){
					// Don't draw a centre value
					if (index > 0){
						var yCenterOffset = index * (this.drawingArea/this.steps),
							yHeight = this.yCenter - yCenterOffset,
							pointPosition;

						// Draw circular lines around the scale
						if (this.lineWidth > 0){
							ctx.strokeStyle = this.lineColor;
							ctx.lineWidth = this.lineWidth;

							if(this.lineArc){
								ctx.beginPath();
								ctx.arc(this.xCenter, this.yCenter, yCenterOffset, 0, Math.PI*2);
								ctx.closePath();
								ctx.stroke();
							} else{
								ctx.beginPath();
								for (var i=0;i<this.valuesCount;i++)
								{
									pointPosition = this.getPointPosition(i, this.calculateCenterOffset(this.min + (index * this.stepValue)));
									if (i === 0){
										ctx.moveTo(pointPosition.x, pointPosition.y);
									} else {
										ctx.lineTo(pointPosition.x, pointPosition.y);
									}
								}
								ctx.closePath();
								ctx.stroke();
							}
						}
						if(this.showLabels){
							ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);
							if (this.showLabelBackdrop){
								var labelWidth = ctx.measureText(label).width;
								ctx.fillStyle = this.backdropColor;
								ctx.fillRect(
									this.xCenter - labelWidth/2 - this.backdropPaddingX,
									yHeight - this.fontSize/2 - this.backdropPaddingY,
									labelWidth + this.backdropPaddingX*2,
									this.fontSize + this.backdropPaddingY*2
								);
							}
							ctx.textAlign = 'center';
							ctx.textBaseline = "middle";
							ctx.fillStyle = this.fontColor;
							ctx.fillText(label, this.xCenter, yHeight);
						}
					}
				}, this);

				if (!this.lineArc){
					ctx.lineWidth = this.angleLineWidth;
					ctx.strokeStyle = this.angleLineColor;
					for (var i = this.valuesCount - 1; i >= 0; i--) {
						if (this.angleLineWidth > 0){
							var outerPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max));
							ctx.beginPath();
							ctx.moveTo(this.xCenter, this.yCenter);
							ctx.lineTo(outerPosition.x, outerPosition.y);
							ctx.stroke();
							ctx.closePath();
						}
						// Extra 3px out for some label spacing
						var pointLabelPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
						ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
						ctx.fillStyle = this.pointLabelFontColor;

						var labelsCount = this.labels.length,
							halfLabelsCount = this.labels.length/2,
							quarterLabelsCount = halfLabelsCount/2,
							upperHalf = (i < quarterLabelsCount || i > labelsCount - quarterLabelsCount),
							exactQuarter = (i === quarterLabelsCount || i === labelsCount - quarterLabelsCount);
						if (i === 0){
							ctx.textAlign = 'center';
						} else if(i === halfLabelsCount){
							ctx.textAlign = 'center';
						} else if (i < halfLabelsCount){
							ctx.textAlign = 'left';
						} else {
							ctx.textAlign = 'right';
						}

						// Set the correct text baseline based on outer positioning
						if (exactQuarter){
							ctx.textBaseline = 'middle';
						} else if (upperHalf){
							ctx.textBaseline = 'bottom';
						} else {
							ctx.textBaseline = 'top';
						}

						ctx.fillText(this.labels[i], pointLabelPosition.x, pointLabelPosition.y);
					}
				}
			}
		}
	});

	// Attach global event to resize each chart instance when the browser resizes
	helpers.addEvent(window, "resize", (function(){
		// Basic debounce of resize function so it doesn't hurt performance when resizing browser.
		var timeout;
		return function(){
			clearTimeout(timeout);
			timeout = setTimeout(function(){
				each(Chart.instances,function(instance){
					// If the responsive flag is set in the chart instance config
					// Cascade the resize event down to the chart.
					if (instance.options.responsive){
						instance.resize(instance.render, true);
					}
				});
			}, 50);
		};
	})());


	if (amd) {
		define(function(){
			return Chart;
		});
	} else if (typeof module === 'object' && module.exports) {
		module.exports = Chart;
	}

	root.Chart = Chart;

	Chart.noConflict = function(){
		root.Chart = previous;
		return Chart;
	};

}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;


	var defaultConfig = {
		//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
		scaleBeginAtZero : true,

		//Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,

		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",

		//Number - Width of the grid lines
		scaleGridLineWidth : 1,

		//Boolean - If there is a stroke on each bar
		barShowStroke : true,

		//Number - Pixel width of the bar stroke
		barStrokeWidth : 2,

		//Number - Spacing between each of the X value sets
		barValueSpacing : 5,

		//Number - Spacing between data sets within X values
		barDatasetSpacing : 1,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

	};


	Chart.Type.extend({
		name: "Bar",
		defaults : defaultConfig,
		initialize:  function(data){

			//Expose options as a scope variable here so we can access it in the ScaleClass
			var options = this.options;

			this.ScaleClass = Chart.Scale.extend({
				offsetGridLines : true,
				calculateBarX : function(datasetCount, datasetIndex, barIndex){
					//Reusable method for calculating the xPosition of a given bar based on datasetIndex & width of the bar
					var xWidth = this.calculateBaseWidth(),
						xAbsolute = this.calculateX(barIndex) - (xWidth/2),
						barWidth = this.calculateBarWidth(datasetCount);

					return xAbsolute + (barWidth * datasetIndex) + (datasetIndex * options.barDatasetSpacing) + barWidth/2;
				},
				calculateBaseWidth : function(){
					return (this.calculateX(1) - this.calculateX(0)) - (2*options.barValueSpacing);
				},
				calculateBarWidth : function(datasetCount){
					//The padding between datasets is to the right of each bar, providing that there are more than 1 dataset
					var baseWidth = this.calculateBaseWidth() - ((datasetCount - 1) * options.barDatasetSpacing);

					return (baseWidth / datasetCount);
				}
			});

			this.datasets = [];

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeBars = (evt.type !== 'mouseout') ? this.getBarsAtEvent(evt) : [];

					this.eachBars(function(bar){
						bar.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activeBars, function(activeBar){
						activeBar.fillColor = activeBar.highlightFill;
						activeBar.strokeColor = activeBar.highlightStroke;
					});
					this.showTooltip(activeBars);
				});
			}

			//Declare the extension of the default point, to cater for the options passed in to the constructor
			this.BarClass = Chart.Rectangle.extend({
				strokeWidth : this.options.barStrokeWidth,
				showStroke : this.options.barShowStroke,
				ctx : this.chart.ctx
			});

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset,datasetIndex){

				var datasetObject = {
					label : dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					bars : []
				};

				this.datasets.push(datasetObject);

				helpers.each(dataset.data,function(dataPoint,index){
					if (helpers.isNumber(dataPoint)){
						//Add a new point for each piece of data, passing any required data to draw.
						datasetObject.bars.push(new this.BarClass({
							value : dataPoint,
							label : data.labels[index],
							datasetLabel: dataset.label,
							strokeColor : dataset.strokeColor,
							fillColor : dataset.fillColor,
							highlightFill : dataset.highlightFill || dataset.fillColor,
							highlightStroke : dataset.highlightStroke || dataset.strokeColor
						}));
					}
				},this);

			},this);

			this.buildScale(data.labels);

			this.BarClass.prototype.base = this.scale.endPoint;

			this.eachBars(function(bar, index, datasetIndex){
				helpers.extend(bar, {
					width : this.scale.calculateBarWidth(this.datasets.length),
					x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
					y: this.scale.endPoint
				});
				bar.save();
			}, this);

			this.render();
		},
		update : function(){
			this.scale.update();
			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor', 'strokeColor']);
			});

			this.eachBars(function(bar){
				bar.save();
			});
			this.render();
		},
		eachBars : function(callback){
			helpers.each(this.datasets,function(dataset, datasetIndex){
				helpers.each(dataset.bars, callback, this, datasetIndex);
			},this);
		},
		getBarsAtEvent : function(e){
			var barsArray = [],
				eventPosition = helpers.getRelativePosition(e),
				datasetIterator = function(dataset){
					barsArray.push(dataset.bars[barIndex]);
				},
				barIndex;

			for (var datasetIndex = 0; datasetIndex < this.datasets.length; datasetIndex++) {
				for (barIndex = 0; barIndex < this.datasets[datasetIndex].bars.length; barIndex++) {
					if (this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x,eventPosition.y)){
						helpers.each(this.datasets, datasetIterator);
						return barsArray;
					}
				}
			}

			return barsArray;
		},
		buildScale : function(labels){
			var self = this;

			var dataTotal = function(){
				var values = [];
				self.eachBars(function(bar){
					values.push(bar.value);
				});
				return values;
			};

			var scaleOptions = {
				templateString : this.options.scaleLabel,
				height : this.chart.height,
				width : this.chart.width,
				ctx : this.chart.ctx,
				textColor : this.options.scaleFontColor,
				fontSize : this.options.scaleFontSize,
				fontStyle : this.options.scaleFontStyle,
				fontFamily : this.options.scaleFontFamily,
				valuesCount : labels.length,
				beginAtZero : this.options.scaleBeginAtZero,
				integersOnly : this.options.scaleIntegersOnly,
				calculateYRange: function(currentHeight){
					var updatedRanges = helpers.calculateScaleRange(
						dataTotal(),
						currentHeight,
						this.fontSize,
						this.beginAtZero,
						this.integersOnly
					);
					helpers.extend(this, updatedRanges);
				},
				xLabels : labels,
				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
				lineWidth : this.options.scaleLineWidth,
				lineColor : this.options.scaleLineColor,
				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
				padding : (this.options.showScale) ? 0 : (this.options.barShowStroke) ? this.options.barStrokeWidth : 0,
				showLabels : this.options.scaleShowLabels,
				display : this.options.showScale
			};

			if (this.options.scaleOverride){
				helpers.extend(scaleOptions, {
					calculateYRange: helpers.noop,
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				});
			}

			this.scale = new this.ScaleClass(scaleOptions);
		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets
			helpers.each(valuesArray,function(value,datasetIndex){
					if (helpers.isNumber(value)){
						//Add a new point for each piece of data, passing any required data to draw.
						this.datasets[datasetIndex].bars.push(new this.BarClass({
							value : value,
							label : label,
							x: this.scale.calculateBarX(this.datasets.length, datasetIndex, this.scale.valuesCount+1),
							y: this.scale.endPoint,
							width : this.scale.calculateBarWidth(this.datasets.length),
							base : this.scale.endPoint,
							strokeColor : this.datasets[datasetIndex].strokeColor,
							fillColor : this.datasets[datasetIndex].fillColor
						}));
					}
			},this);

			this.scale.addXLabel(label);
			//Then re-render the chart.
			this.update();
		},
		removeData : function(){
			this.scale.removeXLabel();
			//Then re-render the chart.
			helpers.each(this.datasets,function(dataset){
				dataset.bars.shift();
			},this);
			this.update();
		},
		reflow : function(){
			helpers.extend(this.BarClass.prototype,{
				y: this.scale.endPoint,
				base : this.scale.endPoint
			});
			var newScaleProps = helpers.extend({
				height : this.chart.height,
				width : this.chart.width
			});
			this.scale.update(newScaleProps);
		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			this.clear();

			var ctx = this.chart.ctx;

			this.scale.draw(easingDecimal);

			//Draw all the bars for each dataset
			helpers.each(this.datasets,function(dataset,datasetIndex){
				helpers.each(dataset.bars,function(bar,index){
					bar.base = this.scale.endPoint;
					//Transition then draw
					bar.transition({
						x : this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
						y : this.scale.calculateY(bar.value),
						width : this.scale.calculateBarWidth(this.datasets.length)
					}, easingDecimal).draw();
				},this);

			},this);
		}
	});


}).call(this);
(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		//Cache a local reference to Chart.helpers
		helpers = Chart.helpers;

	var defaultConfig = {
		//Boolean - Whether we should show a stroke on each segment
		segmentShowStroke : true,

		//String - The colour of each segment stroke
		segmentStrokeColor : "#fff",

		//Number - The width of each segment stroke
		segmentStrokeWidth : 2,

		//The percentage of the chart that we cut out of the middle.
		percentageInnerCutout : 50,

		//Number - Amount of animation steps
		animationSteps : 100,

		//String - Animation easing effect
		animationEasing : "easeOutBounce",

		//Boolean - Whether we animate the rotation of the Doughnut
		animateRotate : true,

		//Boolean - Whether we animate scaling the Doughnut from the centre
		animateScale : false,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

	};


	Chart.Type.extend({
		//Passing in a name registers this chart in the Chart namespace
		name: "Doughnut",
		//Providing a defaults will also register the deafults in the chart namespace
		defaults : defaultConfig,
		//Initialize is fired when the chart is initialized - Data is passed in as a parameter
		//Config is automatically merged by the core of Chart.js, and is available at this.options
		initialize:  function(data){

			//Declare segments as a static property to prevent inheriting across the Chart type prototype
			this.segments = [];
			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;

			this.SegmentArc = Chart.Arc.extend({
				ctx : this.chart.ctx,
				x : this.chart.width/2,
				y : this.chart.height/2
			});

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];

					helpers.each(this.segments,function(segment){
						segment.restore(["fillColor"]);
					});
					helpers.each(activeSegments,function(activeSegment){
						activeSegment.fillColor = activeSegment.highlightColor;
					});
					this.showTooltip(activeSegments);
				});
			}
			this.calculateTotal(data);

			helpers.each(data,function(datapoint, index){
				this.addData(datapoint, index, true);
			},this);

			this.render();
		},
		getSegmentsAtEvent : function(e){
			var segmentsArray = [];

			var location = helpers.getRelativePosition(e);

			helpers.each(this.segments,function(segment){
				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
			},this);
			return segmentsArray;
		},
		addData : function(segment, atIndex, silent){
			var index = atIndex || this.segments.length;
			this.segments.splice(index, 0, new this.SegmentArc({
				value : segment.value,
				outerRadius : (this.options.animateScale) ? 0 : this.outerRadius,
				innerRadius : (this.options.animateScale) ? 0 : (this.outerRadius/100) * this.options.percentageInnerCutout,
				fillColor : segment.color,
				highlightColor : segment.highlight || segment.color,
				showStroke : this.options.segmentShowStroke,
				strokeWidth : this.options.segmentStrokeWidth,
				strokeColor : this.options.segmentStrokeColor,
				startAngle : Math.PI * 1.5,
				circumference : (this.options.animateRotate) ? 0 : this.calculateCircumference(segment.value),
				label : segment.label
			}));
			if (!silent){
				this.reflow();
				this.update();
			}
		},
		calculateCircumference : function(value){
			return (Math.PI*2)*(value / this.total);
		},
		calculateTotal : function(data){
			this.total = 0;
			helpers.each(data,function(segment){
				this.total += segment.value;
			},this);
		},
		update : function(){
			this.calculateTotal(this.segments);

			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor']);
			});

			helpers.each(this.segments,function(segment){
				segment.save();
			});
			this.render();
		},

		removeData: function(atIndex){
			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
			this.segments.splice(indexToDelete, 1);
			this.reflow();
			this.update();
		},

		reflow : function(){
			helpers.extend(this.SegmentArc.prototype,{
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;
			helpers.each(this.segments, function(segment){
				segment.update({
					outerRadius : this.outerRadius,
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
				});
			}, this);
		},
		draw : function(easeDecimal){
			var animDecimal = (easeDecimal) ? easeDecimal : 1;
			this.clear();
			helpers.each(this.segments,function(segment,index){
				segment.transition({
					circumference : this.calculateCircumference(segment.value),
					outerRadius : this.outerRadius,
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
				},animDecimal);

				segment.endAngle = segment.startAngle + segment.circumference;

				segment.draw();
				if (index === 0){
					segment.startAngle = Math.PI * 1.5;
				}
				//Check to see if it's the last segment, if not get the next and update the start angle
				if (index < this.segments.length-1){
					this.segments[index+1].startAngle = segment.endAngle;
				}
			},this);

		}
	});

	Chart.types.Doughnut.extend({
		name : "Pie",
		defaults : helpers.merge(defaultConfig,{percentageInnerCutout : 0})
	});

}).call(this);
(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;

	var defaultConfig = {

		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,

		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",

		//Number - Width of the grid lines
		scaleGridLineWidth : 1,

		//Boolean - Whether the line is curved between points
		bezierCurve : true,

		//Number - Tension of the bezier curve between points
		bezierCurveTension : 0.4,

		//Boolean - Whether to show a dot for each point
		pointDot : true,

		//Number - Radius of each point dot in pixels
		pointDotRadius : 4,

		//Number - Pixel width of point dot stroke
		pointDotStrokeWidth : 1,

		//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
		pointHitDetectionRadius : 20,

		//Boolean - Whether to show a stroke for datasets
		datasetStroke : true,

		//Number - Pixel width of dataset stroke
		datasetStrokeWidth : 2,

		//Boolean - Whether to fill the dataset with a colour
		datasetFill : true,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

	};


	Chart.Type.extend({
		name: "Line",
		defaults : defaultConfig,
		initialize:  function(data){
			//Declare the extension of the default point, to cater for the options passed in to the constructor
			this.PointClass = Chart.Point.extend({
				strokeWidth : this.options.pointDotStrokeWidth,
				radius : this.options.pointDotRadius,
				display: this.options.pointDot,
				hitDetectionRadius : this.options.pointHitDetectionRadius,
				ctx : this.chart.ctx,
				inRange : function(mouseX){
					return (Math.pow(mouseX-this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius,2));
				}
			});

			this.datasets = [];

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activePoints = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];
					this.eachPoints(function(point){
						point.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activePoints, function(activePoint){
						activePoint.fillColor = activePoint.highlightFill;
						activePoint.strokeColor = activePoint.highlightStroke;
					});
					this.showTooltip(activePoints);
				});
			}

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset){

				var datasetObject = {
					label : dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					pointColor : dataset.pointColor,
					pointStrokeColor : dataset.pointStrokeColor,
					points : []
				};

				this.datasets.push(datasetObject);


				helpers.each(dataset.data,function(dataPoint,index){
					//Best way to do this? or in draw sequence...?
					if (helpers.isNumber(dataPoint)){
					//Add a new point for each piece of data, passing any required data to draw.
						datasetObject.points.push(new this.PointClass({
							value : dataPoint,
							label : data.labels[index],
							datasetLabel: dataset.label,
							strokeColor : dataset.pointStrokeColor,
							fillColor : dataset.pointColor,
							highlightFill : dataset.pointHighlightFill || dataset.pointColor,
							highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
						}));
					}
				},this);

				this.buildScale(data.labels);


				this.eachPoints(function(point, index){
					helpers.extend(point, {
						x: this.scale.calculateX(index),
						y: this.scale.endPoint
					});
					point.save();
				}, this);

			},this);


			this.render();
		},
		update : function(){
			this.scale.update();
			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor', 'strokeColor']);
			});
			this.eachPoints(function(point){
				point.save();
			});
			this.render();
		},
		eachPoints : function(callback){
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,callback,this);
			},this);
		},
		getPointsAtEvent : function(e){
			var pointsArray = [],
				eventPosition = helpers.getRelativePosition(e);
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,function(point){
					if (point.inRange(eventPosition.x,eventPosition.y)) pointsArray.push(point);
				});
			},this);
			return pointsArray;
		},
		buildScale : function(labels){
			var self = this;

			var dataTotal = function(){
				var values = [];
				self.eachPoints(function(point){
					values.push(point.value);
				});

				return values;
			};

			var scaleOptions = {
				templateString : this.options.scaleLabel,
				height : this.chart.height,
				width : this.chart.width,
				ctx : this.chart.ctx,
				textColor : this.options.scaleFontColor,
				fontSize : this.options.scaleFontSize,
				fontStyle : this.options.scaleFontStyle,
				fontFamily : this.options.scaleFontFamily,
				valuesCount : labels.length,
				beginAtZero : this.options.scaleBeginAtZero,
				integersOnly : this.options.scaleIntegersOnly,
				calculateYRange : function(currentHeight){
					var updatedRanges = helpers.calculateScaleRange(
						dataTotal(),
						currentHeight,
						this.fontSize,
						this.beginAtZero,
						this.integersOnly
					);
					helpers.extend(this, updatedRanges);
				},
				xLabels : labels,
				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
				lineWidth : this.options.scaleLineWidth,
				lineColor : this.options.scaleLineColor,
				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
				padding: (this.options.showScale) ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
				showLabels : this.options.scaleShowLabels,
				display : this.options.showScale
			};

			if (this.options.scaleOverride){
				helpers.extend(scaleOptions, {
					calculateYRange: helpers.noop,
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				});
			}


			this.scale = new Chart.Scale(scaleOptions);
		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets

			helpers.each(valuesArray,function(value,datasetIndex){
					if (helpers.isNumber(value)){
					//Add a new point for each piece of data, passing any required data to draw.
						this.datasets[datasetIndex].points.push(new this.PointClass({
							value : value,
							label : label,
							x: this.scale.calculateX(this.scale.valuesCount+1),
							y: this.scale.endPoint,
							strokeColor : this.datasets[datasetIndex].pointStrokeColor,
							fillColor : this.datasets[datasetIndex].pointColor
						}));
					}
			},this);

			this.scale.addXLabel(label);
			//Then re-render the chart.
			this.update();
		},
		removeData : function(){
			this.scale.removeXLabel();
			//Then re-render the chart.
			helpers.each(this.datasets,function(dataset){
				dataset.points.shift();
			},this);
			this.update();
		},
		reflow : function(){
			var newScaleProps = helpers.extend({
				height : this.chart.height,
				width : this.chart.width
			});
			this.scale.update(newScaleProps);
		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			this.clear();

			var ctx = this.chart.ctx;

			this.scale.draw(easingDecimal);


			helpers.each(this.datasets,function(dataset){

				//Transition each point first so that the line and point drawing isn't out of sync
				//We can use this extra loop to calculate the control points of this dataset also in this loop

				helpers.each(dataset.points,function(point,index){
					point.transition({
						y : this.scale.calculateY(point.value),
						x : this.scale.calculateX(index)
					}, easingDecimal);

				},this);


				// Control points need to be calculated in a seperate loop, because we need to know the current x/y of the point
				// This would cause issues when there is no animation, because the y of the next point would be 0, so beziers would be skewed
				if (this.options.bezierCurve){
					helpers.each(dataset.points,function(point,index){
						//If we're at the start or end, we don't have a previous/next point
						//By setting the tension to 0 here, the curve will transition to straight at the end
						if (index === 0){
							point.controlPoints = helpers.splineCurve(point,point,dataset.points[index+1],0);
						}
						else if (index >= dataset.points.length-1){
							point.controlPoints = helpers.splineCurve(dataset.points[index-1],point,point,0);
						}
						else{
							point.controlPoints = helpers.splineCurve(dataset.points[index-1],point,dataset.points[index+1],this.options.bezierCurveTension);
						}
					},this);
				}


				//Draw the line between all the points
				ctx.lineWidth = this.options.datasetStrokeWidth;
				ctx.strokeStyle = dataset.strokeColor;
				ctx.beginPath();
				helpers.each(dataset.points,function(point,index){
					if (index>0){
						if(this.options.bezierCurve){
							ctx.bezierCurveTo(
								dataset.points[index-1].controlPoints.outer.x,
								dataset.points[index-1].controlPoints.outer.y,
								point.controlPoints.inner.x,
								point.controlPoints.inner.y,
								point.x,
								point.y
							);
						}
						else{
							ctx.lineTo(point.x,point.y);
						}

					}
					else{
						ctx.moveTo(point.x,point.y);
					}
				},this);
				ctx.stroke();


				if (this.options.datasetFill){
					//Round off the line by going to the base of the chart, back to the start, then fill.
					ctx.lineTo(dataset.points[dataset.points.length-1].x, this.scale.endPoint);
					ctx.lineTo(this.scale.calculateX(0), this.scale.endPoint);
					ctx.fillStyle = dataset.fillColor;
					ctx.closePath();
					ctx.fill();
				}

				//Now draw the points over the line
				//A little inefficient double looping, but better than the line
				//lagging behind the point positions
				helpers.each(dataset.points,function(point){
					point.draw();
				});

			},this);
		}
	});


}).call(this);
(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		//Cache a local reference to Chart.helpers
		helpers = Chart.helpers;

	var defaultConfig = {
		//Boolean - Show a backdrop to the scale label
		scaleShowLabelBackdrop : true,

		//String - The colour of the label backdrop
		scaleBackdropColor : "rgba(255,255,255,0.75)",

		// Boolean - Whether the scale should begin at zero
		scaleBeginAtZero : true,

		//Number - The backdrop padding above & below the label in pixels
		scaleBackdropPaddingY : 2,

		//Number - The backdrop padding to the side of the label in pixels
		scaleBackdropPaddingX : 2,

		//Boolean - Show line for each value in the scale
		scaleShowLine : true,

		//Boolean - Stroke a line around each segment in the chart
		segmentShowStroke : true,

		//String - The colour of the stroke on each segement.
		segmentStrokeColor : "#fff",

		//Number - The width of the stroke value in pixels
		segmentStrokeWidth : 2,

		//Number - Amount of animation steps
		animationSteps : 100,

		//String - Animation easing effect.
		animationEasing : "easeOutBounce",

		//Boolean - Whether to animate the rotation of the chart
		animateRotate : true,

		//Boolean - Whether to animate scaling the chart from the centre
		animateScale : false,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
	};


	Chart.Type.extend({
		//Passing in a name registers this chart in the Chart namespace
		name: "PolarArea",
		//Providing a defaults will also register the deafults in the chart namespace
		defaults : defaultConfig,
		//Initialize is fired when the chart is initialized - Data is passed in as a parameter
		//Config is automatically merged by the core of Chart.js, and is available at this.options
		initialize:  function(data){
			this.segments = [];
			//Declare segment class as a chart instance specific class, so it can share props for this instance
			this.SegmentArc = Chart.Arc.extend({
				showStroke : this.options.segmentShowStroke,
				strokeWidth : this.options.segmentStrokeWidth,
				strokeColor : this.options.segmentStrokeColor,
				ctx : this.chart.ctx,
				innerRadius : 0,
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.scale = new Chart.RadialScale({
				display: this.options.showScale,
				fontStyle: this.options.scaleFontStyle,
				fontSize: this.options.scaleFontSize,
				fontFamily: this.options.scaleFontFamily,
				fontColor: this.options.scaleFontColor,
				showLabels: this.options.scaleShowLabels,
				showLabelBackdrop: this.options.scaleShowLabelBackdrop,
				backdropColor: this.options.scaleBackdropColor,
				backdropPaddingY : this.options.scaleBackdropPaddingY,
				backdropPaddingX: this.options.scaleBackdropPaddingX,
				lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
				lineColor: this.options.scaleLineColor,
				lineArc: true,
				width: this.chart.width,
				height: this.chart.height,
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2,
				ctx : this.chart.ctx,
				templateString: this.options.scaleLabel,
				valuesCount: data.length
			});

			this.updateScaleRange(data);

			this.scale.update();

			helpers.each(data,function(segment,index){
				this.addData(segment,index,true);
			},this);

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];
					helpers.each(this.segments,function(segment){
						segment.restore(["fillColor"]);
					});
					helpers.each(activeSegments,function(activeSegment){
						activeSegment.fillColor = activeSegment.highlightColor;
					});
					this.showTooltip(activeSegments);
				});
			}

			this.render();
		},
		getSegmentsAtEvent : function(e){
			var segmentsArray = [];

			var location = helpers.getRelativePosition(e);

			helpers.each(this.segments,function(segment){
				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
			},this);
			return segmentsArray;
		},
		addData : function(segment, atIndex, silent){
			var index = atIndex || this.segments.length;

			this.segments.splice(index, 0, new this.SegmentArc({
				fillColor: segment.color,
				highlightColor: segment.highlight || segment.color,
				label: segment.label,
				value: segment.value,
				outerRadius: (this.options.animateScale) ? 0 : this.scale.calculateCenterOffset(segment.value),
				circumference: (this.options.animateRotate) ? 0 : this.scale.getCircumference(),
				startAngle: Math.PI * 1.5
			}));
			if (!silent){
				this.reflow();
				this.update();
			}
		},
		removeData: function(atIndex){
			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
			this.segments.splice(indexToDelete, 1);
			this.reflow();
			this.update();
		},
		calculateTotal: function(data){
			this.total = 0;
			helpers.each(data,function(segment){
				this.total += segment.value;
			},this);
			this.scale.valuesCount = this.segments.length;
		},
		updateScaleRange: function(datapoints){
			var valuesArray = [];
			helpers.each(datapoints,function(segment){
				valuesArray.push(segment.value);
			});

			var scaleSizes = (this.options.scaleOverride) ?
				{
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				} :
				helpers.calculateScaleRange(
					valuesArray,
					helpers.min([this.chart.width, this.chart.height])/2,
					this.options.scaleFontSize,
					this.options.scaleBeginAtZero,
					this.options.scaleIntegersOnly
				);

			helpers.extend(
				this.scale,
				scaleSizes,
				{
					size: helpers.min([this.chart.width, this.chart.height]),
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2
				}
			);

		},
		update : function(){
			this.calculateTotal(this.segments);

			helpers.each(this.segments,function(segment){
				segment.save();
			});
			this.render();
		},
		reflow : function(){
			helpers.extend(this.SegmentArc.prototype,{
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.updateScaleRange(this.segments);
			this.scale.update();

			helpers.extend(this.scale,{
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2
			});

			helpers.each(this.segments, function(segment){
				segment.update({
					outerRadius : this.scale.calculateCenterOffset(segment.value)
				});
			}, this);

		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			//Clear & draw the canvas
			this.clear();
			helpers.each(this.segments,function(segment, index){
				segment.transition({
					circumference : this.scale.getCircumference(),
					outerRadius : this.scale.calculateCenterOffset(segment.value)
				},easingDecimal);

				segment.endAngle = segment.startAngle + segment.circumference;

				// If we've removed the first segment we need to set the first one to
				// start at the top.
				if (index === 0){
					segment.startAngle = Math.PI * 1.5;
				}

				//Check to see if it's the last segment, if not get the next and update the start angle
				if (index < this.segments.length - 1){
					this.segments[index+1].startAngle = segment.endAngle;
				}
				segment.draw();
			}, this);
			this.scale.draw();
		}
	});

}).call(this);
(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;



	Chart.Type.extend({
		name: "Radar",
		defaults:{
			//Boolean - Whether to show lines for each scale point
			scaleShowLine : true,

			//Boolean - Whether we show the angle lines out of the radar
			angleShowLineOut : true,

			//Boolean - Whether to show labels on the scale
			scaleShowLabels : false,

			// Boolean - Whether the scale should begin at zero
			scaleBeginAtZero : true,

			//String - Colour of the angle line
			angleLineColor : "rgba(0,0,0,.1)",

			//Number - Pixel width of the angle line
			angleLineWidth : 1,

			//String - Point label font declaration
			pointLabelFontFamily : "'Arial'",

			//String - Point label font weight
			pointLabelFontStyle : "normal",

			//Number - Point label font size in pixels
			pointLabelFontSize : 10,

			//String - Point label font colour
			pointLabelFontColor : "#666",

			//Boolean - Whether to show a dot for each point
			pointDot : true,

			//Number - Radius of each point dot in pixels
			pointDotRadius : 3,

			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 1,

			//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
			pointHitDetectionRadius : 20,

			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,

			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 2,

			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

		},

		initialize: function(data){
			this.PointClass = Chart.Point.extend({
				strokeWidth : this.options.pointDotStrokeWidth,
				radius : this.options.pointDotRadius,
				display: this.options.pointDot,
				hitDetectionRadius : this.options.pointHitDetectionRadius,
				ctx : this.chart.ctx
			});

			this.datasets = [];

			this.buildScale(data);

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activePointsCollection = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];

					this.eachPoints(function(point){
						point.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activePointsCollection, function(activePoint){
						activePoint.fillColor = activePoint.highlightFill;
						activePoint.strokeColor = activePoint.highlightStroke;
					});

					this.showTooltip(activePointsCollection);
				});
			}

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset){

				var datasetObject = {
					label: dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					pointColor : dataset.pointColor,
					pointStrokeColor : dataset.pointStrokeColor,
					points : []
				};

				this.datasets.push(datasetObject);

				helpers.each(dataset.data,function(dataPoint,index){
					//Best way to do this? or in draw sequence...?
					if (helpers.isNumber(dataPoint)){
					//Add a new point for each piece of data, passing any required data to draw.
						var pointPosition;
						if (!this.scale.animation){
							pointPosition = this.scale.getPointPosition(index, this.scale.calculateCenterOffset(dataPoint));
						}
						datasetObject.points.push(new this.PointClass({
							value : dataPoint,
							label : data.labels[index],
							datasetLabel: dataset.label,
							x: (this.options.animation) ? this.scale.xCenter : pointPosition.x,
							y: (this.options.animation) ? this.scale.yCenter : pointPosition.y,
							strokeColor : dataset.pointStrokeColor,
							fillColor : dataset.pointColor,
							highlightFill : dataset.pointHighlightFill || dataset.pointColor,
							highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
						}));
					}
				},this);

			},this);

			this.render();
		},
		eachPoints : function(callback){
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,callback,this);
			},this);
		},

		getPointsAtEvent : function(evt){
			var mousePosition = helpers.getRelativePosition(evt),
				fromCenter = helpers.getAngleFromPoint({
					x: this.scale.xCenter,
					y: this.scale.yCenter
				}, mousePosition);

			var anglePerIndex = (Math.PI * 2) /this.scale.valuesCount,
				pointIndex = Math.round((fromCenter.angle - Math.PI * 1.5) / anglePerIndex),
				activePointsCollection = [];

			// If we're at the top, make the pointIndex 0 to get the first of the array.
			if (pointIndex >= this.scale.valuesCount || pointIndex < 0){
				pointIndex = 0;
			}

			if (fromCenter.distance <= this.scale.drawingArea){
				helpers.each(this.datasets, function(dataset){
					activePointsCollection.push(dataset.points[pointIndex]);
				});
			}

			return activePointsCollection;
		},

		buildScale : function(data){
			this.scale = new Chart.RadialScale({
				display: this.options.showScale,
				fontStyle: this.options.scaleFontStyle,
				fontSize: this.options.scaleFontSize,
				fontFamily: this.options.scaleFontFamily,
				fontColor: this.options.scaleFontColor,
				showLabels: this.options.scaleShowLabels,
				showLabelBackdrop: this.options.scaleShowLabelBackdrop,
				backdropColor: this.options.scaleBackdropColor,
				backdropPaddingY : this.options.scaleBackdropPaddingY,
				backdropPaddingX: this.options.scaleBackdropPaddingX,
				lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
				lineColor: this.options.scaleLineColor,
				angleLineColor : this.options.angleLineColor,
				angleLineWidth : (this.options.angleShowLineOut) ? this.options.angleLineWidth : 0,
				// Point labels at the edge of each line
				pointLabelFontColor : this.options.pointLabelFontColor,
				pointLabelFontSize : this.options.pointLabelFontSize,
				pointLabelFontFamily : this.options.pointLabelFontFamily,
				pointLabelFontStyle : this.options.pointLabelFontStyle,
				height : this.chart.height,
				width: this.chart.width,
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2,
				ctx : this.chart.ctx,
				templateString: this.options.scaleLabel,
				labels: data.labels,
				valuesCount: data.datasets[0].data.length
			});

			this.scale.setScaleSize();
			this.updateScaleRange(data.datasets);
			this.scale.buildYLabels();
		},
		updateScaleRange: function(datasets){
			var valuesArray = (function(){
				var totalDataArray = [];
				helpers.each(datasets,function(dataset){
					if (dataset.data){
						totalDataArray = totalDataArray.concat(dataset.data);
					}
					else {
						helpers.each(dataset.points, function(point){
							totalDataArray.push(point.value);
						});
					}
				});
				return totalDataArray;
			})();


			var scaleSizes = (this.options.scaleOverride) ?
				{
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				} :
				helpers.calculateScaleRange(
					valuesArray,
					helpers.min([this.chart.width, this.chart.height])/2,
					this.options.scaleFontSize,
					this.options.scaleBeginAtZero,
					this.options.scaleIntegersOnly
				);

			helpers.extend(
				this.scale,
				scaleSizes
			);

		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets
			this.scale.valuesCount++;
			helpers.each(valuesArray,function(value,datasetIndex){
					if (helpers.isNumber(value)){
						var pointPosition = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(value));
						this.datasets[datasetIndex].points.push(new this.PointClass({
							value : value,
							label : label,
							x: pointPosition.x,
							y: pointPosition.y,
							strokeColor : this.datasets[datasetIndex].pointStrokeColor,
							fillColor : this.datasets[datasetIndex].pointColor
						}));
					}
			},this);

			this.scale.labels.push(label);

			this.reflow();

			this.update();
		},
		removeData : function(){
			this.scale.valuesCount--;
			this.scale.labels.shift();
			helpers.each(this.datasets,function(dataset){
				dataset.points.shift();
			},this);
			this.reflow();
			this.update();
		},
		update : function(){
			this.eachPoints(function(point){
				point.save();
			});
			this.reflow();
			this.render();
		},
		reflow: function(){
			helpers.extend(this.scale, {
				width : this.chart.width,
				height: this.chart.height,
				size : helpers.min([this.chart.width, this.chart.height]),
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2
			});
			this.updateScaleRange(this.datasets);
			this.scale.setScaleSize();
			this.scale.buildYLabels();
		},
		draw : function(ease){
			var easeDecimal = ease || 1,
				ctx = this.chart.ctx;
			this.clear();
			this.scale.draw();

			helpers.each(this.datasets,function(dataset){

				//Transition each point first so that the line and point drawing isn't out of sync
				helpers.each(dataset.points,function(point,index){
					point.transition(this.scale.getPointPosition(index, this.scale.calculateCenterOffset(point.value)), easeDecimal);
				},this);



				//Draw the line between all the points
				ctx.lineWidth = this.options.datasetStrokeWidth;
				ctx.strokeStyle = dataset.strokeColor;
				ctx.beginPath();
				helpers.each(dataset.points,function(point,index){
					if (index === 0){
						ctx.moveTo(point.x,point.y);
					}
					else{
						ctx.lineTo(point.x,point.y);
					}
				},this);
				ctx.closePath();
				ctx.stroke();

				ctx.fillStyle = dataset.fillColor;
				ctx.fill();

				//Now draw the points over the line
				//A little inefficient double looping, but better than the line
				//lagging behind the point positions
				helpers.each(dataset.points,function(point){
					point.draw();
				});

			},this);

		}

	});





}).call(this);