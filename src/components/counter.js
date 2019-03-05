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
//{(this.props.deadMode && this.state.count === 0) && <p></p>}
    render () {
        /*let counter;
        if (this.props.deadMode && this.state.count === 0) {
            
        }*/
        return (
            <div>
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
                        <h3>{this.props.id}</h3>
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
                    </React.Fragment>
                )}                
            </div>
        )
    }
}

export default Counter;