import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-position',
  templateUrl: './formulario-position.component.html',
  styleUrls: ['./formulario-position.component.css'],
})
export class FormularioPositionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  titulo: string = '';
  descripcion: string = '';

  validarTitulo: boolean = true;
  validarDescripcion: boolean = true;

  enviarFormulario() {
    alert('Este botón no envia nada.');
  }
}
