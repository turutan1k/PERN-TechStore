import { Grid, Box, Button, ImageListItem } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Dialog } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { DialogContentText } from '@mui/material';
import { Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';
import { useState } from 'react';
import { useEffect } from 'react';


const DevicePage = () => {
    const [device, setDevice] = useState({info:[]})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
        // eslint-disable-next-line
    },[])

    const history = useHistory();
    
    return (
        <Dialog open onClose={history.goBack} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Информация о товаре:</DialogTitle>
      <DialogContent>
          <Box sx={{flexGrow:1}}>
            <Grid container spacing={3}>
                <Grid item xs={3} spacing={1}>
                    <Paper 
                    variant="outlined"
                    alt="device.info"
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow:'1',
                    flexShrink:'1',
                    flexBasics:'100%',
                    }}>
                      <ImageListItem key={device.img}>
                        <img
                          sx={{
                          maxWidth:'100%', 
                          height:400, 
                          objectFit:'cover', 
                          alignItems:'center', 
                          justifyContent:'center', 
                          objectPosition:'center', 
                          padding:'2'
                          }} 
                        src={process.env.REACT_APP_API_URL + device.img} alt='device.img'/>
                      </ImageListItem>
                    </Paper>
                </Grid>
                <Grid item xs={9} 
                sx={{
                  display:'flex',
                  flexDirection:'column',
                  alignItems: 'flex-start',
                  justifyContent:'center',
                }}>
                      <DialogContentText>{"Название техники: " + device.deviceNameId}</DialogContentText>
                      <DialogContentText>{"Производитель: " + device.manufacturerId}</DialogContentText>
                      <DialogContentText>{"Модель: " + device.model}</DialogContentText>
                      <DialogContentText>{"Дата релиза: " + device.releaseDate}</DialogContentText>
                      <DialogContentText>{"Гарантия: " + device.guaranteePeriod}</DialogContentText>

                    {/* <DialogContentText>{"Партия от: " + consignment.consignmentDate}</DialogContentText>
                    <DialogContentText>{"Поставщик: " + provider.name}</DialogContentText>
                    <DialogContentText>{"Страна производитель: " + country.name + " (" +  country.code +") "}</DialogContentText> */}

                </Grid>
            </Grid>
          </Box>
          <Box container
          sx={{
            display:'flex',
            flexDirection:'row',
            alignItems: 'center',
            justifyContent:'space-between',
              }}
          >
          <Box>
          <Button
            color="primary"
            onClick={history.goBack}
          >
            Приобрести
          </Button>
          <Button
            color="error"
            onClick={history.goBack}
          >
            Отмена
          </Button>
          </Box>
          <DialogContentText>{"Цена: " + device.price + " BYN"}</DialogContentText>
          </Box>
        </DialogContent>
      </Dialog>
    );
};
export default DevicePage;