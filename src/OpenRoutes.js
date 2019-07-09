import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PageLogin from './pages/PageLogin'
import PageCadastro from './pages/PageCadastro'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={PageLogin} />
      <Route path='/cadastro' component={PageCadastro} />
      <Route path='*' component={() => <h1>Página não Encontrada</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Routes
