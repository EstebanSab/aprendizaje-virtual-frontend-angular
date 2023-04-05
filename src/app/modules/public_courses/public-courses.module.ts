import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {LayoutModule} from '@angular/cdk/layout';
import { PublicCoursesViewComponent } from './pages/public-courses-view/public-courses-view.component';
import { CoursesContainerComponent } from './components/courses-container/courses-container.component';
import { CoursePreviewComponent } from './components/course-preview/course-preview.component';


@NgModule({
  declarations: [
    PublicCoursesViewComponent,
    CoursesContainerComponent,
    CoursePreviewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutModule
  ],
  exports:[
  ]
})
export class PublicCoursesModule { }