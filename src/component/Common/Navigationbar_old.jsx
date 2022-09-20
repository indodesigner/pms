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
                                <div className="logout text-white d-flex justify-content-center uslinklog">
                                    <div className="d-flex flex-row pt-3"><i className="bi bi-key-fill iconsizelog me-2"></i> <p>LOGOUT</p></div>
                                    
                                </div>
                         </div>
            );

            if(this.state.dropdownindex === 0) return '';
    }

    render() { 

        return(
            <div className="container" >
                <div className="row navbar" >                   
                    <Navbar collapseOnSelect expand="md" bg="" variant="light" className='p-2 d-flex '>
                    <img src={logo} className="logo" />
                        <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
                            <Navbar.Collapse id="navbarScroll"> 
                                <Nav className='gap-1 ms-3'>
                                    <NavLink className="nlink" eventKey="1" as={Link} to="/home">Home</NavLink>
                                    <NavLink className="nlink" eventKey="2" as={Link} to="/reservation">Reservation</NavLink>
                                    <NavLink className="nlink" eventKey="3" as={Link} to="/reception">Reception</NavLink>
                                    <NavLink className="nlink" eventKey="4" as={Link} to="/shift">Shift <i class="bi bi-chevron-down"></i></NavLink>
                                    <NavLink className="nlink" eventKey="5" as={Link} to="/requests">Requests</NavLink>
                                    <NavLink className="nlink" eventKey="6" as={Link} to="/reports">Reports</NavLink>
                                    <NavLink className="nlink" eventKey="7" as={Link} to="/tools">Tools <i class="bi bi-chevron-down"></i></NavLink>
                                    <NavLink className="nlink" eventKey="8" as={Link} to="/setup">Setup <i class="bi bi-chevron-down"></i></NavLink>
                                </Nav>
                              
                            </Navbar.Collapse>
                            <button className="profile-btn bg-white btn" onClick={() => this.setState({ dropdownindex : 1})}>Suresh Somanathan
                                <i class="bi bi-caret-down-fill"></i></button>
                                 {this.dropdown()}
                    </Navbar>
                  
                    </div>
                </div>
           
        );
    }
}
 
export default Navigationbar;