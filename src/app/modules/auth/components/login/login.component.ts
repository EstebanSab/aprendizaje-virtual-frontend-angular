import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthRestService } from '../../services/authRest.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


username:number =0;
password:string="";
private usuarioLogueado:boolean | undefined;


constructor(private authRestService:AuthRestService ){}


loginUser(){
  let logueado = false;
  this.authRestService
  .loginUserApi({documento:this.username,password:this.password})
  .subscribe(
    (response:HttpResponse<any>) =>{
 
    const headers =response.headers;
    const bearer= headers.get('Authorization');

      const token =bearer?.replace('Bearer ','');
      if (token != null){
        localStorage.setItem('token',token);
        logueado = true;
      }
  })
}
getStudent(){

}

ngOnInit(){
  
}

}
