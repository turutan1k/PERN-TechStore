import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useHistory} from 'react-router-dom';
import { DEVICE_ROUTE } from './../utils/consts';

export default function DeviceItem({device}) {
    const history = useHistory( )//динамическое передвижение по страницам
  return (
    <Card sx={{ maxWidth: 345,  mt:1, m:2}}>
      <CardMedia
        component="img"
        height="500"
        width="400"
        image={device.img}
        alt="device.img"
      />
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