import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// component = {}
// render=() => {}
const RouterView = (props) => {
  const routes = props.routes.filter(val => val.components);
  const redirectArr = props.routes.filter(val => val.redirect);

  return (
    <Switch>
      {
        routes.map((item, index) => {
          return <Route key={index} path={item.path} render={ props => {
             return <item.components {...props} routes={item.children}/> 
          }} />
        })
      }
      {
        redirectArr.map((item, index) => {
          return <Redirect key={index} to={item.redirect} />
        }) 
      }
    </Switch>
  ) 
}

export default RouterView;