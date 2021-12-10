import React from 'react';
import { Chip, Stack } from '@mui/material';

const Manufacturer = (props) => {
    const {device, onClick, className, isSelected, label, key} = props;
    const {name} = device;
    return (
        <div>
        <Stack >
            <Chip sx={{m:2, mt:0}}
                primary={name} 
                className={className}
                label={label}
                button
                selected={isSelected}
                style={{cursor:'pointer'}}
                onClick = {onClick}
                key = {key}
                />
        </Stack>
        </div>
    );
};

export default Manufacturer;