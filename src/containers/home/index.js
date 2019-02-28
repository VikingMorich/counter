import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import logo from '../../logo.svg';
import { connect } from 'react-redux'
import {
  increment,
  decrement
} from '../../modules/counter'

const Home = props => (
  <div>
    <h1>🎲 Game counter 🎲</h1>
    <div className="counter__container">
      <div className="counter__button">
        <p className="counter__button--value" onClick={props.decrement}>-</p>
      </div>
      <div className="counter__screen">
        <p className="counter__value">{props.count}</p>
      </div>
      <div className="counter__button">
        <p className="counter__button--value" onClick={props.increment}>+</p>
      </div>
    </div>
  </div>
)

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
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
