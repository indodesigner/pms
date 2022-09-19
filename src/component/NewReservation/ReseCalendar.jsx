import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../style.css';

 class ReseCalendar extends React.Component {
   
    constructor(props){
        super(props);
        this.timepickStart = this.timepickStart.bind(this);
        this.timepickEnd = this.timepickEnd.bind(this);
    }


    state={
        today : '',
        startdate : '',
        enddate : '',
        reserved :  '',
        starttime : 'false',
        hours : [{id :0 , value : '00'},
                {id :1 , value : '01'},
                {id :2 , value : '02'},
                {id :3 , value : '03'},
                {id :4 , value : '04'},
                {id :5 , value : '05'},
                {id :6 , value : '06'},
                {id :7 , value : '07'},
                {id :8 , value : '08'},
                {id :9 , value : '09'},
                {id :10 , value : '10'},
                {id :11 , value : '11'},
                {id :12 , value : '12'},
                {id :13 , value : '13'},
                {id :14 , value : '14'},
                {id :15 , value : '15'},
                {id :16 , value : '16'},
                {id :17 , value : '17'},
                {id :18 , value : '18'},
                {id :19 , value : '19'},
                {id :20 , value : '20'},
                {id :21 , value : '21'},
                {id :22 , value : '22'},
                {id :23 , value : '23'},
                {id :24 , value : ''}],
        minutes : [{id : 0, value : '00'},
                  {id : 5, value : '05'},
                  {id : 10, value : '10'},
                  {id : 15, value : '15'},
                  {id : 20, value : '20'},
                  {id : 25, value : '25'},
                  {id : 30, value : '30'},
                  {id : 35, value : '35'},
                  {id : 40, value : '40'},
                  {id : 45, value : '45'},
                  {id : 50, value : '50'},
                  {id : 55, value : '55'}],
        timevalueEnd : 0 ,
        timevaluestart : 0,
        hourselectstart : '',
        minuteselectstart : '',
        ampmselectstart : '',
        hourselectend : '',
        minuteselectend : '',
        ampmselectend : '',

        starttimevalue : '12:00',
        endtimevalue : '12:00',

        startdatecalendar : 'none',
        enddatecalendar : 'none',
    }

    format = (date) => {

        
        var month = `${date.getMonth() + 1}`;
        var day =  `${date.getDate()}`;
        var year = `${date.getFullYear()}`;

        if (month.length < 2) 
        month = '0' + month;

        if (day.length < 2) 
        day = '0' + day;

        let dateMDY = year+'-'+month+'-'+day ;
    

        return dateMDY;
    }

    today = () => {

        let date = new Date();
        
        var month = `${date.getMonth() + 1}`;
        var day =  `${date.getDate()}`;
        var year = `${date.getFullYear()}`;

        if (month.length < 2) 
        month = '0' + month;

        if (day.length < 2) 
        day = '0' + day;

        let dateMDY = year+'-'+month+'-'+day ;
        if(this.state.today === ''){
            this.setState({today : dateMDY});
            this.setState({startdate : dateMDY});   
        }
        return this.state.today;
    }

    enddate = (date) => {
        let dt = date[date.length-1];
        let formatdate = this.format(dt);
        this.setState({enddate : formatdate });
        this.inputElement1.focus(); 
        console.log(this.state.enddate);
        if(this.state.hourselectend !== '' && this.state.minuteselectend !== ''  ){
            this.setState({hourselectend : ''});
            this.setState({minuteselectend : ''});
        } 
    }

    handleChange = (date) =>{
       
        let dt = date[date.length-1];
        let formatdate = this.format(dt);
        this.setState({startdate : formatdate });
        this.setState({enddate : formatdate });
        this.inputElement.focus(); 
      /*  this.inputElement.click(); */
        console.log(this.state.startdate);
        if(this.state.hourselectstart !== '' && this.state.minuteselectstart !== '' ){
            this.setState({hourselectstart : ''});
            this.setState({minuteselectstart : ''});
        } 
    }

    timepickfocusstart = () => {
        this.setState({ timevaluestart : 1});
    }

    timepickfocusend = () => {
        this.setState({ timevalueEnd : 1});
    }

    datepickfocusstart = () => {
        this.setState({ startdatecalendar : 'block'});
    }

    datepickfocusend = () => {
        this.setState({ enddatecalendar : 'block'});
    }

    onLooseFocus = () => {
        this.setState({ startdatecalendar : 'none'});
        this.setState({ enddatecalendar : 'none'});
    }


    timepickEnd = () => {
     /*   console.log("End "+this.state.hourselectend); */
        if(this.state.timevalueEnd === 0) return '';
        if(this.state.hourselectend !== '' && this.state.minuteselectend !== ''  && this.state.timevalueEnd === 1){
            let endtime = this.state.hourselectend + ' : ' + this.state.minuteselectend + ' : 00';
            this.setState({endtimevalue : endtime});
            this.setState({timevalueEnd : 0});
            this.setState({ enddatecalendar : 'none'});
            return '';    
        } 
        return(
            <div style={{position : 'relative'}}>
            <div className="timepick">
                <div className="row">
                <h3>{this.state.hourselectend + ':' + this.state.minuteselectend  + this.state.ampmselectend }</h3>
                    <div className="col-4">
                        <h6> Hours </h6>
                        <ul  style={{listStyleType : 'none', paddingLeft: 0}}>
                            {this.state.hours.map(hour => <li key={hour.id}  className="timecol " onClick={() => this.setState({hourselectend : hour.value})} title="Choose Hour">
                            {hour.value } </li>
                            )}
                        </ul>
                        
                    </div> 
                    <div className="col-4">
                        <h6> Minutes </h6>
                        <ul  style={{listStyleType : 'none', paddingLeft: 0}}>
                                {this.state.minutes.map(minute => <li key={minute.id}  className="timecol " onClick={() => this.setState({minuteselectend : minute.value})} title="Choose Minute">
                                {minute.value } </li>
                                )}
                            </ul>
                           
                    </div> 
                      
                </div>
            </div>
            </div>
        );
    }

    timepickStart= () => {
    /*    console.log("Start"+this.state.hourselectstart); */
        if(this.state.timevaluestart === 0) return '';
        if(this.state.hourselectstart !== '' && this.state.minuteselectstart !== ''  
         && this.state.timevaluestart === 1){
            let starttime = this.state.hourselectstart + ' : ' + this.state.minuteselectstart +  ' : 00';
            this.setState({starttimevalue : starttime});
            this.setState({timevaluestart : 0});
            this.setState({ startdatecalendar : 'none'});
            return '';    
        } 
        return(
            <div style={{position : 'relative'}}>
            <div className="timepick">
                <div className="row">
                <h3>{this.state.hourselectstart + ':' + this.state.minuteselectstart  + this.state.ampmselectstart }</h3>
                    <div className="col-4">
                        <h6> Hours </h6>
                        <ul  style={{listStyleType : 'none', paddingLeft: 0}} >
                            {this.state.hours.map(hour => <li key={hour.id}  className="timecol " onClick={() => this.setState({hourselectstart : hour.value}) } title="Choose Hour">
                            {hour.value } </li>
                            )}
                        </ul>
                        
                    </div> 
                    <div className="col-4">
                        <h6> Minutes </h6>
                        <ul  style={{listStyleType : 'none', paddingLeft: 0}} >
                                {this.state.minutes.map(minute => <li key={minute.id}  className="timecol " onClick={() => this.setState({minuteselectstart : minute.value})}  title="Choose Minute">
                                {minute.value } </li>
                                )}
                            </ul>
                           
                    </div> 
                  
                </div>
            </div>
            </div>
        );
    }
    
     render() { 
        
      /*  const [value, onChange] = useState(new Date()); */
      /*  const dataNotYetFetched = useState(); */
        
        // disabled some days until I fetched the data...
        var disabledDates = [
            new Date(2022, 8, 12),
            new Date(2022, 8, 20),
        ];
        //console.log(disabledDates);
        var modifiers = null;
        if(this.props.modifiers != null) {
            modifiers = this.props.modifiers;
            console.log(modifiers);
            disabledDates = modifiers.disabled;
        }

        return (
            <div >
                <div className="col-sm-12 col-12"  >
            <div className="form-group ">
                <label >
                    <h6>Arrival Date:</h6>
                </label>
            <div className="input-group row "  title='Double Click To Select Date' style={{position: 'relative', margin: 'auto' }}>
                                <input type="text" className="form-control startdate" placeholder="Select Start Date" name="startdate" id="startdate" 
                                 value={this.state.startdate} onClick={this.datepickfocusstart} />
                                <input type="text"  className="form-control starttime" placeholder="Select Start Time" name="starttime" id="starttime"
                                 value={this.state.starttimevalue} ref={input => this.inputElement = input} onFocus={this.timepickfocusstart}/>
                                 
            <div className="calendarFadeIn" style={{display: this.state.startdatecalendar , backgroundColor : 'white' }} >
            {this.timepickStart()} 
            <Calendar
                // Make calendar not viewable for previous months
                minDate={new Date()}  
                // Whether to show two months 
                showDoubleView = {false}
        /*      ActiveStartDate = {new Date()}   */
                returnValue={"range"}
                // settings for the calendar
                onChange={this.handleChange} 
                defaultValue={this.state.startdate}  
                selectRange={true} 
                locale="en-US"
                autofocus={false}
                // disabled dates. Got data from channel manager
                tileDisabled={({date, view}) =>
                (view === 'month') && // Block day tiles only
                disabledDates.some(disabledDate =>
                date.getFullYear() === disabledDate.getFullYear() &&
                date.getMonth() === disabledDate.getMonth() &&
                date.getDate() === disabledDate.getDate()
                )} 
            />
             <button className="btn btn-danger" style={{zIndex : 105}} onClick={this.onLooseFocus}>Close &times;</button>
            </div>
             <br/>
           
            </div>
            </div>
        </div>
        <div className="col-sm-12 col-12">
            <div className="form-group">
                <label >
                    <h6>Depart Date:</h6>
                </label>
                <div className="input-group mb-3 row " title='Double Click To Select Date' style={{position: 'relative', margin: 'auto' }}>
                    <input type="text" className="form-control enddate"  placeholder="Select End Date" name="enddate" id="enddate"
                     value={this.state.enddate} onClick={this.datepickfocusend} />
                    <input type="text" className="form-control endtime"  placeholder="Select End Time" name="endtime" id="endtime" 
                    value={this.state.endtimevalue} ref={input => this.inputElement1 = input}  onFocus={this.timepickfocusend} />
                    
                <div className="calendarFadeIn" style={{display: this.state.enddatecalendar}}>
                {this.timepickEnd()}  
                <Calendar
                // Make calendar not viewable for previous months
                minDate={new Date(this.state.startdate)} 
                // Whether to show two months 
                showDoubleView = {false}
            /*    ActiveStartDate = {new Date(this.state.startdate)}  */
                returnValue={"range"}
                // settings for the calendar
                onChange={this.enddate} 
                defaultValue={this.state.enddate}  
                selectRange={true} 
                locale="en-US"
                autofocus={false}
                // disabled dates. Got data from channel manager
                tileDisabled={({date, view}) =>
                (view === 'month') && // Block day tiles only
                disabledDates.some(disabledDate =>
                date.getFullYear() === disabledDate.getFullYear() &&
                date.getMonth() === disabledDate.getMonth() &&
                date.getDate() === disabledDate.getDate()
                )}
                />
                <button className="btn btn-danger" style={{zIndex : 105}} onClick={this.onLooseFocus}>Close &times;</button>
                </div>

                </div>
            </div>
         </div>
            </div>
        );
     }
 }
  
 export default ReseCalendar;
