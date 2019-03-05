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
    };

    render() {
        return (
            <div>
                <label>Starting value of Counter</label>
                <input type="number" id="startingValue" placeholder={this.props.startingCount}/>
                <label>Dead Mode</label>
                <input type="checkbox" id="deadMode"/>
                <br></br><br></br>
                <button onClick={this.sendForm}>Send</button>
            </div>
        )
    };


}

export default Configuration