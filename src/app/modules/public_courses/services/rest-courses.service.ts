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

}
