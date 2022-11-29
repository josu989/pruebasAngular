import { Component, OnInit } from '@angular/core';
import { ApiPeliculasService } from '../api-peliculas.service';

@Component({
  selector: 'app-ver-peliculas',
  templateUrl: './ver-peliculas.component.html',
  styleUrls: ['./ver-peliculas.component.css']
})
export class VerPeliculasComponent implements OnInit {

//propiedades
//listadePeliculas: any = []; //arreglo de peliculas
listadePeliculas: any = []; //arreglo de peliculas

desplegarColumnas: string [] = ['id', 'nombre', 'director', 'clasificacion']; //propiedad para la tabla en angular material
//origenDatos = listadePeliculas;

  constructor(private servicioPelicula: ApiPeliculasService) { }

  ngOnInit(): void {
    //subscripcion
    this.servicioPelicula.getPeliculas().subscribe(pelicula => this.listadePeliculas = pelicula)
  }

}
