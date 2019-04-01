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
        if (id === 'Lobo' || id === 'Narrador' || id === 'Aldeano') {
            alert('no puedes quitar a lobos, aldeanos, ni al narrador del juego')
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
        let wolves;
        const playerNumber = this.props.players.length
        let playersWithoutRol = this.props.players.slice()
        let playersWithRol = {};
        let activeCharacters = this.props.activeCharacters
        if (playerNumber <= 10) {
            wolves = this.props.gameRules[playerNumber]
        } else {
            wolves = this.props.gameRules.more
        }
        //llops
        for (let i = 0; i < wolves; i++) {
            let x = this.getRandomInt(playersWithoutRol.length)
            playersWithRol[playersWithoutRol[x]] = 'Lobo'
            playersWithoutRol.splice(x, 1)
        }
        //narrador
        let x = this.getRandomInt(playersWithoutRol.length)
        playersWithRol[playersWithoutRol[x]] = 'Narrador'
        playersWithoutRol.splice(x, 1)
        //enamorats
        if (activeCharacters.indexOf('Enamorados') !== -1) {
            for (let i = 0; i < 2; i++) {
                let x = this.getRandomInt(playersWithoutRol.length)
                playersWithRol[playersWithoutRol[x]] = 'Enamorados'
                playersWithoutRol.splice(x, 1)
            }
            activeCharacters.splice(activeCharacters.indexOf('Enamorados'), 1)
        }
        
        while (playersWithoutRol.length !== 0) {
            if (activeCharacters.length !== 0) {
                let x = this.getRandomInt(playersWithoutRol.length)
                let y = this.getRandomInt(activeCharacters.length)
                playersWithRol[playersWithoutRol[x]] = activeCharacters[y]
                playersWithoutRol.splice(x, 1)
                activeCharacters.splice(y, 1)
            } else {
                for (let i = 0; i < playersWithoutRol.length; i++) {
                    playersWithRol[playersWithoutRol[i]] = 'Aldeano'
                }
                playersWithoutRol = []
            }
        }
        this.props.setPlayerRols(playersWithRol)
        this.props.startPlaying()
    }

    getRandomInt(max) {
        const min = 0
        const maxx = Math.floor(max);
        return Math.floor(Math.random() * (maxx - min)) + min;
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