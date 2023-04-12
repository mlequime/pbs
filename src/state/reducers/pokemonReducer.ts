import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Pokemon, PokemonColor, PokemonEggGroup, PokemonGenderRatio, PokemonGrowthRate, PokemonShape } from "../../models/pokemon";
import { PokemonState } from "../pokemon.state";

export const bulbasaur: Pokemon = {
    id: "BULBASAUR",
    name: "Bulbasaur",
    types: ["GRASS", "POISON"],
    abilities: ["OVERGROW", "CHLOROPHYLL"],
    baseStats: {
        hp: 45,
        attack: 49,
        defense: 49,
        specialAttack: 65,
        specialDefense: 65,
        speed: 45
    },
    genderRatio: PokemonGenderRatio.FemaleOneEighth,
    growthRate: PokemonGrowthRate.MediumSlow,
    baseExp: 64,
    evYields: [
        {
            type: "SP_ATTACK",
            value: 1
        }
    ],
    catchRate: 45,
    happiness: 70,
    eggGroups: [PokemonEggGroup.Monster, PokemonEggGroup.Grass],
    moves: [
        {
            move: "TACKLE",
            level: 1
        },
        {
            move: "GROWL",
            level: 1
        },
        {
            move: "LEECHSEED",
            level: 7
        },
        {
            move: "VINEWHIP",
            level: 13
        },
        {
            move: "POISONPOWDER",
            level: 20
        },
        {
            move: "SLEEPPOWDER",
            level: 20
        },
        {
            move: "TAKEDOWN",
            level: 27
        },
        {
            move: "RAZORLEAF",
            level: 34
        },
        {
            move: "DOUBLEEDGE",
            level: 41
        },
        {
            move: "WORRYSEED",
            level: 48
        }
    ],
    eggMoves: [
        "AMNESIA",
        "AROMATHERAPY",
        "BODY SLAM",
        "CHARM",
        "CURSE",
        "ENDURE",
        "GRASS WHISTLE",
        "GRASSY TERRAIN",
        "INGRAIN",
    ],
    hatchSteps: 5120,
    height: 0.7,
    weight: 6.9,
    color: PokemonColor.Green,
    shape: PokemonShape.Quadruped,
};

const ivysaur = {
    id: "IVYSAUR",
    name: "Ivysaur",
    types: ["GRASS", "POISON"],
    abilities: ["OVERGROW", "CHLOROPHYLL"],
    baseStats: {
        hp: 65,
        attack: 65,
        defense: 65,
        specialAttack: 85,
        specialDefense: 85,
        speed: 55
    },
    genderRatio: PokemonGenderRatio.FemaleOneEighth,
    growthRate: PokemonGrowthRate.MediumSlow,
    baseExp: 64,
    evYields: [
        {
            type: "SP_ATTACK",
            value: 2
        }
    ],
    catchRate: 45,
    happiness: 70,
    eggGroups: [PokemonEggGroup.Monster, PokemonEggGroup.Grass],
    moves: [
        {
            move: "TACKLE",
            level: 1
        },
        {
            move: "GROWL",
            level: 1
        },
        {
            move: "LEECHSEED",
            level: 7
        },
        {
            move: "VINEWHIP",
            level: 13
        },
        {
            move: "POISONPOWDER",
            level: 20
        },
        {
            move: "SLEEPPOWDER",
            level: 20
        },
        {
            move: "TAKEDOWN",
            level: 27
        },
        {
            move: "RAZORLEAF",
            level: 34
        },
        {
            move: "DOUBLEEDGE",
            level: 41
        },
        {
            move: "WORRYSEED",
            level: 48
        }
    ],
    eggMoves: [
        "AMNESIA",
        "AROMATHERAPY",
        "BODY SLAM",
        "CHARM",
        "CURSE",
        "ENDURE",
        "GRASS WHISTLE",
        "GRASSY TERRAIN",
        "INGRAIN",
    ],
    hatchSteps: 5120,
    height: 0.7,
    weight: 6.9,
    color: PokemonColor.Green,
    shape: PokemonShape.Quadruped, 
}

const pokemonSlice = createSlice(
    {
        name: 'pokemon',
        initialState:  {
            items: [bulbasaur, ivysaur],
            dirty: false
        } as PokemonState,
        reducers: {
            addPokemon: {
                reducer(state, action: PayloadAction<Pokemon>) {
                    state.items.push(action.payload)
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