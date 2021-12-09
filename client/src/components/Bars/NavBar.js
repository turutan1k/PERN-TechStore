import {observer} from "mobx-react-lite";
import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../index';
import {SHOP_ROUTE} from '../../utils/consts';
import { Button } from '@mui/material';
import { LOGIN_ROUTE } from '../../utils/consts';
import { REGISTRATION_ROUTE } from '../../utils/consts';

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
                      <Button variant={"outline-light"} ><NavLink style={{textDecoration:'none', color:'white'}} to={REGISTRATION_ROUTE}>Регистрация</NavLink></Button>
                      <Button variant={"outline-light"} ml={3}><NavLink style={{textDecoration:'none', color:'white'}} to={LOGIN_ROUTE}>Вход</NavLink></Button>
                      <Button variant={"outline-light"} ml={3}>Админка</Button>
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