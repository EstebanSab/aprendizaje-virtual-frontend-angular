import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseContentContainerComponent } from './course-content-container.component';

describe('CourseContentContainerComponent', () => {
  let component: CourseContentContainerComponent;
  let fixture: ComponentFixture<CourseContentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseContentContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
