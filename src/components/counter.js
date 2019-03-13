import React from 'react';

export class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            count: props.count,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment () {
        if (this.props.markLeader) {
            this.updateCounters(this.props.id, this.state.count + 1)
        }
        this.setState((state) => {
            return {
                count: state.count + 1
            };
        });
    }

    updateCounters (id, val) {
        let newCounters = this.props.playerPoints;
        newCounters[this.props.playerIds.indexOf(id)] = val
        this.props.updateCounters(newCounters)
        const leader = this.findLeader(newCounters)
        this.props.setLeader(leader)
    }

    findLeader (newCounters) {
        const maxVal = Math.max(...newCounters)
        let isUnique = true
        let index
        for (let i = 0; i<newCounters.length; i++) {
            if (newCounters[i] === maxVal) {
                if (!isUnique) return null
                index = i;
                isUnique = false
            }
        }
        return this.props.playerIds[index]
    }

    decrement () {
        if (this.props.markLeader) {
            this.updateCounters(this.props.id, this.state.count - 1)
        }
        this.setState((state) => {
            return {
                count: state.count - 1
            }
        })
        if (this.props.deadMode) {
            if (this.state.count <= 0) {
                this.setState(() => {
                    return {
                        count: 0
                    };
                });
            }
        }
    }

    render () {
        return (
            <div id={this.props.id} className="counter__wrapper">
                {(this.props.deadMode && this.state.count === 0) ? (
                    <React.Fragment>
                        <h3>{this.props.id}</h3>
                        <div className="counter__container--dead">
                            <div className="counter__button--dead">
                                <p className="counter__button--value" onClick={this.decrement}>-</p>
                            </div>
                            <div className="counter__screen">
                                <p className="counter__value">☠️</p>
                            </div>
                            <div className="counter__button--dead">
                                <p className="counter__button--value" onClick={this.increment}>+</p>
                            </div>
                        </div>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                            {(this.props.leaderId === this.props.id && this.props.markLeader) ?
                                (<h3>🏆😎 - {this.props.id} - 😎🏆</h3>) :
                            (<h3>{this.props.id}</h3>)}
                        <div className="counter__box">
                            <div className="counter__container">
                                <div className="counter__button">
                                    <p className="counter__button--value" onClick={this.decrement}>-</p>
                                </div>
                                <div className="counter__screen">
                                    <p className="counter__value">{this.state.count}</p>
                                </div>
                                <div className="counter__button">
                                    <p className="counter__button--value" onClick={this.increment}>+</p>
                                </div>
                            </div>
                                {this.props.editableColours && <span className="counter__edit" onClick={() => this.props.toggleColourModal(this.props.id)}>🎨</span>}
                        </div>    
                        
                    </React.Fragment>
                )}                
            </div>
        )
    }
}

export default Counter;