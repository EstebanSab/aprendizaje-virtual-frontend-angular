import { Component, Input } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CourseModel } from '../../model/CourseModel';

import { Router } from '@angular/router';
import { HomeRestService } from '../../services/home-rest.service';


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


  constructor(private router:Router,private homeRestService:HomeRestService){}


  goCourseRedirection(idCourse: number) {
    localStorage.setItem("courseSelected",JSON.stringify({id:idCourse,name:this.course.name}));
    this.router.navigate([`/course`])
  }


  deleteCourse(){
    this.homeRestService.restDeleteCourse(this.course.id).subscribe(
     ()=>{ this.reloadComponent()}
    );
  }


  goProfessorRedirection(arg0: number) {
    alert("professor id"+arg0);
  }

  reloadComponent(){
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(
      ()=>{this.router.navigate([`/home`])}
    )
  }
  

  isProfessor(){
    return localStorage.getItem("rol")?.includes("professor") || false;
  }
}
