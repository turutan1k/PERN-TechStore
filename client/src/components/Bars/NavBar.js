import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import {observer} from "mobx-react-lite";
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './../../index';

import { LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import { ADMIN_ROUTE } from './../../utils/consts';

const NavBar = observer(() => {

    const {user} = useContext(Context)  
    const history = useHistory()

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
      localStorage.removeItem('token')
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
          <>
            <Button variant="outline-light" onClick={() => history.push(ADMIN_ROUTE)}>Админ панель</Button>
            <Button variant="outline-light"onClick={() => logOut()}>Выйти</Button>
          </>
            :
            <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default NavBar;
