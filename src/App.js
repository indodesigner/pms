import './App.css';
import NewReservation from './component/NewReservation/NewReservation';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigationbar from './component/Common/Navigationbar';
import Footer from './component/Common/Footer';
import Reception from './component/Reception/Reception';
import Reservation from './component/Reservation/Reservation';
import CheckIn from './component/CheckIn/CheckIn.jsx';

function App() {
        return (
    <div className="App">
        <Router>
            <Navigationbar/>
            <Switch>
                <Route exact path='/' component={Reservation}/>
                <Route exact path='/newreservation' component={NewReservation}/>
                <Route exact path="/reservation" component={Reservation}/>
                <Route exact path="/reception" component={Reception}/>
                <Route exact path="/checkIn" component={CheckIn}/>
                <Route exact path="/reception" component={Reception}/>
                <Route exact path="/reservation" component={Reservation}/>
                <Route exact path="/reception" component={Reception}/>
                <Route exact path="/reservation" component={Reservation}/>
                <Route exact path="/reception" component={Reception}/>
            </Switch>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
