import { Pokemon } from "../models/pokemon";

export interface PokemonState {
    items: Array<Pokemon>;
    dirty: boolean;
    selected?: Pokemon;
}