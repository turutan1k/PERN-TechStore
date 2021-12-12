import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Context } from '../index';
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts"
import { useContext } from 'react';
const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <>
            {user.isAuth && authRoutes.map(({path, Component})=>
            <Route path={path} component={Component} key={Component.toString()}/>
            )}
            {publicRoutes.map(({path, Component})=>
            <Route path={path} component={Component} key={Component.toString()} />
            )}
            <Redirect to={SHOP_ROUTE} exact/>
        </>
    );
};

export default AppRouter;