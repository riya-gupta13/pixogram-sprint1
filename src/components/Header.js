import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Header extends Component {

    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <ul className="nav justify-content-end">
                        <div><Link to='http://javaguides.net' className='navbar-brand'>Pixogram</Link> </div>
                           
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/"><i class="fa fa-home"></i>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/useradd"><i class="fa fa-plus" aria-hidden="true"></i> Sign Up</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/userupd">Update User</Link>
                                </li> */}
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" ><i class="fa fa-sign-in" aria-hidden="true"></i> Sign In</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/userall"  >View All Users</Link>
                                </li>
                            </ul>
                       
                    </nav>
                </header>
            </div>
        )
    }
}