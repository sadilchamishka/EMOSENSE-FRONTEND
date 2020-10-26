import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Utterence from './Utterence';

function App() {

  return (
    <div className="App">
      <h1>EMOSENSE</h1>
       <Router>
            <Nav/>
              <Switch>
                <Route path="/utterence" component={Utterence}/>
                <Route path="/conversation"/>
              </Switch>
        </Router>
    </div>
  );
}

export default App;
