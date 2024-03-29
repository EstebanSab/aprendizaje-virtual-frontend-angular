import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentials } from '../model/UserCredentials';
import { enviroment } from 'src/environments/enviroment';
import { UserRegister } from '../model/UserRegister';
import { AppRoutingModule } from 'src/app/app-routing.module';


@Injectable({
  providedIn: 'root'
})


export class AuthRestService {

  private apiServerUrl=enviroment.apiBaseUrl;

  constructor(private http:HttpClient,
    private appRoutingModule:AppRoutingModule) { }
    
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
            //save data of user in local storage
            //and redirect to home
            this.saveUserData();
          }
      })
    }



    public registerUserApi(userRegister:UserRegister):void{
      this.httpRegister(userRegister).subscribe()
    }




    private httpGetUser():Observable<any>{
      return  this.http.get(
        `${this.apiServerUrl}/v1/userdata/`);
      }

  public saveUserData(){
   this.httpGetUser().subscribe(
      (user)=>{
        let rol= (user.role.split("_")[1].toLowerCase())
        
        localStorage.setItem("rol",rol)
        localStorage.setItem("user",JSON.stringify(user));

        //redirect to home page
        this.appRoutingModule.goHomeRedirect();
      }
    )
  }
}