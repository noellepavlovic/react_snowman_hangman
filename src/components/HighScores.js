import React, {Component} from 'react';
import '../App.css';

class HighScores extends Component {

    render() {
        return (
         
                <tr>
                    <td><h3>Word: {this.props.word}</h3></td>
                    <td><h3>Result: {this.props.result}</h3></td>
                    <td><h3># of Guesses: {this.props.guesses}</h3></td>
                </tr>
        )
    }
}
export default HighScores;