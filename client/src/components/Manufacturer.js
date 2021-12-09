import React from 'react';
import { Chip } from '@material-ui/core';

const Manufacturer = (props) => {
    const {device, onClick, className, isSelected, label, key} = props;
    const {name} = device;
    return (
        <div>
            <Chip 
            className={className}
            label={label}
            button
            selected={isSelected}
            style={{cursor:'pointer'}}
            onClick = {onClick}
            key = {key}
            >
            </Chip>
        </div>
    );
};

export default Manufacturer;