import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'
import { Row, Col, Container, ListGroup, Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

class FindUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
        // this.user_id=React.createRef();
    }

    componentDidMount() {
        // let input = {
        //     user_id: this.user_id.current.value
        // };
        this.props.onFindUsers(this.props.user_id);
        //console.log(this.props.username);
    }

    followUser() {
        this.props.history.push('/follow')
    }
    unfollowUser() {
        this.props.history.push('/unfollow')
    }
    render() {
        if (!this.props.users) {
            return (
                <h1>No Details on this user</h1>
            )
        }
        let userList = this.state.users.map((user, user_id) => {
            return (
                <div>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            User Id: {this.props.user.username}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            User Name: {this.props.user.username}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            User Email: {this.props.user.email}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Gender: {this.props.user.state}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Gender: {this.props.user.gender}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Bio: {this.props.user.bio}
                        </ListGroup.Item>

                    </ListGroup>

                </div>


            )
        })
        return (
            <div>

                <Card style={{ width: '20rem' }}>
                    {/* <Card.Img variant="top" src="test.jpg" /> */}
                    <Card.Body>
                        <Card.Title style={{ align: 'center' }}>Profile</Card.Title>
                        <Card.Text>
                            {userList}
                        </Card.Text>
                        <Button variant="primary">Follow</Button>
                        <Button variant="secondary">Unfollow</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        // message: state.message,
        users: state.userreducer.users,
        user_id: ownProps.match.params.user_id,
        history: ownProps.history

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFindUsers: (user_id) => {
            console.log('debug info')
            return dispatch(actions.findUsers(user_id));
        },
        // onDeleteUser: (user_id) => dispatch(actions.deleteUser(user_id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FindUser);

