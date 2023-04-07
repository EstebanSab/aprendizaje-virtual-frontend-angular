import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'plataforma-educativa';
  isPhonePortrait = false;
  isWebPortrait = false;
  menuActivated=false;

   constructor(private router:Router,
    private breakpointObserver: BreakpointObserver){}

  

    ngOnInit() {
      this.responsiveVerifier();
    }
    

  isLogin():boolean{
    return localStorage.getItem('token')?true:false;
  }

  closeSesion(){
    localStorage.clear()
    this.router.navigate([`/public`])
  }


responsiveVerifier(){
this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe(
  (result) => {
    const breakpoints = result.breakpoints

    this.isPhonePortrait = breakpoints[Breakpoints.XSmall]; 
    this.isWebPortrait = !breakpoints[Breakpoints.XSmall];
  });
}

}
