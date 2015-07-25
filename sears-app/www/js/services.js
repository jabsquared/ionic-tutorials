app.factory('ticketService', function($http) {
  var promise;
  var ticketService = {
    async: function() {
      if (!promise) {
        // $http returns a promise, which has a then function, which also returns a promise

          var url =  'https://bpshonyak-prod.apigee.net/hello-world/sears?type=details&prodnum=' + prodnum;
          $http.get(url).
            success(function(data, status, headers, config) {
              console.log(data);
              console.log('success');
            }).
            error(function(data, status, headers, config) {
              console.log("Failure");
              console.log(url);
            });

        promise = $http.get('test.json').then(function(response) {
          // The then function here is an opportunity to modify the response
          console.log(response);
          // The return value gets picked up by the then in the controller.
          return response.data;
        });
      }
      // Return the promise to the controller
      return promise;
    }
  };
  return ticketService;
});




app.factory('ticketData', ['$http','ticketService', function($http) {
  // console.log('in service!');

  var tickets = [{
    id: 1,
    tech: 'Bogdan',
    status: 'Pending',
    prodnum: '04649599000P',
    img: info
  }, {
    id: 2,
    tech: 'Louis',
    status: 'Pending',
    prodnum: '02211000000P',
    img: 'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1114954112'
  }, {
    id: 3,
    tech: 'Jim',
    status: 'Complete',
    prodnum: '02615000000P',
    img: 'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1114954112'
  }, {
    id: 4,
    tech: 'Brain',
    status: 'In Progress',
    prodnum: '04622442000P',
    img: 'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1114954112'
  }]
  return {
    all: function() {
      return tickets;
    },
    add: function(events, obj) {
      tickets.pop(obj);
    },
    get: function(id) {
      for (var i = 0; i < tickets.length; i++) {
        if (tickets[i].id === parseInt(id)) {
          return tickets[i];
        }
      }
      return null;
    }
  };
}]);
