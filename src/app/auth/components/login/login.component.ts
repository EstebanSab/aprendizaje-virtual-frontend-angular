import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


username:number =0;
password:string="";
private usuarioLogueado:boolean | undefined;


constructor(private authService:AuthService ){}

loginUser(){
  console.log(this.username," ",this.password)
  this.authService.loginUser(this.username,this.password)
   
}

getStudent(){
  this.authService.getStudent();
}

ngOnInit(){
  
}

}
