import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Dialog } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { DialogContentText } from '@mui/material';
import { TextField } from "@material-ui/core/";
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE } from './../utils/consts';

const SignIn = ({ isOpened }) => {
  const history = useHistory();

  return (
    <Dialog open onClose={history.goBack} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Авторизация</DialogTitle>
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
          <Button
            color="primary"
            onClick={history.goBack}
          >
            Войти
          </Button>
          <Button
            color="primary"
            onClick={history.goBack}
          >
            Отмена
          </Button>
        </DialogContent>
      </Dialog>
  );
};

export default SignIn;