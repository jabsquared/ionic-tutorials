// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('MainCtrl', function($scope, $http) {
  $scope.test = function() {
    console.log('In test function');


    // var doc = $.ajax({
    //   url: 'http://bpshonyak-prod.apigee.net/hello-world/',
    //   type: 'GET',
    //   success: function(data) {
    //     if (typeof success != 'undefined') {
    //       // jQuery.parseJSON(doc.responseJSON.documents.toSource());
    //       console.log('success!');
    //       success(data);
    //     }
    //   },
    //   fail: function(data) {
    //     alert(data.error);
    //     console.log('Fail!');
    //     if (typeof fail != 'undefined') {
    //       fail(data);
    //     }
    //   }
    // });
    //
    // doc.done(function(data) {
    //   console.log('Done!');
    //   console.log(data);
    //   // info = $.grep(data.documents, function(n, i) {
    //   //   return n.user_id === userid;
    //   // });
    // });

    $http.get('https://bpshonyak-prod.apigee.net/hello-world/sears?type=searchcat&cat=Refrigerators')
      .success(function(data, status, headers, config) {
        console.log('Data: ' + JSON.stringify(data));

      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(data);
        console.log(status);
        console.log(headers);

      });

    console.log('end!');
  }
});
