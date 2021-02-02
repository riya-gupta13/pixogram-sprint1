import React, { Component } from 'react'
import UserService from '../Service/UserService'
 
 class User extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
            users: []
            
        }
        this.addUser=this.addUser.bind(this);
    }
 
    componentDidMount(){
        UserService.getUserList().then((res) => {
            this.setState({users: res.data});
        });
        }
 
        addUser(){
            this.props.history.push('/useradd');
        }
 
    render() {
        return (
            <div>
                <h2 className='text-center'>UserList</h2>
                <div className='row'>
                    <button className ='btn btn-primary' onClick={this.addUser}>Add User</button>
                    </div>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>State</th>
                                <th>Bio</th>
                                <th>role</th>
                            </tr>
 
                        </thead>
 
                        <tbody>
                            {this.state.users.map(
                                user =>
                                    <tr key={user.user_id}>
                                        <td>{user.username}</td>
                                        <td>{user.password}</td>
                                        <td>{user.email}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.state}</td>
                                        <td>{user.bio}</td>
                                        {/* <td>{role.role}</td> */}
                                    </tr>)
                            }
 
                        </tbody>
                    </table>
                </div>
            
        )
    }
}
 
export default User