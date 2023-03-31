import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent {

  @Input() contentId:number = 0;
  @Input() contentText:string = "";

  

}
