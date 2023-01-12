import React from 'react';
import { Accordion, Button, Grid, TextField } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import  ExpandMoreIcon  from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { AccordionDetails } from '@mui/material';

const ConsignmentAccord = () => {
    return (
        <div>
        <Accordion sx={{ marginTop:3 }}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1a-content"
               id="panel1a-header"
            >
                <Typography>Добавить партию</Typography>
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
                      label="Дата партии"
                      InputLabelProps={{
                      shrink: true,
                      }}
                      type="date"
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

export default ConsignmentAccord;