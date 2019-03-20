import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Configuration from '../configuration'
import Tournament from '../tournament'
import View from '../tournament/view'

const App = () => (
  <div>
    <header>
      <Link className="link-button" to="/">Home</Link>
      <Link className="link-button" to="/configuration">Configuration</Link>
      <Link className="link-button" to="/tournament">Tournament</Link>
      <Link className="link-button" to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path='/configuration' component={Configuration} />
      <Route exact path="/" component={Home} />
      <Route exact path="/tournament" component={Tournament} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/tournament/start" component={View} />
    </main>
  </div>
)

export default App
