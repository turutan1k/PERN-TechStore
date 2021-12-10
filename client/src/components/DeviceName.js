import React from 'react';
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';

const DeviceName = (props) => {
        const {device, onClick, className, isSelected} = props;
        const {name} = device;
        return (
            <div>
              <ListItem className={className}
              button
              selected={isSelected}
              style={{cursor:'pointer'}}
              onClick={onClick}
              >
              <ListItemText primary={name} />
              </ListItem>
            </div>
        
    );
};

export default DeviceName;