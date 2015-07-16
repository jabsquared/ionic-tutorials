angular.module('starter.mapcontroller', ['leaflet-directive'])

.controller("MapController", [ "$scope", function($scope){
  angular.extend($scope, {
    auburn: {
      lat: 47.298863,
      lng: -122.216050,
      zoom: 18
    }
  });
}]);
