import React from 'react';
import './Navigation.css';
import logo from '../../assets/niko.png';
import {Nav ,NavLink ,Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


class Navigationbar extends React.Component {

    state={
        dropdownindex : 0,
    }

    dropdown = () =>{

            if(this.state.dropdownindex === 1) return(
                    <div className="userdropdown shadow bg-white rounded"
                    onMouseUp={() => this.setState({ dropdownindex : 0})}>
                                <div className="row padding">
                                    <div className="col uslink">
                                        <div><i class="bi bi-briefcase-fill iconsize"></i></div>
                                        <p>Profile</p>
                                    </div>
                                    <div className="col uslink">
                                        <div><i class="bi bi-gear-fill iconsize"></i></div>
                                        <p>Settings</p>
                                    </div>
                                    <div className="col uslink">
                                        <div><i class="bi bi-bell iconsize"></i></div>
                                        <p>Notification</p>
                                    </div>
                                </div>
                                <div className="logout text-white">
                                    <div><i class="bi bi-key-fill iconsizelog"></i></div>
                                    <p className="uslinklog">LOGOUT</p>
                                </div>
                         </div>
            );

            if(this.state.dropdownindex === 0) return '';
    }

    render() { 

        return(
            <div  >
                <div className="row navbar " >
                    <div className="col-sm-1">                    
                        <img src={logo} className="logo" />
                    </div>
                    <div className="col-sm-9 marginzero" >
                    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" >
                        <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav>
                                    <NavLink className="nlink" eventKey="1" as={Link} to="/home">Home</NavLink>
                                    <NavLink className="nlink" eventKey="2" as={Link} to="/reservation">Reservation</NavLink>
                                    <NavLink className="nlink" eventKey="3" as={Link} to="/reception">Reception</NavLink>
                                    <NavLink className="nlink" eventKey="4" as={Link} to="/shift">Shift <i class="bi bi-caret-down"></i></NavLink>
                                    <NavLink className="nlink" eventKey="5" as={Link} to="/requests">Requests</NavLink>
                                    <NavLink className="nlink" eventKey="6" as={Link} to="/reports">Reports</NavLink>
                                    <NavLink className="nlink" eventKey="7" as={Link} to="/tools">Tools <i class="bi bi-caret-down"></i></NavLink>
                                    <NavLink className="nlink" eventKey="8" as={Link} to="/setup">Setup <i class="bi bi-caret-down"></i></NavLink>
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>
                    </div>
                    <div className="col-sm-2 user marginzero">
                         <button className="bg-white btn" onClick={() => this.setState({ dropdownindex : 1})} 
                         >Suresh Somanathan <i class="bi bi-caret-down"></i></button>
                         {this.dropdown()}
                    </div>
                </div>
           
            </div>
        );
    }
}
 
export default Navigationbar;