angular.module('starter.mapcontroller', ['leaflet-directive'])

.controller("MapController", ["$scope", "leafletData", "leafletBoundsHelpers", function($scope, leafletData, leafletBoundsHelpers) {
  // var bounds = leafletBoundsHelpers.createBoundsFromArray([
  //   [47.299445428173854, -122.21683323383331],
  //   [47.299445428173854, -122.21683323383331]
  // ]);
  //
  // angular.extend($scope, {
  //   bounds: bounds,
  //
  //   auburn: {
  //     // lat: 47.298863,
  //     // lng: -122.216050,
  //     // zoom: 16,
  //     // minZoom: 10,
  //     // maxZoom: 21
  //   }
  //   // controls: {
  //   //   scale: false
  //   // }
  // });


  // var maxbounds = leafletBoundsHelpers.createBoundsFromArray([
  //   [37.8866, -79.4877],
  //   [39.7230, -74.9863]
  // ]);
  //
  //
  // maxbounds.pad = 1.0;
  //
  // angular.extend($scope, {
  //   bounds: maxbounds,
  //   center: {
  //     lat: 37.8866,
  //     lng: -79 - 4877,
  //     zoom: 4
  //   },
  //   layers: {
  //     baselayers: {
  //       xyz: {
  //         name: 'OpenStreetMap (XYZ)',
  //         url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  //         type: 'xyz'
  //       }
  //     },
  //     overlays: {}
  //   },
  //   markers: {
  //     northeast: {
  //       lat: 39.7230,
  //       lng: -74.9863,
  //       focus: true,
  //       title: "Northeast",
  //     },
  //     southwest: {
  //       lat: 37.8866,
  //       lng: -79.4877,
  //       title: "Southwest",
  //     }
  //   },
  //   maxbounds: maxbounds
  // });

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
      // tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
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
