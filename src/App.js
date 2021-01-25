
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './Home/Home.js';
import SignIn from './SignIn/SignIn.js';
import SignUp from './SignUp/SignUp.js';
import StreamPage from './StreamPage/StreamPage.js';
import SavedFootage from './SavedFootage/SavedFootage.js';
import Dashboard from './Dashboard/Dashboard.js';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/signin' render={() => <SignIn />} />
        <Route exact path='/stream' render={() => <StreamPage />} />
        <Route exact path='/footage' render={() => <SavedFootage />} />
        <Route exact path='/signup' render={() => <SignUp />} />
        <Route exact path='/dashboard' render={() => <Dashboard />} />
        
      </Switch>

    </div>
  );
}

export default withRouter(App);
//<Route exact path='/account/:id' render={(props) => (<Useraccount id={props.match.params.id} />)} />