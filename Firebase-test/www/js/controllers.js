app.controller('LoginCtrl', function($scope, $state, fbUserData, Auth) {
  $scope.data = {}

  // function authHandler(error, authData) {
  //   if (error) {
  //     console.log("Login Failed!", error);
  //   } else {
  //     // Save Profile Information
  //     if (authData.provider === 'facebook') {
  //       fbUserData.setUser({
  //         uid: authData.uid,
  //         full_name: authData.facebook.displayName,
  //         email: authData.facebook.email,
  //         profile_img: authData.facebook.profileImageURL
  //       });
  //       console.log(fbUserData.getUser());
  //     } else {
  //
  //     }
  //     $state.go('account');
  //   }
  // }

  $scope.fblogin = function() {
    // var ref = new Firebase("https://piertruckerapp.firebaseio.com");
    Auth.$authWithOAuthRedirect("facebook", {
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

app.controller('AccountCtrl', function($scope, fbUserData) {
  $scope.user = fbUserData.getUser();
});
