import React, { Component } from 'react';
import Nav from './Nav';
import HeroMessage from './HeroMessage';

import "./Hero.css"

class Hero extends  Component {
    render() {
        return (
            <div class="hero">
                <Nav />
                <HeroMessage />
            </div>
        )
    }
}

export default Hero;