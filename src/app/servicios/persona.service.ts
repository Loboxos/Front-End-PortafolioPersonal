import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Persona } from '../model/persona.mode';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = environment.URL + 'personas/';


constructor(private httpClient:HttpClient) { }

public getPersona():Observable<Persona>{
  return this.httpClient.get<Persona>(this.URL + 'traer/perfil');
}

public update(id: number, persona: Persona): Observable<any>{
  return this.httpClient.put<any>(this.URL + `editar/${id}`, persona);
}
public detail(id:number):Observable<Persona>{
  return this.httpClient.get<Persona>(this.URL + `detail/${id}`);
}
public lista():Observable<Persona[]>{
  return this.httpClient.get<Persona[]>(this.URL + 'lista');
}


}
