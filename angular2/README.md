#Angular 2: First Look
John Papa
@john_papa
www.johnpapa.net

Editor used: VS code
https://code.visualstudio.com/


##Angular2 fundamentals
* https://plnkr.co/
* We'll use Typescript.

Why Angular 2?
* Fast, it relies on modern web standards and practices
* Powerful: full framework that covers all the common cases
* Clean code
* Easy


##Angular 2 in action
* Used by Google Adwords
* App for the course: Storyline tracker
  * jpapa.me/a2firstlook
* Language options
  * ES5
  * ES6/ES2015
  * Typescript
  * Dart
  * Typescript is a superset of ES6, which is a superset of ES5

##Angular 2 Architecture
* Decorators
  * @Component: components now contain our logic and a reference to our HTML template
* Bootstrapping: in Angular2, we do it through code (not through ng-app HTML)
* Built-in directives
  * Structural directives: those which change the structure of the view
* Data binding
  * Interpolation
  * 1 way binding
  * Event binding (e.g. (click))
  * 2 way binding: [(ngModel)] >> banana in a box [()]
* Removes the need for lots of directives (40 built-in directives go away)
  * ng-style >>>> [style]
  * ng-hre	 >>>> [href]
* No directives for events: you can just bind to the event (e.g. (click))
* Services, Providers, Factories in An1 >>> all of them are Class in An2
* Dependency Injection: no strings needed to define a Service/Controller for injecting
* Angular 2 Resources:
  * Tutorial "Tour of heroes": https://angular.io/docs/ts/latest/tutorial/


##Angular 2 Essentials
* Modules
  * We assemble our application from Modules
  * A module exports an asset such as a Service, Component or a shared value
  * We use ES6 style modules for Angular 2
* Components
  * A component contains application logic that controls a region of the user interface that we call a view (through a template).
* Templates: it tells Angular how to render a component
* Metadata: we use metadata to tell Angular 2 about the objects we build,such as where to find a component's template, what directives a component will use, and which services and inputs are required by the components.
* By convention, we usually create a main.ts, and main is the entrypoint for the application. It will contain the bootstrap for the components.

###Templates
Templates are mainly HTML with a little help from Angular. They tell Angular how to render the Component.
 * HTML
 * Directives, as needed
 * Template Binding Sintax
* Components have tempaltes which may contain other components.
* Nested components: you have to declare which components a component is using

###Components
* You can use styleUrls with several CSS files.
* `providers`: declare the services you need, e.g. HTTP_PROVIDERS.

###Metadata
@Component
@Output
@Input

* Use ViewChild when a parent Component needs to access a member of a child Component.