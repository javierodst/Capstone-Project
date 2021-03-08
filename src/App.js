
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './Home/Home.js';
import SignIn from './SignIn/SignIn.js';
import SignUp from './SignUp/SignUp.js';
import StreamHeader from './StreamPage/StreamHeader.js';
import SavedFootage from './SavedFootage/SavedFootage.js';
import Dashboard from './Dashboard/Dashboard.js';
import About from './Aboutpage/About.js';
import Contact from './Contactpage/Contact.js';
import Services from './Servicespage/Services.js';
import ForgotPassword from './ForgotPassword/ForgotPassword.js';
import Account from './Account/Account.js';
import CurrentWeek from './CurrentWeek/CurrentWeek.js';
import LastWeek from './LastWeek/LastWeek.js';
import Footage from './Footage/Footage.js';


function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/signin' render={() => <SignIn />} />
        <Route exact path='/stream' render={() => <StreamHeader />} />
        <Route exact path='/footage' render={() => <SavedFootage />} />
        <Route exact path='/signup' render={() => <SignUp />} />
        <Route exact path='/dashboard' render={() => <Dashboard />} />
        <Route exact path='/about' render={() => <About />} />
        <Route exact path='/contact' render={() => <Contact />} />
        <Route exact path='/services' render={() => <Services />} />
        <Route exact path='/forgotpassword' render={() => <ForgotPassword />} />
        <Route exact path='/account' render={() => <Account />} />
        <Route exact path='/currentweek' render={() => <Footage />} />
        <Route exact path='/lastweek' render={() => <LastWeek />} />

      </Switch>

    </div>
  );
}

export default withRouter(App);
//<Route exact path='/dashboard/:id' render={(props) => (<Dashboard id={props.match.params.id} />)} />