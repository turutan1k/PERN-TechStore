import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Dialog, Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { DialogTitle, DialogContentText } from '@mui/material';
import { DialogContent } from '@mui/material';
import { LOGIN_ROUTE } from "../../utils/consts";
import { registration } from './../../http/userAPI';
import { useState } from "react";
import { observer } from 'mobx-react-lite';
import { SHOP_ROUTE } from "../../utils/consts";
import { useContext } from "react";
import { Context } from "../../index"

const SignUp = observer(() => {
  const {user} = useContext(Context)
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async (data) =>{
    try{
      data = await registration(email, password)
      user.setUser(user)
      user.setIsAuth(true)
      history.push(SHOP_ROUTE)
    }
    catch(e){
    alert(e.response.data.message)
  }
  }

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
});

export default SignUp;