import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-iconos-soc',
  templateUrl: './iconos-soc.component.html',
  styleUrls: ['./iconos-soc.component.css']
})
export class IconosSocComponent implements OnInit {
isLogged = false;

  constructor(private router: Router , private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged=true;
     }else{
      this.isLogged=false;
     }
  }
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload(); 
    }
  login(){
    this.router.navigate(['/iniciar-sesion'])
  }
}
