import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Cadastro from './components/Cadastro'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/cadastro' component={Cadastro} />
      <Route path='*' component={() => <h1>Página não Encontrada</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Routes
