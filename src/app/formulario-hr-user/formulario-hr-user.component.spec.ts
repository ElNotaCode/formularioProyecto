import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioHrUserComponent } from './formulario-hr-user.component';

describe('FormularioHrUserComponent', () => {
  let component: FormularioHrUserComponent;
  let fixture: ComponentFixture<FormularioHrUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioHrUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioHrUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
