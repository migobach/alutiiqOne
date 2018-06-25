import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NoMatch from './components/NoMatch'
import Home from './components/Home'


const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />

    <Route component={NoMatch} />
  </Switch>
)

export default App