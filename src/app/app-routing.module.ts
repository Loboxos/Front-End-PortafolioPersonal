import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './components/expy-educ/edit-experiencia.component';
import { NewExperienciaComponent } from './components/expy-educ/new-experiencia.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component'; 
import { PortafolioComponent } from './components/portafolio/portafolio.component';

const routes: Routes = [
  {path:'portafolio',component:PortafolioComponent},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'',redirectTo:'portafolio',pathMatch:'full'},
  {path:'nuevaexp',component:NewExperienciaComponent},
  {path:'editexp/:id',component:EditExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
