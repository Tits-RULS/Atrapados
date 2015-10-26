
var correct;

function next(){
	var i=Math.floor((Math.random()*3));
	document.location.href = "#question-page";
	load(i);
}

function load(i){
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