import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const DeviceItem = ({device}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          width="400"
          image={device.img}
          alt="Device"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {device.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div>{device.name}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Купить
        </Button>
        <Typography>
          {device.price}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default DeviceItem;