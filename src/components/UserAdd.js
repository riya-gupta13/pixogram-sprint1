import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'
import '../form.css'
import { Row, Col, Card, Form, InputGroup, FormControl, Button, Jumbotron, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUndo, faUserPlus, faUser, faGlobe, faPen, faMale, faHandSpock} from "@fortawesome/free-solid-svg-icons";

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class UserAdd extends Component {

    constructor(props) {
        super(props)
        this.username = React.createRef();
        this.password = React.createRef();
        this.email = React.createRef();
        this.gender = React.createRef();
        this.state = React.createRef();
        this.bio = React.createRef();
        this.role = React.createRef();
        this.state = {
            email: null,
            password: null,
            errors: {
                email: '',
                password: '',
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Use Correct Email';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;

            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }
    addUser(event) {

        let input = {
            username: this.username.current.value,
            password: this.password.current.value,
            email: this.email.current.value,
            gender: this.gender.current.value,
            state: this.state.current.value,
            bio: this.bio.current.value,
            role: this.role.current.value
        };
        this.props.onAddUser(input);
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
        event.preventDefault();
    }
    login(){
        this.props.history.push('/')
    }
    render() {
        const { errors } = this.state;
        return (
            <Row >
                    <Col>
                        <Jumbotron fluid>
                            <Container>
                                <h1>Hello, New User!<FontAwesomeIcon icon={faHandSpock}/></h1>
                                <p>
                                    WELCOME...Share your story & stay connected with your friends.
                                    Happy Surfing!
                                </p>
                            </Container>
                        </Jumbotron>
                    </Col>
                <Col className="justify-content-md-end">
                    <Card className={"border border-dark"}>
                        <Card.Header>
                            <FontAwesomeIcon icon={faUserPlus} /> Register
                        </Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl autoComplete="off" type="text" name="username" ref={this.username}
                                            className={"bg-white text-dark"} placeholder="Enter Username" />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl required autoComplete="off" type="text" name="email" ref={this.email} onChange={this.handleChange}
                                            className={"bg-white text-dark"} placeholder="Enter Email Address" />
                                        {errors.email.length > 0 &&
                                            <span className='error'>{errors.email}</span>}

                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl required autoComplete="off" type="password" name="password" onChange={this.handleChange} ref={this.password}
                                            className={"bg-white text-dark"} placeholder="Enter Password" />
                                        {errors.password.length > 0 &&
                                            <span className='error'>{errors.password}</span>}
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faMale} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl required autoComplete="off" type="text" name="gender" ref={this.gender}
                                            className={"bg-white text-dark"} placeholder="Enter Gender" />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faGlobe} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl required autoComplete="off" type="text" name="state" ref={this.state}
                                            className={"bg-white text-dark"} placeholder="Enter State" />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faPen} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl required autoComplete="off" type="text" name="bio" ref={this.bio}
                                            className={"bg-white text-dark"} placeholder="Enter Bio" />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>{ ' '}
                                
                                <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" ref={this.role} custom>
                                <FontAwesomeIcon icon={faPen} />
                                <option value="" hidden >Specify your Role</option>
                                    <option value="General user">General user</option>
                                    <option value="Admin">Admin</option>
                                </Form.Control>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{ "text-align": "right" }}>
                            <Button size="sm" type="button" variant="info" onClick={this.addUser.bind(this)}>
                                <FontAwesomeIcon icon={faUserPlus} /> Register
                            </Button>{' '}
                            <Button size="sm" type="button" variant="secondary" onClick={this.login.bind(this)}>
                                <FontAwesomeIcon icon={faUndo} /> Login
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        message: state.userreducer.message,
        users: state.userreducer.users,
        history: ownProps.history
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddUser: (payload) => dispatch(actions.addUser(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserAdd);