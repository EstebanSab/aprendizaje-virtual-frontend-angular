import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
  private courseIdnumber:number=0;

  getIdCourseSelectedNumber():number{
    return this.courseIdnumber;
  }

  setCourseIdNumber(idCourse:number){
    this.courseIdnumber=idCourse;
   }
}
