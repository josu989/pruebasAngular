import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ApiPokemonService } from '../api-pokemon.service';

@Component({
  selector: 'app-ver-pokemon',
  templateUrl: './ver-pokemon.component.html',
  styleUrls: ['./ver-pokemon.component.css']
})
export class VerPokemonComponent implements OnInit {

 //public pokemon: Pokemon = {id: "", name: "", order: "", base_experience: "", height: "", weight: ""};
 listadePokemon: any = []; //lista de los pokemon


  constructor(private apiService: ApiPokemonService) { }




  ngOnInit(){
    //subscripcion
    this.apiService.getPokemon().subscribe(pokemon => this.listadePokemon=pokemon)
  }

}
