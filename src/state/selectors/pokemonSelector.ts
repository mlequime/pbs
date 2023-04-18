import { createSelector } from "reselect";
import { Pokemon } from "../../models/pokemon";
import { AppState } from "../app.state";

export const selectPokemonList = createSelector(
  (state: AppState) => state.pokemon.items,
  (pokemonList: Pokemon[]) => pokemonList
);

export const selectPokemonById = (id: string) =>
  createSelector(
    (state: AppState) => state.pokemon.items,
    (pokemonList: Pokemon[]) => pokemonList.find((pokemon) => pokemon.id === id)
  );

export const selectPokemonSelected = createSelector(
  (state: AppState) => state.pokemon.selected,
  (pokemon: Pokemon) => pokemon
);
