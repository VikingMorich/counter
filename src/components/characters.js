import React from 'react';

export class characters extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.startGame) {
            this.props.backToHome()
        }
    }

    toggleCharacter (e) {
        const id = e.currentTarget.id;
        if (id === 'Lobo' || id === 'Narrador') {
            alert('no puedes quitar ni a lobos ni al narrador del juego')
        } else {
            let activeCharacters = this.props.activeCharacters
            if (e.currentTarget.className.search('pj_active') === -1) {
                e.currentTarget.className += ' pj_active'
                activeCharacters.push(id)
                this.props.updateActiveCharacters(activeCharacters)
            } else {
                e.currentTarget.className = 'character__box'
                activeCharacters.splice(activeCharacters.indexOf(id), 1)
                this.props.updateActiveCharacters(activeCharacters)
            }
        }
    }

    startGame () {
        this.props.startPlaying()
    }

    render() {
        return (
            <div>
                <h1>Characters</h1>
                <div className="character__information">
                    <p>Selecciona los personajes con los que quieres jugar</p>
                </div>
                <div>
                    {this.props.fixedCharacters.map(x =>
                        <div key={x.name} id={x.name} className="character__box pj_active" onClick={(e) => this.toggleCharacter(e)}>
                            <h4>{x.name}</h4>
                            <p>{x.description}</p>
                        </div>
                    )}
                    {this.props.characters.map(x =>
                        <div key={x.name} id={x.name} className="character__box" onClick={(e) => this.toggleCharacter(e)}>
                            <h4>{x.name}</h4>
                            <p>{x.description}</p>
                        </div>
                    )}
                </div>
                <div className="start__button" onClick={() => this.startGame()}>
                    <span>Start to play</span>
                </div>
            </div>
        )
    }
}

export default characters;