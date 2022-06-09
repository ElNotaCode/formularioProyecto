import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioHrUserPositionComponent } from './formulario-hr-user-position.component';

describe('FormularioHrUserPositionComponent', () => {
  let component: FormularioHrUserPositionComponent;
  let fixture: ComponentFixture<FormularioHrUserPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioHrUserPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioHrUserPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
