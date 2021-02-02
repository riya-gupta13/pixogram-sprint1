import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

class Welcome extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/slide5.JPG"
                        alt="Fourth slide" fluid
                    />
                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/slide9.jpg"
                        alt="Fourth slide" fluid
                    />
                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/slide6.png"
                        alt="Fourth slide" fluid
                    />
                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1505147704403-c2caf85db293?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZnJpZW5kc3xlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                        alt="Third slide" fluid
                    />
                    <Carousel.Caption>
                        <h3>Making A Way to Remain Connected with Your Friends</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/slide10.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption >
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/slide7.jpg"
                        alt="Fourth slide" fluid
                    />
                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/slide8.jpg"
                        alt="Fourth slide" fluid
                    />
                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Welcome;