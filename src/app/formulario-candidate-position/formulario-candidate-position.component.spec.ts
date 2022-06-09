import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCandidatePositionComponent } from './formulario-candidate-position.component';

describe('FormularioCandidatePositionComponent', () => {
  let component: FormularioCandidatePositionComponent;
  let fixture: ComponentFixture<FormularioCandidatePositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCandidatePositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCandidatePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
