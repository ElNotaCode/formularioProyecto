import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCandidatePositionComponent } from './formulario-candidate-position/formulario-candidate-position.component';
import { FormularioCandidateSkillComponent } from './formulario-candidate-skill/formulario-candidate-skill.component';
import { FormularioCandidateComponent } from './formulario-candidate/formulario-candidate.component';
import { FormularioHrUserPositionComponent } from './formulario-hr-user-position/formulario-hr-user-position.component';
import { FormularioHrUserComponent } from './formulario-hr-user/formulario-hr-user.component';
import { FormularioPositionComponent } from './formulario-position/formulario-position.component';
import { FormularioSkillComponent } from './formulario-skill/formulario-skill.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {
    path: '',
    component: FormularioComponent,
  },
  {
    path: 'formularioSkill',
    component: FormularioSkillComponent,
  },
  {
    path: 'formularioPosition',
    component: FormularioPositionComponent,
  },
  {
    path: 'formularioCandidate',
    component: FormularioCandidateComponent,
  },
  {
    path: 'formularioHrUser',
    component: FormularioHrUserComponent,
  },
  {
    path: 'formularioHrUserPosition',
    component: FormularioHrUserPositionComponent,
  },
  {
    path: 'formularioCandidateSkill',
    component: FormularioCandidateSkillComponent,
  },
  {
    path: 'formularioCandidatePosition',
    component: FormularioCandidatePositionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
