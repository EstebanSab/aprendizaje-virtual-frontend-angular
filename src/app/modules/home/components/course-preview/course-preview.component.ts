import { Component, Input } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CourseModel } from '../../model/CourseModel';
import { TransferDataService } from '../../services/transfer-data.service';


@Component({
  selector: 'home-course-preview',
  templateUrl: './course-preview.component.html',
  styleUrls: ['./course-preview.component.css']
})
export class CoursePreviewComponent {
  @Input() course:CourseModel={
    id: 0,
    name: '',
    professors: []
  }


  constructor(private router:AppRoutingModule,
    private transferData:TransferDataService){}


  goCourseRedirection(arg0: number) {
    this.transferData.setCourseIdNumber(arg0);
    this.router.goCourseRedirect();
    
  }


  goProfessorRedirection(arg0: number) {

    alert("professor id"+arg0);
  }
  
}
