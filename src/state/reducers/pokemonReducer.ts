import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  Pokemon,
  PokemonColor,
  PokemonEggGroup,
  PokemonGenderRatio,
  PokemonGrowthRate,
  PokemonShape,
} from "../../models/pokemon";
import { PokemonState } from "../pokemon.state";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    items: [],
    dirty: false,
  } as PokemonState,
  reducers: {
    addPokemon(state, action: PayloadAction<Pokemon>) {
      state.items.push(action.payload);
    },
    setPokemon(state, action: PayloadAction<Pokemon[]>) {
      state.items = action.payload;
    },
  },
});

export default pokemonSlice;
