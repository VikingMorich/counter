import React from 'react';

export class ColourModal extends React.Component {
    changeSelected (e) {
        debugger;
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
                                    <div className="colourSelector c-red" onClick={this.changeSelected}></div>
                                </th>
                                <th>
                                    <div className="colourSelector c-brown"></div>
                                </th>
                                <th>
                                    <div className="colourSelector c-green is-selected"></div>
                                </th>
                                <th>
                                    <div className="colourSelector c-yellow"></div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="colourSelector c-orange"></div>
                                </th>
                                <th>
                                    <div className="colourSelector c-blue"></div>
                                </th>
                                <th>
                                    <div className="colourSelector c-purple"></div>
                                </th>
                                <th>
                                    <div className="colourSelector c-pink"></div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <div className="modal__confirm" onClick={this.props.closeModal}>
                        <label className="confirm__text"><b>Ready</b></label>
                    </div>
                </div>
            </div>
        )
    }
}

export default ColourModal;