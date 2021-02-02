
import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/followeraction'
import { Row, Col, Card, Form, InputGroup, FormControl, Button, Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faIdCard, faAt, faUserFriends } from "@fortawesome/free-solid-svg-icons";

class FollowerAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            follower__email: '',
            user_email: '',
            user_id: ''
        }
        this.follower__email = React.createRef();
        this.user_email = React.createRef();
        this.user_id = React.createRef();
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
    render() {
        return (
            <Row className="justify-content-md-center">
                <Row>
                    <Col>
                    <Image src="/button.gif" height='300px' width='600px' />
                    </Col>
                    <Col>
                    
                    <Row className="justify-content-md-center" >
                        <Card className={"border border-dark bg-white text-black align-center"} style={{ width: '25rem', backgroundImage: "/pixoimg.png" }}>
                            <Card.Header>
                                <FontAwesomeIcon icon={faUserFriends} /> Follow User
                        </Card.Header>
                            <Card.Body>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><FontAwesomeIcon icon={faIdCard} /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl required autoComplete="off" type="number" name="user_id" ref={this.user_id}
                                                value={localStorage.getItem('user_id')} className={"bg-white text-black"} placeholder="Enter user id" />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl required autoComplete="off" type="text" name="follower__email" ref={this.follower__email}
                                                className={"bg-white text-black"} placeholder="Enter your email-id" />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><FontAwesomeIcon icon={faAt} /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl required autoComplete="off" type="text" name="user_email" ref={this.user_email}
                                                value={localStorage.getItem('userEmail')} className={"bg-white text-black"} placeholder="Enter email-id of user you want to follow" />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>

                            </Card.Body>
                            <Card.Footer style={{ "text-align": "right" }}>
                                <Button size="sm" type="button" variant="info" onClick={this.addFollower.bind(this)} >
                                    Follow
                            </Button>
                            </Card.Footer>

                        </Card>
                        </Row>
                    </Col>
            </Row>
            </Row >
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

export default connect(mapStateToProps, mapDispatchToProps)(FollowerAdd);