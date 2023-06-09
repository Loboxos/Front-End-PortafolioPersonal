import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from '../../model/proyectos';
import { ProyectosService } from '../../servicios/proyectos.service';

@Component({
  selector: 'app-editproyectos',
  templateUrl: './editproyectos.component.html',
  styleUrls: ['./editproyectos.component.css']
})
export class EditproyectosComponent implements OnInit {
  proyectos: Proyectos = null;
  constructor(private proyectosService: ProyectosService,
    private activatedRouter : ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.proyectosService.detail(id).subscribe(
        data =>{
          this.proyectos = data;
        }, err =>{
           alert("Error al modificar");
           this.router.navigate(['']);
        }
      )
    }
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.proyectosService.update(id, this.proyectos).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar el proyecto");
          this.router.navigate(['']);
        }
      )
    }

}
