import React, {Component} from 'react';

class TableDataRow extends Component {

    renderRole = () => {
        switch (this.props.role) {
            case 1 : return "Administrateur";
            case 2 : return "Moderateur";
            case 3 : return "Utilisateur";
            case 4 : return "Client";
            default : return "Client";
        }
    }
    editClick = () => {
        this.props.editFuncClick();
        this.props.changeEditUserStatus();
    }
    deleteClick = (idUser) => {
       this.props.deleteButtonClick(idUser)
    }
    render() {
        return (
            <tr>
                <td>{this.props.number +1 }</td>
                <td>{this.props.username}</td>
                <td>{this.props.data.phone}</td>
                <td>{this.renderRole()}</td>
                <td>
                    <div className="btn btn-group">
                        <div className="btn btn-warning"  onClick={() => this.editClick()}><i className="fa fa-edit"/> Edit</div>
                        <div className="btn btn-danger" onClick = {(idUser) => this.deleteClick(this.props.data.id)}><i className="fa fa-edit" /> Delete</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;
