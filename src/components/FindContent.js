
import React, { Component } from 'react'
import { Col, Card, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions/contentaction'

class FindContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contents: []
        }
        this.content_id = React.createRef();
    }

    componentDidMount() {
        this.props.onFindContents(this.props.user_id);
    }
    render() {
        let contentList = this.props.contents
        if (!this.props.contents) {
            return (
                <h1>No Details on this content</h1>
            )
        }
        return (
            <div>

                <Row >
                    {contentList.map((content, content_id) => {
                        return (
                            <Col xs={4}>
                                <Card style={{ width: '20rem' }} className="justify-content-between cardcontentstyle">
                                    <Card.Img width="100%" height="50%" variant="top" src={'http://localhost:8080/uploads/' + content.filename} alt="Image Not Available" />
                                    <Card.Footer>
                                        <Container>
                                            <Row>
                                                <h5> Caption : {content.caption} </h5>
                                            </Row>
                                            <Row>
                                                <Col></Col>
                                                <Col><i class="fa fa-thumbs-up" aria-hidden="true"></i>{content.like}</Col>
                                                <Col><i class="fa fa-thumbs-down" aria-hidden="true"></i>{content.dislike} </Col>
                                                <Col></Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    {content.comment.map((comments, comment_id) => {
                                                        return (
                                                            <div>
                                                                {comments.comment}
                                                            </div>
                                                        )
                                                    })}
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>

            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        contents: state.contentreducer.contents,
        user_id: localStorage.getItem('user_id')

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFindContents: (user_id) => {
            console.log('debug info')
            return dispatch(actions.findContents(user_id));
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FindContent);