# Example of CodeSchool training 'Shaping up with Angular.JS'

## Modules
* Where we write pieces of our Angular application.
* We define dependencies for our app.
* Where our application components live.

## Expressions
* https://docs.angularjs.org/guide/expression
* It allows to insert dynamic values into your HTML.
* How values get displayed within the page.
* Expressions define a 2-way data binding: expressions are re-evaluated when a property changes.

## Controllers
* It helps us get data into the page.
* Controllers are where we define our app's behavior by defining functions and values
* Wrapping your JS in a closure is a good habit!
* Controller is attached to (inside) our app.

## Directives
* HTML annotations that trigger JS behavior.
* It allows to write HTML that expresses the behavior of your application >> EXPRESSIVENESS!!!
* When you're writing an AngularJS application, you should be able to understand the behavior and intent from just the HTML.
* Directives can also be used for:
	* Expressing complex UI.
	* Calling events and registering event handlers.
	* Reusing common components.
* Dash in HTML directive translates to CamelCase in JS.
* Do NOT use self-closing tags, some browsers don't like when using custom elements...
* Types of directives:
	* Template-expanding directives are the simplest.
		* Define a custom tag or attribute that is expanded or replaced.
		* can include Controller logic.
	* Element directives
		* <product-title></product-title>
	* Attribute directives
		* <h3 product-title></h3>
* Best practice: use Element directives for UI widgets and Attribute directives for mixin behaviors... like a tooltip.

* <b>ng-app</b><br>
  * Directive to say that that module should be run when the document loads.<br>
  * Attach the Application Module to the page

* <b>ng-controller</b><br>
Attach a Controller function to the page

* <b>ng-show / ng-hide</b><br>
Display a section based on an Expression

* <b>ng-repeat</b><br>
Repeat a section for each item in an array

* <b>ng-init</b><br>
Allows to evaluate an expression in the current scope.

* <b>ng-class</b><br>
Set a specific class if a boolean expression is true.

* <b>ng-model</b><br>
Binds the form element value to the property

* <b>ng-submit</b><br>
Allows us to call a function 

* <b>ng-include</b><br>
	* Useful to extract HTML snippets.
	* You have to pass a variable with the name of the file to include, using single quotes.
	* The browser makes a new AJAX request to load the snippet.
	* It is preferable to use a custom directive.

##Validations
Turn off default HTML validation

##Filters
Use pipe: send the result of the output of the first expression to the second expression
{{ data | filter:options }}

Filter examples
* date
* lowercase/uppercase
* limitTo
* orderBy:'-price'


##Module app.js
* 'store' is the name of the app.
* the second parameter, [], is a list of dependencies for our module.

##Bookmark
http://campus.codeschool.com/courses/shaping-up-with-angular-js/level/4/section/2/video/1

##Screencasts about AngularJS
https://www.codeschool.com/screencasts/egghead-io-reusable-angular-directives
https://www.codeschool.com/screencasts/egghead-io-flexible-angular-directives
https://www.codeschool.com/screencasts/angularjs-part-1
https://www.codeschool.com/screencasts/angularjs-part-2
