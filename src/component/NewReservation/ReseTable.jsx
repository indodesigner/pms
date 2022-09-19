import React from 'react';
import '../../style.css';
import './NewReservation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

class ReseTable extends React.Component {

    

    render() { 
        return(

            <div className="padcolumn mt-1" >
                <div className="table-responsive table ">

                    <table className="table">
                        <thead className="theadpadding">
                            <tr>
                                <th className="thstyle">ROOM TYPE</th>
                                <th className="thstyle">RATE CODE</th>
                                <th>SINGLE</th>
                                <th>DOUBLE</th>
                                <th>TRIPPLE</th>
                                <th className="thstyle">TOTAL</th>
                                <th className="thstyle">DISCOUNT</th>
                                <th className="thstyle">SUB TOTAL</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        
                <tbody>
                
                    <tr className="">
                        <td>
                            <select className="form-control">
                                <option> DLX</option>
                                <option> 2</option>
                                <option> 3</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-control">
                                <option> RACKRATE</option>
                                <option> 2</option>
                                <option> 3</option>
                            </select>
                        </td>
                        <td>
                        <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <input type="text" className="input-group-text appendsize" value="2" />
                                </div>
                                <input type="text" className="form-control apptexboxsize" placeholder=""/>
                                <div className="input-group-prepend">
                                    <button className="btn btn-danger prependsize" type="button"><i className="bi bi-pencil"></i></button>
                                </div>
                            </div>
                        </td>
                        <td>
                        <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <input type="text" className="input-group-text appendsize" value="2" />
                                </div>
                                <input type="text" className="form-control apptexboxsize" placeholder=""/>
                                <div className="input-group-prepend">
                                    <button className="btn btn-danger prependsize" type="button"><i className="bi bi-pencil"></i></button>
                                </div>
                            </div>
                        </td>
                        <td>
                        <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <input type="text" className="input-group-text appendsize" value="2" />
                                </div>
                                <input type="text" className="form-control apptexboxsize" placeholder=""/>
                                <div className="input-group-prepend">
                                    <button className="btn btn-danger prependsize" type="button"><i className="bi bi-pencil"></i></button>
                                </div>
                            </div>
                        </td>
                        <td>
                            <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" value="" />
                        </td>
                        <td>
                            <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" value="" />
                        </td>
                        <td>
                            <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" value="" />
                        </td>
                        <td>
                            <button className="btn btn-danger btn-xs"><i className="bi bi-trash "></i></button>
                        </td>
                    </tr>
                    <tr className="">
                        <td>
                            <select className="form-control">
                                <option> DLX</option>
                                <option> 2</option>
                                <option> 3</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-control">
                                <option> RACKRATE</option>
                                <option> 2</option>
                                <option> 3</option>
                            </select>
                        </td>
                        <td>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <input type="text" className="input-group-text appendsize" value="2" />
                                </div>
                                <input type="text" className="form-control apptexboxsize" placeholder=""/>
                                <div className="input-group-prepend">
                                    <button className="btn btn-danger prependsize" type="button"><i className="bi bi-pencil"></i></button>
                                </div>
                            </div>
                        </td>
                        <td>
                        <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <input type="text" className="input-group-text appendsize" value="2" />
                                </div>
                                <input type="text" className="form-control apptexboxsize" placeholder=""/>
                                <div className="input-group-prepend">
                                    <button className="btn btn-danger prependsize" type="button"><i className="bi bi-pencil"></i></button>
                                </div>
                            </div>
                        </td>
                        <td>
                        <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <input type="text" className="input-group-text appendsize" value="2" />
                                </div>
                                <input type="text" className="form-control apptexboxsize" placeholder=""/>
                                <div className="input-group-prepend">
                                    <button className="btn btn-danger prependsize" type="button"><i className="bi bi-pencil"></i></button>
                                </div>
                            </div>
                        </td>
                        <td>
                            <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" value="" />
                        </td>
                        <td>
                            <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" value="" />
                        </td>
                        <td>
                            <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" value="" />
                        </td>
                        <td>
                            <button className="btn btn-primary btn-xs"><i className="bi bi-plus" ></i></button>
                        </td>
                    </tr>
                    <tr style={{backgroundColor :  'rgb(241, 238, 238)'}} >
                        <td colSpan="7" align="right">
                            TOTAL
                        </td>
                        <td align="right">
                            5000
                        </td>
                       
                        <td>
                            <button className="btn btn-success btn-xs"><i className="bi bi-download"></i></button>
                        </td>
                    </tr>
                    
                </tbody>
                  
                    </table>

                </div>
            </div>
     
        );
    }
}
 
export default ReseTable;