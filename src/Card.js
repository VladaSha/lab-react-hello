import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
    render() {
        return (
            <div class="card">
                <img src={this.props.img} alt=''></img>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Card;