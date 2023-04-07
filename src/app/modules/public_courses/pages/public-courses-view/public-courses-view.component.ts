import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-courses-view',
  templateUrl: './public-courses-view.component.html',
  styleUrls: ['./public-courses-view.component.css']
})
export class PublicCoursesViewComponent implements OnInit{

  isPhonePortrait = false;
  isWebPortrait = false;
  

   constructor(private breakpointObserver: BreakpointObserver){}

    ngOnInit() {
      this.responsiveVerifier();
    }

    responsiveVerifier(){
      this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe(
        (result) => {
          const breakpoints = result.breakpoints
      
          this.isPhonePortrait = breakpoints[Breakpoints.XSmall]; 
          this.isWebPortrait = !breakpoints[Breakpoints.XSmall];
        });
  }
}
