import React from 'react';
import '../../style.css';
import './NewReservation.css';
import ReseTable from './ReseTable';
import ReseReserveForm from './ReseReserveForm';
import ReseReservedFor from './ReseReservedFor';


class NewReservation extends React.Component {
    render() { 
        return(
            <div className="section">
                <div className="container-fluid">
                    {/* ----- Heading ------ */}
                    <div>
                        <h5 className="header"> NEW RESERVATION </h5>
                    </div>

                     {/* ----- Form   ------ */}
                    <div className="formcontent">
                        <form action="#">
                            <div className="row ">
                                <div className="col-sm ">
                                    <div class="inputfieldpadding">
                                        <label className="text-left" for="reseNumber">Reservation Number :</label>
                                            <input type="number" class="form-control" id="reseNumber" value="100" name="reseNumber" disabled />
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div class="inputfieldpadding">
                                        <label className="text-left" for="arrivaldate">Date :</label>
                                            <input type="date" class="form-control" id="arrivaldate" placeholder="Enter Arrival Date" name="arrivaldate" />
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div class="inputfieldpadding">
                                        <label className="text-left" for="departdate">By :</label>
                                            <input type="date" class="form-control" id="departdate" placeholder="Enter Depart Date" name="departdate" />
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div  class="inputfieldpadding">
                                        <label className="text-left" for="email">Source :</label>
                                        <select class="form-select">
                                            <option>FIT/TA/CORPORATE</option>
                                            <option>FIT/TA/CORPORATE</option>
                                            <option>FIT/TA/CORPORATE</option>
                                            <option>FIT/TA/CORPORATE</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div  class="inputfieldpadding">
                                        <label className="text-left" for="email">TA/Company Name : </label>
                                        <select class="form-select">
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                            <option>Option 4</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div  class="inputfieldpadding">
                                        <label className="text-left" for="email">GST :</label>
                                        <select class="form-select">
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                            <option>Option 4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                     {/* ----- Room Availability ------ */}
                    <div className="row p-3">
                        <div className="col-sm-3 p-3 ">
                                <div className="col-sm-12">
                                    <div class="form-group inputfieldpadding">
                                        <label className="text-left" for="arrival">Arrival :</label>
                                            <input type="datetime-local" class="form-control arrival" name="arrival" id="arrival"/>
                                    </div>
                                    <div class="form-group inputfieldpadding">
                                        <label className="text-left" for="departure">Departure :</label>
                                            <input type="datetime-local" class="form-control departure" name="departure" id="departure"/>
                                    </div>
                                </div>
                                <div className="col-sm-12 p-1">   
                                    <div className="row">
                                        <div className="col-sm-6 inputfieldpadding">
                                            <label className="text-left" for="nights">Nights</label>
                                            <div className="form-group">
                                                <input type="number"  className="form-control"  placeholder="Select Nights count"  min="1" name="nights" id="nights"  />
                                            </div>
                                        </div>
                                         <div className="col-sm-6 inputfieldpadding">
                                            <label className="text-left" for="rooms">Rooms</label>
                                            <div className="form-group">
                                                <input type="number"  className="form-control"  placeholder="Select Rooms count" min="1"  name="rooms" id="rooms"  />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3" >
                                    <button type="button" className="btn btn-success w-25 btnstyle">Go</button>
                                    <button type="button" className="btn btn-info w-25 btnstyle">Edit</button>
                                </div>
                        </div>
                        <div className="col-sm-9">
                        <div className= "roomavailability">
                            <table class="table " style={{marginBottom: 0,}}>
                                <thead className="tabhead">
                                    <tr>
                                        <th>Room Type</th>
                                        <th>Tue <br/> 16-Oct-18</th>
                                        <th>Tue <br/> 16-Oct-18</th>
                                        <th>Tue <br/> 16-Oct-18</th>
                                        <th>Tue <br/> 16-Oct-18</th>
                                        <th>Tue <br/> 16-Oct-18</th>
                                        <th>Tue <br/> 16-Oct-18</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>DLX</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>PREM</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>CLASS</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>ECON</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>STND</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                        
                     {/* ----- Room Rate Type Discount ------ */}
                    <div>
                        <ReseTable></ReseTable>
                    </div>


                     {/* ----- Room Rate Type Discount ------ */}
                     <div className="" >
                        <div className="row">
                            <div className="col-sm-5 padcolumn reseform" >
                                <ReseReserveForm></ReseReserveForm>
                            </div>
                            <div className="col-sm-6 padcolumn reseform" >
                                <ReseReservedFor></ReseReservedFor>
                            </div>
                        </div>
                    </div>
                    
                     <div>
                        
                    </div>

                </div>
            </div>
        );
    }
}
 
export default NewReservation;