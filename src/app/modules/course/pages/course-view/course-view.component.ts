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

isProfessor():boolean{
  if(localStorage.getItem("rol")?.includes("professor")){
    return true
  }
  return false;
}
}
