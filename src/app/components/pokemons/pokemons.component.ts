import { Component, OnInit } from '@angular/core';
//service
import { PokemonsService, PokemonRules } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {


  pokemons:PokemonRules[] = [];
  constructor(private _pokemons:PokemonsService) { }

  ngOnInit(): void {
    this.pokemons = this._pokemons.obterPokemons();
  }

}
