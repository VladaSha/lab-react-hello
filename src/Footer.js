import React, { Component } from 'react';
import Card from './Card'
import './Footer.css'

let icon1 = "./images/icon1.png"
let icon2 = "./images/icon2.png"
let icon3 = "./images/icon3.png"
let icon4 = "./images/icon4.png"

class Footer extends Component {
    render() {
        return (
            <div class="cards">
                <Card img={icon1} title="Declarative" description="React makes it painless to create interactive UIs"/>
                <Card img={icon2} title="Components" description="Build encapsulated components that manage their state"/>
                <Card img={icon3} title="Single-Way" description="A set of immutable values are passed to the component's"/>
                <Card img={icon4} title="JSX" description="Statically-typed, designed to run on modern browsers"/>
            </div>
        )
    }
}
export default Footer;
