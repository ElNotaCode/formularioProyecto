import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSkillComponent } from './formulario-skill.component';

describe('FormularioSkillComponent', () => {
  let component: FormularioSkillComponent;
  let fixture: ComponentFixture<FormularioSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
