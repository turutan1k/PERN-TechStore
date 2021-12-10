import React from 'react';
import { List } from '@mui/material';
import { ListSubheader } from '@mui/material';
import { Context } from '../../index';
import { useContext } from 'react';
import {makeStyles} from '@mui/styles';
import DeviceName from '../DeviceName';
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
    <DeviceName
      key={deviceName.id}
      className={btns.root}
      device={deviceName}
      onClick={() => device.setSelectedDeviceName(deviceName)}
      isSelected={deviceName.id === device.setSelectedDeviceName}/>
   
    )}
    </List>
    );
};

export default DeviceNameBar;