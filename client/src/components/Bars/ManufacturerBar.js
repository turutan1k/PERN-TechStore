import React from 'react';
import { useContext } from 'react';
import { Context } from '../../index';
import {makeStyles} from '@mui/styles';
import { Stack } from '@mui/material';
import Manufacturer from '../Manufacturer';
const ManufacturerBar = () => {
    const {device} = useContext(Context)
    const btnStyles = makeStyles({
      root: {
          background: 'linear-gradient(45deg, #2196f3 30%, #2196f4 90%)',
          color: 'white',
        },
  });
  const subStyles = makeStyles({
      root: {
          color: 'white',
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
            <Manufacturer
              sx={{ m:2, flexWrap: 'wrap'}} 
              key={manufacturer.id}
              label={manufacturer.name}
              className={btns.root}
              device={manufacturer}
              onClick={() => device.setSelectedManufacturer(manufacturer)}
              isSelected={manufacturer.id === device.setSelectedManufacturer}/>
        )}
      </Stack>
    );
};

export default ManufacturerBar;