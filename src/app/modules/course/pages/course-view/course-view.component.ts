import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {
  

  isPhonePortrait = false;
  isWebPortrait = false;




  constructor(private breakpointObserver: BreakpointObserver) {
  
  }
  
  ngOnInit() {
    this.responsiveVerifier();
  }

isProfessor():boolean{
  return localStorage.getItem("rol")?.includes("professor")||false;
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
