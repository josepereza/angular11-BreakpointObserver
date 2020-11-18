# My breakpointObserver

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

Using Angular's BreakpointObserver
Before you can use BreakpointObserver, you need to install the Angular’s CDK Layout Module using the following commands:

$ cd angular-responsive-image-breakpoints
$ npm install @angular/cdk
Next, open the src/app/app.module.ts file and add LayoutModule in the imports array:
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Now, you are ready to use the Layout module in your Angular 9 application. Open the src/app/app.component.ts file and start by importing the BreakpointObserver and Breakpoints APIs:
```
import { BreakpointObserver, Breakpoints,BreakpointState } from '@angular/cdk/layout';
```
Next, you can use BreakpointObserver to observe the screen-size changes insetad of using CSS media queries.

Note: BreakpointObserver is an Angular service that can be injected in any component and provides the isMatched() and observe() methods.

## Injecting BreakpointObserver
Let's inject BreakpointObserver as breakpointObserver via the component constructor:
```
@Component({ /* [...] */ })
export class AppComponent implements OnInit {

constructor(public breakpointObserver: BreakpointObserver) { }

ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
           console.log( 'Matches XSmall viewport');
      }
      if (state.breakpoints[Breakpoints.Small]) {
           console.log( 'Matches Small viewport');
      }
      if (state.breakpoints[Breakpoints.Medium]) {
           console.log( 'Matches Medium  viewport');
      }
      if (state.breakpoints[Breakpoints.Large]) {

          console.log( 'Matches Large viewport');
      }
      if (state.breakpoints[Breakpoints.XLarge]) {

         console.log( 'Matches XLarge viewport');   
      }
    });
  }
  ```
The observe() method returns an RxJS Observable of type BreakpointState that we need to subscribe to for observing when the viewport of your application changes.

The Breakpoints object provides the following properties that correspond to the common media queries:

Breakpoints.XSmall: max-width equals 599.99px
Breakpoints.Small: min-width equals 600px and max-width equals 959.99px
Breakpoints.Medium: min-width equals 960px and max-width equals 1279.99px
Breakpoints.Large: min-width equals 1280px and max-width equals 1919.99px
Breakpoints.XLarge: min-width equals 1920px
Instead of using the Breakpoints object which provides us of keys for common breakpoints, we can also use usual CSS media queries as follows:
```
@Component({ /* [...] */ })
export class AppComponent implements OnInit {
  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 900px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport is 900px or over!');
        } else {
          console.log('Viewport is smaller than 900px!');
        }
      });
  }
}
```
We can also use the isMatching() method of BreakpointObserver for simple use cases:
```
@Component({ /* [...] */ })
export class AppComponent implements OnInit {
  constructor(public breakpointObserver: BreakpointObserver) {}

ngOnInit() {
  if (this.breakpointObserver.isMatched('(min-height: 900px)')) {
    console.log('The 900px viewport matched!');
  }
}
```
We have seen how to work with responsive images in Angular 9 using the CDK and BreakpointObserver which is part of the Layout module that allows you to react and adapt your UI to different viewport sizes in Angular.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
