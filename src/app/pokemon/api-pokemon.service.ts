import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {

//propiedades del servicio
UrlPokemon: string = environment.urlAPI;
//private pokemon: Pokemon = {id: "", name: "", order: "", base_experience: "", height: "", weight: ""};
//URL
//private URLpok ="https://pokeapi.co/api/v2/{id}";

  constructor(private http: HttpClient) { }

  //metodo obtener el pokemon
  //public getPokemon(id): Observable<Pokemon>{
    //return this.http.get<any>(`${this.UrlPokemon}/pokemon/${id}`);
//return this.http.get<Pokemon>(this.URLpok);
 // }
 public getPokemon(): Observable<Pokemon>{
  return this.http.get<Pokemon>(this.UrlPokemon);
  //return this.http.get<Pokemon>(`${this.UrlPokemon}/pokemon/${id}`);
  //${index}
 }
}
