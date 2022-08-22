import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-expy-educ',
  templateUrl: './expy-educ.component.html',
  styleUrls: ['./expy-educ.component.css']
})
export class ExpyEducComponent implements OnInit {
  expe: Experiencia[]= [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; })
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
    }
  }

}
