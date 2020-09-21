import * as React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
export interface ContactProps {
    
}
 
export interface ContactState {
    name: string,
    subject: string
    email: string,
    message: string

}
 
class Contact extends React.Component<ContactProps, ContactState> {
    constructor(props: ContactProps) {
        super(props);
        this.state = { 
            name: "",
            subject: "",
            email: "",
            message: ""  
        };
        this.changeName = this.changeName.bind(this);
        this.changeSubject = this.changeSubject.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeMessage = this.changeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeName(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            name: event.target.value
        });
    }

    changeSubject(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            subject: event.target.value
        });
    }

    changeEmail(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            email: event.target.value
        });
    }

    changeMessage(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            message: event.target.value
        });
    }

    onSubmit(event: React.MouseEvent<HTMLElement, MouseEvent>): void {
        event.preventDefault();
        console.log(this.state);
        this.setState({ 
            name: "",
            subject: "",
            email: "",
            message: ""  
        });
    }

    render() { 
        return (
        <>
            <h1>Contact Us</h1>
            <Form>
                <Form.Group controlId="contactFormName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="With whom are we speaking?" 
                        onChange={this.changeName} value={this.state.name}/>
                </Form.Group>
                <Form.Group controlId="contactFormEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control size="lg" type="email" placeholder="Enter email" onChange={this.changeEmail}
                        value={this.state.email}/>
                    <Form.Text className="text-muted">
                        We can send you cat pics, right?
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="contactFormSubject">
                    <Form.Label>Email Subject</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="I would like to give you money $$$" 
                    onChange={this.changeSubject} value={this.state.subject}/>
                </Form.Group>
                <Form.Group controlId="contactFormMessage" >
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} onChange={this.changeMessage} value={this.state.message}/>
                </Form.Group>
                <Button type="submit" className="titlefont-medium primary" onClick={this.onSubmit}>
                    Send
                </Button>
            </Form>
        </>
        );
    }
}

export default Contact;