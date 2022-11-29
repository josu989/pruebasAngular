import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerFraseComponent } from './chuck/ver-frase/ver-frase.component';
import { VerPokemonComponent } from './pokemon/ver-pokemon/ver-pokemon.component';
import { UsersComponent } from './usuarios/users/users.component';
import { VerPeliculasComponent } from './peliculas/ver-peliculas/ver-peliculas.component';
import { VerPerrosComponent } from './perros/ver-perros/ver-perros.component';
import { TarjetasDashboardComponent } from './tarjetas-dashboard/tarjetas-dashboard.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';

//vistas o rutas
const routes: Routes = [
  //Pagina de la API de pokemon para ver pokemons
  { path: 'pokemons',
    component: VerPokemonComponent
},
{
  //pagina de la API para ver las frases de chuk
  path: 'fraseChuck',
  component: VerFraseComponent
},
{
//pagina de la API para ver usuarios
path: 'usuarios',
component: UsersComponent
},
{
  //levantar el servidor json en la ruta donde se encuentra el archivo json:  json-server --watch peliculas.json <--- archivo
  //pagina de la API para ver peliculas
  path: 'peliculas',
  component: VerPeliculasComponent
  },
  {
  path: 'perros',
  component: VerPerrosComponent
  },
  {
    path: "tarjetas",
    component: TarjetasDashboardComponent
  },
  {
    path: "videojuegos",
    component: VideojuegosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
