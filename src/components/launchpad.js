import React from 'react'
import audioHorse from "../mp3/audio_hero_s-horse-whinny.mp3"
import audioSaxo from "../mp3/aaj_3405_CoolSaxRiff2.mp3"

export class Launchpad extends React.Component {
    toggleChange () {
        
        const buttons = document.getElementsByClassName('launchpad__button')
        if (document.getElementById('mytoggle').checked) {
            //party mode
            Array.from(buttons).forEach((el) => {
                el.className += ' animated__button'
            })
        } else {
            //normal mode
            Array.from(buttons).forEach((el) => {
                el.className = 'launchpad__button'
            })
        }

    }

    render () {
        var soundfile1 = new Audio(audioHorse)
        var soundfile2 = new Audio(audioSaxo)
        //soundfile2.loop = true;
        return (
            <div>
                <h1>🎧 Launchpad 🎧</h1>
                <div className="launchpad__table">
                    <div className="launchpad__wrapper">
                        <div className="launchpad__button" onClick={() => soundfile1.play()}></div>
                        <div className="launchpad__button" onClick={() => soundfile2.play()}></div>
                        <div className="launchpad__button"></div>
                        <div className="launchpad__button"></div>

                        <div className="launchpad__button"></div>
                        <div className="launchpad__button"></div>
                        <div className="launchpad__button"></div>
                        <div className="launchpad__button"></div>
                        
                        <div className="launchpad__button"></div>
                        <div className="launchpad__button"></div>
                        <div className="launchpad__button"></div>
                        <div className="launchpad__button"></div>

                        <div className="launchpad__button"></div>
                        <div className="launchpad__button"></div>
                        <div className="launchpad__button"></div>
                        <div className="launchpad__button"></div>

                        <div className="launchpad__button"></div>
                        <div className="launchpad__button"></div>
                        <div className="launchpad__button"></div>
                        <div className="launchpad__button"></div>

                    </div>
                </div>
                <div className="switch__wrapper">
                    <div id="container">
                        <div className="toggle">
                            <input type="checkbox" name="toggle" className="check-checkbox" id="mytoggle" onClick={this.toggleChange} />
                            <label className="check-label" htmlFor="mytoggle">
                                <div id="background"></div>
                                <span className="face">
                                    <span className="face-container">
                                        <span className="eye left"></span>
                                        <span className="eye right"></span>
                                        <span className="mouth"></span>
                                    </span>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Launchpad;