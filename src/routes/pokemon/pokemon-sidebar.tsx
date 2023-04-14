import { useSelector } from "react-redux";
import { selectPokemonList } from "../../state/selectors/pokemonSelector";
import { Pokemon } from "../../models/pokemon";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function PokemonSidebar(props: {
    onSelect: Function
}) {

    const [filter, setFilter] = useState("");

    const pokemonList = useSelector(selectPokemonList)

    const pokemonListItems = pokemonList.filter((pokemon) => !filter || pokemon.name?.toLowerCase().includes(filter)).map((pokemon) => {
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

    function handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFilter(event.target.value);
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}>
            <Box sx={{
                flex: '0 0 auto',
            }} padding={2}>
                <TextField label="Filter" value={filter} onChange={handleFilterChange} />
            </Box>
            <Box sx={{
                flex: '1 1 auto',
                overflowY: 'auto',
            }}>
                <List subheader={<ListSubheader>Pokémon</ListSubheader>}>
                    {pokemonListItems}
                </List>
            </Box>
        </Box>
    );
}