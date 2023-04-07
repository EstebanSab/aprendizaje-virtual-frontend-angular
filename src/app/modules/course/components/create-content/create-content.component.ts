import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { CourseContentModel } from '../../model/CourseContentModel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent {


  constructor(private courseService:CourseService,private router:Router){}

  courseContent:CourseContentModel={
    id:0,
    title:"",
    content:""
  }
  

  saveContent(){
    this.courseService.restPostContent(this.courseContent).subscribe(
      (content)=>{
      this.reloadComponent();
      }
    );
  }

  reloadComponent(){
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(
      ()=>{this.router.navigate([`/course`])}
    )
  }

}
