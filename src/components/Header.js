import React, { Component } from 'react';

class Header extends Component {
    render() {
        return ( 
            <nav className="navbar navbar-expand navbar-dark bg-primary">                
                    <div className="navbar-brand">Projects</div>                    
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="./todolist">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./todolist">Todo List</a>
                        </li>
                    </ul>                
            </nav>            
        );
    }
}

export default Header;