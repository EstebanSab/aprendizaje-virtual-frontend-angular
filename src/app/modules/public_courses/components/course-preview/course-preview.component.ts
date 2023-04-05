import { Component, Input } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CourseModel } from '../../model/CourseModel';



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


  constructor(private router:AppRoutingModule){}


  goCourseRedirection(arg0: number) {
    this.router.goCourseRedirect();
  }


  goProfessorRedirection(arg0: number) {
    alert("professor id"+arg0);
  }
  
}
