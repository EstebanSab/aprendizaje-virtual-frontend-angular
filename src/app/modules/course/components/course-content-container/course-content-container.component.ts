import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'course-course-content-container',
  templateUrl: './course-content-container.component.html',
  styleUrls: ['./course-content-container.component.css']
})
export class CourseContentContainerComponent implements OnInit{


  constructor(private courseService:CourseService){}
  ngOnInit(): void {
    this.courseService.getContentCourse();
  }

num:number[]=[1,2,3,5,6,7,3,4,34,43];
}
