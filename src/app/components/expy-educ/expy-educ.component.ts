import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from '../../servicios/s-experiencia.service';
import { TokenService } from '../../servicios/token.service';
import { Experiencia } from '../../model/experiencia';
import { Educacion } from '../../model/educacion';
import { EducacionService } from '../../servicios/educacion.service';

@Component({
  selector: 'app-expy-educ',
  templateUrl: './expy-educ.component.html',
  styleUrls: ['./expy-educ.component.css']
})
export class ExpyEducComponent implements OnInit {
  expe: Experiencia[]= [];
  educacion:Educacion[]= [];
  

  constructor(private sExperiencia: SExperienciaService,private educacionS: EducacionService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    this.cargarEducacion();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
 

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; })
  }
  cargarEducacion(): void{
    this.educacionS.lista().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }

  delete(id?: number): void{
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar la educacion");
        }
      )
    }
  }
 





}
