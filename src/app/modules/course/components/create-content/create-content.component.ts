import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent {


  constructor(private courseService:CourseService){}

  content:string="";

  saveContent(){
    this.courseService.apiPostContent(this.content);
  }
}
