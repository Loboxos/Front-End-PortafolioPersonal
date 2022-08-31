import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.mode';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL = 'https://bkdportafoliop1.herokuapp.com/personas/';

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
