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



  private httpCourseContent(idCourse: number): Observable<any> {
    return this.http.get(
      `${this.apiServerUrl}/v1/content/course/${idCourse}/student`);
  }


  public getContentOfCourseAsStudent(): CourseContentModel[] {
    let contentOfCourse: CourseContentModel[] = [];
    
    let courseId= this.transferData.getIdCourseSelectedNumber();
        
    this.httpCourseContent(courseId).subscribe(
      (response: any[]) => {

        response.forEach(element => {
          contentOfCourse.push({
            id: element.id,
            content: element.content
          })
        });

      }

    )



  //});
    return contentOfCourse
  }
}