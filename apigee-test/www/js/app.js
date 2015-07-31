
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

	.state('login', {
		url: '/login',
		templateUrl: 'templates/login.html',
		controller: 'LoginCtrl'
	})

  .state('signup', {
		url: '/signup',
		templateUrl: 'templates/signup.html',
		controller: 'SignupCtrl'
	})

	.state('account', {
		url: '/account',
		templateUrl: 'templates/account.html',
		controller: 'AccountCtrl'
	});
  
	$urlRouterProvider.otherwise('/login');

});
