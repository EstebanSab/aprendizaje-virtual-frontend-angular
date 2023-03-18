import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {

  constructor(private http:HttpClient) { }

  private apiServerUrl=enviroment.apiBaseUrl;

  getStudentById(id:number){
    console.log("api");
    console.log(this.http.get(
      `${this.apiServerUrl}/v1/student/me`).subscribe(a=>{console.log(a)}));
  }

   
}
