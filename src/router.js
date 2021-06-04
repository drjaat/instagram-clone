import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Home'
import Profile from './Pages/Profile'

export default function router() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  )
}
