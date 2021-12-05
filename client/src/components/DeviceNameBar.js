import React from 'react';
import { List, ListItemText } from '@mui/material';
import { ListSubheader, ListItem} from '@mui/material';
import { Context } from './../index';
import { useContext } from 'react';
import {makeStyles} from '@mui/styles';

const DeviceNameBar = () => {
    const {device} = useContext(Context)
    const btnStyles = makeStyles({
        root: {
            background: 'linear-gradient(45deg, #2196f3 30%, #2196f4 90%)',
            color: 'white',
            height: 48,
            padding: '0 30px',
          },
    });
    const subStyles = makeStyles({
        root: {
            background: '#1868b8',
            color: 'white',
            height: 48,
            padding: '0 30px',
          },
    });
    const btns = btnStyles();
    const subs = subStyles();

    return (
        <List
      spacing={5}
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader style={{cursor:'default'}} className={subs.root} component="div" id="nested-list-subheader">
          Название техники
        </ListSubheader>
      }
    >
    {device.deviceNames.map(deviceName =>
        <ListItem className={btns.root}
        button
        selected={deviceName.id === device.setSelectedDeviceName}
        style={{cursor:'pointer'}}
        onClick = {() => device.setSelectedDeviceName(deviceName)}
        key = {device.id}
        >
        <ListItemText primary={deviceName.name} />
        </ListItem>
    )}
    </List>
    );
};

export default DeviceNameBar;