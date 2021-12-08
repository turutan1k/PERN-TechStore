import { Grid } from '@mui/material';
import React from 'react';
import DeviceList from '../components/DeviceList';
import DeviceNameBar from '../components/DeviceNameBar';
import ManufacturerBar from './../components/ManufacturerBar';
const Shop = () => {
    return (
        <div>
            <Grid
            container
            direction="row"
            paddingTop={3}
            mt={3}
            >
                <Grid 
                item 
                direction="row"
                xs={3} 
                >
                    <DeviceNameBar/>
                </Grid>
                <Grid
                item 
                direction="row"
                xs={9} 
                >
                    <ManufacturerBar/>
                    <DeviceList/>
                </Grid>
            </Grid>   
        </div>
    );
};

export default Shop;