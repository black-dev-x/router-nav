import './Content.css'
import React from 'react'
import Home from '../../views/Home'
import About from '../../views/About'
import { Route, Switch } from 'react-router'
import Params from '../../views/examples/Params'
import NotFound from '../../views/examples/NotFound'
const Content = () => (
  <div className='Content'>
    <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/params/:id'>
        <Params />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  </div>
)

export default Content
