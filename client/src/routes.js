import Shop from './pages/Shop';
import DevicePage from './pages/DevicePage';
import Admin from './pages/Admin';
import {ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, DEVICE_ROUTE} from './utils/consts';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
   
]

export const publicRoutes =[
    {
        path: SHOP_ROUTE,
        Component: Shop
    },    
    {
        path: LOGIN_ROUTE,
        Component: SignIn
    },
    {
        path: REGISTRATION_ROUTE,
        Component: SignUp
    },    
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },    
]