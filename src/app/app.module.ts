import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { BarraPrincComponent } from './components/barra-princ/barra-princ.component';
import { IconosSocComponent } from './components/iconos-soc/iconos-soc.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExpyEducComponent } from './components/expy-educ/expy-educ.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor-service';
import{NewExperienciaComponent}from './components/expy-educ/new-experiencia.component';
import { EditExperienciaComponent } from './components/expy-educ/edit-experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    BarraPrincComponent,
    IconosSocComponent,
    BannerComponent,
    AcercaDeComponent,
    ExpyEducComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    IniciarSesionComponent,
    PortafolioComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
