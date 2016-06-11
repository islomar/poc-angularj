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

##Displaying data: data binding, directives and pipes
* See example number 16
* Property binding uses square brackets (from Component to Template)	>> one way binding 	>> [property] = "expression"
* Event binding uses parentheses (from Template to Component)			>> event binding 	>> (event) = statement
* Interpolation: {{ xxx }}
* Two way binding:		([ngModel]) = "property"
* Angular 2's change detection is based on unidirectional data flow
* Property binding:
  * For attributes, use attr
* **Pipes** allows us to tranform data for display in a Template. Similar to filters in Angular 1.
  * Async pipe: subscribes to a Promise or an Observable, returning the latest value emitted.

##Services, Dependency Injection and Component Lifecycle hooks
* Services
  * Example 12
  * Angular 1: factories, services, providers, constants, values
  * Angular 2: we just have a class
* Dependency Injection
  * We inject Services into Component constructors.
  * In Angular 2, DI is hierarchical: register the Service with the injector at the parent that contains all components that require the service.
* Lifecycle hooks
  * See example 19.
  * implements OnInit >> ngOnInit(){//initialize things} >> good place to initialize the data
  * ngOnChanges
  * ngAfterViewInit
  * ngOnDestroy


##Data with Http
* Examples 20 and 21
* We use Http to get and save data with Promises or Observables. We isolate the http calls in a shared Service.
* What we get back from Http is an Observable.
  * In the component which calls the Service which returns the Observable, we have to **subscribe** to the observable.
* The Observable comes from the RxJs (Reactive JS implements the asynchronous observable pattern and is widely used in Angular 2)
* Async pipe: it receives a Promise or an Observable as input and subscribes to the input, eventually emitting the value(s) as changes arrive.
  * In the Component, we get the Service response to an Observable<Vehicle[]>
  * In the template, we pipe the 'async'
* Http with Promises (as we did in Angular 1): example 23.


##Routes
* Example 24-26
* Routing allowes our application to navigate between different Components, passing parameters where needed.
* @RouteConfig: you define the routes, path, name and component >> declared in the app.component.ts
* Templates:
  * <router-outlet>: is where the Component template will appear
  * [routerLink]="linkParameters": to link to another component
* Child Routers: A Component may define routes for other Components. This creates a series of hierarchical child routes.
  * In the @RouteConfig, path: "/vehicles/..."  >> the three dots define a Child Router
  * It helps the lazy loading of modules