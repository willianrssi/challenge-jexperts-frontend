import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PageCadastro from './pages/PageCadastro'
import PageTeste from './pages/pageTeste'
import PageHome from './pages/PageHome'
import Header from './components/Header'

const Routes = () => (
  <Fragment>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={PageHome} />
        <Route path='/cadastro' component={PageCadastro} />
        <Route path='/editar' component={PageCadastro} />
        <Route path='/teste' component={PageTeste} />
        <Route path='*' component={() => <h1>Página não Encontrada</h1>} />
      </Switch>
    </BrowserRouter>
  </Fragment>
)

export default Routes
