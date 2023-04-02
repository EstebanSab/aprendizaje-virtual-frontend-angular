import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/enviroment';

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


}
