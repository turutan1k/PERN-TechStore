import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid } from '@mui/material'
import { Dialog } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { DialogContentText } from '@mui/material';
import { TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import { login } from "../../http/userAPI";
import { useState } from "react";
import { observer } from 'mobx-react-lite';
import { useContext } from "react";
import { Context } from "../../index"

const SignIn = observer(() => {
  const {user} = useContext(Context)
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async (data) =>{
      try{
        data = await login(email, password)
        user.setUser(user)
        user.setIsAuth(true)
        history.push(SHOP_ROUTE)
      } catch(e){
        alert(e.response.data.message)
      }
      
      
  }
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
            value={email}
            onChange={e =>setEmail(e.target.value)}
          />
          <TextField 
            autoFocus
            margin="dense"
            id="pass"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={e =>setPassword(e.target.value)}
          />
          <Grid sx={{
            display:'flex',
            justifyContent:'flex-end',
          }}>
          <Button
            color="primary"
            onClick={click}
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
});

export default SignIn;