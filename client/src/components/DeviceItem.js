import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useHistory} from 'react-router-dom';
import { DEVICE_ROUTE } from './../utils/consts';
import { ImageListItem } from '@mui/material';
import { Paper } from '@mui/material';

export default function DeviceItem({device}) {
    const history = useHistory( )//динамическое передвижение по страницам
  return (
    <Card sx={{ minWidth:345, mt:1, m:2}}>
      <Paper 
        variant="outlined"
        alt="device.img"
        sx={{
        alignItems:'center',
        justifyContent:'center',
        flexGrow:'1',
        flexShrink:'1',
        flexBasics:'100%',
        textAlign: 'center',
        p:2,
        }}>
        <ImageListItem key={device.img}>
        <img style={{maxWidth:'100%', height:400, objectFit:'cover', alignItems:'center', justifyContent:'center', objectPosition:'center', padding:'2'}}
         src={process.env.REACT_APP_API_URL + device.img} alt='device.img'/>
      </ImageListItem>
        </Paper>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {device.model}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {"Дата релиза: " + device.releaseDate}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {"Гарантия: " + device.guaranteePeriod}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent:"space-between"}}>
        <Button size="small" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)} >Информация</Button>
        <Typography size="small">{device.price + " BYN"}</Typography>
      </CardActions>
    </Card>
  );
}