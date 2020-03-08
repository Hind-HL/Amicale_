// JavaScript Document





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
		
		function gestion()
		{
			document.getElementById('form').style.width=('850px')
			document.getElementById('message').style.display="none"
			document.getElementById('form').innerHTML='<div id="manu" style="width:350px;margin-left:auto;margin-right:auto"><img style="float:left" src="img/user-group-new.png" height="60" width="60" /><img src="img/Edit-Male-User.png" style="float:right" height="60" width="60" /></div>'+document.getElementById('form').innerHTML
			fen()
			recalPose()
		}
		
		function ValChange()
		{
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
		}
		
		
		
		function confcmpt(CIN)
		{
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
				top : (ht-14)+'%',
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
								document.getElementById("message").innerHTML="Vous êtes bien inscrit Mr(Mdm)."+nom+" "+prenom
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
								document.getElementById("message").innerHTML="<div id='msg'>Le CIN "+cin+" est déja utilisé par un autre utilisateur!<br />avez vous oublier votre mot de passe ?<button onclick='forgot("+'"'+cin+'"'+")' class='bouton'>Oui</button><button onclick='ferme()' class='bouton'>Non</button></div>"
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
					document.getElementById("hona").innerHTML=xmlhttp.responseText
					$('#hona').fadeIn("slow")
					h=$('#detArticl').height()
					$('#detArticl').height(h+30)
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
					document.getElementById("hona").innerHTML=xmlhttp.responseText
					$('#hona').fadeIn("slow")
					h=$('#detArticl').height()
					$('#detArticl').height(h+30)
				}
			}
			
			xmlhttp.open("GET","sgbd.php?detEvent2=ok&IDEvent="+a,true);
			xmlhttp.send(null);
		}
		
		function undo()
		{
			$('#hona').fadeOut("fast")
			setTimeout(function(){document.body.innerHTML = oldBody},250)
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
		
		
	
		
		
		activat = ""
		hting = 0
		test = 0
		
		
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
					if(xmlhttp.responseText!="0" && xmlhttp.responseText!="1")
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
						msg.innerHTML="Vos cordonnées sont envoyé à l'adresse e-mail : <b>"+ml+"@"+elem[1]+"</b>"
						$('#message').height('auto')
					}
					else if(xmlhttp.responseText=="1")
					{
						
						alert(xmlhttp.responseText)
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
		
		setTimeout(function(){if(document.getElementById('manu')){document.getElementById('manu').parentNode.removeChild(document.getElementById('manu'));}document.getElementById('message').innerHTML="";document.getElementById('message').style.backgroundColor=('rgba(255,255,255,1)');$('#form').width('330px');$('#form').height('auto');document.getElementById('message').style.display=''},400)
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
							else if(xmlhttp.responseText==4)
							{
								document.getElementById('message').innerHTML="<center>Votre compte est actuellement désactiver.<br/>Pour plus d'information contacté l'administration<br/><button class='bouton' onclick='ferme()'>OK</button></center>"
								fen()
								recalPose()
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
		