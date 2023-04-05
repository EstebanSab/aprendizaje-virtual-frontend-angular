import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCoursesViewComponent } from './public-courses-view.component';

describe('PublicCoursesViewComponent', () => {
  let component: PublicCoursesViewComponent;
  let fixture: ComponentFixture<PublicCoursesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicCoursesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicCoursesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
