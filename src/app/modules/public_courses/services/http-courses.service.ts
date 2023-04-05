import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class HttpCoursesService {
  private apiServerUrl=enviroment.apiBaseUrl;
  constructor(private http:HttpClient) { }


  public apiGetCoursesPaged():Observable<any>{
    return   this.http.get(
      `${this.apiServerUrl}/v1/course/all/paged?page=0&size=2`)
  }

}
