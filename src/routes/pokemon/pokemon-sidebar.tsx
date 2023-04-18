import { useDispatch, useSelector } from "react-redux";
import { selectPokemonList } from "../../state/selectors/pokemonSelector";
import { Pokemon } from "../../models/pokemon";
import { List as MUIList, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useLayoutEffect, useRef, useState } from "react";
import { selectPokemonSelected } from "../../state/selectors/pokemonSelector";
import pokemonSlice from "../../state/reducers/pokemonReducer";
import { FixedSizeList as List } from 'react-window';

export default function PokemonSidebar(props: {
    onSelect?: Function
}) {
    const [dims, setDims] = useState({
        width: 300,
        height: 600
    });
    const ref = useRef<any>(null);

    useLayoutEffect(() => {
        if (ref.current) {
            setDims({
                width: ref.current.clientWidth,
                height: ref.current.clientHeight,
            });
        }
    }, [ref]);

    const [filter, setFilter] = useState("");
    const dispatch = useDispatch();

    const pokemonList = useSelector(selectPokemonList);
    const pokemonSelected = useSelector(selectPokemonSelected);

    const filteredList = pokemonList.filter((pokemon) => !filter || pokemon.name?.toLowerCase().includes(filter));

    function handleClick(pokemon: Pokemon) {
        dispatch(pokemonSlice.actions.selectPokemon(pokemon));
    }

    function handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFilter(event.target.value);
    }

    const Row = ({ index, style }: any) => (
        <ListItem disablePadding onClick={() => handleClick(filteredList[index])} style={style}>
            <ListItemButton selected={pokemonSelected == filteredList[index]}>
                <ListItemText primary={filteredList[index].name}>
                </ListItemText>
            </ListItemButton>
        </ListItem>);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}
            ref={ref}>
            <Box sx={{
                flex: '0 0 auto',
            }} padding={2}>
                <TextField label="Filter" value={filter} onChange={handleFilterChange} />
            </Box>
            <Box sx={{
                flex: '1 1 auto',
                overflowY: 'auto',
            }}>
                {/* <MUIList subheader={<ListSubheader>Pokémon</ListSubheader>}> */}
                <List
                    height={dims.height}
                    width={dims.width}
                    itemCount={filteredList.length}
                    itemSize={48}
                >
                    {Row}
                </List>
                {/* {pokemonListItems} */}
                {/* </MUIList> */}
            </Box>
        </Box>
    );
}