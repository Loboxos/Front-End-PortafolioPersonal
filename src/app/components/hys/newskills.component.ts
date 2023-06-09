import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from '../../model/skills';
import { SkillsService } from '../../servicios/skills.service';

@Component({
  selector: 'app-newskills',
  templateUrl: './newskills.component.html',
  styleUrls: ['./newskills.component.css']
})
export class NewskillsComponent implements OnInit {

  nombreSkill: string;
  porcentaje: number;

  constructor(private skillsService: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const ski = new Skills(this.nombreSkill,this.porcentaje);
    this.skillsService.save(ski).subscribe(data => {
      alert("Habilidad añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }
}
