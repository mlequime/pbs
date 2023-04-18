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
    selected: undefined,
    dirty: false,
  } as PokemonState,
  reducers: {
    addPokemon(state, action: PayloadAction<Pokemon>) {
      state.items.push(action.payload);
    },
    setPokemon(state, action: PayloadAction<Pokemon[]>) {
      state.items = action.payload;
      if (!state.selected && state.items.length > 0) {
        state.selected = state.items[0];
      }
    },
    selectPokemon(state, action: PayloadAction<Pokemon>) {
      state.selected = action.payload;
    },
    deselectPokemon(state) {
      state.selected = undefined;
    },
    setPokemonDirty(state, action: PayloadAction<boolean>) {
      state.dirty = action.payload;
    },
  },
});

export default pokemonSlice;
