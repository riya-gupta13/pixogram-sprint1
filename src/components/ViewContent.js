
import React, { Component } from 'react'
import { connect } from 'react-redux';
import Badge from '../Badge2'
import * as actions from '../actions/contentaction'
import {
    Link
} from "react-router-dom";

import { Row, Col, Container, ListGroup, Image, ButtonGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

class ViewContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contents: [],
            comment: ''
        }
        this.comment = React.createRef();
    }

    componentDidMount() {
        this.props.onFetchContents();
    }
    addLikes(id) {
        console.log(this)
        console.log('delete employee with id: ' + id)
        this.props.onAddLikes(id)
    }
    addDislikes(id) {
        console.log(this)
        console.log('delete employee with id: ' + id)
        this.props.onAddDislikes(id)
    }
    addComments(id, e) {
        console.log(id)
        this.props.onAddComments(id, this.state.comment)
        e.preventDefault();
    }
    delete(content_id) {
        console.log('delete employee with id: ' + content_id)
        this.props.onDeleteContent(content_id);       
    }
   
    handleChange(e) {
        console.log(e.target.value)
        this.setState({
            comment: e.target.value
        })
    }

    render() {
        console.log(this)
        console.log(this.props.contents)
        if (!this.props.contents) {
            return (
                <h1>No Contents on this user</h1>
            )
        }
        let comments = this.props.contents
        console.log(comments)
        let contentList = this.props.contents.map((content, content_id) => {
            //  console.log(content.user.username)
            // if(content.filename.toString().endsWith("jpg")){
            if (content.filetype === 'image/png' || 'image/jpg') {
                return (
                    <Col md="5">
                        <h4>Uploaded By: <Link to={'/users/' + content.user.user_id}>{content.user.username}</Link></h4>
                        <Row className="justify-content-md-around">
                            <Col xs={6}>
                                <Card style={{ width: '25rem' }} className="justify-content-md-around cardcontentstyle">
                                    <Card.Img width="100%" height="50%" variant="top" src={'http://localhost:8080/uploads/' + content.filename} alt="Image Not Available" />
                                    <Card.Body>
                                        <Card.Subtitle>
                                            <h5> <i>{content.caption}</i> </h5>
                                        </Card.Subtitle>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <div class="btn-group" role="group" aria-label="First group" align="center">
                                                    <ButtonGroup size="sm">
                                                        <button size="sm" class="btn btn-primary" type="button" onClick={this.addLikes.bind(this, content.content_id)}><i class="fa fa-thumbs-up" aria-hidden="true"></i>{content.like}</button>
                                                        <button size="sm" class="btn btn-secondary" type="button" onClick={this.addDislikes.bind(this, content.content_id)}><i class="fa fa-thumbs-down" aria-hidden="true"></i>{content.dislike}</button>
                                                        <button size="sm" class="btn btn-danger" type="button" onClick={this.delete.bind(this, content.content_id)}><i class="fa fa-trash" aria-hidden="true"></i></button>
                                                        </ButtonGroup>
                                                    </div>
                                                </Col>
                                                <Col></Col>
                                                <Col></Col>
                                                <Col></Col>
                                                <Col></Col>
                                            </Row>
                                        </Container>
                                        <h6>{content.comments}</h6>
                                        <div className="input-group mb-3">
                                            <input type="text" name='comment' onChange={this.handleChange.bind(this)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Comment" autocomplete="off" />
                                            <div class="input-group-append">
                                                <span>
                                                    <button size="sm" class="btn btn-primary" type="button" onClick={this.addComments.bind(this, content.content_id)}><i class="fa fa-comment" aria-hidden="true"></i></button>
                                                </span>
                                            </div>
                                        </div>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>
                                                {content.comment.map((comments, comment_id) => {
                                                    return (
                                                        <div>
                                                            {comments.comment}
                                                        </div>
                                                    )
                                                })}
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                )
            }
            else {
                return (
                    <div>
                        <Col md="5">
                            <h4>Uploaded By: <Link to={'/users/' + content.user.user_id}>{content.user.username}</Link></h4>
                            <Row className="justify-content-md-around">
                                <Col xs={6}>
                                    <Card style={{ width: '25rem' }} className="justify-content-md-around cardcontentstyle">
                                        <video className="card-img-top" src={'http://localhost:8080/uploads/' + content.filename}  alt="Video Not Available" />
                                        <Card.Body>
                                            <Card.Subtitle>
                                                <h5> Caption : {content.caption} </h5>
                                            </Card.Subtitle>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <div class="btn-group" role="group" aria-label="First group" align="left">
                                                            <button size="sm" class="btn btn-primary" type="button" onClick={this.addLikes.bind(this, content.content_id)}><i class="fa fa-thumbs-up" aria-hidden="true"></i>{content.like}</button>
                                                            <button size="sm" class="btn btn-secondary" type="button" onClick={this.addDislikes.bind(this, content.content_id)}><i class="fa fa-thumbs-down" aria-hidden="true"></i>{content.dislike}</button>
                                                        </div>
                                                    </Col>
                                                    <Col></Col>
                                                    <Col></Col>
                                                    <Col></Col>
                                                    <Col></Col>
                                                </Row>
                                            </Container>
                                            <h6>{content.comments}</h6>
                                            <div className="input-group mb-3">
                                                <input type="text" name='comment' onChange={this.handleChange.bind(this)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Comment" />
                                                <div class="input-group-append">
                                                    <span>
                                                        <button size="sm" class="btn btn-primary" type="button" onClick={this.addComments.bind(this, content.content_id)}><i class="fa fa-comment" aria-hidden="true"></i></button>
                                                    </span>
                                                </div>
                                            </div>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                    {content.comment.map((comments, comment_id) => {
                                                        return (
                                                            <div>
                                                                {comments.comment}
                                                            </div>
                                                        )
                                                    })}

                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                )
            }
        })
        return (
            <Container fluid>
                <Row>
                    {contentList} {'    '}
                </Row>
            </Container>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        contents: state.contentreducer.contents,
        user: state.contentreducer.user,
        user_id: localStorage.getItem('user_id')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchContents: () => {
            console.log('debug info')
            return dispatch(actions.fetchContents());
        },
        onAddLikes: (id) => dispatch(actions.addLike(id)),
        onAddDislikes: (id) => dispatch(actions.addDislike(id)),
        onAddComments: (id, comment) => dispatch(actions.addComment(id, comment)),
        onDeleteContent: (content_id) => dispatch(actions.deleteContent(content_id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewContent);