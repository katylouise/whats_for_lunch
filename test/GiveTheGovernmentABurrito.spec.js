describe('GiveTheGovernmentABurrito', function() {
  var rootScope, q;
  var fakePackagesFactory;
  var $controller;

  beforeEach(module('jsCodingTest'));

  beforeEach(function() {
    module(function($provide) {
      fakePackagesFactory = jasmine.createSpyObj('fakePackagesFactory', ['searchPackages']);

      $provide.factory('PackagesFactory', function() {
        return fakePackagesFactory;
      });
    });
  });

  beforeEach(inject(function($q, $rootScope, _$controller_) {
    rootScope = $rootScope;
    $controller = _$controller_;
    q = $q;
  }));

  var fakePackages =
    {"packages": [
    {
      name : "Beni's Breakfast Burrito",
      totalGrossFoodCost: 5,
      images: [
        {
          medium: "https://uploads.citypantry.com/images/package/2015-04/medium-e2172cf6ca19caecc11b2fa35dc9ae60d1508ce4.jpg"
        }
      ],
      vendor: {
        name: "Benito's Hat"
      }
    },
    {
      name: "Bombay Burritos and Poppadoms",
      totalGrossFoodCost: 7.2,
      images: [
        {
          medium: "https://uploads.citypantry.com/images/package/2015-04/medium-917295721bb4b238777b6296a760e81958126887.jpg"
        }
      ],
      vendor: {
        name: "Bombay Burrito"
      }
    }
  ]}

  beforeEach(function() {
    fakePackagesFactory.searchPackages.and.returnValue(q.when({ data: fakePackages}));
  });

  describe('when searching for food', function() {
    it('displays search results', function() {
      var $scope = {};
      var ctrl = $controller('GiveTheGovernmentABurrito', { $scope: $scope });
      $scope.searchTerm = 'burritos';
      $scope.doSearch().then(function() {
        expect($scope.searchResult.packages).toEqual(fakePackages.packages);
        rootScope.$digest();
      });
    });
  });
});
