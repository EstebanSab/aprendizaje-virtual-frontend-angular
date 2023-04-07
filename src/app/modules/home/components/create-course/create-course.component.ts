import { Component } from '@angular/core';
import { HomeRestService } from '../../services/home-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
newCourseName="";
  constructor(private courseRestService:HomeRestService,private router:Router){}


createNewCourse(){
  this.courseRestService.httpCreateCourse(this.newCourseName).subscribe(
  (newCourse)=>{
    this.courseRestService.addMeProfessorToCourse(newCourse.body.id).subscribe(
      ()=>{ this.reloadComponent()}
    )
  })
}


reloadComponent(){
  this.router.navigateByUrl('/',{skipLocationChange:true}).then(
    ()=>{this.router.navigate([`/home`])}
  )
}

}
