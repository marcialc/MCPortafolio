import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Content(props) {

    return(
        <Container id="content" fluid={true}>
            <Row className="contact-wrapper">
                <Col md={8}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );

}

export default Content;