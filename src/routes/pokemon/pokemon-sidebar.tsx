import { useSelector } from "react-redux";
import { selectPokemonList } from "../../state/selectors/pokemonSelector";
import { Pokemon } from "../../models/pokemon";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";

export default function PokemonSidebar(props: {
    onSelect: Function
}) {

    const pokemonList = useSelector(selectPokemonList)

    const pokemonListItems = pokemonList.map((pokemon) => {
        return (
            <ListItem disablePadding onClick={() => handleClick(pokemon)} key={pokemon.id} id={pokemon.id}>
                <ListItemButton>
                    <ListItemIcon>
                        { /* icon here */}
                    </ListItemIcon>
                    <ListItemText primary={pokemon.name}>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        )
    })

    function handleClick(pokemon: Pokemon) {
        props.onSelect(pokemon);
    }

    return (
        <>
            <List subheader={<ListSubheader>Pokémon</ListSubheader>}>
                {pokemonListItems}
            </List>
        </>
    );
}