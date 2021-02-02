import React, {Component} from 'react';
 
import {Navbar, Container, Col} from 'react-bootstrap';
 
class Footer extends Component {
    render() {
        let fullYear = new Date().getFullYear();
 
        return (
            <Navbar fixed="bottom" bg="dark" text="dark" className="pixo" >
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>©{fullYear}-{fullYear+1}, All Rights Reserved by Team PixoGram</div>
                    </Col>
                </Container>
            </Navbar>
        );
    }
}
 
export default Footer;