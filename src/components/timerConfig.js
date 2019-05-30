import React from 'react'

export class TimerConfig extends React.Component {

    setTimer() {
        let title = document.getElementById('title').value
        let date = document.getElementById('date').value
        let time = document.getElementById('time').value
        if (title === "" || date === "" || time === "") {
            alert("The information can't be empty")
        } else {
            let futureDate = new Date(date + 'T' + time + ':00Z')
            futureDate -= (1000 * 60 * 60 * 2)
            let currentDate = new Date()
            let diference = futureDate - currentDate
            if (diference > 0) {
                this.props.setTitle(title)
                this.props.setFinalDate(futureDate)
                this.props.toTimer()
            } else {
                alert('You must take a future date')
            }
        }

    }

    render() {
        return (
            <div>
                <h1>⏳ Timer Config ⏳</h1>
                <h4 className="c-timerConfig-subtitle">Select the date that you want to countdown</h4>
                <div className="c-timerConfig-box">
                    <span><b>Title</b></span>
                    <input type="text" id="title"></input>
                    <span><b>Date</b></span>
                    <input type="date" id="date"></input>
                    <span><b>Hour</b></span>
                    <input type="time" id="time"></input>
                    <div className="c-timerConfig-send" onClick={() => this.setTimer()}>
                        <span>Send</span>
                    </div>
                </div>
            </div>
        );
    }
};

export default TimerConfig;
