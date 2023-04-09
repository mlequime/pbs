import { PayloadAction, combineReducers, createSlice } from '@reduxjs/toolkit'
import { Pokemon } from '../models/pokemon';
import { Move } from '../models/move';
import { Ability } from '../models/ability';
import { Type } from 'typescript';
import pokemonReducer from './pokemonReducer';

const appReducer = combineReducers({
    pokemon: pokemonReducer,
})



// export const { todoAdded, todoToggled } = todosSlice.actions
export default appReducer;