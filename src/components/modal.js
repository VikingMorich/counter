import React from 'react';

export class Modal extends React.Component {

    userConfirmation () {
        let counterIds = this.props.playerIds;
        if (document.getElementById('nameInput').value !== '') {
            if (counterIds.indexOf(document.getElementById('nameInput').value) !== -1) {
                alert("⚠  This name is already in use  ⚠");
                return
            }
            counterIds.push(document.getElementById('nameInput').value);
        } else {
            counterIds.push('Player' + (this.props.playerIds.length + 1));
        }
        this.props.closeAndAddModal(counterIds);
        document.getElementById('nameInput').value = '';
    }

    render () {
        return (
            <div className="modal__background">
                <div className="modal__box">
                    <div className="close__modal">
                        <label onClick={this.props.closeModal}>X</label>
                    </div>
                    <h3 className="modal__title">New player name</h3>
                    <input type='text' id='nameInput' name='player' placeholder={'Player' + (this.props.playerIds.length + 1)} autoFocus></input>
                    <div className="modal__confirm" onClick={() => this.userConfirmation()}>
                        <label className="confirm__text"><b>Ready</b></label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;