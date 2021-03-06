import React from 'react'

export class Configuration extends React.Component {
    
    sendForm = () => {
        let value
        if (document.getElementById("startingValue").value !== "") {
            value = parseInt(document.getElementById("startingValue").value)
            this.props.changeInitialValue(value);
        }
        //deadMode
        if (document.getElementById("deadMode").checked) {
            if (!this.props.deadMode) {
                this.props.enableDeadMode()
            }
        } else {
            if (this.props.deadMode) {
                this.props.disableDeadMode()
            }
        }
        //customNames
        if (document.getElementById("customNames").checked) {
            if (!this.props.customNames) {
                this.props.enableCustomNames()
            }
        } else {
            if (this.props.customNames) {
                this.props.disableCustomNames()
            }
        }
        //markLeader
        if (document.getElementById("markLeader").checked) {
            if (!this.props.markLeader) {
                this.props.enableLeader()
            }
        } else {
            if (this.props.markLeader) {
                this.props.disableLeader()
            }
        }
        //editableColours
        if (document.getElementById("editableColours").checked) {
            if (!this.props.editableColours) {
                this.props.enableEditableColours()
            }
        } else {
            if (this.props.editableColours) {
                this.props.disableEditableColours()
            }
        }

        //feedback user
        this.props.toggleConfiguration();
        setTimeout(() => this.props.toggleConfiguration(), 2000);
    };

    render() {
        return (
            <div>
                {(this.props.sendConfig) && 
                <div className='informative__popup'>
                    <span>Configuration sended</span>
                </div>}
                
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
                    <div className="configForm">
                        <label>Mark Leader</label>
                        <input type="checkbox" id="markLeader" defaultChecked={this.props.markLeader}/>
                    </div>
                    <div className="configForm">
                        <label>Edit Colours</label>
                        <input type="checkbox" id="editableColours" defaultChecked={this.props.editableColours} />
                    </div>
                    <br></br>
                    <button onClick={this.sendForm}>Send</button>
                </div>
            </div>
        )
    };


}

export default Configuration