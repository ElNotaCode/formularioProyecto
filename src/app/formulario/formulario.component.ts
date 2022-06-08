import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  text: string = '';
  static: string = 'ejemplo@static.com';
  password: string = '';
  textArea: string = '';
  validar: boolean = true;

  enviarFormulario() {
    alert('Este botón no envia nada.');
  }

  constructor() {}

  ngOnInit(): void {}
}
