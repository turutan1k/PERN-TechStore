import { Grid } from '@mui/material';
import React from 'react';
import DeviceList from '../components/DeviceList';
import ManufacturerBar from '../components/Bars/ManufacturerBar';
import DeviceNameBar from './../components/Bars/DeviceNameBar';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import {Context} from '../index'
import { useEffect } from 'react';
import { fetchDeviceNames, fetchDevices, fetchManufacturers } from '../http/deviceAPI';

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect( () => {
        fetchDeviceNames().then(data => device.setDeviceNames(data))
        fetchManufacturers().then(data => device.setManufacturers(data))
        fetchDevices().then(data => device.setDevices(data.rows))
        // eslint-disable-next-line
    },[])
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
});

export default Shop;