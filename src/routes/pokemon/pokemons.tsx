import { useState } from "react";
import CollapsingSidebar from "../../components/collapsing-sidebar";
import { Pokemon } from "../../models/pokemon";
import { bulbasaur } from "../../state/reducers/pokemonReducer";
import PokemonEditPanel from "./pokemon-edit-panel";
import PokemonSidebar from "./pokemon-sidebar";
export default function Pokemons() {
  const [selectedPokemon, setSelectedPokemon] = useState(bulbasaur);


  const selectPokemon = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  }

  return (
    <div className="page-container">
      <CollapsingSidebar>
        <PokemonSidebar onSelect={selectPokemon} />
      </CollapsingSidebar>
      <PokemonEditPanel entity={selectedPokemon} />
    </div>
  );
}