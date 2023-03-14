import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentApiService } from 'src/app/apiRestServices/student-api.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
constructor(private authentication:AuthenticationService,
  private studentService:StudentApiService){}
loginUser(username:number,password:string):boolean{
    return this.authentication.loginUser(username,password);
}

getStudent(){
  this.studentService.getStudentById(1).subscribe((student:any)=>{
    console.log(student);
  });
}

}