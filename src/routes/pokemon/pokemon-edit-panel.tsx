import { Autocomplete, Chip, FormControl, Grid, TextField } from "@mui/material";
import { Pokemon, PokemonGenderRatio, PokemonGrowthRate } from "../../models/pokemon";
import { useEffect, useState } from "react";
import copy from "fast-copy";

export default function PokemonEditPanel(props: {
    entity: Pokemon
}) {
    const [formState, setFormState] = useState(copy(props.entity));

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

    function handleFormAutocompleteChange(event: any, newInputValue: any) {
        console.log(`event`, event);
        console.log('newInputValue', newInputValue);
        // setFormState({
        //     ...formState,
        //     [name]: newInputValue
        // })
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

    return (
        <div className="page-panel">
            <h1>{props.entity.name}</h1>
            <form>
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
                    <Grid item>
                        <h2>Abilities</h2>
                        <Autocomplete
                            multiple
                            id="tags-filled"
                            options={abilities.map((ability) => ability.title)}
                            value={formState.abilities}
                            onChange={handleFormInputChange}
                            freeSolo
                            renderTags={(value: readonly string[], getTagProps) =>
                                value.map((option: string, index: number) => (
                                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
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
                    <Grid item>
                        <h2>Hidden Abilities</h2>
                        <Autocomplete
                            multiple
                            id="tags-filled"
                            options={abilities.map((ability) => ability.title)}
                            value={formState.hiddenAbilities}
                            onChange={handleFormInputChange}
                            freeSolo
                            renderTags={(value: readonly string[], getTagProps) =>
                                value.map((option: string, index: number) => (
                                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
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
                    <Grid item>
                        <h2>Categories</h2>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Autocomplete
                                    disablePortal
                                    id="genderRatio"
                                    options={Object.values(PokemonGenderRatio)}
                                    value={formState.genderRatio || null}
                                    onChange={handleFormInputChange}
                                    sx={{ width: "16rem" }}
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
                                    sx={{ width: "16rem" }}
                                    renderInput={(params) => <TextField {...params} label="Growth Rate" />}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}