import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AuthModule } from './modules/auth/auth.module';
import { CourseModule } from './modules/course/course.module';
import { HomeModule } from './modules/home/home.module';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ProfessorViewComponent } from './modules/professor/pages/professor-view/professor-view.component';
import { ProfessorTemplateComponent } from './modules/professor/components/professor-template/professor-template.component';
import { StudentViewComponent } from './modules/student/pages/student-view/student-view.component';
import { StudentTemplateComponent } from './modules/student/components/student-template/student-template.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfessorViewComponent,
    ProfessorTemplateComponent,
    StudentViewComponent,
    StudentTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CourseModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
