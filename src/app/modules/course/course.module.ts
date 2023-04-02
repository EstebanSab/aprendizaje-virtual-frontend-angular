import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseViewComponent } from './pages/course-view/course-view.component';
import { CourseContentComponent } from './components/course-content/course-content.component';
import { CourseContentContainerComponent } from './components/course-content-container/course-content-container.component';
import { CreateContentComponent } from './components/create-content/create-content.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CourseViewComponent,
    CourseContentComponent,
    CourseContentContainerComponent,
    CreateContentComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports:[
    CourseViewComponent
  ]
})
export class CourseModule { }
