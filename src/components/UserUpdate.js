import { faIdBadge, faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'
import { Row, Col, Card, Form, InputGroup, FormControl, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUndo, faUserPlus, faUser, faGlobe, faPen, faMale, faFemale } from "@fortawesome/free-solid-svg-icons";


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}


class UserUpdate extends Component {
    constructor(props) {
        super(props)
        this.user_id = React.createRef();
        this.username = React.createRef();
        this.password = React.createRef();
        this.email = React.createRef();
        this.gender = React.createRef();
        this.state = React.createRef();
        this.bio = React.createRef();
        this.role = React.createRef();
        this.state = {
            email: '',
            password: '',
            username: '',
            state: '',
            gender: '',
            bio: '',
            user_id: '',
            role: '',
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
    setInput() {
        this.setState({
            user_id: localStorage.getItem('user_id'),
            username: localStorage.getItem('userUsername'),
            email: localStorage.getItem('userEmail'),
            password: localStorage.getItem('userPassword'),
            state: localStorage.getItem('userState'),
            gender: localStorage.getItem('userGender'),
            bio: localStorage.getItem('userBio'),
            role: this.props.users.role
        })
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            username: event.target.username,
            email: event.target.email,
            password: event.target.password,
            state: event.target.state,
            gender: event.target.gender

        })
    }
    updateUser(event) {
        let input = {
            user_id: this.user_id.current.value,
            username: this.username.current.value,
            password: this.password.current.value,
            email: this.email.current.value,
            gender: this.gender.current.value,
            state: this.state.current.value,
            bio: this.bio.current.value,
            role: this.role.current.value
        };
        this.props.onUpdateUser(input);
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
        event.preventDefault();

    }
    contents() {
        this.props.history.push("/uploads")
    }

    render() {
        const { errors } = this.state;
        if (this.state.user_id == '') {
            this.setInput()
        }
        return (
            <Row>
                <Col>
                    <Image src="/update.png" height='300px' width='600px' />
                </Col>
                <Col>
                    <Row >
                        <Col xs={10}>
                            <Card className={"border border-dark"}>
                                <Card.Header>
                                    <FontAwesomeIcon icon={faPencilRuler} /> Your Profile
                        </Card.Header>
                                <Card.Body>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><FontAwesomeIcon icon={faIdBadge} /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl autoComplete="off" type="text" name="user_id" ref={this.user_id} value={this.state.user_id} onChange={this.onChange}
                                                    disabled className={"bg-white text-dark"} placeholder="Enter User Id" />
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl autoComplete="off" type="text" name="username" ref={this.username} value={this.state.username}
                                                    onChange={this.onChange} className={"bg-white text-dark"} placeholder="Enter Username" />
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl required autoComplete="off" type="text" name="email" ref={this.email} value={this.state.email}
                                                    onChange={this.handleChange} className={"bg-white text-dark"} placeholder="Enter Email Address" />
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
                                                <FormControl required autoComplete="off" type="password" name="password" ref={this.password} value={this.state.password}
                                                    onChange={this.handleChange} className={"bg-white text-dark"} placeholder="Enter Password" />
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
                                                <FormControl required autoComplete="off" type="text" name="gender" ref={this.gender} value={this.state.gender}
                                                    onChange={this.onChange} className={"bg-white text-dark"} placeholder="Enter Gender" />
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text><FontAwesomeIcon icon={faGlobe} /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl required autoComplete="off" type="text" name="state" ref={this.state} value={this.state.state}
                                                    onChange={this.onChange} className={"bg-white text-dark"} placeholder="Enter State" />
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
                                                 value={this.state.bio}  onChange={this.onChange} className={"bg-white text-dark"} placeholder="Enter Bio" />
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>{' '}
                                        <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" ref={this.role}  onChange={this.onChange} custom>
                                            <FontAwesomeIcon icon={faPen} />
                                            <option value="" hidden >Specify your Role</option>
                                            <option value="General user">General user</option>
                                            <option value="Admin">Admin</option>
                                        </Form.Control>
                                    </Form.Row>
                                </Card.Body>
                                <Card.Footer style={{ "text-align": "right" }}>
                                    <Button size="sm" type="button" variant="info" onClick={this.updateUser.bind(this)}>
                                        <FontAwesomeIcon icon={faPencilRuler} /> Update
                            </Button>{' '}
                                    <Button size="sm" type="button" variant="secondary" onClick={this.contents.bind(this)}>
                                        <FontAwesomeIcon icon={faUndo} /> Back
                            </Button>
                                </Card.Footer>
                            </Card>

                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        message: state.userreducer.message,
        users: state.userreducer.users,
        history: ownProps.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateUser: (payload) => dispatch(actions.updateUser(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserUpdate);