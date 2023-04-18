import CollapsingSidebar from '../../components/collapsing-sidebar';
import PokemonSidebar from '../pokemon/pokemon-sidebar';
import { useState } from 'react';
import { Pokemon } from '../../models/pokemon';
import TypeSidebar from './type-sidebar';
import { Type } from '../../models/type';

export default function Types() {
    const [selectedType, setSelectedType] = useState<Type | undefined>(undefined);


    const selectType = (type: Type) => {
        setSelectedType(type);
    }

    return (
        <div className="page-container">

            <CollapsingSidebar>
                <TypeSidebar onSelect={selectType} />
            </CollapsingSidebar>
            <h1>Type: {selectedType?.name}</h1>
        </div>
    );
}