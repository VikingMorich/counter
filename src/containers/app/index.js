import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Launchpad from '../launchpad/launchpad'
import Configuration from '../configuration'

const App = () => (
  <div>
    <header>
      <Link className="link-button" to="/">Home</Link>
      <Link className="link-button" to="/configuration">Configuration</Link>
      <Link className="link-button" to="/launchpad">Launchpad</Link>
      <Link className="link-button" to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path='/configuration' component={Configuration} />
      <Route exact path="/" component={Home} />
      <Route exact path="/launchpad" component={Launchpad} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
