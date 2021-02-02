import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {

    render() {
        let role = localStorage.getItem('userRole')

        if (role ==='Admin' ) {
            return (
                <Navbar bg="dark" variant="light" className="pixo" >
                    <Link to="/home" className="navbar-brand pixo">PIXOGRAM</Link>
                    <Nav className="mr-auto">
                        <Link to="/userall" className="nav-link"><i class="fa fa-users" aria-hidden="true"></i> ALL USERS</Link>
                        <Link to="/uploads" className="nav-link"><i class="fa fa-picture-o" aria-hidden="true"></i> ALL POSTS</Link>
                    </Nav>
                    <Nav className="navbar-right">
                        <Link className="nav-link" to="/useradd"><i class="fa fa-sign-out" aria-hidden="true"></i> SIGN UP</Link>
                        <Link className="nav-link" to="/"><i class="fa fa-sign-in" aria-hidden="true"></i> SIGN IN</Link>
                    </Nav>
                </Navbar>
            )
        }
        else if(role==='General user') {
            return (
                <Navbar bg="dark" variant="light" className="pixo" >
                    <Link to="/home" className="navbar-brand pixo">PIXOGRAM</Link>
                    <Nav className="mr-auto">
                        <Link to="/editProfile" className="nav-link"><i class="fa fa-user-circle-o" aria-hidden="true"></i> PROFILE</Link>
                        <Link to="/profile/" className="nav-link"><i class="fa fa-inbox" aria-hidden="true"></i> GALLERY</Link>
                        <Link to="/post" className="nav-link"><i class="fa fa-upload" aria-hidden="true"></i> UPLOAD</Link>
                        <Link to="/uploads" className="nav-link"><i class="fa fa-clipboard" aria-hidden="true"></i> POSTS</Link>
                        <Link to="/follow" className="nav-link"><i class="fa fa-user-plus" aria-hidden="true"></i> FOLLOW</Link>
                        <Link to="/unfollow" className="nav-link"><i class="fa fa-user-times" aria-hidden="true"></i> UNFOLLOW</Link>
                    </Nav>
                    <Nav className="navbar-right">
                        <Link to="/useradd" className="nav-link"><i class="fa fa-sign-out" aria-hidden="true"></i> SIGN UP</Link>
                        <Link to="/" className="nav-link"><i class="fa fa-sign-in" aria-hidden="true"></i> SIGN IN</Link>
                    </Nav>
                </Navbar>
            )
        }
        else{return(
            <Navbar bg="dark" variant="light" className="pixo" >
                    <Link to="/home" className="navbar-brand pixo">PIXOGRAM</Link>
                    <Nav className="mr-auto">
                        
                    </Nav>
                    <Nav className="navbar-right">
                        <Link to="/useradd" className="nav-link"><i class="fa fa-sign-out" aria-hidden="true"></i> SIGN UP</Link>
                        <Link to="/" className="nav-link"><i class="fa fa-sign-in" aria-hidden="true"></i> SIGN IN</Link>
                    </Nav>
                </Navbar>)
        }

    }
}

export default NavigationBar;