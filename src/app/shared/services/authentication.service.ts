import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthApiService } from 'src/app/apiRestServices/auth-api.service';


@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {
constructor(private authApiService:AuthApiService){}


  loginUser(username:number,password:string){
    let logueado = false;
    this.authApiService.loginUserApi({documento:username,password:password}).subscribe(
      (response:HttpResponse<any>) =>{
   
      const headers =response.headers;
      const bearer= headers.get('Authorization');
  
        const token =bearer?.replace('Bearer','');
        if (token != null){
          localStorage.setItem('token',token);
          logueado = true;
        }
    })
    return logueado;
  }

  getToken(){
  return localStorage.getItem('token');
  }
}