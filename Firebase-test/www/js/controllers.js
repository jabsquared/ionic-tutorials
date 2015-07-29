app.controller('LoginCtrl', function($scope, $state, fbUserData) {
  $scope.data = {}
  $scope.login = function() {
    var ref = new Firebase("https://piertruckerapp.firebaseio.com");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        // Save Profile Information
        fbUserData.setUser({
          uid:          authData.uid,
          full_name:    authData.facebook.displayName,
          email:        authData.facebook.email,
          profile_img:  authData.facebook.profileImageURL
        });
        console.log(fbUserData.getUser());
        $state.go('account');
      }
    }, {
      scope: "email" // permissions requested
    });
  }
})

app.controller('AccountCtrl', function ($scope, fbUserData) {
  $scope.user = fbUserData.getUser();
});
