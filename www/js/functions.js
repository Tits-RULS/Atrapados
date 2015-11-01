
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
	var subject=$(elem).val();
	var i=Math.floor((Math.random()*3));
	document.location.href = "#question-page";
	load(i,subject);
}

function load(i,subject){
	themeStyle(subject);
	gsub = subject;
	var sub = parseInt(subject);
	var lvl = window.localStorage.getItem('lvl');
	$("#question").text(tests.test[sub][lvl-1][i].question);
	$("button[id|='question-button']").each(
 			function(index) {
 				$(this).text(tests.test[sub][lvl-1][i].resp[index]);
 				$(this).css("background-color","white");
 			}
 	);
	correct=tests.test[sub][lvl-1][i].correct;
	first=0;
	$("#timer").timer();
}

function result(elem){
	var val=$(elem).val();
	if(val==correct){
		//correcto
		var time=$("#timer").data('seconds');
		alert("CORRECTO "+time+" segundos");
		$("#timer").timer('remove');
		//comprobar puntuación
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
			var punt = parseInt(window.localStorage.getItem('punt'));
			punt += lvlpunt;
			window.localStorage.setItem('punt',punt);
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
				var name = window.localStorage.getItem('name');
				$("#congrat-name").text("Enhorabuena "+name);
				var punt = window.localStorage.getItem('punt');
				$("#congrat-punt").text("Tu puntuación es: "+punt);
				var max = window.localStorage.getItem('maxpunt');
				//comprobar máxima puntuación
				if(max<punt){
					max=punt;
					window.localStorage.setItem('maxpunt',punt);
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
			lvl++;
			window.localStorage.setItem('lvl',lvl);
			toHistory();
		}
		else{
			count++;
			$('#subject-'+gsub+'-button').hide();
			document.location.href = "#subject-page";
		}
	}
	else{
		//erroneo
		if(error==2){
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
			toHistory();
		}
		else{
			error++;
			first++;
			alert("ERROR");
			elem.style.backgroundColor = "red";
		}
	}	
}

function login(){
	var name=$("#login-name").val();
	var pss=$("#login-pass").val();
	window.localStorage.setItem('name',name);
	window.localStorage.setItem('pass',pss);
	window.localStorage.setItem('lvl',1);
	window.localStorage.setItem('maxpunt',0);
	window.localStorage.setItem('punt',0);
	window.localStorage.setItem('checkpunt',0);
	document.location.href = "#start-page";
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

function toDuel(){
	document.location.href = "#duel-page"	
}
function toHistory(){
	var lvl=window.localStorage.getItem('lvl');
	var punt=window.localStorage.getItem('punt');
	$("#level-h").text("Tu nivel es: "+lvl+" Tu puntuación es: "+punt);
	document.location.href = "#level-page";
}