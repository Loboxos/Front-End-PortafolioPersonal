import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-editskills',
  templateUrl: './editskills.component.html',
  styleUrls: ['./editskills.component.css']
})
export class EditskillsComponent implements OnInit {
  skills: Skills = null;

  constructor(private skillsService: SkillsService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsService.detail(id).subscribe(data =>{
      this.skills = data;
    }, err =>{
      alert("Error al modificar Experiencia");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsService.update(id, this.skills).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar Habilidad");
      this.router.navigate(['']);
    }
    )
  }

}
