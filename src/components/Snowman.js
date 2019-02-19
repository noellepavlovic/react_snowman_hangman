import React, { Component } from 'react'
import '../App.css'

import Secret from '../components/Secret'

class Snowman extends Component {

    render() {
        var nWrong = this.props.pastGuesses.filter((letter) => {
            return !this.props.answer.includes(letter)
        }).length

        return (
            <div>
                <div className='hangmanContainer'>
                    {(nWrong > 5) ?
                        (<div className='rightArm'></div>) : null}
                    {(nWrong > 4) ?
                        (<div className='leftArm'></div>) : null}
                    {(nWrong > 3) ?
                        (<div className="hat">
                            <div className="hat__brim"></div>
                        </div>) : null}
                    {(nWrong > 2) ?
                        (<div className='head'>
                            <div className="head__eye head__eye--left"></div>
                            <div className="head__eye head__eye--right"></div>
                            <div className="head__nose"></div>
                        </div>) : null}
                    {(nWrong > 1) ?
                        (<div className='body--top'>
                            <div className="body__button body__button--top"></div>
                            <div className="body__button body__button--middle"></div>
                            <div className="body__button body__button--bottom"></div>
                        </div>) : null}
                    {(nWrong > 0) ?
                        (<div className="body--bottom">
                        </div>) : null}
                </div>
                <div className='gameContainer'>
                    <h1>Currently Selected Guess is: {this.props.pastGuesses[this.props.pastGuesses.length - 1]} </h1>
                    <h1>Your word is: <Secret answer={this.props.answer} guess={this.props.guess} pastGuesses={this.props.pastGuesses} /></h1>
                    <h2>Your current guesses are: {this.props.pastGuesses}</h2>
                </div>
            </div>
        )
    }
}

export default Snowman

