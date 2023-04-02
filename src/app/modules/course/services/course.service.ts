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

  private apiServerUrl = enviroment.apiBaseUrl;




  constructor(private transferData: TransferDataService,
    private http: HttpClient) { }

   private getIdCourseSelectedNumber():number{
    let courseId =localStorage.getItem("courseId") || "0";
   return parseInt(courseId);
   }



  private httpCourseContentAsStudent(idCourse: number): Observable<any> {
    return this.http.get(
      `${this.apiServerUrl}/v1/content/course/${idCourse}/student`);
  }


  public getContentOfCourseAsStudent(): CourseContentModel[] {
    let contentOfCourse: CourseContentModel[] = [];
    
    let courseId= this.getIdCourseSelectedNumber();
        
    this.httpCourseContentAsStudent(courseId).subscribe(
      (response: any[]) => {

        response.forEach(element => {
          contentOfCourse.push({
            id: element.id,
            content: element.content
          })
        });

      }

    )
    return contentOfCourse
  }




  private httpCourseContentAsProfessor(idCourse: number): Observable<any> {
    return this.http.get(
      `${this.apiServerUrl}/v1/content/course/${idCourse}/professor`);
  }


  public getContentOfCourseAsProfessor(): CourseContentModel[] {
    let contentOfCourse: CourseContentModel[] = [];
    
    let courseId= this.getIdCourseSelectedNumber();
        
    this.httpCourseContentAsProfessor(courseId).subscribe(
      (response: any[]) => {

        response.forEach(element => {
          contentOfCourse.push({
            id: element.id,
            content: element.content
          })
        });

      }

    )
    return contentOfCourse
  }



  
  private httpPostContent(content:string):Observable<any>{
    let courseId= this.getIdCourseSelectedNumber();

    return  this.http.post(
      `${this.apiServerUrl}/v1/content/course/${courseId}`,
      JSON.stringify({id:0,content:content}),
      {observe:'response'});
    }


    public apiPostContent(content:string):void{
      this.httpPostContent(content).subscribe();
    }
}