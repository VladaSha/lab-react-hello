import React, { Component } from 'react';
import Button from './Button';
import "./HeroMessage.css"

class HeroMessage extends Component {
    render() {
        return (
            <div class="message">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
                <Button />
            </div>
        )
    }
}
export default HeroMessage;