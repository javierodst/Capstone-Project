
import './App.css';
import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom';
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
import { ProtectedRoute } from './ProtectedRoutes/protectedroute.js';
import { NavLink } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Switch>
      <Route exact path='/' render={() => <Home />} />
        <Route exact path='/about' render={() => <About />} />
        <Route exact path='/contact' render={() => <Contact />} />
        <Route exact path='/services' render={() => <Services />} />
        <Route exact path='/signup' render={() => <SignUp />} />
        <Route exact path='/signin' render={() => <SignIn />} />
        <Route exact path='/forgotpassword' render={() => <ForgotPassword />} />
        
       {/* //protected routes*/}
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/stream' component={StreamHeader} />
        <Route exact path='/footage' component={SavedFootage} />
        <Route exact path='/account' component={Account} />
        <Route exact path='/currentweek' component={Footage} />
        <Route exact path='/lastweek' component={LastWeek} />

</Switch>

{/*
      <Nav>
        <NavLink exact={true} activeClassName='is-active' to='/'>Home</NavLink>
        <NavLink activeClassName='is-active' to='/about'>About</NavLink>
      </Nav>

      <Match pattern='/' exactly component={Home} />
      <Match pattern='/about' exactly component={About} />
    </div>
    </BrowserRouter>*/}
       </div>
  );
}

export default withRouter(App);
//<Route exact path='/dashboard/:id' render={(props) => (<Dashboard id={props.match.params.id} />)} />