import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid } from '@mui/material'
import { Dialog } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { DialogContentText } from '@mui/material';
import { TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE } from '../../utils/consts';

const SignIn = ({ isOpened }) => {
  const history = useHistory();

  return (
    <Dialog open onClose={history.goBack}>
      <DialogTitle>Авторизация</DialogTitle>
      <DialogContent>
          <DialogContentText>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink></DialogContentText>
          <TextField 
            autoFocus
            margin="dense"
            id="name"
            label="Email Adress"
            type="email"
            fullWidth
          />
          <TextField 
            autoFocus
            margin="dense"
            id="pass"
            label="Password"
            type="password"
            fullWidth
          />
          <Grid sx={{
            display:'flex',
            justifyContent:'flex-end',
          }}>
          <Button
            color="primary"
            onClick={history.goBack}
          >
            Войти
          </Button>
          <Button
            color="error"
            onClick={history.goBack}
          >
            Отмена
          </Button>
          </Grid>
          
        </DialogContent>
      </Dialog>
  );
};

export default SignIn;