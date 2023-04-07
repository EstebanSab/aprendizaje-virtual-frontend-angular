import { Component, Input } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CourseModel } from '../../model/CourseModel';

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


  constructor(private router:Router){}


  goCourseRedirection(idCourse: number) {
    localStorage.setItem("courseSelected",JSON.stringify({id:idCourse,name:this.course.name}));
    this.router.navigate([`/course`])
  }


  goProfessorRedirection(arg0: number) {

    alert("professor id"+arg0);
  }
  
}
