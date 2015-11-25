angular.module('jsCodingTest', [
    'cpLib'
]);

angular.module('jsCodingTest').controller('GiveTheGovernmentABurrito', ['$scope', 'PackagesFactory', function($scope, PackagesFactory) {

  $scope.doSearch = function() {
    return PackagesFactory.searchPackages($scope.searchTerm, 'SW1A 0AA').then(function(response) {
      $scope.searchResult = response.data.packages;
    });
  }
    // Your JavaScript goes here.
    // Your code should use our JS library's `PackagesFactory.searchPackages` method to search
    // for burritos that can be delivered to the Houses of Parliament in London.
    // The API URL that should be called is:
    // https://api.citypantry.com/packages/search?name=Burrito&postcode=SW1A%200AA
}]);
