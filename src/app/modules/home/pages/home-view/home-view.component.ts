import { Component, OnInit } from '@angular/core';
import {Breakpoints,BreakpointObserver} from '@angular/cdk/layout';


@Component({
  selector: 'home-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  isPhonePortrait = false;
  isWebPortrait = false;




  constructor(private breakpointObserver: BreakpointObserver) {
  
  }
  
  ngOnInit() {
  
    this.breakpointObserver.observe(
      [Breakpoints.XSmall
      ,Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large]
      ).subscribe((result) => {
        this.isPhonePortrait = false;
        this.isWebPortrait = false;

        const breakpoints = result.breakpoints
       

         if (breakpoints[Breakpoints.XSmall]) {
            this.isPhonePortrait = true;
          }

         if (breakpoints[Breakpoints.Small] || breakpoints[Breakpoints.Medium] ||breakpoints[Breakpoints.Large]) {
        this.isWebPortrait =true ;
         }
  });
}

}
