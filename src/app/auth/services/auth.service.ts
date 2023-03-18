import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentApiService } from 'src/app/shared/services/student-api.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

loginUser(username:number,password:string):boolean{
    return this.authentication.loginUser(username,password);
}

getStudent(){
  //this.studentService.getStudentById(1).subscribe((student:any)=>{
   // console.log(student);
  //});
  this.studentService.getStudentById(1);
}

constructor(private http:HttpClient) { }

    public loginUserApi(uc:UserCredentials):Observable<HttpResponse<Object>>{
      return  this.http.post(
        `${this.apiServerUrl}/v1/auth/login`,
        JSON.stringify(uc),
        {observe:'response'});
      }

}