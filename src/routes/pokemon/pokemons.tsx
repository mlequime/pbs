import { useState } from "react";
import CollapsingSidebar from "../../components/collapsing-sidebar";
import { Pokemon } from "../../models/pokemon";
import PokemonEditPanel from "./pokemon-edit-panel";
import PokemonSidebar from "./pokemon-sidebar";
export default function Pokemons() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | undefined>(undefined);


  const selectPokemon = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  }

  return (
    <div className="page-container">
      <CollapsingSidebar>
        <PokemonSidebar onSelect={selectPokemon} />
      </CollapsingSidebar>
      {typeof selectedPokemon !== 'undefined' && <PokemonEditPanel entity={selectedPokemon} />}
    </div>
  );
}