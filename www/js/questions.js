//Fichero para cargar página de preguntas

var tests = {
	login: null,
	total: 3,
	test: [
	       {
	    	   	question: "Bla bla bla?",
	    	   	resp: [
	    	          "Response 0-A",
	    	          "Response 0-B",
	    		      "Response 0-C",
	    		      "Response 0-D"
	    		      ],
	    		correct: "1",
	       },
	       {
	    	   	question: "Ble ble ble?",
	    	   	resp: [
	    	          "Response 1-A",
	    	          "Response 1-B",
	    		      "Response 1-C",
	    		      "Response 1-D"
	    		      ],
	    		correct: "3",	      
	       },
	       {
	    	   	question: "Bli bli bli?",
	    	   	resp: [
	    	          "Response 2-A",
	    	          "Response 2-B",
	    		      "Response 2-C",
	    		      "Response 2-D"
	    		      ],
	    		correct: "0",
	       }
	 ]
};

var question_page={
		create : function(){
			var pageDiv=$('<div data-role="page" id="question-page"></div>');
			var headerDiv=
				'<div data-role="header" data-position="fixed" >'+
					'<h1 style="margin-left:0;margin-right:0;white-space: nowrap;overflow: visible;">Pregunta</h1>'+
				'</div>';
			var contentDiv=
				'<div data-role="content">'+
					'<form id="question-form">'+
					'<fieldset data-role="controlgroup" data-iconpos="right">'+
						'<h2 name="question" id="question"></h2>'+
						'<button name="question-buttonA" id="question-buttonA" value="0"></button>'+
						'<button name="question-buttonB" id="question-buttonB" value="1"></button>'+
						'<button name="question-buttonC" id="question-buttonC" value="2"></button>'+
						'<button name="question-buttonD" id="question-buttonD" value="3"></button>'+
					'</fieldset>'+
					'</form>';
			pageDiv.append(headerDiv,contentDiv); 
			return(pageDiv);
		},
		 
		load : function(i){
			alert("load");
			$("#question").text("QUESTION: "+tests.test[i].question);
			
			$("button[id|='question-button']").each(
	     			function(index) {     				
	     				$(this).text(tests.test[i].resp[index]);     				
	    		    }
	     	);
		}
			

}