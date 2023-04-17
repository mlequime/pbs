export enum PokemonGenderRatio {
  FemaleOneEighth = "FemaleOneEighth",
}

export enum PokemonGrowthRate {
  MediumFast = "MediumFast",
  Parabolic = "Parabolic",
  Erratic = "Erratic",
  Fluctuating = "Fluctuating",
  MediumSlow = "MediumSlow",
  Fast = "Fast",
  Slow = "Slow",
}

export interface PokemonEvYield {
  type: string;
  value: number;
}

export interface PokemonMoveDefinition {
  move: string;
  level: number;
}

export enum PokemonEggGroup {
  Monster = "Monster",
  Water1 = "Water1",
  Bug = "Bug",
  Flying = "Flying",
  Field = "Field",
  Fairy = "Fairy",
  Grass = "Grass",
  HumanLike = "HumanLike",
  Water3 = "Water3",
  Mineral = "Mineral",
  Amorphous = "Amorphous",
  Water2 = "Water2",
  Ditto = "Ditto",
  Dragon = "Dragon",
  Undiscovered = "Undiscovered",
}

export enum PokemonColor {
  Black = "Black",
  Blue = "Blue",
  Brown = "Brown",
  Gray = "Gray",
  Green = "Green",
  Pink = "Pink",
  Purple = "Purple",
  Red = "Red",
  White = "White",
  Yellow = "Yellow",
}

export enum PokemonShape {
  Ball = "Ball",
  Blob = "Blob",
  Upright = "Upright",
  Wings = "Wings",
  Tentacles = "Tentacles",
  Quadruped = "Quadruped",
  Arms = "Arms",
  Legs = "Legs",
  Humanoid = "Humanoid",
  Water1 = "Water1",
  BugWings = "BugWings",
  Armor = "Armor",
  Flippers = "Flippers",
  Fish = "Fish",
  Squiggle = "Squiggle",
}

export interface PokemonEvolutionDefinition {
  evolution: string;
  method: string;
  param?: string | number;
}

export interface Pokemon {
  id: string;
  name: string;
  types: string[];
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  genderRatio?: PokemonGenderRatio | null;
  growthRate: PokemonGrowthRate | null;
  baseExp?: number;
  evYields?: PokemonEvYield[];
  catchRate?: number;
  happiness?: number;
  abilities: string[];
  hiddenAbilities?: string[];
  moves: PokemonMoveDefinition[];
  eggMoves?: string[];
  tutorMoves?: string[];
  eggGroups?: PokemonEggGroup[];
  hatchSteps?: number;
  habitat?: string;
  height?: number;
  weight?: number;
  color?: PokemonColor;
  shape?: PokemonShape;
  category?: string;
  pokedex?: string;
  generation?: number;
  evolutions?: PokemonEvolutionDefinition[];
  wildItemUncommon?: string;
  wildItemCommon?: string;
  wildItemRare?: string;
}
