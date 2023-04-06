import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

import { AuthViewComponent } from './modules/auth/pages/auth-view/auth-view.component';
import { CourseViewComponent } from './modules/course/pages/course-view/course-view.component';
import { HomeViewComponent } from './modules/home/pages/home-view/home-view.component';
import { IsLoginGuard } from './core/guards/is-login.guard';
import { PublicCoursesViewComponent } from './modules/public_courses/pages/public-courses-view/public-courses-view.component';


const routes: Routes = [ 
  {path:'',
  component:PublicCoursesViewComponent
  },
  {path:'home',
  component:HomeViewComponent,
  canActivate:[AuthGuard]
  },
  {path:'login',
  component:AuthViewComponent,
  canActivate:[IsLoginGuard]
  },
  {path:'course',
  component:CourseViewComponent,
  canActivate:[AuthGuard]},
  {path:'public',
  component:PublicCoursesViewComponent}
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

  goHomeRedirect(){
    this.router.navigate(['/home']);
  }

  goLoginRedirect(){
    this.router.navigate(['/login']);
  }

  
 }
