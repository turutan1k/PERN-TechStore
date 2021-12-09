import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DialogTitle, DialogContentText } from '@mui/material';
import { DialogContent } from '@material-ui/core';
import { LOGIN_ROUTE } from "../utils/consts";

const SignUp = ({ isOpened }) => {
  const history = useHistory();

  return (
    <Dialog open onClose={history.goBack} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Регистрация</DialogTitle>
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
          <Button
            color="primary"
            onClick={history.goBack}
          >
            Зарегестрироваться
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

export default SignUp;