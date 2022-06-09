import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-candidate-skill',
  templateUrl: './formulario-candidate-skill.component.html',
  styleUrls: ['./formulario-candidate-skill.component.css'],
})
export class FormularioCandidateSkillComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  fkCandidate: any;
  fkSkill: any;

  nota: any;
  comentario: string = '';

  validarFkCandidate: boolean = true;
  validarFkSkill: boolean = true;
  validarNota: boolean = true;
  validarComentario: boolean = true;

  enviarFormulario() {}
}
