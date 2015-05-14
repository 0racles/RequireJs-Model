//This is the project.js file
  
define(["mustache", "angular"], function (Mustache, $) {
	var 
	span = document.querySelectorAll(".span")[0],
	span2 = document.getElementById("span"),
	span3 = document.getElementById("newSpan"),
	input = document.querySelectorAll(".input")[0],
	span4 = document.querySelectorAll(".span")[0],
	parent = document.getElementById("parent"),
	mustacheExample = function () {
	    people = {
		"people" : [
			{ "name" : "Rick" },
			{ "name" : "Larry"},
			{ "name" : "Gilles"},
			{ "name" : "Aris" }
		  ]
		};
		var template = "{{#people}}  {{name}} <br/> {{/people}}";
		var output = Mustache.render(template, people);
		var getter = span2.insertAdjacentHTML("afterbegin", output);
		return getter;
	},
	angularApp = function () {
		var app = angular.module("myApp", []);
		app.controller("myCtrl", function (scope) {
			$scope.firstName="John";
			$scope.lastName = "Doe";
			});
		},
	advancedMustacheExample = function () {
	     	var 
		checker = parent.getElementsByTagName("li"),
		template = "{{#li}} {{/li}}",
		output = Mustache.render(template, checker);
		var getter = span3.insertAdjacentHTML("beforeend", output);
		return getter;
	},
	textCalculator = function () {
		var count = 0;
		var str = input.value;
		count = str.lastIndexOf(".")
		   if (count) { 
		var getter = span4.insertAdjacentHTML("afterbegin", count);
		}
		return getter;
	},
	clear = function () {
		span4.textContent = "";
		input.value = "";
	},
	inputEventHandler = function () {
		input.addEventListener("input", textCalculator, true);
		input.addEventListener("focus", clear, true);
		},
	mustachexample = function () {
		var Mussy = {
			friend : "Cristina Victoria Redondo",
			Hobby : "Swimming and Dancing",
			concat : function () {
				return function (text, render) {
				    return render(text.concat(text));
					}
				   }
			}
		var template = "{{#concat}} {{friend}} {{Hobby}} {{/concat}}";
		var output = Mustache.render(template, Mussy);
		var getter = span4.insertAdjacentHTML("afterend", output);
		return getter;
	},
	view = { 
		title : "Joe",
		calc : function () {
		   return 2 + 6;
		}
	},
	
	template = "{{title}} spends {{calc}}",
	output = Mustache.render(template, view),
	show = alert("this is now working");
     return { 
	 myString : "Dont let anyone's wrong change your right. Just like the London bridge you are just a plain Jane with an exalted name.",
	 myAlert : function () {
	    return 2 + 4;
	},
	pubAlert : function () {
	   return show;
	},
	showSpan : function () {
	     var Add = span.insertAdjacentHTML("beforeend", output);
		return Add;
	},
	showSpan2 : mustacheExample,
	
	showCalculator : textCalculator,
	inputControl : inputEventHandler,
	showGlass : mustachexample,
	angularAp: angularApp
			
    };
});


