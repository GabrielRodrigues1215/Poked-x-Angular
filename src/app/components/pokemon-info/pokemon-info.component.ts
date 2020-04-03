import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { PokemonsService } from '../../services/pokemons.service';



@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  pokemon:any[]= [];

  constructor( private ParamsRouter:ActivatedRoute, private pokemonsService:PokemonsService ) {
    this.ParamsRouter.params.subscribe(params =>{
      this.pokemon = this.pokemonsService.obterPokemon(params['id']
      )
    })
   }



  ngOnInit(): void {
  }

}
