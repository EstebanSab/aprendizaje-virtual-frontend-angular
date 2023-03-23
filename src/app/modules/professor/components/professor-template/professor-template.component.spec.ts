import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorTemplateComponent } from './professor-template.component';

describe('ProfessorTemplateComponent', () => {
  let component: ProfessorTemplateComponent;
  let fixture: ComponentFixture<ProfessorTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
