import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-candidate',
  templateUrl: './formulario-candidate.component.html',
  styleUrls: ['./formulario-candidate.component.css'],
})
export class FormularioCandidateComponent implements OnInit {
  nombre: string = '';
  apellidos: string = '';

  validarNombre: boolean = true;
  validarApellidos: boolean = true;

  enviarFormulario() {}

  constructor() {}

  ngOnInit(): void {}
}
