
function next(){
	var i=Math.floor((Math.random()*3)+1);
	//var pageDiv=question_page.create();
	//$("body").append(pageDiv);
	//question_page.load(i)
	alert("antes de window");
	document.location.href = "#question-page";
	alert("tras window");
	load(i);
	alert("tras el load");
}

function load(i){
	alert("load");
	$("#question").text(tests.test[i].question);
	alert("antes del each");
	$("button[id|='question-button']").each(
 			function(index) {     				
 				$(this).text(tests.test[i].resp[index]);
 				alert(tests.test[i].resp[index]);
		    }
 	);
}