import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  isPhonePortrait = false;
  isWebPortrait = false;




  constructor(private breakpointObserver: BreakpointObserver) {}
  

  ngOnInit() {
  
    this.breakpointObserver.observe(
      [Breakpoints.XSmall	
      ,Breakpoints.Small,
      Breakpoints.Medium]
      ).subscribe((result) => {
        this.isPhonePortrait = false;
        this.isWebPortrait = false;

        const breakpoints = result.breakpoints
       

         if (breakpoints[Breakpoints.XSmall	]) {
            this.isPhonePortrait = true;
          }
         if (breakpoints[Breakpoints.Small]) {
        this.isWebPortrait =true ;
          }

      if (breakpoints[Breakpoints.Medium]) {
        this.isWebPortrait =true ;
        }
  });
}

}  

