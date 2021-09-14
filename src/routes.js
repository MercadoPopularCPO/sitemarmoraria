import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Contacts from './pages/Contacts'
import Marmores from './pages/catalogo/marmores'
import Pias from './pages/catalogo/pias'
import Cozinhas from './pages/catalogo/cozinhas'
import Tumulos from './pages/catalogo/tumulos'
import Balcoes from './pages/catalogo/balcoes'
import Nichos from './pages/catalogo/nichos'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/contatos" component={Contacts} />
                <Route path="/marmores" component={Marmores} />
                <Route path="/pias" component={Pias} />
                <Route path="/cozinhas" component={Cozinhas} />
                <Route path="/tumulos" component={Tumulos} />
                <Route path="/balcoes" component={Balcoes} />
                <Route path="/nichos" component={Nichos} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes