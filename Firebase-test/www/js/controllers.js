app.controller('LoginCtrl', function($scope, $state, fbUserData, Auth) {
  $scope.data = {}

  $scope.fbLogin = function() {
    Auth.$authWithOAuthPopup("facebook", {
      scope: "email" // permissions requested
    }).then(function(authData) {
      // Login Successful
    }).catch(function(error) {
      if (error.code === "TRANSPORT_UNAVAILABLE") {
        Auth.$authWithOAuthPopup("facebook").then(function(authData) {
          console.log(authData);
        });
      } else {
        // Another error occurred
        console.log(error);
      }
    });
  }

  $scope.login = function () {

  }

  $scope.signup = function () {
      $state.go('signup');
  }

  Auth.$onAuth(function(authData) {
    if (authData === null) {
      console.log("Not logged in yet");
    } else {
      console.log("Logged in as", authData.uid);
      // Save Profile Information
      if (authData.provider === 'facebook') {
        fbUserData.setUser({
          uid: authData.uid,
          full_name: authData.facebook.displayName,
          email: authData.facebook.email,
          profile_img: authData.facebook.profileImageURL
        });
        // console.log(fbUserData.getUser());
      } else {

      }
      $state.go('account');
    }
    $scope.authData = authData; // This will display the user's name in our view
  });

})

app.controller('AccountCtrl', function($scope, $state, fbUserData) {
  $scope.user = fbUserData.getUser();
  var ref = new Firebase("https://piertruckerapp.firebaseio.com");
  $scope.logout = function () {
    ref.unauth();
    $state.go('login');
  }
});

app.controller('SignupCtrl', function($scope, $state) {
  $scope.data = {};
  $scope.signup = function () {
      if ($scope.data.password != null && $scope.data.password.length > 7 && $scope.data.password === data.confirm
      ){
        $state.go('login');
      } else {
        $state.go('login');
      }
  }
});
