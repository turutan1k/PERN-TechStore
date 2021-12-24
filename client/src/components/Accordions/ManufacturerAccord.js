import React from 'react';

import { Accordion, Button, Grid, TextField } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import  ExpandMoreIcon  from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { AccordionDetails } from '@mui/material';
import { createManufacturer } from './../../http/deviceAPI';
import { useState } from 'react';
const ManufacturerAccord = () => {

    const [value, setValue] = useState('')

    const addManufacturer = () => {
        createManufacturer({name: value}).then(data => {
        setValue('')
        })
    }

    return (
        <div>
        <Accordion sx={{ marginTop:3 }}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1a-content"
               id="panel1a-header"
            >
                <Typography>Добавить брэнд</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid item sx={{
                    alignItems:'center',
                    justifyContent:'center',
                    padding:1,
                }}>
                    <TextField 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    color="primary"
                    autoFocus
                    margin="dense"
                    id="outlined-basic"
                    label="Название брэнда"
                    type="name"
                    fullWidth
                    />
                </Grid>
            <Grid container sx={{
                justifyContent:'flex-end'
            }}>
            <Button
            onClick={addManufacturer}
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

export default ManufacturerAccord;