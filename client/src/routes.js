import Shop from './pages/Shop';
import DevicePage from './components/popups/DevicePage';
import {ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, DEVICE_ROUTE} from './utils/consts';
import SignUp from './components/popups/SignUp';
import SignIn from './components/popups/SignIn';
import Admin from './pages/Admin';

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