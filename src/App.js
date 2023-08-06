import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Home/>
      <Login/>
      <Router>
        <Switch>
          <Route path='/Login' component={Login}/> 
          <Route path='/' exact component={Home}/>         
        </Switch>
        </Router>




    </div>
  );
}

export default App;
