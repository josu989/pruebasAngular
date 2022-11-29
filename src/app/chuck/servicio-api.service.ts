import { Injectable } from '@angular/core';
//importamos el modelo o interfaz frase
import { Frase } from './frase';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {

//propiedades
//propiedad frase de tipo Frase pasando como elementos las variables de la Api jalandolas desde la interfaz o clase
private frase: Frase = {value: "", icon_url: "", id: "", url: "" };
//propidad URL de la API
private ChuckUrl = " https://api.chucknorris.io/jokes/random";




  constructor(private http: HttpClient) { }

  //metodo para obtener la frase con el observable<Frase> retornando con http.get<Frase>(this.ChuckUrl) <--- ChuckUrl variable que contiene la API
  public getFrase(): Observable<Frase>{
    return this.http.get<Frase>(this.ChuckUrl);
  }
}
