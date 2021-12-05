import { Stack } from '@mui/material';
import React from 'react';
import DeviceList from '../components/DeviceList';
import DeviceNameBar from '../components/DeviceNameBar';
import ManufacturerBar from './../components/ManufacturerBar';
const Shop = () => {
    return (
        <div>
            <Stack mt={5} ml={5}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}>
                <Stack md={3} mr={5}
                direction="column">
                    <DeviceNameBar/>
                </Stack>
                <Stack md={9}
                spacing={2}
                >
                    <ManufacturerBar/>
                    <DeviceList/>
                </Stack>
            </Stack>   
        </div>
    );
};

export default Shop;