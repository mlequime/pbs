// import { readFileSync } from "fs";
import {
  Pokemon,
  PokemonColor,
  PokemonEggGroup,
  PokemonEvolutionDefinition,
  PokemonGenderRatio,
  PokemonGrowthRate,
  PokemonShape,
} from "../models/pokemon";

function parsePokemonFile(path: string): Promise<Pokemon[]> {
  return new Promise((resolve, reject) => {
    try {
      let pokemon = [] as Pokemon[];
      fetch(path)
        .then((res) => res.text())
        .then((fileContent) => {
          console.log(fileContent);
          // const fileContent = readFileSync(path, "utf-8");
          const pokemonBlocks = fileContent.split(/#[-]+\n/);

          console.log(pokemonBlocks);
          pokemon = pokemonBlocks
            .map(parsePokemonBlock)
            .filter((p) => p !== null) as Pokemon[];
          console.log(pokemon);
          resolve(pokemon);
        });
    } catch (e) {
      console.log(e);
      resolve([]);
    }
  });
}

function parsePokemonBlock(block: string): Pokemon | null {
  const lines = block.trim().split("\n");
  const name = lines[0].match(/\[(.*?)\]/)?.[1];
  if (!name) return null;

  const valueSplitRegex = /,\s?/;

  const pokemon: Pokemon = {
    id: name,
    name: "",
    types: [],
    baseStats: {
      hp: 0,
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
    },
    abilities: [],
    moves: [],
    growthRate: null,
  };

  const errors = [];

  for (const line of lines.slice(1)) {
    if (line.trim().startsWith("#")) {
      continue;
    }
    const [key, value] = line.split(" = ");
    switch (key) {
      case "Name":
        pokemon.name = value;
        break;
      case "Types":
        pokemon.types = value.split(",");
        break;
      case "BaseStats":
        const [hp, attack, defense, specialAttack, specialDefense, speed] =
          value.split(",").map(Number);
        pokemon.baseStats = {
          hp,
          attack,
          defense,
          specialAttack,
          specialDefense,
          speed,
        };
        break;
      case "GenderRatio":
        pokemon.genderRatio = value as PokemonGenderRatio;
        break;
      case "GrowthRate":
        pokemon.growthRate = value as PokemonGrowthRate;
        break;
      case "BaseExp":
        pokemon.baseExp = Number(value);
        break;
      case "EVs":
        const [evType, evValue] = value
          .split(",")
          .map((v) => v.trim().toUpperCase());
        pokemon.evYields = [{ type: evType, value: Number(evValue) }];
        break;
      case "CatchRate":
        const catchRate = Number.parseInt(value);
        pokemon.catchRate = Number.isNaN(catchRate) ? 255 : catchRate;
        break;
      case "Happiness":
        const happiness = Number.parseInt(value);
        pokemon.happiness = Number.isNaN(happiness) ? 70 : happiness;
        break;
      case "Abilities":
        pokemon.abilities = value?.split(valueSplitRegex) ?? [];
        break;
      case "HiddenAbilities":
        pokemon.hiddenAbilities = value?.split(valueSplitRegex) ?? [];
        break;
      case "Moves":
        const moveDefinitions = value.split(",");
        for (let i = 0; i < moveDefinitions.length; i += 2) {
          const move = moveDefinitions[i].trim();
          const level = Number(moveDefinitions[i + 1].trim());
          pokemon.moves.push({ move, level });
        }
        break;
      case "EggMoves":
        pokemon.eggMoves = value.split(valueSplitRegex).map((v) => v.trim());
        break;
      case "TutorMoves":
        pokemon.eggMoves = value.split(valueSplitRegex).map((v) => v.trim());
        break;
      case "EggGroups":
        pokemon.eggGroups = value.split(valueSplitRegex) as PokemonEggGroup[];
        break;
      case "HatchSteps":
        // pokemon.hatchSteps = Number(value);
        const hatchSteps = Number.parseInt(value);
        pokemon.hatchSteps = Number.isNaN(hatchSteps) ? 5120 : hatchSteps;
        break;
      case "Height":
        pokemon.height = value ? Number(value) : undefined;
        break;
      case "Weight":
        pokemon.weight = value ? Number(value) : undefined;
        break;
      case "Generation":
        pokemon.generation = value ? Number(value) : undefined;
        break;
      case "Color":
        pokemon.color = value as PokemonColor;
        break;
      case "Habitat":
        pokemon.habitat = value;
        break;
      case "Shape":
        pokemon.shape = value as PokemonShape;
        break;
      case "Category":
        pokemon.category = value;
        break;
      case "Pokedex":
        pokemon.pokedex = value;
        break;
      case "Evolutions":
        const evoDefinitions = value.split(",");
        for (let i = 0; i < evoDefinitions.length; i += 3) {
          const evolution = evoDefinitions[i].trim();
          const method = evoDefinitions[i + 1].trim();
          const param = evoDefinitions[i + 2];
          pokemon.evolutions?.push({
            evolution,
            method,
            param,
          });
        }
        break;
      case "WildItemUncommon":
        pokemon.wildItemCommon = value;
        break;
      case "WildItemCommon":
        pokemon.wildItemCommon = value;
        break;
      case "WildItemRare":
        pokemon.wildItemRare = value;
        break;
      default:
        errors.push(`Unknown key: ${key} with value: ${value}`);
        break;
    }
  }
  if (errors.length) {
    console.warn("Unknown properties for " + pokemon.name, errors);
  }
  return pokemon;
}

export default parsePokemonFile;
