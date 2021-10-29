import './Content.css'
import React from 'react'
import Home from '../../views/Home'
import About from '../../views/About'
import { Route, Switch } from 'react-router'
const Content = () => (
  <div className='Content'>
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
    </Switch>
  </div>
)

export default Content
