import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-hr-user-position',
  templateUrl: './formulario-hr-user-position.component.html',
  styleUrls: ['./formulario-hr-user-position.component.css'],
})
export class FormularioHrUserPositionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  fkHrUser: any;
  fkPosition: any;

  validarFkHrUser: boolean = true;
  validarFkPosition: boolean = true;

  enviarFormulario() {}
}
