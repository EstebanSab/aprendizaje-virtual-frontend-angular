import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { CourseContentModel } from '../../model/CourseContentModel';


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent {


  constructor(private courseService:CourseService){}

  courseContent:CourseContentModel={
    id:0,
    title:"",
    content:""
  }
  

  saveContent(){
    this.courseService.apiPostContent(this.courseContent);
  }



}
