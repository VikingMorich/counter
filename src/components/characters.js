import React from 'react';

export class characters extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.startGame) {
            this.props.backToHome()
        }
    }

    render() {
        return (
            <div>
                <h1>Characters</h1>
                <div className="character__information">
                    <p>Selecciona los personajes con los que quieres jugar</p>
                </div>
                <div>
                    {this.props.characters.map(x =>
                        <div key={x.name} className="character__box">
                            <h4>{x.name}</h4>
                            <p>{x.description}</p>
                        </div>
                    )}

                </div>
            </div>
        )
    }
}

export default characters;