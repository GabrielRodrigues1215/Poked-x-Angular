import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { BuscadorPokemonComponent } from './components/buscador-pokemon/buscador-pokemon.component';






const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pokemons', component: PokemonsComponent },
    { path: 'pokemon/:id', component: PokemonInfoComponent },
    { path: 'buscar/:name', component: BuscadorPokemonComponent },

    { path: '**', redirectTo:"home" },
];

export const POKE_ROUTING = RouterModule.forRoot(routes);
