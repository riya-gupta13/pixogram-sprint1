import React, { Component } from 'react'
import Badge from '../Badge2'


class Card extends Component {
    render() {
        return (
            <div class="card" >
            <img src="https://via.placeholder.com/150" class="card-img-top" alt="Image not found"/>
                <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text">{this.props.summary}</p>
                    <Badge caption="Votes" count="3"></Badge>
                </div>
            </div>
        )
    }
}


export default Card;