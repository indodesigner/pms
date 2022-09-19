import React from 'react';
import '../../style.css';

class ReseReserveForm extends React.Component {

    render() { 
        return(
                <div>
                    <ul>
                    <h4> RESERVED BY </h4>

                    <div className="form_content_div">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>Title</label>
                                    <select className="form-control m-bot15">
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea className="form-control" style={{ height: 60,}} placeholder=""></textarea>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>Gender</label>
                                    <select className="form-control m-bot15">
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
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>Country</label>
                                    <select className="form-control m-bot15">
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>State</label>
                                    <select className="form-control m-bot15">
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>Zone</label>
                                    <select className="form-control m-bot15">
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                            </div>
                             <div className="row pt-3" >
                                        <div className="col-sm-6"></div>
                                        <div className="col-sm-6">
                                             <button type="button" className="btn btn-success btnflot w-100" > Submit</button>
                                         </div>
                            </div>

                        
                    </div>
                    </ul>

                </div>   
                
        );
    }
}
 
export default ReseReserveForm;