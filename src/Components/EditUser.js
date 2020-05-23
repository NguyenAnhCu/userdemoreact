import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.userEditObject.id,
            name : this.props.userEditObject.name,
            phone : this.props.userEditObject.phone,
            role : this.props.userEditObject.role
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changeEditUserStatus();
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value,
        })
    }

    saveButton = () => {
        let info = {}
        info.id = this.state.id;
        info.name = this.state.name;
        info.phone = this.state.phone;
        info.role = this.state.role;
        // console.log('info la' + info.phone)
        this.props.getUserInfoEdited(info);
        this.props.changeEditUserStatus();
    }
    render() {
        return (
            <div className="col-12">
                <Card className = "card border-primary mt-2 mb-3">
                    <Card.Header>Editer membre</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Nom complet</Form.Label>
                                <Form.Control type="string" placeholder="Entrez le nom" name = "name" defaultValue = {this.props.userEditObject.name} onChange={(event) => this.isChange(event)}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPhone">
                                <Form.Label>Téléphone</Form.Label>
                                <Form.Control type="string" placeholder="Entrez phone" name = "phone" defaultValue = {this.props.userEditObject.phone} onChange={(event) => this.isChange(event)}/>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Choisir un role</Form.Label>
                                <Form.Control as="select" name = "role" defaultValue = {this.props.userEditObject.role} onChange={(event) => this.isChange(event)}>
                                    <option value ={1}>Administrateur</option>
                                    <option value ={2}>Moderateur</option>
                                    <option value ={3}>Utilisateur</option>
                                    <option value ={4}>Client</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId = "submitForm">
                                <Button variant="primary" type="submit" block onClick = {() => this.saveButton()}>
                                    Modifier
                                </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default EditUser;
