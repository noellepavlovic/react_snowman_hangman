import React, {Component} from 'react';
import '../App.css';

class Secret extends Component {
    
    reveal = () => {
        let str = ""
        this.props.answer.forEach((letter, i) => {
            str += this.props.pastGuesses.includes(letter) ? letter + "\t" : "_\t";})
        return str
    }
    
    render() {
        return (
            <div>
                {this.reveal()}
            </div>
        )
    }
}

export default Secret

