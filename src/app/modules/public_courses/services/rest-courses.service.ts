import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/enviroment';
import { PaginationModel } from '../model/PaginationModel';


@Injectable({
  providedIn: 'root'
})
export class RestCoursesService {
  private apiServerUrl=enviroment.apiBaseUrl;
  constructor(private http:HttpClient) { }


  public apiGetCoursesPaged(page:PaginationModel):Observable<any>{
    return   this.http.get(
      `${this.apiServerUrl}/v1/course/all/paged?page=${page.page}&size=${page.size}`)
  }

  public apiSetStudentInCourse(courseId:number):Observable<any>{
    return this.http.post(
      `${this.apiServerUrl}/v1/method/student/course/${courseId}`,
      {observe:'response'}
    );
  }

  public getProfessorsOfCourse(idCourse:number):Observable<any>{
    return  this.http.get(
      `${this.apiServerUrl}/v1/professor/course/${idCourse}`)
    }
}
