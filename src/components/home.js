import React from 'react'
import Counter from '../containers/counter';
import Modal from '../containers/modal';
import ColourModal from '../containers/colourModal';

export class Home extends React.Component {
  state = {
    playerNumber: this.props.playerIds.length,
  }

  addCounter = () => {
    let newPlayerIds = this.props.playerIds
    const playerLength = 'Player' + (this.props.playerIds.length + 1)
    newPlayerIds.push(playerLength)
    this.props.addCounter(newPlayerIds)
    let newCounters = this.props.playerPoints
    newCounters.push(this.props.startingCount)
    this.props.updateCounters(newCounters);
    let newColours = this.props.playerColours
    newColours.push('green')
    this.props.updateCounterColours(newColours)
    this.setState(() => {
      return {
        playerNumber: this.props.playerIds.length
      };
    });
  }

  removeCounter = () => {
    let newPlayerIds = this.props.playerIds
    let newCounters = this.props.playerPoints
    let newColours = this.props.playerColours
    const element = document.getElementById(newPlayerIds[(newPlayerIds.length - 1)])
    if (element) {
      newPlayerIds.pop()
      newCounters.pop()
      newColours.pop()
      this.props.updateCounters(newCounters)
      this.props.updateCounterColours(newColours)
      this.setState(() => {
        return {
          playerNumber: this.props.playerIds.length
        };
      });
    }
  }

  resetCounters = () => {
    const oldPlayerIds = this.props.playerIds
    this.props.removeCounter([])
    setTimeout(() => {this.props.addCounter(oldPlayerIds)}, 1);
    this.props.setLeader(null)
    //bucle de startingcount
    let newCounters = [];
    for (let i = 0; i < this.props.playerIds.length; i++) {
      newCounters.push(this.props.startingCount)
    }
    this.props.updateCounters(newCounters)
  }

  openModal = () => {
    this.props.toggleModal()
  }

  componentDidMount() {
    this.resetCounters()
  }

  render () {
    return (
      <div>
        {this.props.modalActive && <Modal />}
        {this.props.colourModal && <ColourModal />}
        <h1>🎲 Game counter 🎲</h1>
        <div className="button__container">
          <div className="button" onClick={this.props.customNames ? this.openModal : this.addCounter}>
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
        {this.props.playerIds.map((id, index) => <Counter id={id} key={id} index={index} count={this.props.startingCount} />)}
        <div className="footer" />
      </div>
    );
  }
};

export default Home;
