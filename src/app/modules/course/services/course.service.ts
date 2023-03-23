import { Injectable, OnInit } from '@angular/core';
import { TransferDataService } from '../../home/services/transfer-data.service';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  courseSelected:number =0;
  constructor(private transferData:TransferDataService) { }
  
  getContentCourse(){
 
  this.transferData.getIdCourseSelected$().subscribe(
  (courseId:number)=>{
    this.courseSelected =  courseId;
    console.log("course number is",courseId);
  }
  );
}

}
