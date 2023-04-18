import { useState } from "react";
import CollapsingSidebar from "../../components/collapsing-sidebar";
import { Pokemon } from "../../models/pokemon";
import PokemonEditPanel from "./pokemon-edit-panel";
import PokemonSidebar from "./pokemon-sidebar";
import { useSelector } from 'react-redux';
import { selectPokemonSelected } from '../../state/selectors/pokemonSelector';
export default function Pokemons() {
  // const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | undefined>(undefined);

  const pokemonSelected = useSelector(selectPokemonSelected);


  const selectPokemon = (pokemon: Pokemon) => {
    // setSelectedPokemon(pokemon);
  }

  return (
    <div className="page-container">
      <CollapsingSidebar>
        <PokemonSidebar />
      </CollapsingSidebar>
      {typeof pokemonSelected !== 'undefined' && <PokemonEditPanel entity={pokemonSelected} />}
    </div>
  );
}