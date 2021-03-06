import React from 'react';

export class ColourModal extends React.Component {

    changeSelected (e) {
        if (document.getElementsByClassName('is-selected').length !== 0) {
            document.getElementsByClassName('is-selected')[0].classList.remove('is-selected')
        }
        e.target.classList.add('is-selected')
    }

    confirmColour () {
        const selectedColor = document.getElementsByClassName('is-selected')[0].id
        const indexEditable = this.props.playerIds.indexOf(this.props.editableCounter)
        let newPlayerColours = this.props.playerColours
        newPlayerColours[indexEditable] = selectedColor
        this.props.updateCounterColours(newPlayerColours)
        
        const oldPlayerIds = this.props.playerIds
        this.props.removeCounter([])
        setTimeout(() => { this.props.addCounter(oldPlayerIds) }, 1);
        this.props.setLeader(null)
        //bucle de startingcount
        let newCounters = [];
        for (let i = 0; i < this.props.playerIds.length; i++) {
            newCounters.push(this.props.startingCount)
        }
        this.props.updateCounters(newCounters)
    }

    render() {
        return (
            <div className="modal__background">
                <div className="modalColour__box">
                    <div className="close__modal">
                        <label onClick={this.props.closeModal}>X</label>
                    </div>
                    <h3 className="modal__title">Choose a new color</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <div id="red" className="colourSelector c-red" onClick={this.changeSelected}></div>
                                </th>
                                <th>
                                    <div id="brown" className="colourSelector c-brown" onClick={this.changeSelected}></div>
                                </th>
                                <th>
                                    <div id="green" className="colourSelector c-green" onClick={this.changeSelected}></div>
                                </th>
                                <th>
                                    <div id="yellow" className="colourSelector c-yellow" onClick={this.changeSelected}></div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div id="orange" className="colourSelector c-orange" onClick={this.changeSelected}></div>
                                </th>
                                <th>
                                    <div id="blue" className="colourSelector c-blue" onClick={this.changeSelected}></div>
                                </th>
                                <th>
                                    <div id="purple" className="colourSelector c-purple" onClick={this.changeSelected}></div>
                                </th>
                                <th>
                                    <div id="pink" className="colourSelector c-pink" onClick={this.changeSelected}></div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <div className="modal__confirm" onClick={() => this.confirmColour()}>
                        <label className="confirm__text"><b>Ready</b></label>
                    </div>
                </div>
            </div>
        )
    }
}

export default ColourModal;