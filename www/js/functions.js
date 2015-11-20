var state=0;	//indica en que punto de la aplicación se encuentra

//Función de logeo
function login(){
	var name=$("#login-name").val();
	var pss=$("#login-pass").val();

	//Mandar petición y recibir respuesta
	$.getJSON("http://51.254.221.215/login.php?Nombre="+name+"&Pass="+pss,function(data){
		$.each(data,function(key,val){
			if(key=="Result"){
				alert(typeof(val));
				switch(val){
				case '0':
					//El login a sido correcto, almacenar y pasar a la siguiente página
					alert("login OK");
					window.localStorage.setItem('name',name);
					window.localStorage.setItem('pass',pss);
					window.localStorage.setItem('lvl',1);
					window.localStorage.setItem('maxpunt',0);
					window.localStorage.setItem('punt',0);
					window.localStorage.setItem('checkpunt',0);
					document.location.href = "#start-page";
					break;
				case '1':
					alert("Ya existe el usuario");
					break;
				case '-1':
					alert("Login erroneo");
					break;
				}
			}
		});
	})
	.fail(function(){
		alert("error conectando con el servidor");
	});
	//alert("Tras el login");
}

//Funcion para pasar al modo historia
function toHistory(){
	var lvl=window.localStorage.getItem('lvl');
	var punt=window.localStorage.getItem('punt');
	$("#level-h").text("Tu puntuación es: "+punt);
	$("#level-page").css("background-image","url(img/"+lvl+".jpg)");
	document.location.href = "#level-page";
	state=2;
}

//Funcion para pasar al modo de duelo
function toDuel(){
	//función que muestra los duelos
	//recoger los duelos del servidor
	var name = window.localStorage.getItem('name');
	var pass = window.localStorage.getItem('pass');
	//resetear el div
	$.post("http://51.254.221.215/getduels.php",{"name":name,"pss":pass},function(data){
		var start = "<table border='1'>";
		var end = "</table>";
		var table = "";
		//separar los distintos JSON en arrays
		var js = $.parseJSON(data);
		$.each(js,function(i,arr){
			if(arr.length==8){
				/*arr[0]=nombre1
				 *arr[1]=foto1
				 *arr[2]=punt1
				 *arr[3]=punt2
				 *arr[4]=nombre2
				 *arr[5]=foto2
				 *arr[6]=date
				 *arr[7]=duel id*/
				table = table + "<tr>";
				
				//parte del jugador 1
				if(arr[2]!=null&&arr[3]!=null&&arr[2]<arr[3]){
					//ganador jugador 1
					table = table + "<td align='center' data-name='"+arr[0]+"' onclick='toOnlineProfile(this)' width='30%' bgcolor='green'><font color='black'>"+arr[0]+"</font><br>";
				}else if(arr[2]!=null&&arr[3]!=null&&arr[2]>arr[3]){
					//ganador jugador 2
					table = table + "<td align='center' data-name='"+arr[0]+"' onclick='toOnlineProfile(this)' width='30%' bgcolor='red'><font color='black'>"+arr[0]+"</font><br>";
				}else{
					//no hay ganador
					table = table + "<td align='center' data-name='"+arr[0]+"' onclick='toOnlineProfile(this)' width='30%'><font color='black'>"+arr[0]+"</font><br>";
				}
				
				if(arr[1]==null){
					table = table + "<img src='img/comenzar.png' height='auto' width='100%'>";
				}else{
						table = table + "<img src='http://51.254.221.215/uploads/"+arr[1]+"' height='auto' width='100%'>";					
				}
				table = table + "</td>";
				
				//parte de puntuaciones
				if(arr[1]==name&&arr[2]==null){
					table = table + "<td align='center' width='40%' data-id='"+arr[7]+"' data-type='2' data-n1='"+arr[0]+"' data-n2='"+arr[4]+"' onclick='doDuel(this)'><font color='black'>"+arr[2]+"-"+arr[3]+"</font></td>";
				}else{
					if(arr[4]==name&&arr[3]==null){
						table = table + "<td align='center' width='40%' data-id='"+arr[7]+"' data-type='2' data-n1='"+arr[0]+"' data-n2='"+arr[4]+"' onclick='doDuel(this)'><font color='black'>"+arr[2]+"-"+arr[3]+"</font></td>";
					}else{
						table = table + "<td align='center' width='40%' ><font color='black'>"+arr[2]+"-"+arr[3]+"</font></td>";
					}
				}
				
				//parte de juador 2
				if(arr[2]!=null&&arr[3]!=null&&arr[2]<arr[3]){
					//ganador jugador 1
					table = table + "<td align='center' data-name='"+arr[4]+"' onclick='toOnlineProfile(this)' width='30%' bgcolor='red'><font color='black'>"+arr[4]+"</font><br>";
				}else if(arr[2]!=null&&arr[3]!=null&&arr[2]>arr[3]){
					//ganador jugador 2
					table = table + "<td align='center' data-name='"+arr[4]+"' onclick='toOnlineProfile(this)' width='30%' bgcolor='green'><font color='black'>"+arr[4]+"</font><br>";
				}else{
					//no hay ganador
					table = table + "<td align='center' data-name='"+arr[4]+"' onclick='toOnlineProfile(this)' width='30%'><font color='black'>"+arr[4]+"</font><br>";
				}
				if(arr[5]==null){
					table = table + "<img src='img/comenzar.png' height='auto' width='100%'>";
				}else{
					table = table + "<img src='http://51.254.221.215/uploads/"+arr[5]+"' height='auto' width='100%'>";
				}
				table = table + "</td></tr>";
			}else{
				/*arr[0]=nombre1
				 *arr[1]=foto1
				 *arr[2]=punt1
				 *arr[3]=date
				 *arr[4]=duel id*/
				table = table + "<tr>";
				table = table + "<td align='center' data-name='"+arr[0]+"' onclick='toOnlineProfile(this)' width='30%'><font color='black'>"+arr[0]+"</font><br>";
				if(arr[1]==null){
					table = table + "<img src='img/comenzar.png' height='auto' width='100%'>";
				}else{
					table = table + "<img src='http://51.254.221.215/uploads/"+arr[1]+"' height='auto' width='100%'>";
				}
				table = table + "</td>";
				if(arr[2]==null){
					table = table + "<td align='center' width='40%' data-id='"+arr[4]+"' data-type='1' onclick='doDuel(this)'><font color='black'>"+arr[2]+"-***</font></td>";
				}else{
					table = table + "<td align='center' width='40%' data-id='"+arr[4]+"'><font color='black'>"+arr[2]+"-***</font></td>";
				}
				table = table + "<td align='center'  width='30%'><font color='black'>***</font><br>";
				table = table + "</tr>";
			}
		});
		$("#duelos-table").html(start+table+end);
	});
	document.location.href = "#duel-page";
	state=1;
}

function toProfile(){
	state=3;
	var name = window.localStorage.getItem('name');
	$.post("http://51.254.221.215/getprofile.php",{"name":name,},function(data){
		js = $.parseJSON(data);
		$.each(js,function(key,val){
			switch(key){
			case "Nombre":
				$("#profile-name").text(val);
				break;
			case "Foto":
				if(val==null){
					//si no hay ninguna foto poner la de por defecto
					$("#profile-img").attr("src","img/comenzar.png");
				}
				else{
					//coger la foto
					d = new Date();
					$("#profile-img").attr("src","http://51.254.221.215/uploads/"+name+"?"+d.getTime());
				}
				break;
			case "PuntOnline":
				$("#profile-versus").text(val);
				break;
			case "MaxPunt":
				$("#profile-max").text(val);
				break;
			}
		});
		document.location.href  = "#profile-page";
	});
}

//Función que cambia la foto de perfil cogiendola del móvil
function changeFoto(){
	//Opciones de captura de foto
	var options = {
			quality: 50,
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY
	};
	
	//En caso de coger la foto correctamente (subirla al servidor)
	function onSuccess(imageURI){
		//Función en caso de que la subida sea correcta
		var win = function (r){			
			alert("response: "+r.response);
			var js = $.parseJSON(r.response);
			$.each(js,function(key,val){
				if(key=="Result"){
					switch(val){
					case '0':
						//Imagen subida correctamente
						alert("todo correcto");
						window.localStorage.setItem('foto',1);
						d = new Date();
						$("#profile-img").attr("src","http://51.254.221.215/uploads/"+name+"?"+d.getTime());
						break;
					case '-1':
						alert("usuario o contraseña erroneo");
						break;
					case '-2':
						alert("error al subir el fichero");
						break;
					case '-3':
						alert("error en la actulización de BD");
						break;
					}
				}
			});
		}
		
		//Funcion en caso de que la subida sea incorrecta
		var fail = function (error){
			alert("error al subir el archivo: "+error.responseCode);
		}
		
		//Opciones del fichero
		var options = new FileUploadOptions();
		options.fileKey = "picture";
		options.fileName = imageURI.substr(imageURI.lastIndexOf('/')+1);
		options.filemimeType = "img/jpeg";
		
		//Enviar nombre y contraseña
		var name = window.localStorage.getItem('name');
		var pass = window.localStorage.getItem('pass');
		var params = {};
		params.value1 = name;
		params.value2 = pass;

		options.params = params;
		
		alert("imageURI: "+imageURI);
		var ft = new FileTransfer();
		alert("antes del upload");
		ft.upload(imageURI,encodeURI("http://51.254.221.215/foto.php"),win,fail,options)
	}
	
	//En caso de no coger la foto correctamente
	function onFail(message){
		alert("error cogiendo foto")
	}
	
	navigator.camera.getPicture(onSuccess,onFail,options);
}

//Cambiar la foto de perfil por una foto recien sacada
function takeFoto(){
	//Opciones de captura de foto
	var options = {
			quality: 50,
			destinationType: Camera.DestinationType.FILE_URI
	};
	
	//En caso de coger la foto correctamente (subirla al servidor)
	function onSuccess(imageURI){
		var win = function (r){
			//Función en caso de que la subida sea correcta
			alert("response: "+r.response);
			var js = $.parseJSON(r.response);
			$.each(js,function(key,val){
				if(key=="Result"){
					switch(val){
					case '0':
						//imagen subida correctamente
						alert("todo correcto");
						window.localStorage.setItem('foto',1);
						d = new Date();
						$("#profile-img").attr("src","http://51.254.221.215/uploads/"+name+"?"+d.getTime());
						break;
					case '-1':
						alert("usuario o contraseña erroneo");
						break;
					case '-2':
						alert("error al subir el fichero");
						break;
					case '-3':
						alert("error en la actulización de BD");
						break;
					}
				}
			});
		}
		
		var fail = function (error){
			//problema alsubir el archivo
			alert("error al subir el archivo: "+error.responseCode);
		}
		
		//opciones del fichero
		var options = new FileUploadOptions();
		options.fileKey = "picture";
		options.fileName = imageURI.substr(imageURI.lastIndexOf('/')+1);
		options.filemimeType = "img/jpeg";
		
		//enviar nombre y contraseña
		var name = window.localStorage.getItem('name');
		var pass = window.localStorage.getItem('pass');
		var params = {};
		params.value1 = name;
		params.value2 = pass;
		
		options.params = params;
		
		alert("imageURI: "+imageURI);
		var ft = new FileTransfer();
		alert("antes del upload");
		ft.upload(imageURI,encodeURI("http://51.254.221.215/foto.php"),win,fail,options)
	}
	
	function onFail(message){
		alert("error cogiendo foto")
	}
	
	navigator.camera.getPicture(onSuccess,onFail,options);
}

function back(){
	switch(state){
	case 0:
		//login o start page
		navigator.app.exitApp();
		break;
	case 1:
		//en la pagina de duelos
		document.location.href = "#start-page";
		state = 0;
		break;
	case 2:
		//en el modo historia
		state=0;
		document.location.href = "#start-page";
		$("#timer").timer('remove');
		break;
	case 3:
		//en ajusters
		document.location.href = "#start-page";
		state = 0;
		break;
	}
}

function toOnlineProfile(elem){
	var name = elem.getAttribute("data-name");
	$.post("http://51.254.221.215/getprofile.php",{"name":name,},function(data){
		js = $.parseJSON(data);
		$.each(js,function(key,val){
			switch(key){
			case "Nombre":
				$("#oprofile-name").text(val);
				break;
			case "Foto":
				if(val==null){
					//si no hay ninguna foto poner la de por defecto
					$("#oprofile-img").attr("src","img/comenzar.png");
				}
				else{
					//coger la foto
					d = new Date();
					$("#oprofile-img").attr("src","http://51.254.221.215/uploads/"+name+"?"+d.getTime());
				}
				break;
			case "PuntOnline":
				$("#oprofile-versus").text(val);
				break;
			case "MaxPunt":
				$("#oprofile-max").text(val);
				break;
			}
		});
		document.location.href  = "#onlineP-page";
	});
}

function newDuel(){
	//crea un nuevoduelo
	//nuevo estado?
	startDuel();
}