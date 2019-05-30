import React from 'react'

export class Timer extends React.Component {

    state = {
        daysDiff: 0,
        hoursDiff: 0,
        minutesDiff: 0,
        secondsDiff: 1
    }

    setTimer() {
        let currentDate = new Date()
        let futureDate = this.props.futureDate
        let diference = futureDate - currentDate
        let daysDiff = Math.floor(diference / (1000 * 60 * 60 * 24));
        let hoursDiff = Math.floor((diference - (daysDiff * (1000 * 60 * 60 * 24))) / (1000 * 60 * 60));
        let minutesDiff = Math.floor((diference - (hoursDiff * (1000 * 60 * 60)) - (daysDiff * (1000 * 60 * 60 * 24))) / (1000 * 60));
        let secondsDiff = Math.floor((diference - (minutesDiff * (1000 * 60)) - (hoursDiff * (1000 * 60 * 60)) - (daysDiff * (1000 * 60 * 60 * 24))) / 1000);
        this.setState((state) => {
            return {
                daysDiff: daysDiff,
                hoursDiff: hoursDiff,
                minutesDiff: minutesDiff,
                secondsDiff: secondsDiff
            }
        })
        if (daysDiff < 0) {
            clearInterval(this.interval);
            this.props.toCelebrate()
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.setTimer.bind(this), 50)
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div className="c-timer-clock">
                    <table>
                        <tbody>
                            <tr>
                                <th className="c-timer-type"><b>DAYS</b></th>
                                <th className="c-timer-type"><b>HOURS</b></th>
                                <th className="c-timer-type"><b>MINUTES</b></th>
                                <th className="c-timer-type"><b>SECONDS</b></th>
                            </tr>
                            <tr>
                                <th className="c-timer-time">{this.state.daysDiff}</th>
                                <th className="c-timer-time">{this.state.hoursDiff}</th>
                                <th className="c-timer-time">{this.state.minutesDiff}</th>
                                <th className="c-timer-time">{this.state.secondsDiff}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};

export default Timer;
