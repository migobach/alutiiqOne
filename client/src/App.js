import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NoMatch from './components/NoMatch'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Curriculum from './components/Curriculum';


const App = () => (
  
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/curriculum" component={Curriculum} />

      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App