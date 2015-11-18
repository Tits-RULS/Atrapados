var state=0;	//indica en que punto de la aplicación se encuentra

//Función de logeo
function login(){
	var name=$("#login-name").val();
	var pss=$("#login-pass").val();
	//mandar petición y recibir respuesta
	$.getJSON("http://51.254.221.215/login.php?Nombre="+name+"&Pass="+pss,function(data){
		$.each(data,function(key,val){
			if(key=="Result"){
				alert(typeof(val));
				switch(val){
				case '0':
					//el login a sido correcto, almacenar y pasar a la siguiente página
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
	alert("Tras el login");
}

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
				table = table + "<td data-name='"+arr[0]+"' onclick='toOnlineProfile(this)' width='30%'>"+arr[0]+"<br>";
				if(arr[1]==null){
					table = table + "<img src='img/comenzar.png' height='auto' width='100%'>";
				}else{
					table = table + "<img src='http://51.254.221.215/uploads/"+arr[1]+"' height='auto' width='100%'>";
				}
				table = table + "</td>";
				table = table + "<td width='40%'>"+arr[2]+"-"+arr[3]+"</td>";
				table = table + "<td data-name='"+arr[4]+"' onclick='toOnlineProfile(this)' width='30%'>"+arr[4]+"<br>";
				if(arr[5]==null){
					table = table + "<img src='img/comenzar.png' height='auto' width='100%'>";
				}else{
					table = table + "<img src='http://51.254.221.215/uploads/"+arr[5]+"' height='auto' width='100%'>";
				}
				table = table + "</tr>";
			}else{
				/*arr[0]=nombre1
				 *arr[1]=foto1
				 *arr[2]=punt1
				 *arr[3]=date
				 *arr[4]=duel id*/
				table = table + "<tr>";
				table = table + "<td data-name='"+arr[0]+"' onclick='toOnlineProfile(this)' width='30%'>"+arr[0]+"<br>";
				if(arr[1]==null){
					table = table + "<img src='img/comenzar.png' height='auto' width='100%'>";
				}else{
					table = table + "<img src='http://51.254.221.215/uploads/"+arr[1]+"' height='auto' width='100%'>";
				}
				table = table + "</td>";
				table = table + "<td width='60%' data-id='"+arr[4]+"'>"+arr[2]+"-***</td>";
				table = table + "<td  width='30%'>***<br>";
				table = table + "</tr>";
			}
		});
		$("#duelos-table").html(start+table+end);
	});
	document.location.href = "#duel-page";
	state=1;
}
function toHistory(){
	//Pasa al modo historia
	var lvl=window.localStorage.getItem('lvl');
	var punt=window.localStorage.getItem('punt');
	$("#level-h").text("Tu nivel es: "+lvl+" Tu puntuación es: "+punt);
	document.location.href = "#level-page";
	state=2;
}

function toProfile(){
	state=3;
	var name = window.localStorage.getItem('name');
	$("#profile-name").text("Nombre de usuario: "+name);
	if(localStorage.getItem("foto")==null){
		//si no hay ninguna foto poner la de por defecto
		$("#profile-img").attr("src","img/comenzar.png");
	}
	else{
		//coger la foto
		d = new Date();
		$("#profile-img").attr("src","http://51.254.221.215/uploads/"+name+"?"+d.getTime());
	}
	document.location.href = "#profile-page";
}

//función que cambia la foto de perfil cogiendola del móbil
function changeFoto(){
	//opciones de captura de foto
	var options = {
			quality: 50,
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY
	};
	
	//en caso de coger la foto correctamente (subirla al servidor)
	function onSuccess(imageURI){
		var win = function (r){
			//función en caso de que la subida sea correcta
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

//cambia la foto de perfil por una foto recien sacada
function takeFoto(){
	//opciones de captura de foto
	var options = {
			quality: 50,
			destinationType: Camera.DestinationType.FILE_URI
	};
	
	//en caso de coger la foto correctamente (subirla al servidor)
	function onSuccess(imageURI){
		var win = function (r){
			//función en caso de que la subida sea correcta
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
	alert("en funcion nueva");
	var name = elem.getAttribute("data-name");
	$("#online-name").text("Nombre: "+name);
	document.location.href  = "#onlineP-page";
}

function newDuel(){
	//crea un nuevoduelo
	//nuevo estado?
	startDuel();
}