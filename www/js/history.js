//Variables globales del programa
var correct;	//almacena la respuesta correcta
var error;		//lleva la cuenta de los errores por nivel
var lvlpunt;	//lleva la puntuación por nivel
var gsub;		//variable global para saber la materia elegida
var count;		//cuntas las respuestas correctas por nivel
var first;		//indica si se ha respondido erroneamente ese pregunta


//Función para generar la página de temas
function toSubject(){
	document.location.href = "#subject-page";
	//Ajustar datos de nivel
	$("#numero-planta").text(window.localStorage.getItem('lvl'));
	$("#puntuacion-nivel").text("0");
	$("#nombre-usuario").text(window.localStorage.getItem('name'));

	//Inicializar nivel (Mostrar las puertas cerradas y ocultar las abiertas)
	$("input[id|='subjectb']").each(
		function(){
			$(this).show();
		}	
	);
	$("img[id|='subjecti']").each(
			function(){
				$(this).hide();
			}	
	);
	error=0;
	lvlpunt=0;
	count=0
}


function next(elem){
	//elegir el tema y la pregunta de manera aleatoria
	var subject=$(elem).val();
	load(subject);
}

//Función que genera la página de test
function load(subject){
	//Establecer el estilo según el tema
	themeStyle(subject);
	gsub = subject;
	
	var strsub;
	//Asociar el número de tema a su valor de str
	switch(subject){
	case '0':
		strsub="Conocimiento+del+medio";
		break;
	case '1':
		strsub="Matematicas";
		break;
	case '2':
		strsub="Lengua";
		break;
	case '3':
		strsub="Ingles";
		break;
	case '4':
		strsub="Musica";
		break;
	case '5':
		strsub="Gimnasia";
		break;
	}

	//Extraer el nivel en el que está el jugador de lo almacenado internamente
	var lvl = window.localStorage.getItem('lvl');

	//Limpiar los botones
	$("button[id|='question-button']").each(
			function(index){
				$(this).text("");
				$(this).css("background-color","white");
			}
	);

	//Cargar la pregunta y las respuestas del servidor	
	$.getJSON("http://51.254.221.215/getquestion.php?Tema="+strsub+"&lvl="+lvl,function(data){
		var error;
		$.each(data,function(key,val){
			switch(key){
			case "Result":
				alert("error recogiendo la pregunta");
				error = 1;
				break;
			case "Pregunta":
				$("#question").text(val);
				break;
			case "R1":
				$("#question-button-1").text(val);
				break;
			case "R2":
				$("#question-button-2").text(val);
				break;
			case "R3":
				$("#question-button-3").text(val);
				break;
			case "R4":
				$("#question-button-4").text(val);
				break;
			case "Correcta":
				correct=val;
				break;
			}
		});
		if(error!=1){
			//Inicializar el indicador de primera respuesta y el tiempo
			first=0;
			$("#timer").timer();
			document.location.href = "#question-page";
		}
	});
}

//Función para cambiar el estilo del test acorde al tema
function themeStyle(i){	
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
		$("#question_title").html("Inglés");
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

//Función para comprobar el resultado y realizar las acciones correspondientes
function result(elem){
	//Extraer el valor de la respuesta y comprobar si es correcta
	var val=$(elem).val();

	if(val==correct){ //Correcto
		//Parar y eliminar el timer)
		var time=$("#timer").data('seconds');
		alert("CORRECTO "+time+" segundos");
		$("#timer").timer('remove');
		
		//Comprobar puntuación y actulizar
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

		//Comprobar si se ha pasado el nivel
		if(count==5){ //Nivel superado
			//Actualizar la puntuación de esta partida
			var punt = parseInt(window.localStorage.getItem('punt'));
			punt += lvlpunt;
			window.localStorage.setItem('punt',punt);
			
			//Comprobar si es un nivel de check
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
				//Superado el juego
				var name = window.localStorage.getItem('name');
				$("#congrat-name").text("Enhorabuena "+name);
				var punt = window.localStorage.getItem('punt');
				$("#congrat-punt").text("Tu puntuación es: "+punt);
				var max = window.localStorage.getItem('maxpunt');
				
				//Comprobar máxima puntuación (TODO)
				if(max<punt){
					max=punt;
					window.localStorage.setItem('maxpunt',punt);
					pss = window.localStorage.getItem('pass');
					
					//Mandar petición y recibir respuesta
					$.getJSON("http://51.254.221.215/setmax.php?Nombre="+name+"&Pass="+pss+"&Max="+max,function(data){
						$.each(data,function(key,val){
							if(key=="Result"){
								switch(val){
								case '1':
									//Maximo cambiado correctamente
									alert("Máximo modificado correctamente");
									break;
								case '-1':
									//Usuario o contraseña erróneos
									alert("Usuario o contraseña erróneo");
									break;
								case '-2':
									//No es puntuación máxima
									alert("la puntuació no es máxima");
									break;
								case '-3':
									//Respuesta con error
									alert("respuesta con error");
									break;
								}
							}
						});
					});
				}
				$("#congrat-max").text("Tu puntuación máxima: "+max);
				
				//Reiniciar la historia
				window.localStorage.setItem('punt',0);
				window.localStorage.setItem('lvl',1);
				window.localStorage.setItem('checkpunt',0);
				document.location.href = "#congrat-page";
				return 1;
				break;
			}

			//Actualizar nivel y almacenarlo
			lvl++;
			window.localStorage.setItem('lvl',lvl);
			
			//cargar el video de subida
			document.location.href = "#div-up";
			document.getElementById('up-video').play();
		}
		else{ //No se ha terminado el nivel
			//Actualizar el contador de preguntas correctas
			count++;
			$('#subjectb-'+gsub+'-button').hide();
			$('#subjecti-'+gsub+'-img').show();
			$("#puntuacion-nivel").text(lvlpunt);
			document.location.href = "#subject-page";
		}
	}
	else{ //Erroneo
		//Comprobar cuantos errores se han realizado en el nivel
		if(error==2){ //Cubierto el cupo de errores
			//Eliminar el timer
			$("#timer").timer('remove');
			alert("Todos los errores consumidos");
			
			//Mandar a checkpoint
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
			//cargar el video de bajada
			document.location.href = "#div-down";
			document.getElementById('down-video').play();
		}
		else{ //No todos los errores han sido consumidos
			error++;
			first++;
			alert("ERROR");
			elem.style.backgroundColor = "red";
		}
	}	
}

