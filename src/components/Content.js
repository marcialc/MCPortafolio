import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/contact.css";

function Content(props) {

    return(
        <Container fluid={true}>
            <Row className="contact-wrapper">
                <Col md={8}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );

}

export default Content;