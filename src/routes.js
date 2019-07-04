import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={() => <h1>Login</h1>} />
      <Route path='/cadastro' component={() => <h1>Cadastro</h1>} />
      <Route path='*' component={() => <h1>Página não Encontrada</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Routes
