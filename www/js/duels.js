var type = 0;		//tipo de duelo, iniciado por ti, iniciado por otro
var did = 0;		//id del duelo
var questions = [];	//
var dcount;		//
var dcorrect;		//
var time;		//
var dsub;		//
var did;		//

//Función para crear un nuevo duelo
function startDuel(){
	//Obtener los datos a pasar al post
	var name = window.localStorage.getItem('name');
	var pss = window.localStorage.getItem('pass');
	//Solicitar un nuevo duelo
	$.post("http://51.254.221.215/newduel.php",{"name":name,"pss":pss},function(data){
		//Devuelve un único JS
		var js = $.parseJSON(data);
		var length = Object.keys(js).length;
		if(length==1){
			switch(Object.keys(js)[0]){
			case "Result":
				switch(js["Result"]){
				case "-1":
					alert("Error de usuario o contraseña");
					break;
				case "-2":
					alert("Error al crear el nuevo duelo");
					break;
				case "-3":
					alert("Error al insertar el duelo");
					break;
				}
				return;
				break;
			case "id":
				//Se ha creado un nuevo duelo
				//obtener los id de preguntas
				alert("Duelo creado");
				did=js["id"];
				duelquestions(did);
				$("#duel-name1").html("<br>"+window.localStorage.getItem("name"));
				$("#duel-name2").text("");
				break;
			}
		}else{
			//Asignado a un duelo que ya existe
			alert("Duelo asignado");
			$.each(js,function(key,val){
				switch(key){
				case "Nombre":
					$("#duel-name1").html("<br>"+val);
					$("#duel-name2").html("<br>"+window.localStorage.getItem("name"));
					break;
				case "point1":
					break;
				case "id":
					did=val;
					duelquestions(val);
					break;
				case "time":
					break;
				};
			});
		}
		//Iniciar el timer y pasar a la vista de puertas
		$("input[id|='duelb']").each(
				function(){
					$(this).show();
				}	
		);
		$("img[id|='dueli']").each(
				function(){
					$(this).hide();
				}	
		);
		dcount = 0;
		time = 0;
		document.location.href = "#ddoor-page";
		$("#duel-time").text(""+time+" sec");
	});
}

//Función para generar el test del duelo
function duelquestions(id){
	$.post("http://51.254.221.215/getduelquestions.php",{"id":id},function(data){
		//Parsear la respuesta
		var js = $.parseJSON(data);
		var length = Object.keys(js).length;
		if(length==6){
			//Si es correcto, almacenar id de preguntas
			$.each(js,function(key,val){
				switch(key){
				case "q1":
					questions[0]=val;
					break;
				case "q2":
					questions[1]=val;
					break;
				case "q3":
					questions[2]=val;
					break;
				case "q4":
					questions[3]=val;
					break;
				case "q5":
					questions[4]=val;
					break;
				case "q6":
					questions[5]=val;
					break;
				}
			});
		}
		else{
			//Error
			alert("Error obteniendo preguntas de duelo");
		}
	});
}

//Función para generar la pregunta de duelo
function toQuestion(elem){
	//Obtener pregunta desde su id
	var q = $(elem).val();
	var qid= questions[parseInt(q)];
	themeStyle(q);
	dsub=q;
	//Limpiar los botones
	$("button[id|='dquestion-button']").each(
			function(index){
				$(this).text("");
				$(this).css("background-color","white");
			}
	);
	//Obtener la pregunta
	$.post("http://51.254.221.215/getquestionbyid.php",{"id":qid},function(data){
		js = $.parseJSON(data);
		var error;
		$.each(js,function(key,val){
			switch(key){
			case "Result":
				alert("Error recogiendo la pregunta");
				error = 1;
				break;
			case "Pregunta":
				$("#dquestion").text(val);
				break;
			case "R1":
				$("#dquestion-button-1").text(val);
				break;
			case "R2":
				$("#dquestion-button-2").text(val);
				break;
			case "R3":
				$("#dquestion-button-3").text(val);
				break;
			case "R4":
				$("#dquestion-button-4").text(val);
				break;
			case "Correcta":
				dcorrect=val;
				break;
			}
		});	
		if(error!=1){
			//Inicializar el tiempo
			$("#dtimer").timer();
			document.location.href = "#dquestion-page";
		}
	});
	
}

//Función para comprobar la respuesta a una pregunta duelo
function dresult(elem){
	//Extraer el valor de la respuesta
	var val=$(elem).val();
	if(val==dcorrect){
		//Correcta
		alert("Correcto");
		var timeq=$("#dtimer").data('seconds');
		$("#dtimer").timer('remove');
		//Actualizar tiempo
		time += timeq;
		//Comprobar si se ha terminado el duelo
		if(dcount==5){
			//duelo terminado
			//enviar puntuación
			alert("Duelo terminado. Enviando puntuación...");
			var name = window.localStorage.getItem("name");
			var pss = window.localStorage.getItem("pass");
			
			$.post("http://51.254.221.215/setduelpunt.php",{"name":name,"pss":pss,"id":did,"punt":time},function(data){
				js = $.parseJSON(data);
				$.each(js,function(key,val){
					if(key=="Result"){
						switch(val){
						case "0":
							//Todo correcto
							toDuel();
							break;
						case "-1":
							//Usuario o contraseña erroneos
							alert("usuario o contraseña erroneos");
							break;
						case "-2":
							//Error actualizando duelo
							alert("erro actualizando duelo");
							break;
						case "-3":
							//Error actulizando puntuación
							alert("error actulizando puntuación");
							break;
						}
					}
				});
			});
		}else{
			//Duelo no terminado
			dcount++;
			$("#duelb-"+dsub+"-button").hide();
			$("#dueli-"+dsub+"-img").show();
			$("#duel-time").text(""+time+" sec");
			document.location.href="#ddoor-page";
		}
	}else{
		//Respuesta erronea
		alert("Incorrecto");
		elem.style.backgroundColor = "red";
	}
}


function doDuel(elem){
	var id = elem.getAttribute("data-id");
	var type = elem.getAttribute("data-type");
	if(type=='1'){
		did=id;
		duelquestions(did);
		$("#duel-name1").html("<br>"+window.localStorage.getItem("name"));
		$("#duel-name2").text("");
	}else{
		var n1 = elem.getAttribute("data-n1");
		var n2 = elem.getAttribute("data-n2");
		did=id;
		duelquestions(did);
		$("#duel-name1").html("<br>"+n1);
		$("#duel-name2").html("<br>"+n2);
	}
	//Iniciar timer y pasar a la vista de puertas
	$("input[id|='duelb']").each(
			function(){
				$(this).show();
			}	
	);
	$("img[id|='dueli']").each(
			function(){
				$(this).hide();
			}	
	);
	dcount = 0;
	time = 0;
	document.location.href = "#ddoor-page";
	$("#duel-time").text(""+time+" sec");
	
}
