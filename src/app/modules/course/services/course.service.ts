import { Injectable, OnInit } from '@angular/core';
import { TransferDataService } from '../../home/services/transfer-data.service';
import { enviroment } from 'src/environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseContentModel } from '../model/CourseContentModel';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private apiServerUrl=enviroment.apiBaseUrl;

  

  courseSelected:number =0;
  constructor(private transferData:TransferDataService,
    private http:HttpClient) { }


  
  getContentCourse(){
 
  this.transferData.getIdCourseSelected$().subscribe(
  (courseId:number)=>{
    this.courseSelected =  courseId;
    console.log("course number is",courseId);
  }
  );
}


private httpCourseContent(idCourse:number):Observable<any>{
  return  this.http.get(
    `${this.apiServerUrl}/v1/content/course/${idCourse}`);
  }


public apiCourseContent(idCourse:number):CourseContentModel[]{
 let contentOfCourse:CourseContentModel[]=[];


  this.httpCourseContent(idCourse).subscribe(
    (contents:any[])=>{

      contents.forEach(content => {
        contentOfCourse.push({
          id:content.id,
          content:content.content
        })
      });
       
    }

  )
  return contentOfCourse
}
}