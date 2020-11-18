import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mybreakpooint';
  constructor(public breakpointObserver: BreakpointObserver) { }
  ngOnInit() {

    //primer ejemplo

    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        console.log('Matches XSmall viewport');
      }
      if (state.breakpoints[Breakpoints.Small]) {
        console.log('Matches Small viewport');
      }
      if (state.breakpoints[Breakpoints.Medium]) {
        console.log('Matches Medium  viewport');
      }
      if (state.breakpoints[Breakpoints.Large]) {

        console.log('Matches Large viewport');
      }
      if (state.breakpoints[Breakpoints.XLarge]) {

        console.log('Matches XLarge viewport');
      }
    });
    //
    //segundo ejemplo 

    this.breakpointObserver
      .observe(['(min-width: 900px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport is 900px or over!');
        } else {
          console.log('Viewport is smaller than 900px!');
        }
      });
    //
    //tercer ejemplo

    if (this.breakpointObserver.isMatched('(min-height: 400px)')) {
      console.log('The 400px viewport matched!');
    }
    if (this.breakpointObserver.isMatched('(max-width: 500px)')) {
      console.log('The 500px viewport matched!');
    }
  }
}