import React from 'react'
import gif from "../giphy.gif"


export class Launchpad extends React.Component {

    toggleChange () {
        const symbols = document.getElementsByClassName('symbol')
        const gifsymbols = document.getElementsByClassName('gifsymbol')
        const buttons = document.getElementsByClassName('launchpad__button')
        const bordermask = [0, 2, 5, 7, 8, 10, 13, 15, 16, 18]
        if (document.getElementById('mytoggle').checked) {
            //party mode
            Array.from(buttons).forEach((el, index) => {
                if (bordermask.indexOf(index) === -1) {
                    el.className += ' animated__button2'
                } else {
                    el.className += ' animated__button'
                }
            })
            Array.from(symbols).forEach((el) => {
                el.className += ' hidden'
            })
            Array.from(gifsymbols).forEach((el) => {
                el.className = 'gifsymbol'
            })
        } else {
            //normal mode
            Array.from(buttons).forEach((el, index) => {
                if (index >= 16) {
                    el.className = 'launchpad__button launchpad__loop'
                } else {
                    el.className = 'launchpad__button'
                }
            })
            Array.from(symbols).forEach((el) => {
                el.className = 'symbol'
            })
            Array.from(gifsymbols).forEach((el) => {
                el.className += ' hidden'
            })
        }

    }

    loopClicked(e) {
        if (Array.from(e.currentTarget.classList).indexOf('active') === -1) {
            e.currentTarget.className += ' active'
            switch (e.currentTarget.id) {
                case 'soundfile19':
                    this.props.soundfile19.play()
                    break;
                case 'soundfile18':
                    this.props.soundfile18.play()
                    break;
                case 'soundfile17':
                    break;
                case 'soundfile16':
                    break;
                default:
                    break;
            }
        } else {
            e.currentTarget.className = 'launchpad__button launchpad__loop'
            switch (e.currentTarget.id) {
                case 'soundfile19':
                    this.props.soundfile19.load()
                    break;
                case 'soundfile18':
                    this.props.soundfile18.load()
                    break;
                case 'soundfile17':
                    break;
                case 'soundfile16':
                    break;
                default:
                    break;
            }
        }
    }

    render () {
        this.props.soundfile19.loop = true;
        return (
            <div>
                <h1 className="launchpad__tittle"><span className="symbol">🎧</span><span className='gifsymbol hidden'><img src={gif} className="giphy" alt="Logo" /></span> Launchpad <span className='gifsymbol hidden'><img src={gif} className="giphy" alt="Logo" /></span><span className="symbol">🎧</span></h1>
                <div className="launchpad__table">
                    <div className="launchpad__wrapper">
                        <div className="launchpad__button" onClick={() => {this.props.soundfile0.load(); this.props.soundfile0.play()}}></div>
                        <div className="launchpad__button" onClick={() => { this.props.soundfile1.load(); this.props.soundfile1.play() }}></div>
                        <div className="launchpad__button"></div>
                        <div className="launchpad__button"></div>

                        <div className="launchpad__button" onClick={() => { this.props.soundfile4.load(); this.props.soundfile4.play() }}></div>
                        <div className="launchpad__button" onClick={() => { this.props.soundfile5.load(); this.props.soundfile5.play() }}></div>
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

                        <div id="soundfile16" className="launchpad__button launchpad__loop" onClick={(e) => this.loopClicked(e)}></div>
                        <div id="soundfile17" className="launchpad__button launchpad__loop" onClick={(e) => this.loopClicked(e)}></div>
                        <div id="soundfile18" className="launchpad__button launchpad__loop" onClick={(e) => this.loopClicked(e)}></div>
                        <div id="soundfile19" className="launchpad__button launchpad__loop" onClick={(e) => this.loopClicked(e)}></div>

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