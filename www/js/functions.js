
var correct;

function next(){
	var i=Math.floor((Math.random()*6));
	document.location.href = "#question-page";
	load(i);
}

function load(i){
	
	themeStyle(i);
		
	$("#question").text(tests.test[i].question);
	$("button[id|='question-button']").each(
 			function(index) {
 				$(this).text(tests.test[i].resp[index]);
 			}
 	);
	correct=tests.test[i].correct;
	$("#timer").timer();
}

function result(elem){
	var val=$(elem).val();
	if(val==correct){
		document.location.href = "#start-page";
		var time=$("#timer").data('seconds');
		alert("CORRECTO "+time+" segundos");
		$("#timer").timer('remove');
	}
	else{
		alert("ERROR");
	}	
}

function login(){
	var name=$("#login-name").val();
	var pss=$("#login-pass").val();
	window.localStorage.setItem('name',name);
	window.localStorage.setItem('pass',pss);
	document.location.href = "#start-page";
}

function themeStyle(i){
	//Función para cambiar el estilo del test acorde al tema
	switch(i){
	case 0://Conocimiento del medio
		$("#question-page").css("background-color", "greenyellow");
		$("#question_title").html("Conocimiento del medio");
		break;
	case 1://Matemáticas
		$("#question-page").css("background-color", "mediumturquoise");
		$("#question_title").html("Matemáticas");
		break;
	case 2://Lengua
		$("#question-page").css("background-color", "orange");
		$("#question_title").html("Lengua");
		break;
	case 3://Plástica
		$("#question-page").css("background-color", "plum");
		$("#question_title").html("Plástica");
		break;
	case 4://Música
		$("#question-page").css("background-color", "gold");
		$("#question_title").html("Música");
		break;
	case 5://Gimnasia
		$("#question-page").css("background-color", "lightcoral");
		$("#question_title").html("Gimnasia");
		break;
	}
}