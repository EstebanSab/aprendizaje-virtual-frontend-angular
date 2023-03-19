import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username:number | undefined;
  password:string="";
  firstname:string="";
  lastname:string="";
  private usuarioLogueado:boolean | undefined;
  
  
  registerUser(){
    console.log(this.username," ",this.password)
  }
}
