import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentials } from '../model/UserCredentials';
import { enviroment } from 'src/environments/enviroment';
import { UserRegister } from '../model/UserRegister';


@Injectable({
  providedIn: 'root'
})


export class AuthRestService {

  private apiServerUrl=enviroment.apiBaseUrl;

  constructor(private http:HttpClient) { }



  private httpLogin(userCredentials:UserCredentials):Observable<HttpResponse<Object>>{
    return  this.http.post(
      `${this.apiServerUrl}/v1/auth/login`,
      JSON.stringify(userCredentials),
      {observe:'response'});
    }
  

  private httpRegister(userRegister:UserRegister):Observable<HttpResponse<Object>>{
      return  this.http.post(
        `${this.apiServerUrl}/v1/auth/register`,
        JSON.stringify(userRegister),
        {observe:'response'});
      }



    public loginUserApi(userCredentials:UserCredentials):void{
      this.httpLogin(userCredentials).subscribe(
        (response:HttpResponse<any>) =>{
     
        const headers =response.headers;
        const bearer= headers.get('Authorization');
    
        const token =bearer?.replace('Bearer ','');
        if (token != null){
            localStorage.setItem('token',token);
          }
      })
    }



    public registerUserApi(userRegister:UserRegister):void{
      this.httpRegister(userRegister).subscribe()
    }
}