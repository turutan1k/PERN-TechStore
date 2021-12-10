import { Button, Grid, Dialog, DialogTitle, DialogContent } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Admin = ({isOpened}) => {
  const history = useHistory();
    return (
        <div>
            <Dialog open onClose={history.goBack}>
            <DialogTitle>Что вы хотите сделать?</DialogTitle>
            <DialogContent>
            <Grid 
            sx={{
                display:'block',
            }}>
            <Button></Button>
            <Button></Button>
            <Button></Button>

            </Grid>
        </DialogContent>
      </Dialog>
        </div>
    );
};

export default Admin;