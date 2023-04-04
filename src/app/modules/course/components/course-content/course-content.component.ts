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

  editMode=false;
  contentModified = "";

  //@Output() hasToReload= new EventEmitter<boolean>();
  //this.hasToReload.emit(true);

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
    this.courseService.httpPutContent(
      {
      id:contentId,
      content:this.contentModified
    }).subscribe(
    () =>{
      this.reloadComponent(true);
     });
    
  }


 
  reloadComponent(reloadMe:boolean,urlOfComponentToReload ?:string){
    const url = reloadMe ? this.router.url : urlOfComponentToReload;

    this.router.navigateByUrl('/',{skipLocationChange:true}).then(
      ()=>{this.router.navigate([`/${url}`])}
    )
  }

   
}
