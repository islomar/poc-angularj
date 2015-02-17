= Example of CodeSchool training 'Shaping up with Angular.JS' =

== Modules ==
* Where we write pieces of our Angular application.
* We define dependencies for our app.
* Where our application components live.

== Expressions ==
* https://docs.angularjs.org/guide/expression
* It allows to insert dynamic values into your HTML.
* How values get displayed within the page.

== Controllers ==
* It helps us get data into the page.
* Controllers are where we define our app's behavior by defining functions and values
* Wrapping your JS in a closure is a good habit!
* Controller is attached to (inside) our app.

== Directives ==
* HTML annotations that trigger JS behavior.

Module app.js:
* 'store' is the name of the app.
* the second parameter, [], is a list of dependencies for our module.

ng-app: directive to say that that module should be run when the document loads.