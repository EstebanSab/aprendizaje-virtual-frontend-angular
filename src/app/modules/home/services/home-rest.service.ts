import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/enviroment';
import { CourseModel } from '../model/CourseModel';

@Injectable({
  providedIn: 'root'
})
export class HomeRestService {

  private apiServerUrl=enviroment.apiBaseUrl;
  
  constructor(private http:HttpClient) { }
  
  public getCoursesOfStudent():Observable<any>{
    return  this.http.get(
      `${this.apiServerUrl}/v1/course/student/courses`)
    }

    public getProfessorsOfCourse(idCourse:number):Observable<any>{
      return  this.http.get(
        `${this.apiServerUrl}/v1/professor/course/${idCourse}`)
      }

  public getCoursesOfProfessor():Observable<any>{
    return  this.http.get(
      `${this.apiServerUrl}/v1/course/professor/courses`)
    }

    public httpCreateCourse(newCourse:string):Observable<any>{
      return  this.http.post(
        `${this.apiServerUrl}/v1/course`,
        JSON.stringify({id:0,name:newCourse}),
        {observe:'response'})
      }

      public addMeProfessorToCourse(idNewCourse:number):Observable<any>{
        return  this.http.post(
          `${this.apiServerUrl}/v1/method/professor/course/${idNewCourse}`,
          {observe:'response'})
        }
      
  public restDeleteCourse(courseId:number):Observable<any>{
    return  this.http.delete(
      `${this.apiServerUrl}/v1/course/${courseId}`,
      {observe:'response'})
    }
  }


