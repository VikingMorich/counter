import React from 'react';

export class wolfGame extends React.Component {
    addPlayer () {
        let member = document.getElementById('newPlayer').value
        if (member === '') {
            alert('user name not valid')
        } else {
            if (this.props.players.includes(member)) {
                alert('this name is already in use')
            } else {
                let playersUpdated = this.props.players
                playersUpdated.push(member)
                this.props.addPlayer(playersUpdated);
                document.getElementById('newPlayer').value = ''
                this.setState({})
            }
        }
    }

    removePlayer (e) {
        const name = e.currentTarget.id
        let newPlayers = this.props.players;
        newPlayers.splice(newPlayers.indexOf(name), 1);
        this.props.removePlayer(newPlayers)
        this.setState({})
    }

    startGame () {
        if (this.props.players.length < 5) {
            alert('The minimum number of players are 5 to play this game')
        } else {
            this.props.startGame()
        }
    }
    
    render() {
        return (
            <div>
                <h1>Wolf the game</h1>
                <div className="input__players">
                    <input id="newPlayer" type="text"/>
                    <div className="add__player">
                        <span onClick={() => this.addPlayer()}>Add</span>
                    </div>
                </div>
                <div className="wolfPlayerList" >
                    <h3><u>Players</u></h3>
                    <table>
                        <tbody>
                            {this.props.players.map(x => 
                                <tr key={x}>
                                    <td align="left" className="playerId">{x}</td>
                                    <td id={x} onClick={(e) => this.removePlayer(e)}>X</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="starting__button" onClick={() => this.startGame()}>
                    <span>Start Game</span>
                </div>

            </div>
        )
    }
}

export default wolfGame;