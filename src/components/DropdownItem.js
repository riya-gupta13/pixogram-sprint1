import React, { Component } from 'react'

export default class DropdownItem extends Component {
    handleClick(){
        console.log('Item clicked', this.props.caption)
        this.props.itemClick(this.props.caption);
    }

    render() {
        return (
            <li><a className="dropdown-item" href="#" onClick={this.handleClick.bind(this)}>{this.props.caption}</a></li>
        )
    }
}