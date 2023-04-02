import { Component } from '@angular/core';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent {
  isProfessor():boolean{
    if(localStorage.getItem("rol")?.includes("professor")){
      return true
    }
    return false;
  }
}
