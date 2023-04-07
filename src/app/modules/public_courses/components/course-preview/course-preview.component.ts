import { Component, Input } from '@angular/core';
import { CourseModel } from '../../model/CourseModel';
import { RestCoursesService } from '../../services/rest-courses.service';
import { Router } from '@angular/router';



@Component({
  selector: 'home-course-preview',
  templateUrl: './course-preview.component.html',
  styleUrls: ['./course-preview.component.css']
})
export class CoursePreviewComponent {
  @Input() course:CourseModel={
    id: 0,
    name: '',
    professors: []
  }


  constructor(private router:Router,
    private restCoursesService:RestCoursesService){}


  setStudentInCourse(){
    if(localStorage.getItem('token')){
    this.restCoursesService.apiSetStudentInCourse(this.course.id).subscribe(
       (courseDto)=>{
        console.log(courseDto)
        localStorage.setItem("courseSelected",JSON.stringify(courseDto));
        this.router.navigate([`/course`]);
      }
    )
  }else{
    this.router.navigate([`/login`]);
  }
  }
  goProfessorRedirection(arg0: number) {
    alert("professor id"+arg0);
  }


  
}
