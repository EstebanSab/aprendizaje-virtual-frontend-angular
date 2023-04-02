import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
  

  setCourseIdNumber(idCourse:number){
    localStorage.setItem("courseId",""+idCourse)
   }
}
