import { Autocomplete, Button, Chip, FormControl, Grid, Tab, Tabs, TextField, Typography } from "@mui/material";
import { Pokemon, PokemonGenderRatio, PokemonGrowthRate } from "../../models/pokemon";
import { useEffect, useState } from "react";
import copy from "fast-copy";
import { Box } from "@mui/system";
import TabPanel from "../../components/tab-panel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

library.add(faCaretDown);

export default function PokemonEditPanel(props: {
    entity: Pokemon
}) {
    const [formState, setFormState] = useState(copy(props.entity));
    const [selectedTab, setSelectedTab] = useState(0);

    useEffect(() => {
        setFormState(copy(props.entity));
    }, [
        props.entity
    ]);

    function handleFormInputChange(event: any) {
        console.log(typeof event);
        const target = event.target as HTMLInputElement;
        const isCheckbox = target?.type === 'checkbox';
        setFormState({
            ...formState,
            [target.name]: isCheckbox ? target.checked : target.value
        })
    }

    function handleFormAutocompleteChange(event: React.SyntheticEvent, newInputValue: any, name: string) {
        setFormState({
            ...formState,
            [name]: newInputValue
        })
    }

    function selectedTabChange(event: React.SyntheticEvent, newValue: number) {
        setSelectedTab(newValue);
    }

    const abilities = [
        {
            id: "overgrow",
            title: "Overgrow"
        },
        {
            id: "chlorophyll",
            title: "Chlorophyll"
        }
    ]

    const types = props.entity.types.map(t => {
        return (
            <span>{t}</span>
        )
    })

    return (
        props.entity.id ?
            (<div className="page-panel">
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="outlined" sx={{ marginBottom: 2 }}>
                        <Typography variant="h1" sx={{ marginBottom: '0' }}>
                            {props.entity.name}
                            <FontAwesomeIcon icon={faCaretDown} size="xs" />
                        </Typography>
                    </Button>
                    <div>{types}</div>
                </Box>
                <form>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={selectedTab} onChange={selectedTabChange} aria-label="Tabs for Pokemon Edit Form">
                            <Tab label="Details" />
                            <Tab label="Moves" />
                            <Tab label="Attributes" />
                            <Tab label="Links" />
                        </Tabs>
                    </Box>
                    <TabPanel value={selectedTab} index={0}>
                        <Grid container>
                            <Grid item>
                                <FormControl sx={{ marginRight: '1rem' }}>
                                    <TextField id="internal-name" label="Internal Name" name="id" variant="filled" value={formState.id} onChange={handleFormInputChange} />
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl>
                                    <TextField id="display-name" label="Display Name" name="name" variant="filled" value={formState.name} onChange={handleFormInputChange} />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item sx={{
                                width: '18rem'
                            }}>
                                <h2>Abilities</h2>
                                <Autocomplete
                                    multiple
                                    id="tags-filled"
                                    options={abilities.map((ability) => ability.title)}
                                    value={formState.abilities || []}
                                    onChange={(event, newInputValue) => handleFormAutocompleteChange(event, newInputValue, 'abilities')}
                                    freeSolo
                                    renderTags={(value: readonly string[], getTagProps) =>
                                        value.map((option: string, index: number) => (
                                            <Chip label={option} {...getTagProps({ index })} />
                                        ))
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="filled"
                                            label="Abilities"
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item sx={{
                                width: '18rem'
                            }}>
                                <h2>Hidden Abilities</h2>
                                <Autocomplete
                                    multiple
                                    id="tags-filled"
                                    options={abilities.map((ability) => ability.title)}
                                    value={formState.hiddenAbilities || []}
                                    onChange={handleFormAutocompleteChange}
                                    freeSolo
                                    renderTags={(value: readonly string[], getTagProps) =>
                                        value.map((option: string, index: number) => (
                                            <Chip label={option} {...getTagProps({ index })} />
                                        ))
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="filled"
                                            label="Abilities"
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item sx={{
                                width: '18rem'
                            }}>
                                <h2>Categories</h2>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Autocomplete
                                            disablePortal
                                            id="genderRatio"
                                            options={Object.values(PokemonGenderRatio)}
                                            value={formState.genderRatio || null}
                                            onChange={handleFormInputChange}
                                            sx={{ width: "14rem" }}
                                            renderInput={(params) => <TextField {...params} label="Gender Ratio" />}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Autocomplete
                                            disablePortal
                                            id="growthRate"
                                            options={Object.values(PokemonGrowthRate)}
                                            value={formState.growthRate || null}
                                            onChange={handleFormInputChange}
                                            sx={{ width: "12rem" }}
                                            renderInput={(params) => <TextField {...params} label="Growth Rate" />}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={selectedTab} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={selectedTab} index={2}>
                        Item Three
                    </TabPanel>

                </form>
            </div>) :
            (<div className="page-panel">
                <h1>No Pokémon Selected</h1>
                <p>Please select a Pokémon from the list on the left.</p>
            </div>)
    );
}