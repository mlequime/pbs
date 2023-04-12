import { Autocomplete, Chip, FormControl, Grid, TextField } from "@mui/material";
import { Pokemon } from "../../models/pokemon";
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
                            defaultValue={[abilities[0].title]}
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
                            defaultValue={[abilities[1].title]}
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
                        <Grid container>
                            <Grid item>

                            </Grid>
                            <Grid item>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}