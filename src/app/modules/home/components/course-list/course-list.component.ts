import { Component, OnInit } from '@angular/core';
import { CourseModel, Professor } from '../../model/CourseModel';
import { HomeRestService } from '../../services/home-rest.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeRoutingModule } from '../../home-routing.module';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'home-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {


  constructor(private courseRestService:HomeRestService,
      private breakpointObserver: BreakpointObserver){}

courses:CourseModel[]= [];
isPhonePortrait = false;
isWebPortrait = false;


ngOnInit(): void {
  if(localStorage.getItem("rol")?.includes("student")){

   this.courseRestService.getCoursesOfStudent().subscribe(
    (courses)=>{
      courses.forEach((course:CourseModel) => {

        course.professors=this.getProfessorOfCourse(course.id);

        this.courses.push(course);
      });
    })

  }

    if(localStorage.getItem("rol")?.includes("professor")){

    this.courseRestService.getCoursesOfProfessor().subscribe(
      (courses)=>{
        courses.forEach((course:CourseModel) => {
  
          course.professors=this.getProfessorOfCourse(course.id);
  
          this.courses.push(course);
        });
      })

    }



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


getProfessorOfCourse(idCourse:number){
  let professors:Professor[]=[];

  this.courseRestService.getProfessorsOfCourse(idCourse).subscribe(
    (professor:any)=>{
       
      professor.forEach((element:Professor) => {
        professors.push(element)
      });
   
    });

    return professors;
}







}

