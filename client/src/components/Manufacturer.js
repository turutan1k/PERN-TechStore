import React from 'react';
import { Chip, Stack } from '@mui/material';

const Manufacturer = (props) => {
    const {device, onClick, className, isSelected, label} = props;
    const {name} = device;
    return (
        <div>
        <Stack >
            <Chip sx={{m:3, mt:0, flexWrap:'wrap',fontSize:'1rem'}}
                primary={name} 
                className={className}
                label={label}
                selected={isSelected}
                style={{cursor:'pointer'}}
                onClick = {onClick}
                />
        </Stack>
        </div>
    );
};

export default Manufacturer;