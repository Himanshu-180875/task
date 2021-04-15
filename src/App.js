import React, { Component } from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/login-signup/login-signup.component';
// import AppNavbar from './components/appnavbar';
import { Provider } from 'react-redux';
import store from './store';
import AppNavbar from './components/appnavbar.js';
import TaskList from './components/tasklist.js';

import {Container} from 'reactstrap';
import {loadUser} from './actions/authActions';


class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser());

  }

  render() {
    return(
      <Provider store={store}>
        <div className="App">
        <AppNavbar/>
        <Container>
        
        <TaskList/>
        </Container>
        
        </div>
      </Provider>
      
    )


  }
  
}

export default App;
