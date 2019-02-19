import React, {Component} from 'react';
import '../App.css';

import HighScores from '../components/HighScores'

class GameStats extends Component {

    render() {
        return (

            <table>
                <tbody>
                    {this.props.highScores.map((item, i) => <HighScores word={item.word} result={item.result} guesses={item.guesses} key={i} />)}
                </tbody>
            </table>

        )
    }
}
export default GameStats;