import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../models/pokemon";

const pokemonSlice = createSlice(
    {
        name: 'pokemon',
        initialState:  [] as Pokemon[],
        reducers: {
            addPokemon: {
                reducer(state, action: PayloadAction<Pokemon>) {
                    state.push(action.payload)
                },
                prepare: (pokemon: Pokemon) => {
                    return {
                        payload: pokemon,
                    }
                }
            }
        }
    }
)

export default pokemonSlice.reducer;