import React from 'react';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReseCalendar from './ReseCalendar';



class ReseReservedFor extends React.Component {

    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    state = {
        count: 1,
        cn: 5,
        persons: [
            { id: 1, name: 'person1' },
            { id: 2, name: 'person2' },
            { id: 3, name: 'person3' },
            { id: 4, name: 'person4' },
            { id: 5, name: 'person5' },
        ],
    }



    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
        this.state.cn = this.state.cn + 1;
        this.state.persons.push({ id: this.state.cn, name: 'person' + this.state.cn + '' });
        console.log(this.state.persons);
        console.log(this.state.count);
    }

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
        console.log(this.state.persons);
        console.log(this.state.count);
    }

    display = (e) => {
        let classes = "";
        classes += e <= this.state.count ? "show" : "hide";
        return classes;
    }


    render() {

        return (

            <div className="col-sm-12 ">
                <ul style={{ listStyleType: 'none', marginLeft: 0, marginRight: 0,}}>
                    {this.state.persons.map(person => <li key={person.id} className={this.display(person.id)} >

                        <div>
                            <form >
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h4>RESERVED FOR </h4>
                                    </div>
                                    <div className="col-sm-6" style={this.colstyle}>
                                        <label>
                                            <input type="checkbox"
                                                name="chkbox"
                                            /> Remember me
                                        </label>
                                    </div>

                                </div>


                                <div className="form_content_div">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>Title</label>
                                                <select className="form-control m-bot15"
                                                    name="title" >
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                    <option>Option 3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input type="text" className="form-control "
                                                    name="fname" placeholder=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input type="text" className="form-control "
                                                    placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <textarea className="form-control "
                                                    style={this.addressstyle} placeholder=""></textarea>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>Gender</label>
                                                <select className="form-control m-bot15 "
                                                    name="gender">
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>E-mail</label>
                                                <input type="text" className="form-control "
                                                    placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input type="text" className="form-control phone"
                                                    name="phone" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <select className="form-control m-bot15 "
                                                    name="country">
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                    <option>Option 3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>State</label>
                                                <select className="form-control m-bot15"
                                                    name="state">
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                    <option>Option 3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>Zone</label>
                                                <select className="form-control m-bot15 "
                                                    name="zone">
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                    <option>Option 3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                        <div className="col-sm-12 " >


                                    
                                                <div className="row">
                                           
                                                    <div className="col-sm-5">
                                                        <ReseCalendar></ReseCalendar>
                                                    </div>
                                                    <div className="col-sm-7" style={{marginTop : 5}}>
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label>Location</label>
                                                                    <input type="text" className="form-control" placeholder="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group">
                                                                    <label>Seats</label>
                                                                    <input type="text" className="form-control" placeholder="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group">
                                                                    <label>Remarks</label>
                                                                    <input type="text" className="form-control" placeholder="" />
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>

                                        </div>
                                    </div>

                                 
                                    <div className="row" /*style={{marginBottom : 10,}} */>
                                        <div className="col-sm-6"></div>
                                        <div className="col-sm-6">
                                            <button type="button" className="btn btn-success btnflot w-100" > Submit</button>
                                        </div>
                                    </div>
                                    


                                </div>

                            </form>
                        </div>


                    </li>

                    )}
                </ul>
                <br />
                <div className="row">
                    <div className="col-sm-6"></div>
                    <div className="col-sm-3">
                        <button type="button" onClick={this.handleIncrement} className="btn btn-danger btnflot w-100" > +  Add Person</button>
                    </div>
                    <div className="col-sm-3">
                        <button type="button" onClick={this.handleDecrement} className="btn btn-warning btnflot w-100" > -  Remove Person</button>
                    </div>
                </div>
            </div>
        );
    }

}
export default ReseReservedFor;