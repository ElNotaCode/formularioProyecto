import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCandidateSkillComponent } from './formulario-candidate-skill.component';

describe('FormularioCandidateSkillComponent', () => {
  let component: FormularioCandidateSkillComponent;
  let fixture: ComponentFixture<FormularioCandidateSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCandidateSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCandidateSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
