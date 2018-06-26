import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NoMatch from './components/NoMatch'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Curriculum from './components/Curriculum';
import Materials from './components/Materials'
import Dictionary from './components/Dictionary'
import Songs from './components/Songs'
import Classes from './components/Classes'



const App = () => (
  
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/curriculum" component={Curriculum} />
      <Route exact path="/materials" component={Materials} />
      <Route exact path="/dictionary" component={Dictionary} />
      <Route exact path="/songs" component={Songs} />
      <Route exact path="/classes" component={Classes} />


      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App