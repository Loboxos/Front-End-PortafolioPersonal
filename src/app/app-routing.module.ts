import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './components/expy-educ/edit-experiencia.component';
import { EditeducacionComponent } from './components/expy-educ/editeducacion.component';
import { NewEducacionComponent } from './components/expy-educ/new-educacion.component';
import { NewExperienciaComponent } from './components/expy-educ/new-experiencia.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component'; 
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { EditproyectosComponent } from './components/proyectos/editproyectos.component';
import { NewproyectosComponent } from './components/proyectos/newproyectos.component';

const routes: Routes = [
  {path:'portafolio',component:PortafolioComponent},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'',redirectTo:'portafolio',pathMatch:'full'},
  {path:'nuevaexp',component:NewExperienciaComponent},
  {path:'editexp/:id',component:EditExperienciaComponent},
  { path: 'nuevaedu', component: NewEducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'nuevoproy',component: NewproyectosComponent},
  { path: 'editproy/:id',component:EditproyectosComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
