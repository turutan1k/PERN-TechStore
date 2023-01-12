import { Button, Grid, Dialog, DialogContent } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

import DeviceNameAccord from '../components/Accordions/DeviceNameAccord';
import ConsignmentAccord from '../components/Accordions/ConsignmentAccord';
import DeviceAccord from '../components/Accordions/DeviceAccord';
import ProviderAccord from './../components/Accordions/ProviderAccord';
import CountryAccord from './../components/Accordions/CountryAccord';
import ManufacturerAccord from '../components/Accordions/ManufacturerAccord';
const Admin = ({isOpened}) => {
  const history = useHistory();

    return (
        <div>
            <Dialog open onClose={history.goBack}>
            <DialogContent>
            <Grid container 
            sx={{
                display:'flex',
                flexDirection:'column',
            }}>
            <Grid item>
            <DeviceNameAccord/>
            <ManufacturerAccord/>
            <ConsignmentAccord/>
            <DeviceAccord/>
            <ProviderAccord/>
            <CountryAccord/>

            </Grid>
            
            <Grid item
            sx={{
              display:'flex',
              flexDirection:'row',
              justifyContent:'flex-end',
              marginTop:3,
            }}>
          <Button
            color="error"
            onClick={history.goBack}
          >
            Выйти
          </Button></Grid>

            </Grid>
        </DialogContent>
      </Dialog>
        </div>
    );
};

export default Admin;