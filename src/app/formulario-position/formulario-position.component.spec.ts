import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPositionComponent } from './formulario-position.component';

describe('FormularioPositionComponent', () => {
  let component: FormularioPositionComponent;
  let fixture: ComponentFixture<FormularioPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
