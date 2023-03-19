import { Component, Input } from '@angular/core';
import { CourseModel } from '../../model/CourseModel';


@Component({
  selector: 'home-course-preview',
  templateUrl: './course-preview.component.html',
  styleUrls: ['./course-preview.component.css']
})
export class CoursePreviewComponent {
  @Input() course:CourseModel={
  name: '',
  professors: []
}
}
