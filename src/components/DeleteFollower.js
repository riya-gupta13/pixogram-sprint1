import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/followeraction'

 class DeleteFollower extends Component {
    constructor(props) {
        super(props)

        this.state = {
            follower_id : '',
            user_id : ''
        }
        this.follower_id = React.createRef();
        this.user_id = React.createRef();
    }

    delete(event) {
        let input = {
            follower_id : this.follower_id.current.value,
            user_id : this.user_id.current.value
        };
        this.props.onDeleteFollower(input);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Deleting Followers</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label"><i class="fa fa-id-badge" aria-hidden="true"></i> Id of the user you want to follow</label>
                                            <input type="number" name="user_id" ref={this.user_id} className="form-control" onChange={this.handleChange} id="exampleFormControlInput1" placeholder="Enter User Id" />
                                        </div>
                                        <div className="mb-3">
                                            <label forname="exampleFormControlInput1" className="form-label"><i class="fa fa-id-badge" aria-hidden="true"></i> Your Follower Id</label>
                                            <input type="number" name="follower__email" ref={this.follower_id} className="form-control" onChange={this.handleChange} id="exampleFormControlInput1" placeholder="Enter Follower Id" />
                                            {/* value={this.state.follower__email} */}
                                        </div>
                                        <button type="button" onClick={this.delete.bind(this)} className="btn btn-primary">Follow</button>
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
        onDeleteFollower: (payload) => dispatch(actions.deleteFollower(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteFollower);
