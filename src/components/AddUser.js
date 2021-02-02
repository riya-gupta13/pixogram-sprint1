import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'
import '../form.css'

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class AddUser extends Component {
    
    constructor(props) {
        super(props)
        this.username = React.createRef();
        this.password = React.createRef();
        this.email =   React.createRef();
        this.gender = React.createRef();
        this.state = React.createRef();
        this.bio =  React.createRef();
        this.role = React.createRef();
        this.state = {
            email: null,
            password: null,
            errors: {
                email: '',
                password: '',
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Use Correct Email';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;

            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }
    addUser(event) {
        // sending a post request

        let input = {
            username: this.username.current.value,
            password: this.password.current.value,
            email: this.email.current.value,
            gender: this.gender.current.value,
            state: this.state.current.value,
            bio: this.bio.current.value,
            role: this.role.current.value
        };
        this.props.onAddUser(input);
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
        event.preventDefault();
        // fetch('http://localhost:8080/api/useradd/', {
        //     method: 'POST', // or 'PUT'
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(input)
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         this.setState({ users: data })
        //     });
    }
    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>SIGN UP</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label"><i class="fa fa-user">User Name</i></label>
                                            {/* <span class="glyphicon glyphicon-user">   */}
                                            <input type="text" ref={this.username} className="form-control" aria-hidden="true" id="exampleFormControlInput1" placeholder="Enter Username"  noValidate />
                                        </div>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label"> <i class="fa fa-key" aria-hidden="true"></i>Password</label>
                                            <input type="password" name='password' onChange={this.handleChange} ref={this.password} className="form-control" id="exampleFormControlInput1" placeholder="Enter Password" noValidate />
                                            {errors.password.length > 0 &&
                                                <span className='error'>{errors.password}</span>}
                                        </div>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label"><i class="fa fa-envelope"></i>Email</label>
                                            <input type="email" ref={this.email} name='email' onChange={this.handleChange} className="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
                                            {errors.email.length > 0 &&
                                                <span className='error'>{errors.email}</span>}
                                        </div>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label"><i class="fa fa-male " aria-hidden="true"></i><i class="fa fa-female" aria-hidden="true"></i>Gender</label>
                                            <input type="text" ref={this.gender} className="form-control" id="exampleFormControlInput1" placeholder="Enter Gender" />
                                        </div>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label" ><i class="fa fa-globe" aria-hidden="true"></i>State</label>
                                            <input type="text" ref={this.state} className="form-control" id="exampleFormControlInput1" placeholder="Enter State" />
                                        </div>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label"><i class="fa fa-info-circle" aria-hidden="true"></i>Bio</label>
                                            <input type="textarea" ref={this.bio} className="form-control" id="exampleFormControlInput1" placeholder="Enter Bio" />
                                        </div>
                                        <div class="mb-3">
                                        <label forname="exampleFormControlInput2" className="form-label"><i class="fa fa-users" aria-hidden="true"></i>Role</label>
                                            <select ref={this.role} class="form-label" id="exampleFormControlInput2" placeholder="Enter role" required>
                                            <i class="fa fa-users" aria-hidden="true"></i>
                                                <option value="" hidden>Specify your Role</option>
                                                <option value="user">General User</option>
                                                <option value="admin">Admin</option>
                                            </select>
                                        <div class="invalid-feedback">Example invalid custom select feedback</div>
                                    </div>
                                        {/* <div className="mb-3">
                                            
                                            <input type="text" ref={this.role} className="form-control" id="exampleFormControlInput2" placeholder="Enter role" />
                                        </div> */}
                                        <button type="button" onClick={this.addUser.bind(this)} className="btn btn-primary">Add User</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        message: state.userreducer.message,
        users: state.userreducer.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddUser: (payload) => dispatch(actions.addUser(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddUser);