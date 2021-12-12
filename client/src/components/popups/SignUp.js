import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Dialog, Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { DialogTitle, DialogContentText } from '@mui/material';
import { DialogContent } from '@mui/material';
import { LOGIN_ROUTE } from "../../utils/consts";

const SignUp = ({ isOpened }) => {
  const history = useHistory();

  return (
    <Dialog open onClose={history.goBack}>
      <DialogTitle>Регистрация</DialogTitle>
      <DialogContent>
          <DialogContentText>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Вход</NavLink></DialogContentText>
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
            Зарегестрироваться
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

export default SignUp;