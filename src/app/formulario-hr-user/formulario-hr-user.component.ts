import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-hr-user',
  templateUrl: './formulario-hr-user.component.html',
  styleUrls: ['./formulario-hr-user.component.css'],
})
export class FormularioHrUserComponent implements OnInit {
  username: string = '';

  validarUsername: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  enviarFormulario() {}
}
