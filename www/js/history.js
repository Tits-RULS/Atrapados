var correct;	//almacena la respuesta correcta
var error;		//lleva la cuenta de los errores por nivel
var lvlpunt;	//lleva la puntuación por nivel
var gsub;		//variable global para saberla materia elegida
var count;		//cuntas las respuestas correctas por nivel
var first;		//indica si se ha respondido erroneamente ese pregunta

function toSubject(){
	document.location.href = "#subject-page";
	//inicializar nivel
	$("button[id|='subject']").each(
		function(){
			$(this).show();
		}	
	);
	error=0;
	lvlpunt=0;
	count=0
}

function next(elem){
	//elegir el tema y la pregunta de manera aleatoria
	var subject=$(elem).val();
	var i=Math.floor((Math.random()*3));
	document.location.href = "#question-page";
	load(i,subject);
}

//función que carga pregunta, las respuestas y selecciona lo correcto
function load(i,subject){
	//establecer el estilo según el tema
	themeStyle(subject);
	gsub = subject;
	//para usar el tema como index se debe pasar a INT
	var sub = parseInt(subject);
	//extraer el nivel de lo almacenado internamente
	var lvl = window.localStorage.getItem('lvl');
	//cargar la pregunta y las respuestas
	$("#question").text(tests.test[sub][lvl-1][i].question);
	$("button[id|='question-button']").each(
 			function(index) {
 				$(this).text(tests.test[sub][lvl-1][i].resp[index]);
 				$(this).css("background-color","white");
 			}
 	);
	correct=tests.test[sub][lvl-1][i].correct;
	//inicializar el indicador de primera respuesta y el tiempo
	first=0;
	$("#timer").timer();
}

//función para comprobar el resultado y realizar las acciones correspondientes
function result(elem){
	//extraer el valor de la respuesta y comprobar si es correcta
	var val=$(elem).val();
	if(val==correct){
		//correcto (para y eliminar el timer)
		var time=$("#timer").data('seconds');
		alert("CORRECTO "+time+" segundos");
		$("#timer").timer('remove');
		//comprobar puntuación y actulizar
		if(time<30){
			lvlpunt+=200;
		}
		else{
			if(time<60){
				lvlpunt+=150;
			}
			else{
				lvlpunt+=100
			}
		}
		if(first==0){
			lvlpunt+=25;
		}
		//comprobar si se ha pasado el nivel
		if(count==5){
			//nivel superado
			//actualizar la puntuación de esta partida
			var punt = parseInt(window.localStorage.getItem('punt'));
			punt += lvlpunt;
			window.localStorage.setItem('punt',punt);
			//comprobar si es un nivel de check
			var lvl = window.localStorage.getItem('lvl');
			switch(lvl){
			case '1':
				window.localStorage.setItem('checkpunt',punt);
				break;
			case '3':
				window.localStorage.setItem('checkpunt',punt);
				break;
			case '7':
				window.localStorage.setItem('checkpunt',punt);
				break;
			case '10':
				//superado el juego
				var name = window.localStorage.getItem('name');
				$("#congrat-name").text("Enhorabuena "+name);
				var punt = window.localStorage.getItem('punt');
				$("#congrat-punt").text("Tu puntuación es: "+punt);
				var max = window.localStorage.getItem('maxpunt');
				//comprobar máxima puntuación (TODO)
				if(max<punt){
					max=punt;
					window.localStorage.setItem('maxpunt',punt);
					pss = window.localStorage.getItem('pass');
					//mandar petición y recibir respuesta
					$.getJSON("http://51.254.221.215/setmax.php?Nombre="+name+"&Pass="+pss+"&Max="+max,function(data){
						$.each(data,function(key,val){
							if(key=="Result"){
								switch(val){
								case '1':
									//maximo cambiado correctamente
									alert("Máximo modificado correctamente");
									break;
								case '-1':
									//usuario o contraseña erróneos
									alert("Usuario o contraseña erróneo");
									break;
								case '-2':
									//no es puntuación máxima
									alert("la puntuació no es máxima");
									break;
								case '-3':
									//respuesta con error
									alert("respuesta con error");
									break;
								}
							}
						});
					});
				}
				
				$("#congrat-max").text("Tu puntuación máxima: "+max);
				//reiniciar la historia
				window.localStorage.setItem('punt',0);
				window.localStorage.setItem('lvl',1);
				window.localStorage.setItem('checkpunt',0);
				document.location.href = "#congrat-page";
				return 1;
				break;
			}
			//actualizar nivel y almacenarlo
			lvl++;
			window.localStorage.setItem('lvl',lvl);
			//volver a cargar la pantalla de inicio de historia
			toHistory();
		}
		else{
			//no se ha terminado el nivel
			//actualizar el contador de preguntas correctas
			count++;
			$('#subject-'+gsub+'-button').hide();
			document.location.href = "#subject-page";
		}
	}
	else{
		//erroneo
		//comprobar cuantos errores se han realizado en el nivel
		if(error==2){
			//cubierto el cupo de errores
			//eliminar el timer
			$("#timer").timer('remove');
			alert("Todos los errores consumidos");
			//mandar a checkpoint
			var lvl = window.localStorage.getItem('lvl');
			switch(lvl){
			case '3':
				var check = window.localStorage.getItem('checkpunt');
				window.localStorage.setItem('punt',check);
				window.localStorage.setItem('lvl',2);
				break;
			case '5':
				var check = window.localStorage.getItem('checkpunt');
				window.localStorage.setItem('punt',check);
				window.localStorage.setItem('lvl',4);
				break;
			case '6':
				var check = window.localStorage.getItem('checkpunt');
				window.localStorage.setItem('punt',check);
				window.localStorage.setItem('lvl',4);
				break;
			case '7':
				var check = window.localStorage.getItem('checkpunt');
				window.localStorage.setItem('punt',check);
				window.localStorage.setItem('lvl',4);
				break;
			case '9':
				var check = window.localStorage.getItem('checkpunt');
				window.localStorage.setItem('punt',check);
				window.localStorage.setItem('lvl',8);
				break;
			case '10':
				var check = window.localStorage.getItem('checkpunt');
				window.localStorage.setItem('punt',check);
				window.localStorage.setItem('lvl',8);
				break;
			}
			//cargar la página de inicio del modo historia
			toHistory();
		}
		else{
			//error pero los errores no han sido consumidos
			error++;
			first++;
			alert("ERROR");
			elem.style.backgroundColor = "red";
		}
	}	
}

function themeStyle(i){
	//Función para cambiar el estilo del test acorde al tema
	switch(i){
	case "0"://Conocimiento del medio
		$("#question-page").css("background-color", "greenyellow");
		$("#question_title").html("Conocimiento del medio");
		break;
	case "1"://Matemáticas
		$("#question-page").css("background-color", "mediumturquoise");
		$("#question_title").html("Matemáticas");
		break;
	case "2"://Lengua
		$("#question-page").css("background-color", "orange");
		$("#question_title").html("Lengua");
		break;
	case "3"://Plástica
		$("#question-page").css("background-color", "plum");
		$("#question_title").html("Plástica");
		break;
	case "4"://Música
		$("#question-page").css("background-color", "gold");
		$("#question_title").html("Música");
		break;
	case "5"://Gimnasia
		$("#question-page").css("background-color", "lightcoral");
		$("#question_title").html("Gimnasia");
		break;
	}
}
