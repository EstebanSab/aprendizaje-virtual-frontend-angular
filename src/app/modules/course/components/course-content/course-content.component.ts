import { Component, Input } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'course-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent {

  constructor(private courseService:CourseService,private router:Router){}

  @Input() contentId:number = 0;
  @Input() contentText:string = "";
  @Input() contentTitle:string="";

  editMode=false;
  contentModified = "";
  titleModified= "";

  //@Output() hasToReload= new EventEmitter<boolean>();
  //this.hasToReload.emit(true);

  isProfessorAndNoEditMode():boolean{
    if(localStorage.getItem("rol")?.includes("professor") && !this.editMode){
      return true
    }
    return false;
  }

  CancelEdit(){
    this.editMode=false;
  }

  editText(){
    this.editMode = true;
    this.contentModified=this.contentText;
    this.titleModified=this.contentTitle;
  }

  saveContent(contentId:number){
    this.courseService.httpPutContent(
      {
      id:contentId,
      title:this.titleModified,
      content:this.contentModified
    }).subscribe(() =>{
      this.contentText=this.contentModified;
      this.editMode=false;
      this.contentTitle=this.titleModified;
     });
    
  }


 
  reloadComponent(reloadMe:boolean,urlOfComponentToReload ?:string){
    const url = reloadMe ? this.router.url : urlOfComponentToReload;

    this.router.navigateByUrl('/',{skipLocationChange:true}).then(
      ()=>{this.router.navigate([`/${url}`])}
    )
  }

   
}
