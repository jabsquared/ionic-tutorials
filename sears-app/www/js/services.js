app.factory('product_data', ['$http', function($http){

  var getinfo = function(prodnum) {
    // Simple GET request example :
    $http.get('https://bpshonyak-prod.apigee.net/hello-world/sears?type=details&prodnum=' + prodnum).
      success(function(data, status, headers, config) {
        console.log(data);
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }

  return "http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_170845201";

}])

app.factory('ticket_data', ['product_data', function(product_data) {
  console.log('in service!');
    var tickets = [
      {
        id        : 1,
        tech      : 'Bogdan',
        status    : 'Pending',
        prodnum   : '04649599000P',
        img       : 'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_170845201'
      },
      {
        id        : 2,
        tech      : 'Louis',
        status    : 'Pending',
        prodnum   : '02211000000P',
        img       : 'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_170845201'
      },
      {
        id        : 3,
        tech      : 'Jim',
        status    : 'Complete',
        prodnum   : '02615000000P',
        img       : 'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_170845201'
      },
      {
        id        : 4,
        tech      : 'Brain',
        status    : 'In Progress',
        prodnum   : '04622442000P',
        img       : 'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_170845201'
      }
    ]
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
