import {React} from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/Bars/NavBar';
import { observer } from 'mobx-react-lite';
import { useContext, useState } from 'react';
import { Context } from './index';
import { useEffect } from 'react';
import { check } from './http/userAPI';
import { CircularProgress, Grid, Box } from '@mui/material';
const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    setTimeout(() =>{
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
    }, 500)
    // eslint-disable-next-line
  }, [])

  if(loading){
    return (
      <Grid container sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', alignContent:'center'}}>
        <Grid item>
          <CircularProgress/>
        </Grid>
        <Grid item>
          <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 18 }}>        
            Загружается, ждите...
          </Box>
        </Grid>
      </Grid>)
  }


  return (
    <Router>
    <div>
      <NavBar />
      <AppRouter />
    </div>
    </Router>
  );
});

export default App;
