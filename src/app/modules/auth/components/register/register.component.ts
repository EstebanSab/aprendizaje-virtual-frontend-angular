import { Component } from '@angular/core';
import { UserRegister } from '../../model/UserRegister';
import { AuthRestService } from '../../services/authRest.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  roles:string[][]=[["Student","ROLE_STUDENT"],["Professor","ROLE_PROFESSOR"]];

  userToRegister:UserRegister={
    username:"",
    password:"",
    name:"",
    lastName:"",
    mail:"",
    role:""
  }
  

  constructor(private authRestService:AuthRestService ){}
  
  registerUser(){
    console.log(this.userToRegister);
    this.authRestService.registerUserApi(this.userToRegister);
  }
}
