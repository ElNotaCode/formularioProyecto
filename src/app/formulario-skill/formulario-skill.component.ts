import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-skill',
  templateUrl: './formulario-skill.component.html',
  styleUrls: ['./formulario-skill.component.css'],
})
export class FormularioSkillComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  nombreSkill: string = '';
  validarNombre: boolean = true;

  enviarFormulario() {
    alert('Este botón no envia nada.');
  }
}
