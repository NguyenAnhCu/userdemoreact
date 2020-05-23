import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid text-center">
                    <div className="container">
                        <h1 className="display-3">Gestion d'utilisateur</h1>
                        <p className="lead">Avec ReactJS</p>
                        <hr className="my-2" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
