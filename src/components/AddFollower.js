import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/followeraction'

 class AddFollower extends Component {
    constructor(props) {
        super(props)
        this.state = {
            follower__email: '',
            user_email: '',
            user_id: ''
        }
        this.follower__email=React.createRef();
        this.user_email=React.createRef();
        this.user_id=React.createRef();
    }
    addFollower(event) {

        let input = {
            follower__email: this.follower__email.current.value,
            user_email: this.user_email.current.value,
            user_id: this.user_id.current.value
        };
        this.props.onAddFollower(input);
        event.preventDefault();
    }
    //     // fetch('http://localhost:8080/api/useradd/', {
    //     //     method: 'POST', // or 'PUT'
    //     //     headers: {
    //     //         'Content-Type': 'application/json',
    //     //     },
    //     //     body: JSON.stringify(input)
    //     // })
    //     //     .then(response => response.json())
    //     //     .then(data => {
    //     //         console.log(data)
    //     //         this.setState({ users: data })
    //     //     });
   
    // handleChange = event => {
    //     this.setState({
    //          [event.target.name]: event.target.value,
            
    //         })
    // }
    // handleFollower = event =>{
    //     this.setState({ follower__email: event.target.value })
    // }

    // addFollower = event => {
    //     // console.log(this.follower__email.current.value)
    //     console.log({ "user_id " : + this.state.user_id })
    //     console.log({ "follower__email" : + this.state.follower__email })
    //     console.log({ "user_email " : + this.state.user_email })
        
    //     const url = "http://localhost:8080/api/follow"

    //     const data = {
    //         user_id: this.state.user_id,
    //         follower__email: this.state.follower__email,
    //         user_email: this.state.user_email  
    //     }

    //     fetch(url , {
    //         method: "POST", // or ‘PUT’
    //         body: JSON.stringify(data), // data can be `string` or {object}!
    //         headers: { "Content-Type": "application/json" }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(error => console.error("Error:", error))
    //         .then(response => console.log("Success:", response));
    //         event.preventDefault();
    // }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Adding Followers</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                    <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label"><i class="fa fa-id-badge" aria-hidden="true"></i> Id of the user you want to follow</label>
                                            <input type="number" name="user_id"  ref={this.user_id} className="form-control" onChange={this.handleChange} id="exampleFormControlInput1" placeholder="Enter User Id" />
                                        </div>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label"><i class="fa fa-envelope"></i> Your Email(Follower's Email)</label>
                                            <input type="email" name="follower__email" ref={this.follower__email} className="form-control" onChange={this.handleChange} id="exampleFormControlInput1" placeholder="Enter your email" />
                                            {/* value={this.state.follower__email} */}
                                        </div>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label"> <i class="fa fa-envelope"></i> Email Id of User you want to Follow</label>
                                            <input type="email" name="user_email"  ref = {this.user_email} className="form-control" onChange={this.handleChange} id="exampleFormControlInput1" placeholder="Enter user email" />
                                        </div>
                                        <button type="button" onClick={this.addFollower.bind(this)} className="btn btn-primary">Follow</button>
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
        message: state.followerreducer.message,
        followers: state.followerreducer.followers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddFollower: (payload) => dispatch(actions.addFollower(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddFollower);