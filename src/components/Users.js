import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions/action';
import { Redirect } from 'react-router-dom';

class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }
    componentDidMount() {
        console.log('Initialization code goes here..');
        this.props.onFetchUsers();
       
    }
    delete(user_id) {
        console.log('delete employee with id: ' + user_id)
        this.props.onDeleteUser(user_id);       
    }
   
    updateUser(){
        this.props.history.push('/editprofile')
    }

    render() {
         console.log(this.props.users)
        if(!this.props.users)
        {
            return(
                <></>
            )
        }

        let userList = this.props.users.map((user, user_id) => {
            return (
                <tr key={user.user_id}>
                    <td><Link to={'/users/' + user.user_id}>{user.username}</Link></td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.state}</td>
                    <td><button className='mr-2' onClick={this.delete.bind(this, user.user_id)} type="button" className="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button>
                     <button className ='mr-5'onClick={this.updateUser.bind(this)} type="button" className="btn btn-dark"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                    </td>
                </tr>

            )
        })
        return (
            <div>
                <div className="mb-3">
                    <div className={(this.props.message === '') ? '' : 'alert alert-success'} role="alert">
                        {this.props.message}
                    </div>
                </div>
                <h2 className='text-center'>User List</h2>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>        
                            <th>USERNAME</th>
                            <th>EMAIL</th>
                            <th>GENDER</th>
                            <th>STATE</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList}
                    </tbody>

                </table>
                </div>
             
        )
    }


}
const mapStateToProps = (state, ownProps) => {
    return {
        message: state.userreducer.message,
        users: state.userreducer.users,
        history : ownProps.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchUsers: () => {
            console.log('debug info')
            return dispatch(actions.fetchUsers())
        },
        onDeleteUser: (user_id) => dispatch(actions.deleteUser(user_id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);