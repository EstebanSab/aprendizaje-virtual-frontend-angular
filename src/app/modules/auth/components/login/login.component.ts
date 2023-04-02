
import { Component, OnInit } from '@angular/core';
import { AuthRestService } from '../../services/authRest.service';
import { AppRoutingModule } from 'src/app/app-routing.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


username:string ="";
password:string="";
rol:string="";


constructor(private authRestService:AuthRestService,
  private appRoutingModule:AppRoutingModule ){}


loginUser(){
  let logueado:boolean = false;
  localStorage.setItem('rol',this.rol);
 this.authRestService.loginUserApi({username:this.username,password:this.password});  

 
}




}
