import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/commentaction'

class AddComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message :'',
            contents : []
        }
        this.comment_id = React.createRef();
        this.comment = React.createRef();
        this.user_id = React.createRef();
        this.content_id = React.createRef();

    }
    addComment(event) {
        // sending a post request
        // console.log('A userame was submitted: ' + this.username.current.value);
        // console.log('A password was submitted: ' + this.password.current.value);
        // console.log('A email was submitted: ' + this.email.current.value);
        // console.log('A gender was submitted: ' + this.gender.current.value);
        // console.log('A state was submitted: ' + this.state.current.value);
        // console.log('A bio was submitted: ' + this.bio.current.value);
        // console.log('A role was submitted: ' + this.role.current.value);

        let input = {
            comment: this.comment.current.value,
            user_id: this.user_id.current.value,
            content_id: this.content_id.current.value,
        };
        this.props.onAddComment(input);
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
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add User</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label">Comment</label>
                                            <input type="text" ref={this.comment} className="form-control" id="exampleFormControlInput1" placeholder="Enter Comment" />
                                        </div>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label">Password</label>
                                            <input type="text" ref={this.user_id} className="form-control" id="exampleFormControlInput1" placeholder="Enter your user id to add comment" />
                                        </div>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label">Email</label>
                                            <input type="text" ref={this.content_id} className="form-control" id="exampleFormControlInput1" placeholder="Enter Content Id to which u want to add comment" />
                                        </div>
                                        <button type="button" onClick={this.addComment.bind(this)} className="btn btn-primary">COMMENT</button>
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
        message: state.commentreducer.message,
         contents: state.commentreducer.contents
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddComment: (payload) => dispatch(actions.addComment(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddComment);