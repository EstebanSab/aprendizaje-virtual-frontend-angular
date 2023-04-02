import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plataforma-educativa';
  
  constructor(private appRoutingModule:AppRoutingModule){}

  isLogin():boolean{
    return localStorage.getItem('token')?true:false;
  }

  closeSesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('courseId');
    localStorage.removeItem('rol');
    this.appRoutingModule.goLoginRedirect();
  }
}
