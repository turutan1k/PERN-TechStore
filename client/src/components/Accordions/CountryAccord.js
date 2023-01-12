import React from 'react';
import { Accordion, Grid, TextField, Button } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import  ExpandMoreIcon  from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { AccordionDetails } from '@mui/material';

const CountryAccord = () => {
    return (
      <div>
      <Accordion sx={{ marginTop:3 }}>
          <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1a-content"
             id="panel1a-header"
          >
              <Typography>Добавить страну производителя</Typography>
          </AccordionSummary>
          <AccordionDetails >
          <Grid container sx={{
              alignItems:'center',
              justifyContent:'center',
          }}>
              <Grid item sx={{
                  padding:1,
              }}>
                  <TextField
                    color="primary"
                    autoFocus
                    margin="dense"
                    id="outlined-basic"
                    label="Название страны"
                    type="name"
                    fullWidth
                  />
                  <TextField
                    color="primary"
                    autoFocus
                    margin="dense"
                    id="outlined-basic"
                    label="Код страны"
                    type="text"
                    pattern="[A-Z]{3}" 
                    title="3 буквы + CAPSLOCK"
                    fullWidth
                  />
              </Grid>
          </Grid>
          <Grid container sx={{
              justifyContent:'flex-end'
          }}>
          <Button
          color="primary"
        >
          Добавить
        </Button>
          </Grid>
          </AccordionDetails>
      </Accordion>
      </div>
    );
};

export default CountryAccord;