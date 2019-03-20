import React from 'react'

export class Tournament extends React.Component {
    addPlayer() {
        let newPlayer = document.getElementById('input__players').value
        let actualPlayers = this.props.players
        actualPlayers.push(newPlayer)
        this.props.addPlayer(actualPlayers)
        document.getElementById('input__players').value = ""
        document.getElementById('input__players').focus()
        //only render when this.setState is called
        this.setState({'test':'me'})
    }

    removePlayer (e) {
        let newPlayers = this.props.players
        let indexRemove = this.props.players.indexOf(e.target.className);
        newPlayers.splice(indexRemove, 1)
        this.props.removePlayer(newPlayers)
        //only render when this.setState is called
        this.setState({ 'test': 'me' })
    }

    startTournament () {
        if (this.props.players.length < 2) {
            alert('⚠ The minimum number of players to start a tournament are 2 ⚠')
        }
        else {
            this.props.startTournament()
            this.props.changePage()
        }
    }

    
    render() {
        return (
            <div>
                <h1>🥇 Tournament 🥇</h1>
                <div className="participants__box">
                    <h3><u>Members</u></h3>
                    <ul className="member__list">
                        {this.props.players.map((id) => <li key={id}><b>{id}&nbsp;&nbsp;-&nbsp;&nbsp;<span className={id} onClick={(e) => this.removePlayer(e)}>♻</span></b></li>)}
                    </ul>
                </div>
                <div className="feedback__user">
                    <input type="text" id="input__players" className="input__member"/>
                    <div className="add__button">
                        <span onClick={() => this.addPlayer()}><b>Add</b></span>
                    </div>
                </div>
                <div className="next__button" onClick={() => this.startTournament()}>
                    <span><b>Start Tournament</b></span>
                </div>
            </div>
        );
    }
};

export default Tournament;
