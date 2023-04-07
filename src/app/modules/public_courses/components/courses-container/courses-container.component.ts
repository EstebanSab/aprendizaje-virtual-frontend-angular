import { Component, Input, OnInit } from '@angular/core';
import { CourseModel, Professor } from '../../model/CourseModel';
import { RestCoursesService } from '../../services/rest-courses.service';
import { PaginationModel } from '../../model/PaginationModel';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'public-courses-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.css']
})
export class CoursesContainerComponent implements OnInit {
pagination:PaginationModel ={
  page:0,
  size:8
}

isPhonePortrait=false;
isWebPortrait = false;
coursesToList:CourseModel[]= [];

  constructor(private restCoursesService:RestCoursesService,
    private breakpointObserver: BreakpointObserver){}



ngOnInit(): void {
  this.responsiveVerifier();
  this.doPagination();
}


showCourses(direcction:boolean){
  this.pagination.page =direcction?this.pagination.page+=1:this.pagination.page-=1;
  console.log(this.pagination)
  this.doPagination();
}

doPagination(){
  this.coursesToList= [];

  this.restCoursesService.apiGetCoursesPaged(this.pagination).subscribe(
    (coursesApi)=>{
      this.coursesToList=coursesApi;
      this.getProfessorOfCourse();
     
      });
  }
  





    responsiveVerifier(){
      this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe(
        (result) => {
          const breakpoints = result.breakpoints
      
          this.isPhonePortrait = breakpoints[Breakpoints.XSmall]; 
          this.isWebPortrait = !breakpoints[Breakpoints.XSmall];
        });
  }



  getProfessorOfCourse(){
    this.coursesToList.forEach(
        (course:CourseModel) => {
          if(localStorage.getItem("token")){
          course.professors = this.getProfessorOfCourseRest(course.id)
          }else{
            course.professors = [{id:0,name:"You must login to see",especiality:""}]
          }
          return course
      })}


  getProfessorOfCourseRest(idCourse:number){
    let professors:Professor[]=[];
  
    this.restCoursesService.getProfessorsOfCourse(idCourse).subscribe(
      (professor:any)=>{
         
        professor.forEach((element:Professor) => {
          professors.push(element)
        });
     
      });
      return professors;
    }
}

