import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectTypeList } from '../../state/selectors/typeSelector';
import { ReactNode, useEffect, useState } from 'react';
export default function TypeSelect(props: {
    id: string,
    label: string,
    value: string | undefined,
    onSelect?: Function
}) {

    useEffect(() => {
        setSelectedType(props.value);
    }, [props.value]);

    const [selectedType, setSelectedType] = useState(props.value);

    const availableTypes = useSelector(selectTypeList);

    function selectType(event: any, child: ReactNode) {
        if (props.onSelect) {
            props.onSelect(event.target.value);
        }
        setSelectedType(event.target.value);
    }

    return (
        <FormControl fullWidth variant="filled">
            <InputLabel id={`type-select-label-${props.id}`}>{props.label}</InputLabel>
            <Select
                labelId={`type-select-label-${props.id}`}
                value={selectedType}
                onChange={(event, child) => selectType(event, child)}
            >
                {
                    availableTypes.map((availableType) => {
                        return (
                            <MenuItem value={availableType.id} key={availableType.id}>{availableType.name}</MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    );
}