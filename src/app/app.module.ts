import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioSkillComponent } from './formulario-skill/formulario-skill.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormularioPositionComponent } from './formulario-position/formulario-position.component';
import { FormularioCandidateComponent } from './formulario-candidate/formulario-candidate.component';
import { FormularioHrUserComponent } from './formulario-hr-user/formulario-hr-user.component';
import { FormularioHrUserPositionComponent } from './formulario-hr-user-position/formulario-hr-user-position.component';
import { FormularioCandidateSkillComponent } from './formulario-candidate-skill/formulario-candidate-skill.component';
import { FormularioCandidatePositionComponent } from './formulario-candidate-position/formulario-candidate-position.component';

@NgModule({
  declarations: [AppComponent, FormularioComponent, FormularioSkillComponent, NavbarComponent, FormularioPositionComponent, FormularioCandidateComponent, FormularioHrUserComponent, FormularioHrUserPositionComponent, FormularioCandidateSkillComponent, FormularioCandidatePositionComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
