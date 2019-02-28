import React from 'react';

export class Counter extends React.Component {
    render () {
        const { decrement, count, increment} = this.props;
        return (
            <div>
                <h3>Player{this.props.id}</h3>
                <div className="counter__container">
                    <div className="counter__button">
                        <p className="counter__button--value" onClick={decrement}>-</p>
                    </div>
                    <div className="counter__screen">
                        <p className="counter__value">{count}</p>
                    </div>
                    <div className="counter__button">
                        <p className="counter__button--value" onClick={increment}>+</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter;