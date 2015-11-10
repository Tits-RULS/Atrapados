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
	});
	alert("Tras el login");
}

function toDuel(){
	//función que muestra los duelos(TODO)
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

function back(){
	switch(state){
	case 0:
		//Login o start page
		navigator.app.exitApp();
		break;
	case 1:
		//en la página de duelos
		document.location.href = "#start-page";
		state=0;
		break;
	case 2:
		//en el modo historia (pantalla de inicio)
		state=0;
		document.location.href = "#start-page";
		$("#timer").timer('remove');
		break;
	}
}