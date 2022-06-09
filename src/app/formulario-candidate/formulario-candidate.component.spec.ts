import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCandidateComponent } from './formulario-candidate.component';

describe('FormularioCandidateComponent', () => {
  let component: FormularioCandidateComponent;
  let fixture: ComponentFixture<FormularioCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
