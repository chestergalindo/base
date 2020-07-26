import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import routes from '../src/config/routes/routes'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index)=>{
          return (
            <RoutesWithSubRoutes key={index} {...route} />
          )
        })}
      </Switch>
    </BrowserRouter>
  );
}

function RoutesWithSubRoutes(route) {
  return (
    <Route 
      path={route.path}
      exact={route.exact}
      render={props=> <route.component routes={route.routes} {...props} />}
    />
  )
}

export default App;
