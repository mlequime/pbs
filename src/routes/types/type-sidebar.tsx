import { List, ListItem, ListItemButton, ListItemText, ListSubheader, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Pokemon } from "../../models/pokemon";
import { selectTypeList } from "../../state/selectors/typeSelector";
import { Type } from "../../models/type";

export default function TypeSidebar(props: {
    onSelect: Function
}) {

    const [filter, setFilter] = useState("");

    const typeList = useSelector(selectTypeList)

    const typeListItems = typeList.filter((type) => !filter || type.name?.toLowerCase().includes(filter)).map((type) => {
        return (
            <ListItem disablePadding onClick={() => handleClick(type)} key={type.id} id={type.id}>
                <ListItemButton>
                    {/* <ListItemIcon>
                    </ListItemIcon> */}
                    <ListItemText primary={type.name}>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        )
    })

    function handleClick(type: Type) {
        props.onSelect(type);
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
                <List subheader={<ListSubheader>Types</ListSubheader>}>
                    {typeListItems}
                </List>
            </Box>
        </Box>
    );
}