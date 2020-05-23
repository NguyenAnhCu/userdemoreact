import React, {Component} from 'react';
import TableDataRow from "./TableDataRow";

class TableData extends Component {

    mapDataUser = () => this.props.dataUserProps.map((value,key) => { // value chinh la user, va cac value la cac user trong vong lap map
        return (
            <TableDataRow key ={key}
                          data = {value}
                          number = {key}
                          username = {value.name}
                          role = {value.role}
                          editFuncClick = {(user) => this.props.editFunc(value)} // Boi vi moi 1 value chinh la 1 user
                          changeEditUserStatus = {() => this.props.changeEditUserStatus()}
                          deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}/>
        )
    })

    deleteButtonClick = (idUser) => {
        // console.log(idUser)
        this.props.deleteUser(idUser)
    }

    render() {
        // console.log(this.props.dataUserProps)
        if (this.props.showForm === true){
            return (
                <div className="col-9">
                    <table className="table table-striped table-hover table-bordered">
                        <thead className="thead-inverse">
                        <tr>
                            <th>Nombre</th>
                            <th>Nom complet</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.mapDataUser()}
                        </tbody>
                    </table>
                    {/* Het col-9 */}
                </div>
            )
        } else {
            return (
                <div className="col-12">
                    <table className="table table-striped table-hover table-bordered">
                        <thead className="thead-inverse">
                        <tr>
                            <th>Nombre</th>
                            <th>Nom complet</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.mapDataUser()}
                        </tbody>
                    </table>
                    {/* Het col-9 */}
                </div>
            );
        }
    }
}

export default TableData;
