import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Configuration from '../configuration'
import wolfGame from '../wolfGame/wolfGame'
import characters from '../wolfGame/characters'
import game from '../wolfGame/game'
import finish from '../wolfGame/finish'
import foodConfig from '../foodConfigurator/foodConfig'
import shoppingList from '../foodConfigurator/shoppingList'
import finalShoppingList from '../foodConfigurator/finalShoppingList'
import timerConfig from '../time/timerConfig'
import timer from '../time/timer'
import celebrate from '../time/celebrate'
import trippi from '../../components/trippi'

const App = () => (
  <div>
    <header>
      <Link className="link-button" to="/">Home</Link>
      <Link className="link-button" to="/configuration">Config</Link>
      <Link className="link-button" to="/wolf-game">WolfGame</Link>
      <Link className="link-button" to="/food-configurator">Food</Link>
      <Link className="link-button" to="/timer-config">Time</Link>
      <Link className="link-button" to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path='/configuration' component={Configuration} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/wolf-game" component={wolfGame} />
      <Route exact path="/characters" component={characters} />
      <Route exact path="/game" component={game} />
      <Route exact path="/finish" component={finish} />
      <Route exact path="/food-configurator" component={foodConfig} />
      <Route exact path="/shopping-list" component={shoppingList} />
      <Route exact path="/final-shopping-list" component={finalShoppingList} />
      <Route exact path="/timer-config" component={timerConfig} />
      <Route exact path="/timer" component={timer} />
      <Route exact path="/celebrate" component={celebrate} />
      <Route exact path="/trippi" component={trippi} />
    </main>
  </div>
)

export default App
