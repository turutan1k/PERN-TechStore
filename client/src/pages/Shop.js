import { Grid } from '@mui/material';
import React from 'react';
import DeviceList from '../components/DeviceList';
import ManufacturerBar from '../components/Bars/ManufacturerBar';
import DeviceNameBar from './../components/Bars/DeviceNameBar';
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