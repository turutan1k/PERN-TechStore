import React from 'react';
import { Accordion, Grid, Button, TextField } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import  ExpandMoreIcon  from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { AccordionDetails } from '@mui/material';

const ProviderAccord = () => {
    return (
      <div>
      <Accordion sx={{ marginTop:3 }}>
          <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1a-content"
             id="panel1a-header"
          >
              <Typography>Добавить поставщика</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Grid item sx={{
                  alignItems:'center',
                  justifyContent:'center',
                  padding:1,
              }}>
                  <TextField 
                    color="primary"
                    autoFocus
                    margin="dense"
                    id="outlined-basic"
                    label="Имя поставщика"
                    type="name"
                    fullWidth
                  />
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

export default ProviderAccord;