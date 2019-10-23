import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Content from '../components/Content';
import Axios from 'axios';

class Contact extends React.Component {

    /**
     * SEND GRID INFO
     * 
     * API KEY
     * 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
     * 
     * USERNAME
     * app145000746@heroku.com
     * 
     * PASSWORD
     * b7pemmda6727
     **/ 

    

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target);

        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

    }


    render() {
        return(
            <div id="contact">
                <div className="contact-info">
                  <h3> Marcial Cabrera </h3>
                  <p> marcialandres06@gmail.com </p>
                  <p> (786)-712-3402 </p>
                  <p style={{margin:0, paddingTop:"10px"}}> If you have any questions shoot me an email (: </p>
                </div>
                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>


                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>


                        {this.state.emailSent === true && <p className="d-inline success-msg"> Email Sent </p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg"> Email Not Sent </p>}
                    </Form>
                </Content>
            </div>
        );
    }

}

export default Contact;
