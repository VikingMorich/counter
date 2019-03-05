import React from 'react'
import Counter from '../containers/counter';


export class Home extends React.Component {
  state = {
    playerNumber: this.props.playerIds.length,
  }

  addCounter = () => {
    let newPlayerIds = this.props.playerIds
    const playerLength = this.props.playerIds.length + 1
    newPlayerIds.push(playerLength)
    this.props.addCounter(newPlayerIds)
    this.setState(() => {
      return {
        playerNumber: this.props.playerIds.length
      };
    });
  }

  removeCounter = () => {
    let newPlayerIds = this.props.playerIds
    newPlayerIds.pop();
    this.props.removeCounter(newPlayerIds)
    this.setState(() => {
      return {
        playerNumber: this.props.playerIds.length
      };
    });
  }

  resetCounters = () => {
    const oldPlayerIds = this.props.playerIds
    this.props.removeCounter([])
    setTimeout(() => {this.props.addCounter(oldPlayerIds)}, 1);
  }

  render () {
    return (
      <div>
        <h1>🎲 Game counter 🎲</h1>
        <div className="button__container">
          <div className="button" onClick={this.addCounter}>
            <p>Add Counter</p>
          </div>
          <div className="button" onClick={this.removeCounter}>
            <p>Remove Counter</p>
          </div>
          <div className="button" onClick={this.resetCounters}>
            <p>Reset Counters</p>
          </div>
        </div>
        <hr></hr>
        {this.props.playerIds.map(id => <Counter id={id} key={id} count={this.props.startingCount} />)}
      </div>
    );
  }
};

export default Home;
