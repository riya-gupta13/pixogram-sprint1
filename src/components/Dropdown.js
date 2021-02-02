import React, { Component } from 'react'
import DropdownItem from './DropdownItem';


export default class Dropdown extends Component {

    constructor(props) {
        super(props);
        console.log('In constructor', props)
        
        this.state = {show: false, courses:this.props.courses};
      }

    toggle(){
        console.log('toggle show/hide')
        this.setState({show: !this.state.show});
        console.log(this.state.show)
    }

    handleItemClick(item){
        console.log('in parent ..', item);
        this.setState({item: item, show:false})
    }

    render() {
        // for loop for creating dropdown item for each course
        var coursesList = this.state.courses.map((course, i)=>{
           return <DropdownItem caption={course} itemClick={this.handleItemClick.bind(this)}></DropdownItem>
        })
        console.log(coursesList)
        return (
            <div className="dropdown">
            <button onClick={this.toggle.bind(this)} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              {this.state.item? this.state.item: this.props.title}     
            </button>
            <ul className={this.state.show? 'dropdown-menu show': 'dropdown-menu'} aria-labelledby="dropdownMenuButton">
              {coursesList}
            </ul>
          </div>
        )
    }
}