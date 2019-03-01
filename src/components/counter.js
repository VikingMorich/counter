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
        this.setState((state) => {
            return {
                count: state.count + 1
            };
        });
    }

    decrement () {
        this.setState((state) => {
            return {
                count: state.count - 1
            }
        })
    }

    render () {
        return (
            <div>
                <h3>Player{this.props.id}</h3>
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
            </div>
        )
    }
}

export default Counter;