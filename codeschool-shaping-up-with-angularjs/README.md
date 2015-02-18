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
HTML annotations that trigger JS behavior.
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
