import { Component, Input } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent {

  constructor(private courseService:CourseService){}
  
  @Input() contentId:number = 0;
  @Input() contentText:string = "";

  editMode=false;
  contentModified = "";

  @Output() hasToReload= new EventEmitter<boolean>();


  isProfessor():boolean{
    if(localStorage.getItem("rol")?.includes("professor")){
      return true
    }
    return false;
  }

  editText(){
    this.editMode = true;
    this.contentModified=this.contentText;
  }

  saveContent(contentId:number){
    this.courseService.apiPutContent(
      {
      id:contentId,
      content:this.contentModified
    });
    this.hasToReload.emit(true);
  }
}
