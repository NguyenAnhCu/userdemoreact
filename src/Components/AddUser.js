import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            name : '',
            phone : '',
            role : ''
        }
    }


    isChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        // console.log(name)
        // console.log(value)
        this.setState({
            [name] : value
        })
    //    package to item
    //     let item = {}
    //     item.id = this.state.id;
    //     item.name = this.state.name;
    //     item.phone = this.state.phone;
    //     item.role = this.state.role;
        // console.log(item)
    }

    handleForm = (e) => {
        e.preventDefault();
        this.props.add(this.state.name, this.state.phone, this.state.role);
    }
    testStatus = () => {
        if(this.props.showForm === true){
            return (
                <div className="col-12">
                    <Card className = "card border-primary mt-2">
                        <Card.Header>Ajouter membre</Card.Header>
                        <Card.Body>
                            <Form onSubmit = {this.handleForm}>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Nom complet</Form.Label>
                                    <Form.Control type="string" placeholder="Entrez le nom" name = "name" onChange={(event) => {this.isChange(event)}}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPhone">
                                    <Form.Label>Téléphone</Form.Label>
                                    <Form.Control type="string" placeholder="Entrez phone" onChange={(event) => this.isChange(event)} name = "phone"/>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Choisir un role</Form.Label>
                                    <Form.Control as="select" name = "role" onChange={(event) => this.isChange(event)}>
                                        <option value ={1}>Administrateur</option>
                                        <option value ={2}>Moderateur</option>
                                        <option value ={3}>Utilisateur</option>
                                        <option value ={4}>Client</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId = "submitForm">
                                    <Button variant="primary" type="submit" block>
                                        Ajouter
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            )
        }
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                {this.testStatus()}
            </div>
        );
    }
}
export default AddUser;
