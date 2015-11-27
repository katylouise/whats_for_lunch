angular.module('jsCodingTest', [
    'cpLib'
]);

angular.module('jsCodingTest').controller('GiveTheGovernmentABurrito', ['$scope', 'PackagesFactory', function($scope, PackagesFactory) {

  $scope.doSearch = function() {
    return PackagesFactory.searchPackages($scope.searchTerm, 'SW1A 0AA').then(function(response) {
      $scope.searchResult = response.data.packages;
    });
  }
}]);

//Assumption - the API is only searching for food packages near parliament.