import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../counter';
import {
  increment,
  decrement
} from '../../modules/counter'

const Home = props => (
  <div>
    <h1>🎲 Game counter 🎲</h1>
    <div className="button__container">
      <div className="button">
        <p>Add Counter</p>
      </div>
      <div className="button">
        <p>Remove Counter</p>
      </div>
    </div>
    <hr></hr>
    {props.playerIds.map(id => <Counter id={id}/>)}
  </div>
)

const mapStateToProps = ({ counter }) => ({
  players: counter.players,
  playerIds: counter.playerIds
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      decrement,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
