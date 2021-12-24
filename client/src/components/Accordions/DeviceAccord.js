import React from 'react';
import { Accordion, Grid, TextField, Button, MenuItem } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import  ExpandMoreIcon  from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { AccordionDetails } from '@mui/material';
import { Context } from './../../index';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { fetchDeviceNames, fetchManufacturers } from '../../http/deviceAPI';
import { observer } from 'mobx-react-lite';
import { createDevice } from './../../http/deviceAPI';
const DeviceAccord = observer( () => {
  const {device} = useContext(Context)

  const [deviceName, setDeviceName] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [guaranteePeriod, setGuaranteePeriod] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)

  const [info, setInfo] = useState([])

  useEffect( () => {
    fetchDeviceNames().then(data => device.setDeviceNames(data))
    fetchManufacturers().then(data => device.setManufacturers(data))
},[])

  const addInfo = () => {
    setInfo([...info, {title:'', description:'', number:Date.now()}])
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : 1))
  }

  const removeInfo = (number) => {
    setInfo([info.filter(i => i.number !== number)])
  }

  const addDevice = () => { 
    const formData = new FormData()
    formData.append('model', model)
    formData.append('releaseDate', releaseDate)
    formData.append('guaranteePeriod', guaranteePeriod)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('deviceNameId', device.selectedDeviceName.id)
    formData.append('manufacturerId', device.selectedManufacturer.id)
    formData.append('info', JSON.stringify(info))
    createDevice(formData)
  }

  const deviceNameChange = (event) => {
    setDeviceName(event.target.value)
  }

  const manufacturerChange = (event) => {
    setManufacturer(event.target.value)
  }

  const modelChange = (event) => {
    setModel(event.target.value)
  }

  const releaseDateChange = (event) => {
    setReleaseDate(event.target.value)
  }

  const guaranteePeriodChange = (event) => {
    setGuaranteePeriod(event.target.value)
  }

  const priceChange = (event) => {
    setPrice(Number(event.target.value))
  }

  const selectFile = e => {
    setFile(e.target.files[0])
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
                            onChange={deviceNameChange}
                            color="primary"
                            select
                            autoFocus
                            margin="dense"
                            id="outlined-basic"
                            label="Тип"
                            type="text"
                            fullWidth
                        >
                          {device.deviceNames.map((deviceName) => (
                          <MenuItem 
                          key={deviceName.id} value={deviceName.name}
                          >
                          {deviceName.name}
                          </MenuItem>
                          ))}
                        </TextField>
                        <TextField 
                            onChange={manufacturerChange}
                            color="primary"
                            select
                            autoFocus
                            margin="dense"
                            id="outlined-basic"
                            label="Брэнд"
                            type="text"
                            fullWidth
                        >
                     {device.manufacturers.map((manufacturer) => (
                    <MenuItem 
                    key={manufacturer.id} value={manufacturer.name}
                    >
                      {manufacturer.name}
                    </MenuItem>
                  ))}
                  </TextField>
                   <TextField
                      value={model}
                      onChange={modelChange}
                      color="primary"
                      autoFocus
                      margin="dense"
                      id="outlined-basic"
                      label="Модель"
                      type="text"
                      fullWidth
                  />
                  <TextField 
                      value={releaseDate}
                      onChange={releaseDateChange}
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
                      value={guaranteePeriod}
                      onChange={guaranteePeriodChange}
                      color="primary"
                      autoFocus
                      margin="dense"
                      id="outlined-basic"
                      label="Гарантия"
                      type="text"
                      fullWidth
                  />
                  <TextField 
                      value={price}
                      onChange={priceChange}
                      color="primary"
                      margin="dense"
                      id="outlined-basic"
                      label="Цена"
                      type="number"
                      name="numberformat"
                      inputProps={{min:0}}
                      fullWidth
                  />
                  <TextField 
                      onChange={selectFile}
                      color="primary"
                      autoFocus
                      margin="dense"
                      id="formatted-numberformat-input"
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
                      value={i.title}
                      onChange={(e) => changeInfo('title', e.target.value, i.number)}
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
                      value={i.description}
                      onChange={(e) =>  changeInfo('description', e.target.value, i.number)}
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
          onClick={addDevice}
          color="primary"
        >
          Добавить устройство
        </Button>
          </Grid>
          </AccordionDetails>
      </Accordion>
      </div>
    );
});

export default DeviceAccord;