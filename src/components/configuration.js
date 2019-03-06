import React from 'react'

export class Configuration extends React.Component {
    
    sendForm = () => {
        let value
        if (document.getElementById("startingValue").value === "") {
            value = 0;
        } else {
            value = parseInt(document.getElementById("startingValue").value)
        }
        this.props.changeInitialValue(value);
        if (document.getElementById("deadMode").checked) {
            if (!this.props.deadMode) {
                this.props.enableDeadMode()
            }
        } else {
            if (this.props.deadMode) {
                this.props.disableDeadMode()
            }
        }
        if (document.getElementById("customNames").checked) {
            if (!this.props.customNames) {
                this.props.enableCustomNames()
            }
        }
        else {
            if (this.props.customNames) {
                this.props.disableCustomNames()
            }
        }
    };

    render() {
        return (
            <div>
                <h1>Configuration</h1>
                <div>
                    <div className="configForm">
                        <label>Starting value</label>
                        <input className="configFormInput" type="number" id="startingValue" placeholder={this.props.startingCount}/>
                    </div>
                    <div className="configForm">
                        <label>Custom names</label>
                        <input type="checkbox" id="customNames" defaultChecked={this.props.customNames}/>
                    </div>
                    <div className="configForm">
                        <label>Dead Mode</label>
                        <input type="checkbox" id="deadMode" defaultChecked={this.props.deadMode}/>
                    </div>
                    <br></br>
                    <button onClick={this.sendForm}>Send</button>
                </div>
            </div>
        )
    };


}

export default Configuration