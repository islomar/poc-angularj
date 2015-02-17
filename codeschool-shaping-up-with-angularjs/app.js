//Wrapping your JS in a closure is a good habit!
(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'This is a description',
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Pentagonal Gem',
			price: 5.68,
			description: 'This is a description 2',
			canPurchase: false,
			soldOut: false
		}
	]
})();