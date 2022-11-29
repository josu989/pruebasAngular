import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiPerrosService {

 //pripiedades
 UrlPerros: string = environment.urlAPI4; //url desde el enviroments
 constructor(private http: HttpClient) { }

 //metodo para Obtener los usuarios, se pone any para evitar errores ya que no tenemos la clase, interfaz o modelo usuarios
 getPerros(): Observable<any>{
   return this.http.get<any>(this.UrlPerros);
 }
}
