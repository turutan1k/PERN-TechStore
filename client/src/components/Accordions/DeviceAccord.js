import React from 'react';
import { Accordion, Grid, TextField, Button, MenuItem } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import  ExpandMoreIcon  from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { AccordionDetails } from '@mui/material';
import { Context } from './../../index';
import { useContext } from 'react';
import { useState } from 'react';

const DeviceAccord = () => {
  const {device} = useContext(Context)

  const [info, setInfo] = useState([])

  const addInfo = () => {
    setInfo([...info, {title:'', description:'', number:Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo([info.filter(i => i.number !== number)])
  }

    return (
      <div>
      <Accordion sx={{ marginTop:3 }}>
          <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1a-content"
             id="panel1a-header"
          >
              <Typography>Добавить устройство</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Grid container sx={{
              alignItems:'center',
              justifyContent:'center'
          }}>
              <Grid item sx={{
                  padding:1,
              }}>
                    <TextField 
                            color="primary"
                            select
                            autoFocus
                            margin="dense"
                            id="outlined-basic"
                            label="Тип"
                            type="model"
                            fullWidth
                        >
                          {device.deviceNames.map(deviceName => (
                          <MenuItem key={deviceName.id} value={deviceName.name}>
                            {deviceName.name}
                          </MenuItem>
                        ))}
                        </TextField>
                        <TextField 
                      color="primary"
                      select
                      autoFocus
                      margin="dense"
                      id="outlined-basic"
                      label="Бренд"
                      type="model"
                      fullWidth
                  >
                     {device.manufacturers.map(manufacturer => (
                    <MenuItem key={manufacturer.id} value={manufacturer.name}>
                      {manufacturer.name}
                    </MenuItem>
                  ))}
                  </TextField>
                   <TextField 
                      color="primary"
                      select
                      autoFocus
                      margin="dense"
                      id="outlined-basic"
                      label="Модель"
                      type="model"
                      fullWidth
                  >
                     {device.devices.map(device => (
                    <MenuItem key={device.id} value={device.model}>
                      {device.model}
                    </MenuItem>
                  ))}
                  </TextField>
                  <TextField 
                      color="primary"
                      autoFocus
                      margin="dense"
                      id="outlined-basic"
                      label="Дата релиза"
                      InputLabelProps={{
                      shrink: true,
                      }}
                      type="date"
                      fullWidth
                  />
                  <TextField 
                      color="primary"
                      autoFocus
                      margin="dense"
                      id="outlined-basic"
                      label="Гарантия"
                      type="text"
                      fullWidth
                  />
                  <TextField 
                      color="primary"
                      autoFocus
                      margin="dense"
                      id="outlined-basic"
                      label="Цена"
                      type="number"
                      inputProps={{min:0}}
                      fullWidth
                  />
                  <TextField 
                      color="primary"
                      autoFocus
                      margin="dense"
                      id="outlined-basic"
                      label="Фотография"
                      type="file"
                      InputLabelProps={{
                      shrink: true,}}
                      fullWidth
                  />
              </Grid>
          </Grid>
          <Grid container sx={{
              justifyContent:'space-between'
          }}>
{
          info.map(i =>
           <Grid container key={i.number}
           sx={{
            display: 'block',
            justifyContent:'center',
            alignItems:'center',
            flexGrow:'1',
            flexShrink:'1',
            flexBasics:'100%',
           }}>
              <Grid item sx={{margin:1}} >
              <TextField 
                      color="primary"
                      autoFocus
                      margin="dense"
                      id="outlined-basic"
                      label="Введите название свойства"
                      type="text"
                      fullWidth
                  />
              </Grid>
              <Grid item sx={{margin:1}}>
              <TextField 
                      color="primary"
                      autoFocus
                      margin="dense"
                      id="outlined-basic"
                      label="Введите описание свойства"
                      type="text"
                      fullWidth
                  />
              </Grid>
              <Grid item sx={{margin:1}}>
              <Button  onClick={() => removeInfo(i.number)}color={'error'} variant={'outlined'} fullWidth={'true'}>Удалить</Button>
              <hr/>
              </Grid>
              </Grid>
          )
        }
          <Button
          color="primary"
          onClick={addInfo}
        >
          Добавить новое свойство
        </Button>
          <Button
          color="primary"
        >
          Добавить устройство
        </Button>
          </Grid>
          </AccordionDetails>
      </Accordion>
      </div>
    );
};

export default DeviceAccord;