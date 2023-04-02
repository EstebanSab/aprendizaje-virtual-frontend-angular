import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
  private courseId$:Subject<number>

  private courseIdnumber:number=0;

  constructor() {
    this.courseId$ = new Subject();
    this.courseId$.next(1);
   }

   //setCourseId(idCourse:number){
   // this.courseId$.next(idCourse);
   //}

   getIdCourseSelected$():Observable<number>{
    return this.courseId$.asObservable();
  } 
  getIdCourseSelectedNumber():number{
    return this.courseIdnumber;
  }

  setCourseIdNumber(idCourse:number){
    this.courseIdnumber=idCourse;
   }
}
