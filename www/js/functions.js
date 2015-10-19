
function next(){
	var i=Math.floor((Math.random()*3)+1);
	var pageDiv=question_page.create();
	$("body").append(pageDiv);
	alert("antes de load" + pageDiv);
	question_page.load(i)
	alert("tras load");
}