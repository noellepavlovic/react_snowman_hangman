import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import swal from 'sweetalert';
import './App.css';

import Header from "./components/Header"
import GameStats from './components/GameStats'
import Instructions from './components/Instructions'
import Game from './components/Game'

class App extends Component {

    constructor() {
        super();
        this.state = {
            answer: [],
            pastGuesses: [],
            highScores: []
        }
    }

    validateGuess = (e) => {
        let guess = e.key.toLowerCase();

        if (this.hasError(guess) === false) {
            this.addGuess(guess)
        }
    }

    hasError = (guess) => {
        let __pastGuesses  = []
        __pastGuesses = __pastGuesses.concat(this.state.pastGuesses)
        
        if (!(/^[a-z]$/i.test(guess))) {
            swal("ERROR: You have entered an invalid character. Please enter a single letter.")
            return true
        }
        
        if (this.state.pastGuesses.length === 0) {
            return false
        }

        if (this.hasItem(guess, __pastGuesses)) {
            swal("ERROR: You have entered that guess already. Please enter a different letter.")
            return true
        }

        return false
    }

    getWord = () => {
        var randomWords = require('random-words');
        let word = randomWords();

        return word.split('')
    }

    hasItem = (item, array) => {
        let found = false;

        array.forEach((letter, i) => {
            if (letter === item) {
                found = true
            }
        })
        
        return found
    }

    addGuess = (guess) => {
        let __pastGuesses = this.state.pastGuesses
        __pastGuesses.push(guess)
        
        this.setState({
            pastGuesses: __pastGuesses
        })
    }

    checkGameOver = () => {
        var matches = this.state.answer.filter((letter) => {
            return this.state.pastGuesses.includes(letter);
        }).length

        var nWrong = this.state.pastGuesses.filter((letter) => {
            return !this.state.answer.includes(letter)
        }).length

        return (matches === this.state.answer.length || nWrong === 6)
    }

    hasWon = () => {
        var matches = this.state.answer.filter((letter) => {
            return this.state.pastGuesses.includes(letter);
        }).length

        var nWrong = this.state.pastGuesses.filter((letter) => {
            return !this.state.answer.includes(letter)
        }).length

        if (matches === this.state.answer.length) {
            return true
        }
        if (nWrong === 6) {
            return false
        }
    }

    getHighScore = () => {
        let result
        let __highScores = []
                         
        if(this.hasWon()){
            result = "Win"
        } else{
            result = "Loss"
        }

        let gamestat = [{word: this.state.answer.join(''), result: result, guesses: this.state.pastGuesses.length}]       
        __highScores = this.state.highScores
        __highScores = __highScores.concat(gamestat)
          
        return __highScores
    }

    componentWillMount() {
        let __answer = this.getWord()
        let __highScores = localStorage.getItem('highScores') !== null ? JSON.parse(localStorage.getItem('highScores')) : []
        
        this.setState({
            answer: __answer,
            highScores: __highScores
        })

        document.addEventListener("keypress", this.validateGuess.bind(this));
        window.addEventListener('beforeunload', (event) => {
            localStorage.setItem('highScores', JSON.stringify(this.state.highScores))
          }, false);
        }

    componentDidUpdate() {
        if (this.checkGameOver()) {
            document.removeEventListener("keypress", this.validateGuess.bind(this));
            let __answer = this.getWord()
            let __highScores = this.getHighScore()
           
                if (this.hasWon()) {
                    swal("You Win!!")
                } else {
                    swal("You Lose!!")
                }          

            setTimeout(() => {
                this.setState({
                    answer: __answer,
                    pastGuesses: [],
                    highScores: __highScores
                })
            }, 1000);
        }
    }

    render() {
        return (
            <div className="App" >
                <div><Header /></div>
                <Switch>
                    <Route path="/" exact render={() => <Game answer={this.state.answer} pastGuesses={this.state.pastGuesses}/>} />
                    <Route path="/gamestats" render={() => <GameStats highScores={this.state.highScores} />} />
                    <Route path="/instructions" component={Instructions} />
                </Switch>
            </div>
        );
    }
}

export default App;

