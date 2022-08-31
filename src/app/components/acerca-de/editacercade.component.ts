import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.mode';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editacercade',
  templateUrl: './editacercade.component.html',
  styleUrls: ['./editacercade.component.css']
})
export class EditacercadeComponent implements OnInit {
  persona: Persona = null;
  constructor(private personaService: PersonaService,
    private activatedRouter : ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
