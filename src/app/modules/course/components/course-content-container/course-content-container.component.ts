import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { CourseContentModel } from '../../model/CourseContentModel';
import { Router } from '@angular/router';

@Component({
  selector: 'course-course-content-container',
  templateUrl: './course-content-container.component.html',
  styleUrls: ['./course-content-container.component.css']
})
export class CourseContentContainerComponent implements OnInit{

  courseSelectedId:number=-1;


  contentsOfCourse:CourseContentModel[]=[];

  constructor(private courseService:CourseService,private router:Router){}
  
  ngOnInit(): void {
    if(localStorage.getItem("rol")?.includes("professor")){
      this.contentsOfCourse = this.courseService.getContentOfCourseAsProfessor();
    }

    if(localStorage.getItem("rol")?.includes("student")){
      this.contentsOfCourse = this.courseService.getContentOfCourseAsStudent();
    }
    
    
  }
  
  reloadComponent(reload:boolean){
    const url = this.router.url;

    this.router.navigateByUrl('/',{skipLocationChange:true}).then(
      ()=>{this.router.navigate([`/${url}`])}
    )
  }

/*
  reloadComponent(reloadMe:boolean,urlOfComponentToReload ?:string){
    const url = reloadMe ? this.router.url : urlOfComponentToReload;

    this.router.navigateByUrl('/',{skipLocationChange:true}).then(
      ()=>{this.router.navigate([`/${url}`])}
    )
  }

   */
  

}
