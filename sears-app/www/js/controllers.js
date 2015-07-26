// All of the apps controllers are located here.

app.controller('TicketsCtrl', ['$scope', 'techs', 'product_data', '$http', function($scope, techs, product_data, $http) {

  $scope.techs = techs.all();
  $scope.products;

  console.log('before call');

  $scope.test = function() {
    console.log('In test function');

    $http.get('https://bpshonyak-prod.apigee.net/hello-world/sears?type=searchcat&cat=Refrigerators')
      .success(function(data, status, headers, config) {
        $scope.products = data.SearchResults.Products;
        console.log($scope.products);
        // console.log('Data: ' + JSON.stringify(data));
      }).
      error(function(data, status, headers, config) {
        // console.log(data);
        // console.log(status);
        // console.log(headers);
      });

    console.log('end!');
  }

}]);
