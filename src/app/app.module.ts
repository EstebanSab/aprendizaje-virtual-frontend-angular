import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AuthModule } from './modules/auth/auth.module';
import { CourseModule } from './modules/course/course.module';
import { HomeModule } from './modules/home/home.module';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { PublicCoursesModule } from './modules/public_courses/public-courses.module';
import { StudentModule } from './modules/student/student.module';
import { ProfessorModule } from './modules/professor/professor.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CourseModule,
    HomeModule,
    HttpClientModule,
    PublicCoursesModule,
    ProfessorModule,
    StudentModule 
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

