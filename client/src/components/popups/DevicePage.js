import { Grid, Box, Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Dialog } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { DialogContentText } from '@mui/material';
import { Paper } from '@mui/material';

const DevicePage = () => {
    const device = {id:1, model:"12 pro", releaseDate:"2021-03-05", guaranteePeriod:"12 месяцев", price:"3049", img:"https://shop.by/images/apple_iphone_12_pro_dual_sim_256gb_blue_1.jpg", deviceNameId:"2", manufacturerId:"2"}
    const consignment = {id:1, consignmentDate:"2021-03-05"}
    const provider = {id:1, name:"АСБИС"}
    const country = {id:1, name:"Япония",code:"JPN"}

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
                    alt="device.img"
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow:'1',
                    flexShrink:'1',
                    flexBasics:'100%',
                    }}>
                    <img src={device.img} alt='device.img'/>
                    </Paper>
                </Grid>
                <Grid item xs={9} 
                sx={{
                  display:'flex',
                  flexDirection:'column',
                  alignItems: 'flex-start',
                  justifyContent:'center',
                }}>
                    <DialogContentText>{"Модель: " + device.model}</DialogContentText>
                    <DialogContentText>{"Дата релиза: " + device.releaseDate}</DialogContentText>
                    <DialogContentText>{"Гарантия: " + device.guaranteePeriod}</DialogContentText>
                    <DialogContentText>{"Партия от: " + consignment.consignmentDate}</DialogContentText>
                    <DialogContentText>{"Поставщик: " + provider.name}</DialogContentText>
                    <DialogContentText>{"Страна производитель: " + country.name + " (" +  country.code +") "}</DialogContentText>

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