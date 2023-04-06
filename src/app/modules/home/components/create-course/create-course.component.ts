import { Component } from '@angular/core';
import { HomeRestService } from '../../services/home-rest.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
newCourseName="";
  constructor(private courseRestService:HomeRestService){}


createNewCourse(){
  this.courseRestService.httpCreateCourse(this.newCourseName).subscribe(
  (newCourse)=>{
    this.courseRestService.addMeProfessorToCourse(newCourse.body.id).subscribe()
  })
}




}
