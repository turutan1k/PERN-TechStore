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
                xs={2} 
                >
                    <DeviceNameBar/>
                </Grid>
                <Grid
                item 
                xs={10} 
                >
                    <ManufacturerBar/>
                    <DeviceList/>
                </Grid>
            </Grid>   
        </div>
    );
};

export default Shop;