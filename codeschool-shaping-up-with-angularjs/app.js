(function() {
  var app = angular.module('gemStore', ['store-products']);

  app.controller('StoreController', [ '$http', function($http){
    var store = this;

    store.products = [];
    
    $http.get('./data/products.json').success(function(data) {
      store.products = data;
    });
  }]);

<<<<<<< Updated upstream
// app.controller('PanelController', function() {
//    this.tab = 1;
//    this.selectTab = function(setTab) {
//      this.tab = setTab;
//    };
//    this.isSelected = function(checkTab) {
//      return this.tab === checkTab;
//    };
//  });

=======
>>>>>>> Stashed changes
  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery) {
      this.current = newGallery || 0;
    };
  });

  app.controller('ReviewController', function() {
    this.review = {};
    this.addReview = function(product) {
        this.review.createdOn = Date.now();
        product.reviews.push(this.review);
        this.review = {};
    };
  });

<<<<<<< Updated upstream
  app.directive("productPanels", function() {
  	return {
  		restrict: 'E',
  		templateUrl: 'product-panels.html',
  		controller: function() {
		    this.tab = 1;
		    this.selectTab = function(setTab) {
		      this.tab = setTab;
		    };
		    this.isSelected = function(checkTab) {
		      return this.tab === checkTab;
		    };
  		},
  		controllerAs: 'panels'
  	};
  });
  
=======
  app.directive("productTabs", function() {
    return {
      restrict: 'E',
      templateUrl: "product-tabs.html",
      controller: function() {
            this.tab = 1;

            this.isSet = function(checkTab) {
              return this.tab === checkTab;
            };

            this.setTab = function(setTab) {
              this.tab = setTab;
            };
      },
      controllerAs: 'panel'
    };
  });

>>>>>>> Stashed changes
})();
