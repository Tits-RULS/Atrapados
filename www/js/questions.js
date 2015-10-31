//Fichero para cargar página de preguntas
//Temas: Conocimiento del medio, matematica, lengua, plastica, musica, gimnasia
var tests = {
//	login: null,
//	total: 6,
	test: [
	       [//Conocimiento del medio
	    	  [ //level 1
	    	    {
	    	   		question: "¿Cuál es el símbolo químico del Oro1?",
	    	   		resp: [
	    	          "Pt",
	    	          "O",
	    		      "Au",
	    		      "Gd"
	    		      ],
	    		      correct: "2",},
	    		{
	    			question: "¿Na Na Na1?",
	    			resp: [
	    	          "Na-e",
	    	          "Na-e",
	    		      "Na-e",
	    		      "Na-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ne Ne Ne1?",
		    		resp: [
		    	      "Ne-c",
		    	      "Ne-e",
		    	      "Ne-e",
		    		  "Ne-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[ //level 2
	    	    {
	    	   		question: "¿Cuál es el símbolo químico del Oro2?",
	    	   		resp: [
	    	          "Pt",
	    	          "O",
	    		      "Au",
	    		      "Gd"
	    		      ],
	    		      correct: "2",},
	    		{
	    			question: "¿Na Na Na2?",
	    			resp: [
	    	          "Na-e",
	    	          "Na-e",
	    		      "Na-e",
	    		      "Na-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ne Ne Ne2?",
		    		resp: [
		    	      "Ne-c",
		    	      "Ne-e",
		    	      "Ne-e",
		    		  "Ne-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[ //level 3
	    	    {
	    	   		question: "¿Cuál es el símbolo químico del Oro3?",
	    	   		resp: [
	    	          "Pt",
	    	          "O",
	    		      "Au",
	    		      "Gd"
	    		      ],
	    		      correct: "2",},
	    		{
	    			question: "¿Na Na Na3?",
	    			resp: [
	    	          "Na-e",
	    	          "Na-e",
	    		      "Na-e",
	    		      "Na-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ne Ne Ne3?",
		    		resp: [
		    	      "Ne-c",
		    	      "Ne-e",
		    	      "Ne-e",
		    		  "Ne-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[ //level 4
	    	    {
	    	   		question: "¿Cuál es el símbolo químico del Oro4?",
	    	   		resp: [
	    	          "Pt",
	    	          "O",
	    		      "Au",
	    		      "Gd"
	    		      ],
	    		      correct: "2",},
	    		{
	    			question: "¿Na Na Na4?",
	    			resp: [
	    	          "Na-e",
	    	          "Na-e",
	    		      "Na-e",
	    		      "Na-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ne Ne Ne4?",
		    		resp: [
		    	      "Ne-c",
		    	      "Ne-e",
		    	      "Ne-e",
		    		  "Ne-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[ //level 5
	    	    {
	    	   		question: "¿Cuál es el símbolo químico del Oro5?",
	    	   		resp: [
	    	          "Pt",
	    	          "O",
	    		      "Au",
	    		      "Gd"
	    		      ],
	    		      correct: "2",},
	    		{
	    			question: "¿Na Na Na5?",
	    			resp: [
	    	          "Na-e",
	    	          "Na-e",
	    		      "Na-e",
	    		      "Na-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ne Ne Ne5?",
		    		resp: [
		    	      "Ne-c",
		    	      "Ne-e",
		    	      "Ne-e",
		    		  "Ne-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[ //level 6
	    	    {
	    	   		question: "¿Cuál es el símbolo químico del Oro6?",
	    	   		resp: [
	    	          "Pt",
	    	          "O",
	    		      "Au",
	    		      "Gd"
	    		      ],
	    		      correct: "2",},
	    		{
	    			question: "¿Na Na Na6?",
	    			resp: [
	    	          "Na-e",
	    	          "Na-e",
	    		      "Na-e",
	    		      "Na-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ne Ne Ne6?",
		    		resp: [
		    	      "Ne-c",
		    	      "Ne-e",
		    	      "Ne-e",
		    		  "Ne-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[ //level 7
	    	    {
	    	   		question: "¿Cuál es el símbolo químico del Oro7?",
	    	   		resp: [
	    	          "Pt",
	    	          "O",
	    		      "Au",
	    		      "Gd"
	    		      ],
	    		      correct: "2",},
	    		{
	    			question: "¿Na Na Na7?",
	    			resp: [
	    	          "Na-e",
	    	          "Na-e",
	    		      "Na-e",
	    		      "Na-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ne Ne Ne7?",
		    		resp: [
		    	      "Ne-c",
		    	      "Ne-e",
		    	      "Ne-e",
		    		  "Ne-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[ //level 8
	    	    {
	    	   		question: "¿Cuál es el símbolo químico del Oro8?",
	    	   		resp: [
	    	          "Pt",
	    	          "O",
	    		      "Au",
	    		      "Gd"
	    		      ],
	    		      correct: "2",},
	    		{
	    			question: "¿Na Na Na8?",
	    			resp: [
	    	          "Na-e",
	    	          "Na-e",
	    		      "Na-e",
	    		      "Na-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ne Ne Ne8?",
		    		resp: [
		    	      "Ne-c",
		    	      "Ne-e",
		    	      "Ne-e",
		    		  "Ne-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[ //level 9
	    	    {
	    	   		question: "¿Cuál es el símbolo químico del Oro9?",
	    	   		resp: [
	    	          "Pt",
	    	          "O",
	    		      "Au",
	    		      "Gd"
	    		      ],
	    		      correct: "2",},
	    		{
	    			question: "¿Na Na Na9?",
	    			resp: [
	    	          "Na-e",
	    	          "Na-e",
	    		      "Na-e",
	    		      "Na-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ne Ne Ne9?",
		    		resp: [
		    	      "Ne-c",
		    	      "Ne-e",
		    	      "Ne-e",
		    		  "Ne-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[ //level 10
	    	    {
	    	   		question: "¿Cuál es el símbolo químico del Oro10?",
	    	   		resp: [
	    	          "Pt",
	    	          "O",
	    		      "Au",
	    		      "Gd"
	    		      ],
	    		      correct: "2",},
	    		{
	    			question: "¿Na Na Na10?",
	    			resp: [
	    	          "Na-e",
	    	          "Na-e",
	    		      "Na-e",
	    		      "Na-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ne Ne Ne10?",
		    		resp: [
		    	      "Ne-c",
		    	      "Ne-e",
		    	      "Ne-e",
		    		  "Ne-e"
		    	      ],
		    	    correct: "0",}
	    	]
	       ],
	       [//Matemática
	        [//level 1
	         {
	    	   	question: "¿Cuanto es 1 + 2 x 3?1",
	    	   	resp: [
	    	          "6",
	    	          "7",
	    		      "8",
	    		      "9"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Ma Ma Ma1?",
	    			resp: [
	    	          "Ma-e",
	    	          "Ma-e",
	    		      "Ma-e",
	    		      "Ma-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Me Me Me1?",
		    		resp: [
		    	      "Me-c",
		    	      "Me-e",
		    	      "Me-e",
		    		  "Me-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 2
	         {
	    	   	question: "¿Cuanto es 1 + 2 x 3?2",
	    	   	resp: [
	    	          "6",
	    	          "7",
	    		      "8",
	    		      "9"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Ma Ma Ma2?",
	    			resp: [
	    	          "Ma-e",
	    	          "Ma-e",
	    		      "Ma-e",
	    		      "Ma-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Me Me Me2?",
		    		resp: [
		    	      "Me-c",
		    	      "Me-e",
		    	      "Me-e",
		    		  "Me-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 3
	         {
	    	   	question: "¿Cuanto es 1 + 2 x 3?3",
	    	   	resp: [
	    	          "6",
	    	          "7",
	    		      "8",
	    		      "9"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Ma Ma Ma3?",
	    			resp: [
	    	          "Ma-e",
	    	          "Ma-e",
	    		      "Ma-e",
	    		      "Ma-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Me Me Me3?",
		    		resp: [
		    	      "Me-c",
		    	      "Me-e",
		    	      "Me-e",
		    		  "Me-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 4
	         {
	    	   	question: "¿Cuanto es 1 + 2 x 3?4",
	    	   	resp: [
	    	          "6",
	    	          "7",
	    		      "8",
	    		      "9"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Ma Ma Ma4?",
	    			resp: [
	    	          "Ma-e",
	    	          "Ma-e",
	    		      "Ma-e",
	    		      "Ma-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Me Me Me4?",
		    		resp: [
		    	      "Me-c",
		    	      "Me-e",
		    	      "Me-e",
		    		  "Me-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 5
	         {
	    	   	question: "¿Cuanto es 1 + 2 x 3?5",
	    	   	resp: [
	    	          "6",
	    	          "7",
	    		      "8",
	    		      "9"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Ma Ma Ma5?",
	    			resp: [
	    	          "Ma-e",
	    	          "Ma-e",
	    		      "Ma-e",
	    		      "Ma-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Me Me Me5?",
		    		resp: [
		    	      "Me-c",
		    	      "Me-e",
		    	      "Me-e",
		    		  "Me-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 6
	         {
	    	   	question: "¿Cuanto es 1 + 2 x 3?6",
	    	   	resp: [
	    	          "6",
	    	          "7",
	    		      "8",
	    		      "9"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Ma Ma Ma6?",
	    			resp: [
	    	          "Ma-e",
	    	          "Ma-e",
	    		      "Ma-e",
	    		      "Ma-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Me Me Me6?",
		    		resp: [
		    	      "Me-c",
		    	      "Me-e",
		    	      "Me-e",
		    		  "Me-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 7
	         {
	    	   	question: "¿Cuanto es 1 + 2 x 3?7",
	    	   	resp: [
	    	          "6",
	    	          "7",
	    		      "8",
	    		      "9"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Ma Ma Ma7?",
	    			resp: [
	    	          "Ma-e",
	    	          "Ma-e",
	    		      "Ma-e",
	    		      "Ma-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Me Me Me7?",
		    		resp: [
		    	      "Me-c",
		    	      "Me-e",
		    	      "Me-e",
		    		  "Me-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 8
	         {
	    	   	question: "¿Cuanto es 1 + 2 x 3?8",
	    	   	resp: [
	    	          "6",
	    	          "7",
	    		      "8",
	    		      "9"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Ma Ma Ma8?",
	    			resp: [
	    	          "Ma-e",
	    	          "Ma-e",
	    		      "Ma-e",
	    		      "Ma-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Me Me Me8?",
		    		resp: [
		    	      "Me-c",
		    	      "Me-e",
		    	      "Me-e",
		    		  "Me-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 9
	         {
	    	   	question: "¿Cuanto es 1 + 2 x 3?9",
	    	   	resp: [
	    	          "6",
	    	          "7",
	    		      "8",
	    		      "9"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Ma Ma Ma9?",
	    			resp: [
	    	          "Ma-e",
	    	          "Ma-e",
	    		      "Ma-e",
	    		      "Ma-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Me Me Me9?",
		    		resp: [
		    	      "Me-c",
		    	      "Me-e",
		    	      "Me-e",
		    		  "Me-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 10
	         {
	    	   	question: "¿Cuanto es 1 + 2 x 3?10",
	    	   	resp: [
	    	          "6",
	    	          "7",
	    		      "8",
	    		      "9"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Ma Ma Ma10?",
	    			resp: [
	    	          "Ma-e",
	    	          "Ma-e",
	    		      "Ma-e",
	    		      "Ma-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Me Me Me10?",
		    		resp: [
		    	      "Me-c",
		    	      "Me-e",
		    	      "Me-e",
		    		  "Me-e"
		    	      ],
		    	    correct: "0",}
	    	]
	       ],
	       [//Lengua
	        [//level 1
	         {
	    	   	question: "¿Qué palabra es esdrújula1?",
	    	   	resp: [
	    	          "Ácido",
	    	          "Colegio",
	    		      "Gelatina",
	    		      "Camión"
	    		      ],
	    		correct: "0",},
    		{
    			question: "¿La La La1?",
    			resp: [
    	          "La-e",
    	          "La-e",
    		      "La-e",
    		      "La-c"
    		      ],
    		    correct: "3",},
	    	{
	    		question: "¿Le Le Le1?",
	    		resp: [
	    	      "Le-c",
	    	      "Le-e",
	    	      "Le-e",
	    		  "Le-e"
	    	      ],
	    	    correct: "0",}
    		 ],
    		 [//level 2
 	         {
 	    	   	question: "¿Qué palabra es esdrújula2?",
 	    	   	resp: [
 	    	          "Ácido",
 	    	          "Colegio",
 	    		      "Gelatina",
 	    		      "Camión"
 	    		      ],
 	    		correct: "0",},
     		{
     			question: "¿La La La2?",
     			resp: [
     	          "La-e",
     	          "La-e",
     		      "La-e",
     		      "La-c"
     		      ],
     		    correct: "3",},
 	    	{
 	    		question: "¿Le Le Le2?",
 	    		resp: [
 	    	      "Le-c",
 	    	      "Le-e",
 	    	      "Le-e",
 	    		  "Le-e"
 	    	      ],
 	    	    correct: "0",}
     		 ],
     		[//level 3
	         {
	    	   	question: "¿Qué palabra es esdrújula3?",
	    	   	resp: [
	    	          "Ácido",
	    	          "Colegio",
	    		      "Gelatina",
	    		      "Camión"
	    		      ],
	    		correct: "0",},
    		{
    			question: "¿La La La3?",
    			resp: [
    	          "La-e",
    	          "La-e",
    		      "La-e",
    		      "La-c"
    		      ],
    		    correct: "3",},
	    	{
	    		question: "¿Le Le Le3?",
	    		resp: [
	    	      "Le-c",
	    	      "Le-e",
	    	      "Le-e",
	    		  "Le-e"
	    	      ],
	    	    correct: "0",}
    		 ],
    		 [//level 4
 	         {
 	    	   	question: "¿Qué palabra es esdrújula4?",
 	    	   	resp: [
 	    	          "Ácido",
 	    	          "Colegio",
 	    		      "Gelatina",
 	    		      "Camión"
 	    		      ],
 	    		correct: "0",},
     		{
     			question: "¿La La La4?",
     			resp: [
     	          "La-e",
     	          "La-e",
     		      "La-e",
     		      "La-c"
     		      ],
     		    correct: "3",},
 	    	{
 	    		question: "¿Le Le Le4?",
 	    		resp: [
 	    	      "Le-c",
 	    	      "Le-e",
 	    	      "Le-e",
 	    		  "Le-e"
 	    	      ],
 	    	    correct: "0",}
     		 ],
     		[//level 5
	         {
	    	   	question: "¿Qué palabra es esdrújula5?",
	    	   	resp: [
	    	          "Ácido",
	    	          "Colegio",
	    		      "Gelatina",
	    		      "Camión"
	    		      ],
	    		correct: "0",},
    		{
    			question: "¿La La La5?",
    			resp: [
    	          "La-e",
    	          "La-e",
    		      "La-e",
    		      "La-c"
    		      ],
    		    correct: "3",},
	    	{
	    		question: "¿Le Le Le5?",
	    		resp: [
	    	      "Le-c",
	    	      "Le-e",
	    	      "Le-e",
	    		  "Le-e"
	    	      ],
	    	    correct: "0",}
    		 ],
    		 [//level 6
 	         {
 	    	   	question: "¿Qué palabra es esdrújula6?",
 	    	   	resp: [
 	    	          "Ácido",
 	    	          "Colegio",
 	    		      "Gelatina",
 	    		      "Camión"
 	    		      ],
 	    		correct: "0",},
     		{
     			question: "¿La La La6?",
     			resp: [
     	          "La-e",
     	          "La-e",
     		      "La-e",
     		      "La-c"
     		      ],
     		    correct: "3",},
 	    	{
 	    		question: "¿Le Le Le6?",
 	    		resp: [
 	    	      "Le-c",
 	    	      "Le-e",
 	    	      "Le-e",
 	    		  "Le-e"
 	    	      ],
 	    	    correct: "0",}
     		 ],
     		[//level 7
	         {
	    	   	question: "¿Qué palabra es esdrújula7?",
	    	   	resp: [
	    	          "Ácido",
	    	          "Colegio",
	    		      "Gelatina",
	    		      "Camión"
	    		      ],
	    		correct: "0",},
    		{
    			question: "¿La La La7?",
    			resp: [
    	          "La-e",
    	          "La-e",
    		      "La-e",
    		      "La-c"
    		      ],
    		    correct: "3",},
	    	{
	    		question: "¿Le Le Le7?",
	    		resp: [
	    	      "Le-c",
	    	      "Le-e",
	    	      "Le-e",
	    		  "Le-e"
	    	      ],
	    	    correct: "0",}
    		 ],
    		 [//level 8
 	         {
 	    	   	question: "¿Qué palabra es esdrújula8?",
 	    	   	resp: [
 	    	          "Ácido",
 	    	          "Colegio",
 	    		      "Gelatina",
 	    		      "Camión"
 	    		      ],
 	    		correct: "0",},
     		{
     			question: "¿La La La8?",
     			resp: [
     	          "La-e",
     	          "La-e",
     		      "La-e",
     		      "La-c"
     		      ],
     		    correct: "3",},
 	    	{
 	    		question: "¿Le Le Le8?",
 	    		resp: [
 	    	      "Le-c",
 	    	      "Le-e",
 	    	      "Le-e",
 	    		  "Le-e"
 	    	      ],
 	    	    correct: "0",}
     		 ],
     		[//level 9
	         {
	    	   	question: "¿Qué palabra es esdrújula9?",
	    	   	resp: [
	    	          "Ácido",
	    	          "Colegio",
	    		      "Gelatina",
	    		      "Camión"
	    		      ],
	    		correct: "0",},
    		{
    			question: "¿La La La9?",
    			resp: [
    	          "La-e",
    	          "La-e",
    		      "La-e",
    		      "La-c"
    		      ],
    		    correct: "3",},
	    	{
	    		question: "¿Le Le Le9?",
	    		resp: [
	    	      "Le-c",
	    	      "Le-e",
	    	      "Le-e",
	    		  "Le-e"
	    	      ],
	    	    correct: "0",}
    		 ],
    		 [//level 10
 	         {
 	    	   	question: "¿Qué palabra es esdrújula10?",
 	    	   	resp: [
 	    	          "Ácido",
 	    	          "Colegio",
 	    		      "Gelatina",
 	    		      "Camión"
 	    		      ],
 	    		correct: "0",},
     		{
     			question: "¿La La La10?",
     			resp: [
     	          "La-e",
     	          "La-e",
     		      "La-e",
     		      "La-c"
     		      ],
     		    correct: "3",},
 	    	{
 	    		question: "¿Le Le Le10?",
 	    		resp: [
 	    	      "Le-c",
 	    	      "Le-e",
 	    	      "Le-e",
 	    		  "Le-e"
 	    	      ],
 	    	    correct: "0",}
     		 ]
	       ],
	       [//Plástica
	        [//level 1
	         {
	    	   	question: "¿Que color sale si mezclas Rojo y Azul1?",
	    	   	resp: [
	    	          "Amarillo",
	    	          "Naranja",
	    		      "Verde",
	    		      "Morado"
	    		      ],
	    		correct: "3",},
	    		{
	    			question: "¿Pa Pa Pa1?",
	    			resp: [
	    	          "Pa-e",
	    	          "Pa-e",
	    		      "Pa-e",
	    		      "Pa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Pe Pe Pe1?",
		    		resp: [
		    	      "Pe-c",
		    	      "Pe-e",
		    	      "Pe-e",
		    		  "Pe-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 2
	         {
	    	   	question: "¿Que color sale si mezclas Rojo y Azul2?",
	    	   	resp: [
	    	          "Amarillo",
	    	          "Naranja",
	    		      "Verde",
	    		      "Morado"
	    		      ],
	    		correct: "3",},
	    		{
	    			question: "¿Pa Pa Pa2?",
	    			resp: [
	    	          "Pa-e",
	    	          "Pa-e",
	    		      "Pa-e",
	    		      "Pa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Pe Pe Pe2?",
		    		resp: [
		    	      "Pe-c",
		    	      "Pe-e",
		    	      "Pe-e",
		    		  "Pe-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 3
	         {
	    	   	question: "¿Que color sale si mezclas Rojo y Azul3?",
	    	   	resp: [
	    	          "Amarillo",
	    	          "Naranja",
	    		      "Verde",
	    		      "Morado"
	    		      ],
	    		correct: "3",},
	    		{
	    			question: "¿Pa Pa Pa3?",
	    			resp: [
	    	          "Pa-e",
	    	          "Pa-e",
	    		      "Pa-e",
	    		      "Pa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Pe Pe Pe3?",
		    		resp: [
		    	      "Pe-c",
		    	      "Pe-e",
		    	      "Pe-e",
		    		  "Pe-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 4
	         {
	    	   	question: "¿Que color sale si mezclas Rojo y Azul4?",
	    	   	resp: [
	    	          "Amarillo",
	    	          "Naranja",
	    		      "Verde",
	    		      "Morado"
	    		      ],
	    		correct: "3",},
	    		{
	    			question: "¿Pa Pa Pa4?",
	    			resp: [
	    	          "Pa-e",
	    	          "Pa-e",
	    		      "Pa-e",
	    		      "Pa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Pe Pe Pe4?",
		    		resp: [
		    	      "Pe-c",
		    	      "Pe-e",
		    	      "Pe-e",
		    		  "Pe-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 5
	         {
	    	   	question: "¿Que color sale si mezclas Rojo y Azul5?",
	    	   	resp: [
	    	          "Amarillo",
	    	          "Naranja",
	    		      "Verde",
	    		      "Morado"
	    		      ],
	    		correct: "3",},
	    		{
	    			question: "¿Pa Pa Pa5?",
	    			resp: [
	    	          "Pa-e",
	    	          "Pa-e",
	    		      "Pa-e",
	    		      "Pa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Pe Pe Pe5?",
		    		resp: [
		    	      "Pe-c",
		    	      "Pe-e",
		    	      "Pe-e",
		    		  "Pe-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 6
	         {
	    	   	question: "¿Que color sale si mezclas Rojo y Azul6?",
	    	   	resp: [
	    	          "Amarillo",
	    	          "Naranja",
	    		      "Verde",
	    		      "Morado"
	    		      ],
	    		correct: "3",},
	    		{
	    			question: "¿Pa Pa Pa6?",
	    			resp: [
	    	          "Pa-e",
	    	          "Pa-e",
	    		      "Pa-e",
	    		      "Pa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Pe Pe Pe6?",
		    		resp: [
		    	      "Pe-c",
		    	      "Pe-e",
		    	      "Pe-e",
		    		  "Pe-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 7
	         {
	    	   	question: "¿Que color sale si mezclas Rojo y Azul7?",
	    	   	resp: [
	    	          "Amarillo",
	    	          "Naranja",
	    		      "Verde",
	    		      "Morado"
	    		      ],
	    		correct: "3",},
	    		{
	    			question: "¿Pa Pa Pa7?",
	    			resp: [
	    	          "Pa-e",
	    	          "Pa-e",
	    		      "Pa-e",
	    		      "Pa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Pe Pe Pe7?",
		    		resp: [
		    	      "Pe-c",
		    	      "Pe-e",
		    	      "Pe-e",
		    		  "Pe-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 8
	         {
	    	   	question: "¿Que color sale si mezclas Rojo y Azul8?",
	    	   	resp: [
	    	          "Amarillo",
	    	          "Naranja",
	    		      "Verde",
	    		      "Morado"
	    		      ],
	    		correct: "3",},
	    		{
	    			question: "¿Pa Pa Pa8?",
	    			resp: [
	    	          "Pa-e",
	    	          "Pa-e",
	    		      "Pa-e",
	    		      "Pa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Pe Pe Pe8?",
		    		resp: [
		    	      "Pe-c",
		    	      "Pe-e",
		    	      "Pe-e",
		    		  "Pe-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 9
	         {
	    	   	question: "¿Que color sale si mezclas Rojo y Azul9?",
	    	   	resp: [
	    	          "Amarillo",
	    	          "Naranja",
	    		      "Verde",
	    		      "Morado"
	    		      ],
	    		correct: "3",},
	    		{
	    			question: "¿Pa Pa Pa9?",
	    			resp: [
	    	          "Pa-e",
	    	          "Pa-e",
	    		      "Pa-e",
	    		      "Pa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Pe Pe Pe9?",
		    		resp: [
		    	      "Pe-c",
		    	      "Pe-e",
		    	      "Pe-e",
		    		  "Pe-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 10
	         {
	    	   	question: "¿Que color sale si mezclas Rojo y Azul10?",
	    	   	resp: [
	    	          "Amarillo",
	    	          "Naranja",
	    		      "Verde",
	    		      "Morado"
	    		      ],
	    		correct: "3",},
	    		{
	    			question: "¿Pa Pa Pa10?",
	    			resp: [
	    	          "Pa-e",
	    	          "Pa-e",
	    		      "Pa-e",
	    		      "Pa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Pe Pe Pe10?",
		    		resp: [
		    	      "Pe-c",
		    	      "Pe-e",
		    	      "Pe-e",
		    		  "Pe-e"
		    	      ],
		    	    correct: "0",}
	    	]
	       ],
	       [//Música
	        [//level 1
	         {
	    	   	question: "¿Qué nota se encuentra entre Fa y Mi1?",
	    	   	resp: [
	    	          "Re",
	    	          "Sol",
	    		      "Do",
	    		      "La"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Aa Aa Aa1?",
	    			resp: [
	    	          "Aa-e",
	    	          "Aa-e",
	    		      "Aa-e",
	    		      "Aa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ae Ae Ae1?",
		    		resp: [
		    	      "Ae-c",
		    	      "Ae-e",
		    	      "Ae-e",
		    		  "Ae-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 2
	         {
	    	   	question: "¿Qué nota se encuentra entre Fa y Mi2?",
	    	   	resp: [
	    	          "Re",
	    	          "Sol",
	    		      "Do",
	    		      "La"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Aa Aa Aa2?",
	    			resp: [
	    	          "Aa-e",
	    	          "Aa-e",
	    		      "Aa-e",
	    		      "Aa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ae Ae Ae2?",
		    		resp: [
		    	      "Ae-c",
		    	      "Ae-e",
		    	      "Ae-e",
		    		  "Ae-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 3
	         {
	    	   	question: "¿Qué nota se encuentra entre Fa y Mi3?",
	    	   	resp: [
	    	          "Re",
	    	          "Sol",
	    		      "Do",
	    		      "La"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Aa Aa Aa3?",
	    			resp: [
	    	          "Aa-e",
	    	          "Aa-e",
	    		      "Aa-e",
	    		      "Aa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ae Ae Ae3?",
		    		resp: [
		    	      "Ae-c",
		    	      "Ae-e",
		    	      "Ae-e",
		    		  "Ae-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 4
	         {
	    	   	question: "¿Qué nota se encuentra entre Fa y Mi4?",
	    	   	resp: [
	    	          "Re",
	    	          "Sol",
	    		      "Do",
	    		      "La"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Aa Aa Aa4?",
	    			resp: [
	    	          "Aa-e",
	    	          "Aa-e",
	    		      "Aa-e",
	    		      "Aa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ae Ae Ae4?",
		    		resp: [
		    	      "Ae-c",
		    	      "Ae-e",
		    	      "Ae-e",
		    		  "Ae-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 5
	         {
	    	   	question: "¿Qué nota se encuentra entre Fa y Mi5?",
	    	   	resp: [
	    	          "Re",
	    	          "Sol",
	    		      "Do",
	    		      "La"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Aa Aa Aa5?",
	    			resp: [
	    	          "Aa-e",
	    	          "Aa-e",
	    		      "Aa-e",
	    		      "Aa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ae Ae Ae5?",
		    		resp: [
		    	      "Ae-c",
		    	      "Ae-e",
		    	      "Ae-e",
		    		  "Ae-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 6
	         {
	    	   	question: "¿Qué nota se encuentra entre Fa y Mi6?",
	    	   	resp: [
	    	          "Re",
	    	          "Sol",
	    		      "Do",
	    		      "La"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Aa Aa Aa6?",
	    			resp: [
	    	          "Aa-e",
	    	          "Aa-e",
	    		      "Aa-e",
	    		      "Aa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ae Ae Ae6?",
		    		resp: [
		    	      "Ae-c",
		    	      "Ae-e",
		    	      "Ae-e",
		    		  "Ae-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 7
	         {
	    	   	question: "¿Qué nota se encuentra entre Fa y Mi7?",
	    	   	resp: [
	    	          "Re",
	    	          "Sol",
	    		      "Do",
	    		      "La"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Aa Aa Aa7?",
	    			resp: [
	    	          "Aa-e",
	    	          "Aa-e",
	    		      "Aa-e",
	    		      "Aa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ae Ae Ae7?",
		    		resp: [
		    	      "Ae-c",
		    	      "Ae-e",
		    	      "Ae-e",
		    		  "Ae-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 8
	         {
	    	   	question: "¿Qué nota se encuentra entre Fa y Mi8?",
	    	   	resp: [
	    	          "Re",
	    	          "Sol",
	    		      "Do",
	    		      "La"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Aa Aa Aa8?",
	    			resp: [
	    	          "Aa-e",
	    	          "Aa-e",
	    		      "Aa-e",
	    		      "Aa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ae Ae Ae8?",
		    		resp: [
		    	      "Ae-c",
		    	      "Ae-e",
		    	      "Ae-e",
		    		  "Ae-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 9
	         {
	    	   	question: "¿Qué nota se encuentra entre Fa y Mi9?",
	    	   	resp: [
	    	          "Re",
	    	          "Sol",
	    		      "Do",
	    		      "La"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Aa Aa Aa9?",
	    			resp: [
	    	          "Aa-e",
	    	          "Aa-e",
	    		      "Aa-e",
	    		      "Aa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ae Ae Ae9?",
		    		resp: [
		    	      "Ae-c",
		    	      "Ae-e",
		    	      "Ae-e",
		    		  "Ae-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//level 10
	         {
	    	   	question: "¿Qué nota se encuentra entre Fa y Mi10?",
	    	   	resp: [
	    	          "Re",
	    	          "Sol",
	    		      "Do",
	    		      "La"
	    		      ],
	    		correct: "1",},
	    		{
	    			question: "¿Aa Aa Aa10?",
	    			resp: [
	    	          "Aa-e",
	    	          "Aa-e",
	    		      "Aa-e",
	    		      "Aa-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ae Ae Ae10?",
		    		resp: [
		    	      "Ae-c",
		    	      "Ae-e",
		    	      "Ae-e",
		    		  "Ae-e"
		    	      ],
		    	    correct: "0",}
	    	]
	       ],
	       [//Gimnasia
	        [//levl 1
	         {
	    	   	question: "¿Qué necesitas para jugar a Tenis1?",
	    	   	resp: [
	    	          "Bate",
	    	          "Balón",
	    		      "Raqueta",
	    		      "Espada"
	    		      ],
	    		correct: "2",},
	    		{
	    			question: "¿Ga Ga Ga1?",
	    			resp: [
	    	          "Ga-e",
	    	          "Ga-e",
	    		      "Ga-e",
	    		      "Ga-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ge Ge Ge1?",
		    		resp: [
		    	      "Ge-c",
		    	      "Ge-e",
		    	      "Ge-e",
		    		  "Ge-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//levl 2
	         {
	    	   	question: "¿Qué necesitas para jugar a Tenis2?",
	    	   	resp: [
	    	          "Bate",
	    	          "Balón",
	    		      "Raqueta",
	    		      "Espada"
	    		      ],
	    		correct: "2",},
	    		{
	    			question: "¿Ga Ga Ga2?",
	    			resp: [
	    	          "Ga-e",
	    	          "Ga-e",
	    		      "Ga-e",
	    		      "Ga-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ge Ge Ge2?",
		    		resp: [
		    	      "Ge-c",
		    	      "Ge-e",
		    	      "Ge-e",
		    		  "Ge-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//levl 3
	         {
	    	   	question: "¿Qué necesitas para jugar a Tenis3?",
	    	   	resp: [
	    	          "Bate",
	    	          "Balón",
	    		      "Raqueta",
	    		      "Espada"
	    		      ],
	    		correct: "2",},
	    		{
	    			question: "¿Ga Ga Ga3?",
	    			resp: [
	    	          "Ga-e",
	    	          "Ga-e",
	    		      "Ga-e",
	    		      "Ga-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ge Ge Ge3?",
		    		resp: [
		    	      "Ge-c",
		    	      "Ge-e",
		    	      "Ge-e",
		    		  "Ge-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//levl 4
	         {
	    	   	question: "¿Qué necesitas para jugar a Tenis4?",
	    	   	resp: [
	    	          "Bate",
	    	          "Balón",
	    		      "Raqueta",
	    		      "Espada"
	    		      ],
	    		correct: "2",},
	    		{
	    			question: "¿Ga Ga Ga4?",
	    			resp: [
	    	          "Ga-e",
	    	          "Ga-e",
	    		      "Ga-e",
	    		      "Ga-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ge Ge Ge4?",
		    		resp: [
		    	      "Ge-c",
		    	      "Ge-e",
		    	      "Ge-e",
		    		  "Ge-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//levl 5
	         {
	    	   	question: "¿Qué necesitas para jugar a Tenis5?",
	    	   	resp: [
	    	          "Bate",
	    	          "Balón",
	    		      "Raqueta",
	    		      "Espada"
	    		      ],
	    		correct: "2",},
	    		{
	    			question: "¿Ga Ga Ga5?",
	    			resp: [
	    	          "Ga-e",
	    	          "Ga-e",
	    		      "Ga-e",
	    		      "Ga-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ge Ge Ge5?",
		    		resp: [
		    	      "Ge-c",
		    	      "Ge-e",
		    	      "Ge-e",
		    		  "Ge-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//levl 6
	         {
	    	   	question: "¿Qué necesitas para jugar a Tenis6?",
	    	   	resp: [
	    	          "Bate",
	    	          "Balón",
	    		      "Raqueta",
	    		      "Espada"
	    		      ],
	    		correct: "2",},
	    		{
	    			question: "¿Ga Ga Ga6?",
	    			resp: [
	    	          "Ga-e",
	    	          "Ga-e",
	    		      "Ga-e",
	    		      "Ga-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ge Ge Ge6?",
		    		resp: [
		    	      "Ge-c",
		    	      "Ge-e",
		    	      "Ge-e",
		    		  "Ge-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//levl 7
	         {
	    	   	question: "¿Qué necesitas para jugar a Tenis7?",
	    	   	resp: [
	    	          "Bate",
	    	          "Balón",
	    		      "Raqueta",
	    		      "Espada"
	    		      ],
	    		correct: "2",},
	    		{
	    			question: "¿Ga Ga Ga7?",
	    			resp: [
	    	          "Ga-e",
	    	          "Ga-e",
	    		      "Ga-e",
	    		      "Ga-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ge Ge Ge7?",
		    		resp: [
		    	      "Ge-c",
		    	      "Ge-e",
		    	      "Ge-e",
		    		  "Ge-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//levl 8
	         {
	    	   	question: "¿Qué necesitas para jugar a Tenis8?",
	    	   	resp: [
	    	          "Bate",
	    	          "Balón",
	    		      "Raqueta",
	    		      "Espada"
	    		      ],
	    		correct: "2",},
	    		{
	    			question: "¿Ga Ga Ga8?",
	    			resp: [
	    	          "Ga-e",
	    	          "Ga-e",
	    		      "Ga-e",
	    		      "Ga-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ge Ge Ge8?",
		    		resp: [
		    	      "Ge-c",
		    	      "Ge-e",
		    	      "Ge-e",
		    		  "Ge-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//levl 9
	         {
	    	   	question: "¿Qué necesitas para jugar a Tenis9?",
	    	   	resp: [
	    	          "Bate",
	    	          "Balón",
	    		      "Raqueta",
	    		      "Espada"
	    		      ],
	    		correct: "2",},
	    		{
	    			question: "¿Ga Ga Ga9?",
	    			resp: [
	    	          "Ga-e",
	    	          "Ga-e",
	    		      "Ga-e",
	    		      "Ga-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ge Ge Ge9?",
		    		resp: [
		    	      "Ge-c",
		    	      "Ge-e",
		    	      "Ge-e",
		    		  "Ge-e"
		    	      ],
		    	    correct: "0",}
	    	],
	    	[//levl 10
	         {
	    	   	question: "¿Qué necesitas para jugar a Tenis10?",
	    	   	resp: [
	    	          "Bate",
	    	          "Balón",
	    		      "Raqueta",
	    		      "Espada"
	    		      ],
	    		correct: "2",},
	    		{
	    			question: "¿Ga Ga Ga10?",
	    			resp: [
	    	          "Ga-e",
	    	          "Ga-e",
	    		      "Ga-e",
	    		      "Ga-c"
	    		      ],
	    		    correct: "3",},
		    	{
		    		question: "¿Ge Ge Ge10?",
		    		resp: [
		    	      "Ge-c",
		    	      "Ge-e",
		    	      "Ge-e",
		    		  "Ge-e"
		    	      ],
		    	    correct: "0",}
	    	]
	       ]
	 ]
}

