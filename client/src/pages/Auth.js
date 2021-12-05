import React from 'react';
import { TextField, DialogActions, Dialog, DialogContentText, DialogContent, DialogTitle, Button  } from '@mui/material';
import { LOGIN_ROUTE } from '../utils/consts';
import { REGISTRATION_ROUTE } from '../utils/consts';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

const Auth = () => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  const handleClose = () =>{
    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{isLogin ? 'Авторизация' : "Регистрация"}</DialogTitle>
        <DialogContent>
          {isLogin ? 
            <DialogContentText>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink></DialogContentText>
            :
            <DialogContentText>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Вход</NavLink></DialogContentText>
          }
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
          </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">Отмена</Button>
        {isLogin ? <Button onClick={handleClose} color="primary">Войти</Button> : <Button onClick={handleClose} color="primary">Регистрация</Button>}
      </DialogActions>
    </Dialog>
  );
};

export default Auth;