import React from 'react';

export class game extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.startGame) {
            this.props.backToHome()
        } else {
            this.props.restartVariables()
        }
    }

    flipCard(e) {
        if (e.currentTarget.className === 'flip-card') {
            e.currentTarget.className += ' flip-card-flipped'
        } else {
            e.currentTarget.className = 'flip-card'
        }
    }

    render() {
        return (
            <div>
                <h1>🐺 A new story 🐺</h1>
                <span>Mira tu personaje y pasa el dispositivo</span>
                <h3><u>Morich</u></h3>
                <div className="flip-card" onClick={(e) => this.flipCard(e)}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        </div>
                        <div className="flip-card-back">
                        </div>
                    </div>
                </div>
                <div className="next__button">
                    <span>Next Player</span>
                </div>
            </div>
        )
    }
}

export default game;