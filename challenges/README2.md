= Directives =

http://campus.codeschool.com/courses/shaping-up-with-angular-js/level/2/section/1/video/1

ng-app
Attach the Application Module to the page

ng-controller
Attach a Controller function to the page

ng-show / ng-hide
Display a section based on an Expression

ng-repeat
Repeat a section for each item in an array

ng-init
Allows to evaluate an expression in the current scope.

ng-class
Set a specific class if a boolean expression is true.


= Filters =
Use pipe: send the result of the output of the first expression to the second expression
{{ data | filter:options }}

Filter examples
* date
* lowercase/uppercase
* limitTo
* orderBy:'-price'

= Expressions =
Expressions define a 2-way data binding: expressions are re-evaluated when a property changes.

*index.html*
<ul class="list-group">
	<li class="list-group-item" ng-repeat="product in store.products">
		<h3>
			{{product.name}}
			<em class="pull-right">{{product.price | currency}}</em>
			<img ng-src={{product.images[0].full}}/>
		</h3>
	</li>
</ul>


*app.js*
images: [
	{
		full: 'http://lorempixel.com/100/50/cats'
		thumb: 'http://lorempixel.com/400/200/cats'
	},
	{
		full: 'http://lorempixel.com/100/50/cats'
		thumb: 'http://lorempixel.com/400/200/cats'
	}
]

