import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from '../components/Home.js';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/action'
import { Row, Col, Card, Form, InputGroup, FormControl, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faEnvelope, faLock, faUndo, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Image from 'react-bootstrap/Image'
//import { push } from 'router-redux';

class Login extends Component {
    constructor(props) {
        super(props)
        //this.state = {}
        this.state = {
            auth: '',
            // message: '',
            user: ''
        }
        this.email = React.createRef();
        this.password = React.createRef();
    }

    componentDidUpdate() {
        if (this.props.auth) {
            this.props.history.push('/home')
        }
        // else {
        //     console.log("Oops!!")
        //     this.props.history.push('/error')
        // }
    }
    login(event) {
        // const history =useHistory();      
        let input = {
            email: this.email.current.value,
            password: this.password.current.value
        };
        this.props.onLoginUser(input);

    }
    register() {
        this.props.history.push('/useradd')
    }
    render() {
        console.log(this.props)
        return (

            <Container>
                <Row>
                <div className="mb-3">
                    <div className={(this.props.message === '') ? '' : 'alert alert-danger'} role="alert">{this.props.message}</div>
                </div>
                </Row>
                <Row>
                    <Col>
                        <Image src="/login.png" />
                    </Col>
                    <Col>
                        <Card className={"border border-dark bg-white text-black align-self-start"} style={{ width: '25rem' }}>
                            <Card.Header>
                                <FontAwesomeIcon icon={faSignInAlt} /> Login
                    </Card.Header>
                            <Card.Body>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl required autoComplete="off" type="text" ref={this.email} name="email"
                                                className={"bg-white text-black"} placeholder="Enter email" />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl required autoComplete="off" type="password" ref={this.password} name="password" className={"bg-white text-black"} placeholder="Enter password" />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                            </Card.Body>
                            <Card.Footer style={{ "text-align": "right" }}>
                                <Button size="sm" type="button" variant="info" onClick={() => this.login()}>
                                    <FontAwesomeIcon icon={faSignInAlt} /> Login
                            </Button> { }
                                <Button size="sm" type="button" variant="secondary" onClick={this.register.bind(this)}>
                                    <FontAwesomeIcon icon={faSignOutAlt} /> Register
                            </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        message: state.userreducer.message,
        auth: state.userreducer.auth,
        user: state.userreducer.user,
        history: ownProps.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginUser: (payload) => dispatch(actions.LoggedUser(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);