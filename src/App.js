
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './Home/Home.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>


      <Switch>
        <Route exact path='/' render={() => <Home />} />
      </Switch>

    </div>
  );
}

export default withRouter(App);
