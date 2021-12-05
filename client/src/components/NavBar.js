import {observer} from "mobx-react-lite";
import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../index';
import {SHOP_ROUTE} from '../utils/consts';
import { TextField, DialogActions, Dialog, DialogContentText, DialogContent, DialogTitle, Button  } from '@mui/material';
import { LOGIN_ROUTE } from '../utils/consts';
import { REGISTRATION_ROUTE } from '../utils/consts';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Menu as MenuIcon } from "@material-ui/icons";
import { useLocation } from "react-router";

const NavBar = observer(() => {
    const {user} = useContext(Context)  
    const [open, setOpen] = React.useState(false);
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const handleClose = () =>{
      setOpen(false);
    }
  
    const handleClickOpen = () =>{
      setOpen(true);
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink style={{color:'white', textDecoration:'none'}} to={SHOP_ROUTE}>TechStore</NavLink>
          </Typography>
              {user.isAuth ?
                  <Box mr={3} style={{color:'white'}}>
                      <Button variant={"outline-light"} onClick={handleClickOpen}>Админка</Button>
                      <Button variant={"outline-light"} onClick={handleClickOpen} ml={3}>Войти</Button>
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
                  </Box>
                  :
                  <Typography style={{color:'white'}}>
                      <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                  </Typography>
              }
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default NavBar;