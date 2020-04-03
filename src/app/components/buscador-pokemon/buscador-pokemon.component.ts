import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { PokemonsService} from "../../services/pokemons.service";



@Component({
  selector: 'app-buscador-pokemon',
  templateUrl: './buscador-pokemon.component.html',
  styleUrls: ['./buscador-pokemon.component.css']
})
export class BuscadorPokemonComponent implements OnInit {

  pokemon:any[] = [];
  constructor(private params:ActivatedRoute, private pokemons:PokemonsService) { 
    this.params.params.subscribe(params=>{
     this.pokemon = this.pokemons.buscarPokemon(params['name']);
      
    })
  }

  ngOnInit(): void {
  }

}
