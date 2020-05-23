import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import EditUser from "./EditUser";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue : '',
            userObj: {}
        }
    }
    showButton = () => {
        if(this.props.showForm === true){
            return (
                <Button variant="outline-secondary" size="lg" block onClick = {() => this.props.connect()}>
                    Fermer
                </Button>
                )
        } else {
            return (
                <Button variant="outline-info" size="lg" block onClick = {() => this.props.connect()}> {/*moi hoat dong cua onClick nay ko tac dong den state cua Search ma la state cua Component App*/}
                    Ajouter membre
                </Button>
            )
        }
    }

    isShowEditForm = () => {
        if(this.props.editUserStatus === true){
            return (
                <EditUser changeEditUserStatus = {() => this.props.changeEditUserStatus()} userEditObject = {this.props.userEditObject} getUserInfoEdited = {(info) => this.getUserInfoEdited(info)}/>
            )
        }
    }

    isChange = (event) => {
        console.log(event.target.value)
        this.setState({
            tempValue : event.target.value
        })
        this.props.checkConnectProps(this.state.tempValue)
    }

    getUserInfoEdited = (info) => {
        this.setState({
            userObj : info
        })
        this.props.getUserInfoEditedtoApp(info)
        // console.log(info)
    }
    render() {
        return (
            <div>
                {this.isShowEditForm()}
                <div className="col-12">
                    <form className="form-inline">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Entrez le nom cherché" onChange = {(event) => this.isChange(event)} />
                            <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}>Recherche</div>
                        </div>
                    </form>
                </div>
                <div className= "col-12 mt-2">
                    {this.showButton()}
                </div>
                <hr />
            </div>
        );
    }
}

export default Search;
