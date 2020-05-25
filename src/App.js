import React from 'react';
import {NavBar} from './components/NavBar';
import {Dashboard} from './components/Dashboard';
import './App.css';


class App extends React.Component() {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }


  render() {
    if (this.state.loggedIn) {
      return (        
        <div>
          <NavBar />
          <Dashboard />
        </div>)
    } else {
      return (
          <div>        
          {/* the code for your login screen */}
          {console.log("justin")};
          <p>Justin</p>
        </div>

      )
    }
  }
}

export default App;
