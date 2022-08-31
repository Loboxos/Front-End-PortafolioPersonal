import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-newproyectos',
  templateUrl: './newproyectos.component.html',
  styleUrls: ['./newproyectos.component.css']
})
export class NewproyectosComponent implements OnInit {
  nombreP:string;
  descripcionP:string;
  UrlP:string;

  constructor(private proyectosService:ProyectosService,private router:Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const proyectos = new Proyectos(this.nombreP,this.descripcionP,this.UrlP);
    this.proyectosService.save(proyectos).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
