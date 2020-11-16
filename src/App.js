
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './Home/Home.js';
import SignIn from './SignIn/SignIn.js';
import AccountHeader from './AccountHeader/AccountHeader.js';
import StreamPage from './StreamPage/StreamPage.js';
import SavedFootage from './SavedFootage/SavedFootage.js';
import AccountHome from './AccountHome/AccountHome.js';


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <AccountHeader />


      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/signin' render={() => <SignIn />} />
        <Route exact path='/stream' render={() => <StreamPage />} />
        <Route exact path='/footage' render={() => <SavedFootage />} />
        <Route exact path='/account' render={() => <AccountHome />} />
      </Switch>

    </div>
  );
}

export default withRouter(App);
