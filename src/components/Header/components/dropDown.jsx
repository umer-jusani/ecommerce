import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';

const DropDown = ({ data, label }) => {
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} >
            <InputLabel id="demo-simple-select-helper-label"><span className='text-primary'>{label}</span></InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={value}
                label={label}
                onChange={handleChange}
                size='small'
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>

                {data?.map((elem, index) => {
                    return (
                        <MenuItem value={elem} key={index} >{elem}</MenuItem>
                    )
                })}

            </Select>
        </FormControl>
    )
}

export default DropDown
