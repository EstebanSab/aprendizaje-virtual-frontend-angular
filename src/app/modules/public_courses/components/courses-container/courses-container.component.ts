import { Component, OnInit } from '@angular/core';
import { CourseModel, Professor } from '../../model/CourseModel';
import { HttpCoursesService } from '../../services/http-courses.service';

@Component({
  selector: 'public-courses-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.css']
})
export class CoursesContainerComponent implements OnInit {

  constructor(private httpCoursesService:HttpCoursesService){}

coursesToList:CourseModel[]= [];

ngOnInit(): void {
  this.coursesToList= [];

  this.httpCoursesService.apiGetCoursesPaged().subscribe(
    (coursesApi)=>{
      this.coursesToList=coursesApi;
    }

  )
}


}

