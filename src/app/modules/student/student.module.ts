import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentViewComponent } from './pages/student-view/student-view.component';
import { StudentTemplateComponent } from './components/student-template/student-template.component';



@NgModule({
  declarations: [
    StudentViewComponent,
    StudentTemplateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }
