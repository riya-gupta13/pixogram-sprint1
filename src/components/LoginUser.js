import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from '../components/Home.js';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/action'
//import { push } from 'router-redux';

class LoginUser extends Component {
    constructor(props) {
        super(props)
        //this.state = {}
        this.state = { auth: '', message: '' }
        this.email = React.createRef();
        this.password = React.createRef();
    }

    componentDidUpdate() {
        if (this.props.auth) {
        this.props.history.push('/')
               // return <Redirect to='/'/>
           }
        else{
            console.log("Oops!!")
            this.props.history.push('/error')
        }

    }

    login(event) {
        // const history =useHistory();      
        let input = {
            email: this.email.current.value,
            password: this.password.current.value
        };
        this.props.onLoginUser(input);
        event.preventDefault();
        // if (this.props.auth) {
        //     console.log(props);
        //     this.props.history.push('/')
        //        // return <Redirect to='/'/>
        //    }

        // event.preventDefault();
    }

    // fetch('http://localhost:8080/api/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     body: JSON.stringify(input)
    // })
    //     .then(response => response.text())
    //     // .then(text => {console.log(text)})
    //     .then(text => {
    //         console.log(text)
    //         if(text==="Succesfully Logged in"){
    //             this.setState({ redirect:true})
    //         }
    //         // else{
    //         //     alert("Type correct details")
    //         // }
    //         this.setState({message:text})
    //     });


    render() {
        // if(this.state.redirect)
        // {
        //     return <Redirect to='/'/>
        // }

        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'> SIGN IN</h3>
                            <div className='card-body'></div>
                            <div className="mb-3">
                                <div class={(this.props.message === '') ? '' : 'alert alert-warning'} role="alert">{this.props.message}
                                </div>
                            </div>
                            <form>
                                <div className="form-group">
                                    <label forname="exampleInputEmail1"><i class="fa fa-envelope"></i> Email Address</label>
                                    <input type="email" ref={this.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
                                </div>
                                <div className="form-group">
                                    <label forname="exampleInputPassword1"><i class="fa fa-key" aria-hidden="true"></i> Password</label>
                                    <input type="password" ref={this.password} className="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label text-start" forname="exampleCheck1"> Remember me</label>
                                </div>
                                <button type="button" onClick={() => this.login()} className="btn btn-primary">SIGN IN</button>
                                {/* <button type="submit" onClick={this.login.bind(this)} className="btn btn-primary">Submit</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        message: state.userreducer.message,
        auth: state.userreducer.auth,
        history:ownProps.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginUser: (payload) => dispatch(actions.LoggedUser(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginUser);