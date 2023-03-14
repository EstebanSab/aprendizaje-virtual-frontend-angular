import { Injectable } from '@angular/core';
import { AuthApiService } from 'src/app/apiRestServices/auth-api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
constructor(private authApiService:AuthApiService){}

  loginUser(username:number,password:string){

    this.authApiService.loginUserApi({documento:username,password:password}).subscribe(
      (response:any) =>{
      //const headers = response.getHeaders();
      //const names= headers.getAll();
      //names.forEach( (headerName:any) => {
      //  console.log(headerName,headers.get(headerName));
      //});
      console.log(response);
      const headers =response.headers;
      console.log(headers);
      console.log(headers.getAll());
      console.log(headers.get('Authorization'));
    })
  }

}