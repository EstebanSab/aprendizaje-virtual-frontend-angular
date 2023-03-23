import { Component, OnInit } from '@angular/core';
import { CourseModel, Professor } from '../../model/CourseModel';
import { HomeRestService } from '../../services/home-rest.service';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'home-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {


  constructor(private courseRestService:HomeRestService,
    private router:AppRoutingModule){}

courses:CourseModel[]= [];



ngOnInit(): void {
  console.log("init");
  
   this.courseRestService.getCoursesOfStudent().subscribe(
    (courses)=>{
      courses.forEach((course:CourseModel) => {

        course.professors=this.getProfessorOfCourse(course.id);

        this.courses.push(course);
      });

    }
  
  )

  /*this.courses =[{
    id:1,
    name:'informatica II',
    professors:[{}]
  },{
    id:2,
    name:'poo II',
    professors:['tiago','marcela']
  },
  {
    id:3,
    name:'informatica II',
    professors:['miguel']
  }]
*/
}

goCourseRedirection(arg0: number) {
  console.log(arg0);
  this.router.goCourseRedirect();
  
}

getProfessorOfCourse(idCourse:number){
  let professors:Professor[]=[];

  this.courseRestService.getProfessorsOfCourse(idCourse).subscribe(
    (professor:any)=>{
       
      professor.forEach((element:Professor) => {
        professors.push(element)
      });
   
    });

    return professors;
}



}

