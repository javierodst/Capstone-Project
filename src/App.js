
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './Home/Home.js';
import SignIn from './SignIn/SignIn.js';
import Header from './Header/Header.js';
import SteamPage from './StreamPage/StreamPage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <Header />


      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/signin' render={() => <SignIn />} />
        <Route exact path='/stream' render={() => <SteamPage />} />

      </Switch>

    </div>
  );
}

export default withRouter(App);
