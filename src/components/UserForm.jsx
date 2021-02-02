import React, { Component } from 'react'
import UserService from '../Service/UserService'
 
export default class UserForm extends Component {
    
    constructor(props) {
        super(props)    
        this.state = {
             username:'',
             password:'',
             email:'',
             gender:'',
             state:'',
             bio:''
        }  
        this.usernameHandler = this.usernameHandler.bind(this)   
        this.emailHandler = this.emailHandler.bind(this)
        this.passwordHandler = this.passwordHandler.bind(this)
        this.genderHandler = this.genderHandler.bind(this)
        this.stateHandler = this.stateHandler.bind(this) 
        this.bioHandler = this.bioHandler.bind(this) 
        this.saveUser = this.saveUser.bind(this)          
    }  
    
    usernameHandler=(event) =>
    {
        this.setState({username:event.target.value});
    }
    passwordHandler=(event) =>
    {
        this.setState({password:event.target.value});
    }
    emailHandler=(event) =>
    {
        this.setState({email:event.target.value});
    }
    genderHandler=(event) =>
    {
        this.setState({gender:event.target.value});
    }
    stateHandler=(event) =>
    {
        this.setState({state:event.target.value});
    }
    bioHandler=(event) =>
    {
        this.setState({bio:event.target.value});
    }
    saveUser =(e)=>{
        e.preventDefault();
        let user ={username:this.state.username, email:this.state.email, password:this.state.password, gender:this.state.gender, state:this.state.state, bio:this.state.bio};
        console.log('user =>' + JSON.stringify(user));

        UserService.createUser().then(res => {
            this.props.history.push('/userall')
        });
    }
    cancel(){
        this.props.history.push('/userall');
    }
    render() {
        return (
            <div>
                <div className = 'container'>
                    <div className = 'row'>
                        <div  className ='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className ='text-center'> Add User</h3>
                            <div className = 'card-body'>
                                <form>
                                <div className = 'form-group'>
                                        <label> Username </label>
                                        <input placeholder = "Enter your Username" name = "username" className = "form-control"
                                        value={this.state.username} onChange={this.usernameHandler}/>
                                    </div>
                                    <div className = 'form-group'>
                                        <label>Password</label>
                                        <input placeholder ="Enter your password" name = "password" className ="form-control"
                                        value={this.state.password} onChange={this.passwordHandler}/>
                                    </div>
                                    <div className = 'form-group'>
                                        <label> Email </label>
                                        <input placeholder = "Enter your Email id" name = "email" className = "form-control"
                                        value={this.state.email} onChange={this.emailHandler}/>
                                    </div>
                                    <div className = 'form-group'>
                                        <label> Gender </label>
                                        <input placeholder = "Enter your gender" name = "gender" className = "form-control"
                                        value={this.state.gender} onChange={this.genderHandler}/>
                                    </div>
 
                                    <div className = 'form-group'>
                                        <label>State</label>
                                        <input placeholder ="Enter your state" name = "state" className ="form-control"
                                        value={this.state.state} onChange={this.stateHandler}/>
                                    </div>
 
                                    <div className = 'form-group'>
                                        <label>Bio</label>
                                        <input placeholder ="Enter your bio" name = "bio" className ="form-control"
                                        value={this.state.bio} onChange={this.bioHandler}/>
                                    </div>
 
                                    <button className ='btn btn-success'  onClick={this.saveUser}>Save</button>
                                    <button className ='btn btn-danger'  onClick={this.cancel.bind(this)} style={{marginleft:'25px'}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}