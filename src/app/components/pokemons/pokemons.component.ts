import { Component, OnInit } from '@angular/core';
//service
import { PokemonsService, PokemonRules } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  show: boolean = false
  region: string = "";
  pokemons:PokemonRules[] = [];
  constructor(private _pokemons:PokemonsService) { }

  ngOnInit(): void {
    this.pokemons = this._pokemons.obterPokemons();
    
  }
  obterPokemonsRegion(region:string){
    console.log(region)
    this.pokemons = this._pokemons.obterPokemonsRegion(region);

    switch(region) {
      case "g1": {
          this.region = "Primeira geração";
          break;
      }
      case "g2": {
          this.region = "Segunda geração";
          break;
      }
      case "g3": {
        this.region = "Terceira geração";
        break;
      }
      case "g4": {
          this.region = "Quarta geração";
          break;
      }
      case "g5": {
        this.region = "Quinta geração";
        break;
     }
      case "g6": {
        this.region = "Sexta geração";
        break;
     }
    
  }
   
    this.show = true;
  }

}
