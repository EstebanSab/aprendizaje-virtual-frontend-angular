import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CoursePreviewComponent } from './components/course-preview/course-preview.component';
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    CourseListComponent,
    CoursePreviewComponent,
    HomeViewComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    HomeViewComponent
  ]
})
export class HomeModule { }
