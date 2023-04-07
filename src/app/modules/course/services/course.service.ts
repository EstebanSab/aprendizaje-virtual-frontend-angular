import { Injectable, OnInit } from '@angular/core';
import { enviroment } from 'src/environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseContentModel } from '../model/CourseContentModel';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private apiServerUrl = enviroment.apiBaseUrl;




  constructor( private http: HttpClient) { }

   private getIdCourseSelectedNumber():number{
    let courseId = JSON.parse(localStorage.getItem("courseSelected") || "{id:0}").id;
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
            title:element.title,
            content: element.content
          })
        });
        
        contentOfCourse.sort((a,b)=>{return a.id-b.id})
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
      (response: CourseContentModel[]) => {

        response.forEach(element => {
          contentOfCourse.push({
            id: element.id,
            title:element.title,
            content: element.content
          })
        });

        contentOfCourse.sort((a,b)=>{return a.id-b.id})

      }

    )
    return contentOfCourse;
  }



  
  private httpPostContent(content:CourseContentModel):Observable<any>{
    let courseId= this.getIdCourseSelectedNumber();

    return  this.http.post(
      `${this.apiServerUrl}/v1/content/course/${courseId}`,
      JSON.stringify(content),
      {observe:'response'});
    }


    public apiPostContent(content:CourseContentModel):void{
      this.httpPostContent(content).subscribe();
    }



    public httpPutContent(courseContent:CourseContentModel):Observable<any>{
      let courseId= this.getIdCourseSelectedNumber();

      return this.http.put(
        `${this.apiServerUrl}/v1/content/course/${courseId}`,
        JSON.stringify(courseContent),
        {observe:'response'});
      }


     

}