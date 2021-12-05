import React from 'react';
import { useContext } from 'react';
import { Context } from './../index';
import {makeStyles} from '@mui/styles';
import { Chip, Stack } from '@mui/material';

const ManufacturerBar = () => {
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
          color: 'white',
          height: 48,
          padding: '0 30px',
        },
  });
  const btns = btnStyles();
  const subs = subStyles();

    return (
      <Stack 
            sx={{
                flexWrap: 'wrap',
              }}
            className={subs.root}
            direction="row" 
            component="nav"
        >
        {device.manufacturers.map(manufacturer =>
            <Chip 
            sx={{ flexDirection: 'row'}} 
            className={btns.root}
            label={manufacturer.name}
            button
            variant="outlined"
            selected={manufacturer.id === device.setSelectedManufacturer}
            style={{cursor:'pointer'}}
            onClick = {() => device.setSelectedManufacturer(manufacturer)}
            key = {device.id}
            >
            </Chip>
        )}
      </Stack>
    );
};

export default ManufacturerBar;