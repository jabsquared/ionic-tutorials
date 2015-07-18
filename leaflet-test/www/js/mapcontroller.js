angular.module('starter.mapcontroller', ['leaflet-directive'])

.controller("MapController", ["$scope", "leafletData", "leafletBoundsHelpers", function($scope, leafletData, leafletBoundsHelpers) {
  var bounds = leafletBoundsHelpers.createBoundsFromArray([
    [47.299445428173854, -122.21683323383331],
    [47.299445428173854, -122.21683323383331]
  ]);

  angular.extend($scope, {
    bounds: bounds,

      auburn: {
        // lat: 47.298863,
        // lng: -122.216050,
        // zoom: 16,
        // minZoom: 10,
        // maxZoom: 21
      }
      // controls: {
      //   scale: false
      // }
  });
}]);
