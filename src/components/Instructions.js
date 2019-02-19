import React, {Component} from 'react';
import '../App.css';

class Instructions extends Component {
    
    render() {
        return (
            <div>
                <h3>How to Play Snowman</h3>
                <p>
                    Try to guess the word before the snowman is built.  If you guess a letter correctly, it will appear in the space where it exists in the word. If the word does not contain the suggested letter, one element of the snowman will appear. As the game progresses, a portion of the snowman is added for every suggested letter not in the word. The number of incorrect guesses before you lose is 6.  If you guess the word before the snowman is completed, you win!!  Happy snowmanning!
                </p>

            </div>
        )
    }
}
export default Instructions;