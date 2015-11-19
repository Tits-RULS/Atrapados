
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        if(localStorage.getItem("name")!=null){
    		document.location.href = "#start-page";
    	}
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //registrar el listener
    	document.addEventListener('backbutton',function(){
    		//función para gestionar el boton de back
    		back();
    		},false);
    	document.getElementById('down-video').addEventListener('ended',toHistory,false);
    	document.getElementById('up-video').addEventListener('ended',toHistory,false);
    	$.ajaxSetup({cache:false});
    },

};

app.initialize();
