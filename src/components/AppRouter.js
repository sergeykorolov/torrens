import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {routes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";

const AppRouter = () => {
    return (
        <Switch>
            {routes.map(({path, component}) =>
                <Route key={path} path={path} component={component} exact/>
            )}
            <Redirect to={HOME_ROUTE} />
        </Switch>
    );
};

export default AppRouter;