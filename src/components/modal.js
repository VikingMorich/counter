import React from 'react';

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="modal__background">
                <div className="modal__box">
                    <p>Holaaa</p>
                    <div onClick={this.props.closeModal}>
                        <p>X</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;