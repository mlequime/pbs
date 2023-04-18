import { combineReducers } from "@reduxjs/toolkit";
import typeSlice from "./typeReducer";
import pokemonSlice from "./pokemonReducer";

const appReducer = combineReducers({
  pokemon: pokemonSlice.reducer,
  types: typeSlice.reducer,
});

export default appReducer;
