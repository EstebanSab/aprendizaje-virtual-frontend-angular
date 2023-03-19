import { Component } from '@angular/core';
import { CourseModel } from '../../model/CourseModel';

@Component({
  selector: 'home-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
courses:CourseModel[]=[{
  name:'informatica II',
  professors:['Pablo']
},{
  name:'poo II',
  professors:['tiago','marcela']
},
{
  name:'informatica II',
  professors:['miguel']
}]
}
