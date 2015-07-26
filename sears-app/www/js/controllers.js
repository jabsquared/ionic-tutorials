// All of the apps controllers are located here.

app.controller('TicketsCtrl', ['$scope', 'techs', 'product_data', '$http', function($scope, techs, product_data, $http) {

        var unique = function(arr) {
          var i,
            len = arr.length,
            out = [],
            obj = {};

          for (i = 0; i < len; i++) {
            obj[arr[i]] = 0;
          }
          for (i in obj) {
            out.push(i);
          }
          return out;
        }

  $scope.brandModel = '';

  $scope.techs = techs.all();
  $scope.products;
  $scope.brands = [];
  $scope.types = [
    'Refrigerators',
    'Dryers',
    'Washers',
    'Cooktops'
  ];

  $scope.warrantys = [
    'No Coverage',
    'Sears Special Protection',
    'Manufacturer warranty',
    "Don't Know"
  ];

  $scope.problems = [
    'Noise',
    'On Fire',
    'No Power'
  ]

  $scope.changeType = function(type) {
    console.log('Type: ');
    console.log(type);
    $http.get('https://bpshonyak-prod.apigee.net/hello-world/sears?type=searchcat&cat=' + type)
      .success(function(data, status, headers, config) {
        console.log(data);
        $scope.products = data.SearchResults.Products;
        console.log($scope.products);
        $scope.brands = []
        for (var i = 0; i < $scope.products.length; i++) {
          $scope.brands.push($scope.products[i].Description.BrandName);
        }
        console.log($scope.brands);
        $scope.brands = unique($scope.brands);
        console.log($scope.brands);
      }).
    error(function(data, status, headers, config) {
    });

    console.log('end!');
  }

  console.log('before call');

  (function() {
    console.log('In test function');

    $http.get('https://bpshonyak-prod.apigee.net/hello-world/sears?type=searchcat&cat=Refrigerators')
      .success(function(data, status, headers, config) {
        $scope.products = data.SearchResults.Products;
        console.log($scope.products);
        for (var i = 0; i < $scope.products.length; i++) {
          $scope.brands.push($scope.products[i].Description.BrandName);
        }
        console.log($scope.brands);
        $scope.brands = unique($scope.brands);
        console.log($scope.brands);
      }).
    error(function(data, status, headers, config) {
    });

    console.log('end!');
  })();

}]);
