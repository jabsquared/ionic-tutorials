app.controller('LoginCtrl', function($scope, $state, $rootScope, userData) {
  $scope.data = {}

  $scope.fbLogin = function() {

  }

  $scope.login = function() {

    $rootScope.dataClient.login($scope.data.email, $scope.data.password, function(error, response) {
      if (error) {
        //error — could not log user in
        console.log('Could not login.');
        console.log(error);
      } else {
        //success — user has been logged in
        console.log(response);
        $scope.data.uid = response.access_token;
        $scope.data.picture = response.user.picture;
        $scope.data.name = response.user.name;
        console.log($scope.data);
        userData.setUser($scope.data);
        $state.go('account');
      }
    });
  }

  $scope.signup = function() {
    $state.go('signup');
  }

})

app.controller('AccountCtrl', function($scope, $state, userData) {
  $scope.user = userData.getUser();
  $scope.drop = false;
  $scope.drop2 = false;

  $scope.toggle = function(num) {
    if (num === 1) {
      $scope.drop = !$scope.drop;
    } else if (num === 2) {
      $scope.drop2 = !$scope.drop2;
    }

    $scope.schedule = function() {
      $state.go('schedule');
    }

    $scope.logout = function() {
      $state.go('login');
    }

  }
})

app.controller('SignupCtrl', function($scope, $state, $rootScope) {

  $scope.data = {};

  $scope.signup = function() {
    // Options representing the new user to add.
    var options = {
        'name': $scope.data.username,
        'type': 'users'
      }
      // Call an SDK method to get an entity representing
      // the user. If no user is returned, then add one.
    $rootScope.dataClient.getEntity(options, function(error, entity, data) {
      if (error) {
        // If there's an error, it could be because the username
        // wasn't found. In that case, it's safe to add
        // a user with that name.
        var errorMessage = error.name;
        if (errorMessage == "service_resource_not_found") {
          console.log('Creating new user.');
          // Call an SDK method to create a new user with
          // data collected from the form.
          $rootScope.dataClient.signup($scope.data.username, $scope.data.password, $scope.data.email,
            $scope.data.name,
            function(error, entity, data) {
              if (error) {
                // Log or display a message.
                console.log('Failed to create user.');
              } else {
                // Refresh the user list to include the new user.
                // getUsers();
                console.log('User created!');
                $state.go('account');
              }
            });
        }
      } else {
        // Display a message because there's already a user with that username.
        console.log('User with that username already exsits.');
      }
    });
  }

  $scope.cancel = function() {
    $state.go('login');
  }

})

app.controller('ScheduleCtrl', function($scope, $state, $rootScope, userData) {

  var user = userData.getUser();

  $scope.logout = function() {
    $state.go('login');
  }

  $scope.submitData = function() {
    //Set the properties of the entity
    console.log('entered submit function');
    var options = {
      type: 'appointment', //required
      user_id: user.uid,
      barber_id: '2',
      time: 'Friday, Jun 31 at 3pm',
      alarm: true,
      done: false
    }

    //Create the entity and process the results
    $rootScope.dataClient.createEntity(options, function(error, result) {
      if (error) {
        //error
        console.log('oooh waa waa wee-waa');
      } else {
        //success
        console.log('very nice!');
      }
    });
  }

  // Flex Calendar Shit

  $scope.options = {
    defaultDate: new Date(2015, 06, 26),
    minDate: new Date(2015, 06, 12),
    maxDate: new Date(2015, 12, 31),
    disabledDates: [
      new Date(2015, 06, 30),
      new Date(2015, 07, 25),
      new Date(2015, 08, 13),
    ],
    dayNamesLength: 1, // 1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names. Default is 1.
    mondayIsFirstDay: true, //set monday as first day of week. Default is false
    eventClick: function(date) {
      console.log(date);
    },
    dateClick: function(date) {
      console.log(date);
    },
    changeMonth: function(month, year) {
      console.log(month, year);
    },
  };

  $scope.events = [{
    foo: 'bar',
    date: new Date(2015, 11, 3)
  }, {
    foo: 'bar',
    date: new Date(2015, 6, 4)
  }];

  // Retriving Data -----------------------------------------

  $scope.remoteDate = {};

  var options = {
    type: "appointments", //Required - the type of collection to be retrieved
    client: $rootScope.dataClient //Required
  };

  //Create a collection object to hold the response
  var collection = new Apigee.Collection(options);

  //Call request to initiate the API call
  collection.fetch(function() {
    console.log('success!');
    $scope.remoteDate = collection._list;
    console.log($scope.remoteDate);
  }, function(error) {
    console.log(error);
  });

});
