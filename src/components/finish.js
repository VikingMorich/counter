import React from 'react'


export class Finish extends React.Component {

    constructor(props) {
        super(props);
        if (!this.props.startGame) {
            this.props.backToHome()
        }
    }

    render() {
        return (
            <div>
                <h1>🌔 Finish 🌖</h1>
                <div className="story-box">
                    <p>Llega la noche en Castronegro, un pueblo tranquilo, lleno de buena gente. Todo el mundo se va a dormir. Despiertan los hombres lobo y empieza una sucesion de dias y noches hasta que solo queden hombres lobo o aldeanos.</p>
                </div>
                <div className="restart__button" onClick={this.props.backToHome}>
                    <span>Restart</span>
                </div>
            </div>
        );
    }
};

export default Finish;
