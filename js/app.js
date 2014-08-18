document.addEventListener('deviceready', function(){
	navigator.splashscreen.hide();
}, false);

document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown(e) {
  e.preventDefault();
  navigator.app.exitApp();
}
 
var app = angular.module('masterchefmarocApp', ['ngRoute', 'angular-gestures'])    
.run(function() {
    FastClick.attach(document.body);
  });

app.config(function($routeProvider){
    	$routeProvider
    		.when('/home', {templateUrl: 'partials/home.html'})
    		.when('/videos', {templateUrl: 'partials/videos.html'})
    		.when('/recettes', {templateUrl: 'partials/recettes.html'})
    		.when('/candidats', {templateUrl: 'partials/candidats.html'})
    		.when('/jury', {templateUrl: 'partials/jury.html'})
    		.when('/photos', {templateUrl: 'partials/photos.html'})
    		.when('/quiz', {templateUrl: 'partials/quiz.html'})
    		.when('/about', {templateUrl: 'partials/about.html'})
    		.when('/live', {templateUrl: 'partials/live.html'})
    		.otherwise({redirectTo: '/home'})
});



app.directive('countdown', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
        	$(element).countdown(scope.$eval(attrs.countdown));  
        }
    };
});

app.directive('carousel', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
        	$(element).owlCarousel({
    			loop:true,
    			margin:10,
    			nav:true,
    			responsive:{
        			0:{
            			items:1
        			},
        			600:{
            			items:3
       				 },
        			1000:{
            			items:5
        			}
    			}
			});
        }
    };
});

app.directive('swipe', function() {
    return {
        restrict: 'A',
        scope: {navCtrlSwipe: '&callbackFn'}, 
        link: function(scope, element, attrs) {
            $(element).swipe( {
            swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                 scope.navCtrlSwipe({direction: direction});
            },
            threshold:0
            });
        }
    };
});

app.factory("sharingService", function(){

  return {sharedObject: {navobject: null } }

});
