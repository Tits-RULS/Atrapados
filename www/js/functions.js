
function next(){
	var i=Math.floor((Math.random()*3)+1);
	//var pageDiv=question_page.create();
	//$("body").append(pageDiv);
	//question_page.load(i)
	alert("antes de window");
	window.location.replace("question.html");
	alert("tras window");
	question_page.load(i);
	alert("tras el load");
}