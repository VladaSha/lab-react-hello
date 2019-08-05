import React, { Component } from 'react';
import "./Nav.css";

class Nav extends Component {
    render() {
        return (
            <div class="nav">
                <img src="./images/ironhack-logo.svg" alt="ironhack-logo"></img>
                <img src="./images/menu-top.svg" alt="menu-top"></img>
            </div>
        )
    }
}

export default Nav;