import React, {Component} from 'react';
import '../App.css';
import Header from "./Header";
import Search from "./Search";
import TableData from "./TableData";
import AddUser from "./AddUser";
import DataUser from "./Data.json"
import { v1 as uuidv1 } from 'uuid';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm : false,
            dataUser : [],
            searchText: '',
            editUserStatus : false,
            userEditObject: {}
        }
    }

    componentWillMount() {
    //    kiem tra xem co localStorage chua, chua co thi tao moi, co roi thi cap nhat lai thoi
        if(localStorage.getItem('userData') === null){
            localStorage.setItem('userData',JSON.stringify(DataUser));
        }
        else {
            let temp = JSON.parse(localStorage.getItem('userData'))
            this.setState({
                dataUser : temp
            });
        }
    }

    changeStatus = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    getTextSearch = (dl) => {
        this.setState({
            searchText : dl
        })
        // console.log('Du lieu App.js nhan la: ' + this.state.searchText)
    }

    getNewUserData = (name, phone,role) => {
        let item = {}
        item.id = uuidv1();
        item.name = name
        item.phone = phone
        item.role = role
        let items = this.state.dataUser
        items.push(item)
        this.setState({
            dataUser : items
        });
        // console.log('ket noi OK')
        // console.log(this.state.dataUser)
        localStorage.setItem('userData',JSON.stringify(items))
    }

    changeEditUserStatus = () => {
        this.setState({
            editUserStatus : !this.state.editUserStatus
        });
    }
    editUser = (user) => {
        // console.log('Daketnoi');
        // console.log(user)
        this.setState({
            userEditObject : user
        })
    }

    getUserInfoEditedtoApp = (info) => {
        this.state.dataUser.forEach((value,key) => {
            if(value.id === info.id){
                value.name = info.name;
                value.phone = info.phone;
                value.role = info.role;
            }
        })
        localStorage.setItem('userData',JSON.stringify(this.state.dataUser))
    }

    deleteUser = (idUser) => {
        let tempData = this.state.dataUser.filter(item => item.id !== idUser)
        this.setState({
            dataUser : tempData
        })
    //    day vao du lieu ( neu co Backend la cap nhat du lieu, con day la day vao LocalStorage
        localStorage.setItem('userData', JSON.stringify(tempData)) // Vi tempData la du lieu dang mang chu ko phai dang chuoi
    }

    render() {
       // localStorage.setItem('DataUser',JSON.stringify(DataUser))
        let searchResult = []
        this.state.dataUser.forEach((item) => {
           if(item.name.indexOf(this.state.searchText) !== -1){ // khac voi -1 nghia la co ton tai tu khoa dc tim kiem boi Searchtext trong item.name
            searchResult.push(item) // khi ket thuc ham forEach, bang searchResult se luu toan bo ket qua item ma ta tim thay
           }
        })
        // console.log(searchResult)
        return (
            <div>
                <Header />
                <div className="searchForm">
                    <div className="container">
                        <div className="row">
                            <Search connect = {() => this.changeStatus()}
                                    showForm = {this.state.showForm}
                                    checkConnectProps = {(dl) => this.getTextSearch(dl)}
                                    editUserStatus = {this.state.editUserStatus}
                                    changeEditUserStatus = {() => this.changeEditUserStatus()}
                                    userEditObject = {this.state.userEditObject}
                                    getUserInfoEditedtoApp = {(info) => this.getUserInfoEditedtoApp(info)}/>
                        </div>
                        <div className="row">
                                <TableData dataUserProps = {searchResult}
                                           showForm = {this.state.showForm}
                                           editFunc = {(user) => this.editUser(user)}
                                           changeEditUserStatus = {() => this.changeEditUserStatus()}
                                            deleteUser = {(idUser) => this.deleteUser(idUser)}/>
                                <AddUser showForm = {this.state.showForm} add = {(name,phone,role) => this.getNewUserData(name,phone,role)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
