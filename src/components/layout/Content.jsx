import './Content.css'
import React from 'react'
import Home from '../../views/Home'
import About from '../../views/About'
import { Route, Switch } from 'react-router'
import Params from '../../views/examples/Params'
const Content = () => (
  <div className='Content'>
    <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/params/:id'>
        <Params />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </div>
)

export default Content
