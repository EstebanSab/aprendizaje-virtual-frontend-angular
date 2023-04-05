import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorViewComponent } from './pages/professor-view/professor-view.component';
import { ProfessorTemplateComponent } from './components/professor-template/professor-template.component';



@NgModule({
  declarations: [
    ProfessorViewComponent,
    ProfessorTemplateComponent    
  ],
  imports: [
    CommonModule
  ]
})
export class ProfessorModule { }
