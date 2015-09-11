angular.module('starter.mapcontroller', ['leaflet-directive'])

.controller("MarkerTestCtrl", ["$scope", "leafletData", "leafletBoundsHelpers", function($scope, leafletData, leafletBoundsHelpers) {


  $scope.regions = {
    london: {
      northEast: {
        lat: 51.51280224425956,
        lng: -0.11681556701660155
      },
      southWest: {
        lat: 51.50211782162702,
        lng: -0.14428138732910156
      },
    },
    lisbon: {
      southWest: {
        lat: 38.700247900602726,
        lng: -9.165430068969727
      },
      northEast: {
        lat: 38.72703673982525,
        lng: -9.110498428344725
      }
    },
    warszawa: {
      southWest: {
        lat: 52.14823737817847,
        lng: 20.793685913085934
      },
      northEast: {
        lat: 52.31645452105213,
        lng: 21.233139038085938
      }
    },
  };

  angular.extend($scope, {
    tiles: {
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    },
    defaults: {
      minZoom: 16,
      path: {
        weight: 9,
        opacity: 1
      }
    },
    maxbounds: $scope.regions.london,
    center: {
      lat: $scope.regions.london.northEast.lat,
      lng: $scope.regions.london.northEast.lng,
      zoom: 16,
    }
  });

}])

.controller("StaticMapCrtl", ["$scope", "leafletData", "leafletBoundsHelpers", function($scope, leafletData, leafletBoundsHelpers) {

  $scope.regions = {
    london: {
      northEast: {
        lat: 51.51280224425956,
        lng: -0.11681556701660155
      },
      southWest: {
        lat: 51.50211782162702,
        lng: -0.14428138732910156
      },
    },
    lisbon: {
      southWest: {
        lat: 38.700247900602726,
        lng: -9.165430068969727
      },
      northEast: {
        lat: 38.72703673982525,
        lng: -9.110498428344725
      }
    },
    warszawa: {
      southWest: {
        lat: 52.14823737817847,
        lng: 20.793685913085934
      },
      northEast: {
        lat: 52.31645452105213,
        lng: 21.233139038085938
      }
    },
  };

  angular.extend($scope, {
    tiles: {
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    },
    defaults: {
      minZoom: 16,
      path: {
        weight: 9,
        opacity: 1
      }
    },
    maxbounds: $scope.regions.london,
    center: {
      lat: $scope.regions.london.northEast.lat,
      lng: $scope.regions.london.northEast.lng,
      zoom: 16,
    }
  });

}])

.controller("GeoJsonCtrl", ["$scope", "leafletData", "leafletBoundsHelpers", function($scope, leafletData, leafletBoundsHelpers) {

  angular.extend($scope, {
    tiles: {
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    },
    defaults: {

    },
    center: {
      lat: 52.14823737817847,
      lng: 20.793685913085934,
      zoom: 16,
    }
  });

}])

.controller("BoundaryTestCtrl", ["$scope", "leafletData", "leafletBoundsHelpers", function($scope, leafletData, leafletBoundsHelpers) {

  $scope.regions = {
    london: {
      northEast: {
        lat: 51.51280224425956,
        lng: -0.11681556701660155
      },
      southWest: {
        lat: 51.50211782162702,
        lng: -0.14428138732910156
      },
    },
    lisbon: {
      southWest: {
        lat: 38.700247900602726,
        lng: -9.165430068969727
      },
      northEast: {
        lat: 38.72703673982525,
        lng: -9.110498428344725
      }
    },
    warszawa: {
      southWest: {
        lat: 52.14823737817847,
        lng: 20.793685913085934
      },
      northEast: {
        lat: 52.31645452105213,
        lng: 21.233139038085938
      }
    },
  };
  angular.extend($scope, {
    tiles: {
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    },
    defaults: {
      minZoom: 16,
      path: {
        weight: 9,
        opacity: 1
      }
    },
    maxbounds: $scope.regions.london,
    center: {
      lat: $scope.regions.london.northEast.lat,
      lng: $scope.regions.london.northEast.lng,
      zoom: 16,
    }
  });


}]);
