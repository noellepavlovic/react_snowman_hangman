import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../App.css'

class Header extends Component {

    render() {
        return (
            <div>
                <img src="../img/banner2.png" alt="Snowman" />
                <div className="navBar">
                    <Link to="/"><button>Game</button></Link>
                    <Link to="/gamestats"><button>Game Stats</button></Link>
                    <Link to="/instructions"><button>Instructions</button></Link>
                </div>
            </div>
        )
    }
}

export default Header;