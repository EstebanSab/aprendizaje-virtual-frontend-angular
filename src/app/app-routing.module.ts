import { NgModule } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';

import { AuthViewComponent } from './modules/auth/pages/auth-view/auth-view.component';
import { CourseViewComponent } from './modules/course/pages/course-view/course-view.component';
import { HomeViewComponent } from './modules/home/pages/home-view/home-view.component';


const routes: Routes = [ 
  {path:'home',component:HomeViewComponent},
  {path:'login',component:AuthViewComponent},
  {path:'course',component:CourseViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router){}

  goCourseRedirect(){
    this.router.navigate(['/course']);
  }
  
 }
