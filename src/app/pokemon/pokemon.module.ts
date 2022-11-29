import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerPokemonComponent } from './ver-pokemon/ver-pokemon.component';



@NgModule({
  declarations: [
    VerPokemonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VerPokemonComponent
  ]
})
export class PokemonModule { }
