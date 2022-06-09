import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-candidate-position',
  templateUrl: './formulario-candidate-position.component.html',
  styleUrls: ['./formulario-candidate-position.component.css'],
})
export class FormularioCandidatePositionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  fkCandidate: any;
  fkPosition: any;

  validarFkCandidate: boolean = true;
  validarFkPosition: boolean = true;

  enviarFormulario() {}
}
