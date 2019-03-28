import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Configuration from '../configuration'
import wolfGame from '../wolfGame/wolfGame'
import characters from '../wolfGame/characters'
import game from '../wolfGame/game'

const App = () => (
  <div>
    <header>
      <Link className="link-button" to="/">Home</Link>
      <Link className="link-button" to="/configuration">Configuration</Link>
      <Link className="link-button" to="/wolf-game">Wolf Game</Link>
      <Link className="link-button" to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path='/configuration' component={Configuration} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/wolf-game" component={wolfGame} />
      <Route exact path="/characters" component={characters} />
      <Route exact path="/game" component={game} />
    </main>
  </div>
)

export default App
