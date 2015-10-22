
var correct;

function next(){
	var i=Math.floor((Math.random()*3));
	document.location.href = "#question-page";
	load(i);
}

function load(i){
	$("#question").replaceWith("<h2 id='question'>"+tests.test[i].question+"</h2>");
	$("button[id|='question-button']").each(
 			function(index) {
 				$(this).replaceWith("<button id='question-button-"+index+"' value='"+index+"' onclick='result(this)'>"+tests.test[i].resp[index]+"</button>");
		    }
 	);
	correct=tests.test[i].correct;
}

function result(elem){
	var val=$(elem).val();
	if(val==correct){
		alert("CORECTO");
		document.location.href = "#start-page"
	}
	else{
		alert("ERROR");
	}
		
	
}