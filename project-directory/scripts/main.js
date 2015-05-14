requirejs({
	baseUrl : "scripts",
	paths : {
		jquery :   "jquery",
		mustache : "mustache",
		angular : [
			   "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min",
			   "angular"
			  ],
		app : "project"
	}
});

require(["jquery", "mustache", "angular", "app"], function ($, mustache, ng, app) {
	
$("#output").html("Dare is too good" + " " + app.myAlert());
app.pubAlert();
app.showSpan();
app.showSpan2();
app.inputControl();
app.showGlass();	
app.angularAp();	
});

  