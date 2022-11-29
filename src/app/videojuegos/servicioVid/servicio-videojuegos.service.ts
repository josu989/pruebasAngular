import { Injectable } from '@angular/core';
import { videojuego } from '../Modevidelojuegos/videojuegos.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioVideojuegosService {

  //propiedades
  listadeVideojuegos: videojuego[] = [
    new videojuego("God of war","Santamonica",45,"M"),
  ];

  constructor( ) { }

  //metodo para agregar videojuegos
  agregarJuegos(juegos: videojuego){
 this.listadeVideojuegos.push(juegos);
}

//metodo para eliminar un juego
borrarJuego(nombreJuego: string){
 
}
}
