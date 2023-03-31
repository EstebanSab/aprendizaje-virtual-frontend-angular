
import { Component, OnInit } from '@angular/core';
import { AuthRestService } from '../../services/authRest.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


username:string ="";
password:string="";
private usuarioLogueado:boolean | undefined;


constructor(private authRestService:AuthRestService ){}


loginUser(){
  let logueado = false;
  this.authRestService.loginUserApi({username:this.username,password:this.password});
  
}
getStudent(){

}

ngOnInit(){
  
}

}
