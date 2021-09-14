import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Contacts from './pages/Contacts'
import Marmores from './pages/catalogo/marmores'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/contatos" component={Contacts} />
                <Route path="/marmores" component={Marmores} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes