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


    nextPlayer () {
        if (document.getElementsByClassName('flip-card')[0].className === 'flip-card') {
            if (this.props.playerIndex !== this.props.players.length - 1) {
                this.props.updatePlayerIndex(this.props.playerIndex + 1)
            } else {
                this.props.finish()
            }
        } else {
            alert('Please hide your card')
        }
    }

    render() {
        return (
            <div>
                <h1>🐺 A new story 🐺</h1>
                <span>Mira tu personaje y pasa el dispositivo</span>
                <h3><u>{this.props.players[this.props.playerIndex]}</u></h3>
                <div className="flip-card" onClick={(e) => this.flipCard(e)}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        </div>
                        <div className="flip-card-back">
                            <div className="flipped-card-content">
                                <div className="card-information">
                                    <span>{this.props.playerRols[this.props.players[this.props.playerIndex]]}</span>
                                    
                                    {this.props.playerRols[this.props.players[this.props.playerIndex]] === 'Enamorados' && <ul className='pj-list'>
                                        {Object.keys(this.props.playerRols).map(function(key) {
                                            if (this.playerRols[key] === 'Enamorados') {
                                                return <li key={key}>{key}</li>
                                            } 
                                        }, {playerRols: this.props.playerRols})}
                                    </ul>}

                                    {this.props.playerRols[this.props.players[this.props.playerIndex]] === 'Narrador' && <ul className='pj-list'>
                                        {Object.keys(this.props.playerRols).map(function (key) {
                                                return <li key={key}>{key} = {this.playerRols[key]}</li>
                                        }, { playerRols: this.props.playerRols })}
                                    </ul>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="next__button" onClick={() => this.nextPlayer()}>
                    <span>Next Player</span>
                </div>
            </div>
        )
    }
}

export default game;