import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { CourseContentModel } from '../../model/CourseContentModel';

@Component({
  selector: 'course-course-content-container',
  templateUrl: './course-content-container.component.html',
  styleUrls: ['./course-content-container.component.css']
})
export class CourseContentContainerComponent implements OnInit{

  courseSelectedId:number=-1;


  contentsOfCourse:CourseContentModel[]=[];

  constructor(private courseService:CourseService){}
  ngOnInit(): void {
    console.log("init course content")

    this.contentsOfCourse = this.courseService.getContentOfCourseAsStudent();

  }


}
