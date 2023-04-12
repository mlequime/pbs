import { combineReducers } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonReducer';

const appReducer = combineReducers({
    pokemon: pokemonReducer,
})

export default appReducer;