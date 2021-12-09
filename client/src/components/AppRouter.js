import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Context } from '../index';
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts"
import { useContext } from 'react';
const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <>
            {user.isAuth && authRoutes.map(({path, Component})=>
            <Route path={path} component={Component} exact key={Math.random()}/>
            )}
            {publicRoutes.map(({path, Component})=>
            <Route path={path} component={Component} key={Math.random()}/>
            )}
            <Redirect to={SHOP_ROUTE} exact/>
        </>
    );
};

export default AppRouter;