

import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/followeraction'
import { Row, Col, Card, Form, InputGroup, FormControl, Button, Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faUserMinus, faIdCardAlt } from "@fortawesome/free-solid-svg-icons";

class FollowerDelete extends Component {
    constructor(props) {
        super(props)

        this.state = {
            follower_id: '',
            user_id: ''
        }
        this.follower_id = React.createRef();
        this.user_id = React.createRef();
    }

    delete(event) {
        let input = {
            follower_id: this.follower_id.current.value,
            user_id: this.user_id.current.value
        };
        this.props.onDeleteFollower(input);
        event.preventDefault();
    }
    render() {
        return (
            <Row className="justify-content-md-center">
                <Row>
                    <Col>
                        <Image src="/unfollow.GIF" height="300px" width='700px' />

                    </Col>
                    <Col>
                        <Row className="justify-content-md-center" >
                            <Card className={"border border-dark bg-white text-black align-center"} style={{ width: '25rem' }}>
                                <Card.Header>
                                    <FontAwesomeIcon icon={faUserMinus} /> Unfollow User
                            </Card.Header>
                                <Card.Body>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><FontAwesomeIcon icon={faIdCard} /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl required autoComplete="off" type="number" name="user_id" ref={this.user_id}
                                                  value={localStorage.getItem('user_id')}  className={"bg-white text-black"} placeholder="Enter user id" />
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><FontAwesomeIcon icon={faIdCardAlt} /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl required autoComplete="off" type="number" name="follower_id" ref={this.follower_id}
                                                    className={"bg-white text-black"} placeholder="Enter your id" />
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                </Card.Body>
                                <Card.Footer style={{ "text-align": "right" }}>
                                    <Button size="sm" type="button" variant="secondary" onClick={this.delete.bind(this)} >
                                        Unfollow
                                     </Button>
                                </Card.Footer>
                            </Card>
                        </Row>
                    </Col>


                </Row>

            </Row>


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

export default connect(mapStateToProps, mapDispatchToProps)(FollowerDelete);