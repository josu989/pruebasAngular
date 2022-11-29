import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
//importacion de modulos para la tabla
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
//Para la API de pokemon
import { PokemonModule } from './pokemon/pokemon.module';
import { VerPokemonComponent } from './pokemon/ver-pokemon/ver-pokemon.component';
//para la API de chuck
import { VerFraseComponent } from './chuck/ver-frase/ver-frase.component';
import { ChuckModule } from './chuck/chuck.module';
//para la API de users
import { UsersComponent } from './usuarios/users/users.component';
//para la api de peliculas
import { VerPeliculasComponent } from './peliculas/ver-peliculas/ver-peliculas.component';
//para ala api de los perros
import { VerPerrosComponent } from './perros/ver-perros/ver-perros.component';
//modulos de la tabla
import { TableModule } from 'primeng/table';
//modulo de las tarjetas de primeNG
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { TarjetasDashboardComponent } from './tarjetas-dashboard/tarjetas-dashboard.component';   
/*formulario*/
import { FormsModule } from '@angular/forms';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VideojuegosV2Component } from './videojuegos-v2/videojuegos-v2.component';

    

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    VerPeliculasComponent,
    VerPerrosComponent,
    TarjetasDashboardComponent,
    VideojuegosComponent,
    VideojuegosV2Component // los componentes que no tienen modulo se pueden iniciar aqui, si tienen un modulo se no se declaran en esta seccion
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChuckModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PokemonModule,
    MaterialModule,
    TableModule,
    CardModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    VerFraseComponent,
    VerPokemonComponent,
    UsersComponent,
   
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
