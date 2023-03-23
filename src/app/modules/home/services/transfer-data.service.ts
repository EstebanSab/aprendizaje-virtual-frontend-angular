import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
  private courseId$:Subject<number>

  constructor() {
    this.courseId$ = new Subject();
    this.courseId$.next(1);
   }

   setCourseId(idCourse:number){
    this.courseId$.next(idCourse);
   }

   getIdCourseSelected$():Observable<number>{
    return this.courseId$.asObservable();
  } 
}
