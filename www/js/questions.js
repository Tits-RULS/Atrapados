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
		create : function(i){
			var pageDiv=$('<div data-role="page" id="question_page-'+i+'"></div>');
			var headerDiv=
				'<div data-role="header" data-position="fixed" >'+
					'<h1 style="margin-left:0;margin-right:0;white-space: nowrap;overflow: visible;">Pregunta'+i+'</h1>'+
				'</div>';
			var contentDiv=
				'<div data-role="content">'+
					'<form id="question-'+i+'">'+
					'<fieldset data-role="controlgroup" data-iconpos="right">'+
						'<legend id="question-'+i+'"></legend>'+
						'<button id="question-'+i+'-buttonA" value="0"></button>'+
						'<button id="question-'+i+'-buttonB" value="1"></button>'+
						'<button id="question-'+i+'-buttonC" value="2"></button>'+
						'<button id="question-'+i+'-buttonD" value="3"></button>'+
					'</fieldset>'+
					'</form>'
				;
			
			pageDiv.append(headerDiv,contentDiv);
			return(pageDiv);
		},
		 
		load : function(i){
			$("#question-"+i).text("QUESTION"+i+": "+tests.test[i].question);
			
			$("button[id|='question-"+i+"-button']").each(
	     			function(index) {     				
	     				$(this).text(tests.test[i].resp[index]);     				
	    		    }
	     	);
		}
			

}