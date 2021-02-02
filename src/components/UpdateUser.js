import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}


class UpdateUser extends Component {
    constructor(props) {
        super(props)
        this.user_id = React.createRef();
        this.username = React.createRef();
        this.password = React.createRef();
        this.email =    React.createRef();
        this.gender = React.createRef();
        this.state = React.createRef();
        this.bio = React.createRef();
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

    updateUser(event) {

        let input = {
            user_id: this.user_id.current.value,
            username: this.username.current.value,
            password: this.password.current.value,
            email: this.email.current.value,
            gender: this.gender.current.value,
            state: this.state.current.value,
            bio: this.bio.current.value,
            role: this.role.current.value
        };
        this.props.onUpdateUser(input);
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
        event.preventDefault();
        // fetch('http://localhost:8080/api/userupd/', {
        //     method: 'PUT', 
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(input)
        // })
        // .then(res => res.json())
        // .then(response => console.log('Success:', JSON.stringify(response)))
        // .catch(error => console.error('Error:', error));
    }
    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Update User</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label"><i class="fa fa-id-badge" aria-hidden="true"></i> User Id</label>
                                            <input type="text" ref={this.user_id} className="form-control" id="exampleFormControlInput1" placeholder="Enter User Id" />
                                        </div>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label"><i class="fa fa-user"></i> Username</label>
                                            <input type="text" ref={this.username} className="form-control" id="exampleFormControlInput1" placeholder="Enter Username" />
                                        </div>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label"> <i class="fa fa-key" aria-hidden="true"></i> Password</label>
                                            <input type="password" name='password' onChange={this.handleChange} ref={this.password} className="form-control" id="exampleFormControlInput1" placeholder="Enter Password" />
                                            {errors.password.length > 0 &&
                                                <span className='error'>{errors.password}</span>}
                                        </div>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label"><i class="fa fa-envelope"></i> Email</label>
                                            <input type="email" name='email' onChange={this.handleChange} ref={this.email} className="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
                                            {errors.email.length > 0 &&
                                                <span className='error'>{errors.email}</span>}
                                        </div>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label"><i class="fa fa-male " aria-hidden="true"></i><i class="fa fa-female" aria-hidden="true"></i> Gender</label>
                                            <input type="text" ref={this.gender} className="form-control" id="exampleFormControlInput1" placeholder="Enter Gender" />
                                        </div>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label"><i class="fa fa-globe" aria-hidden="true"></i> State</label>
                                            <input type="text" ref={this.state} className="form-control" id="exampleFormControlInput1" placeholder="Enter State" />
                                        </div>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label"><i class="fa fa-info-circle" aria-hidden="true"></i> Bio</label>
                                            <input type="textarea" ref={this.bio} className="form-control" id="exampleFormControlInput1" placeholder="Enter Bio" />
                                        </div>
                                        <label forname="exampleFormControlInput2" className="form-label"><i class="fa fa-users" aria-hidden="true"></i> Role</label><br />
                                        <select ref={this.role} class="form-label" id="exampleFormControlInput2" placeholder="Enter Role" required>
                                            <option value="" hidden>Specify your Role</option>
                                            <option value="user">General User</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                        {/* <div className="mb-3">
                                            <label forname="exampleFormControlInput2" className="form-label">Role</label>
                                            <input type="text" ref={this.role} className="form-control" id="exampleFormControlInput2" placeholder="Enter Role" />
                                        </div> */}
                                        <button type="button" onClick={this.updateUser.bind(this)} className="btn btn-dark"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
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
        onUpdateUser: (payload) => dispatch(actions.updateUser(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);