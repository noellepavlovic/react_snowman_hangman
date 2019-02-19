import React, {Component} from 'react'
import '../App.css'

import Snowman from '../components/Snowman'

class Game extends Component {
   
    render() {
        return (
            <div>
                <div><Snowman answer={this.props.answer} pastGuesses={this.props.pastGuesses} /></div>
            </div>
        )
    }
}

export default Game