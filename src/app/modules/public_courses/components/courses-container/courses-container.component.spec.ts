import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesContainerComponent } from './courses-container.component';

describe('CourseListComponent', () => {
  let component: CoursesContainerComponent;
  let fixture: ComponentFixture<CoursesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
