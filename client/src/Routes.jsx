import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Create from './components/Create';
import Forgot from './components/Forgot';

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/create' component={Create} />
          <Route exact path='/forgot' component={Forgot} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
