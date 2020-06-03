import React, { Component } from "react";
import NavBar from './components/NavBar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false,
       online: false,
       currentVolume: 50,
       quality: "Normal",
    }
  }

  // Login componets calls function login when button on the ogin componenet is fixed
  login = (e) => {
    console.log('clicked the login function, should nagivate to the Dashboard component')
    e.preventDefault();
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    })
  }


  // should change the status of online
  onlineStatusChange = () => {
    console.log("inside onlineStatusChange function")
    this.setState({
      online: !this.state.online
    })
  }

  // should change the volume with the default set to the props.
  volumeChange = (event, updatedVolume) => {
    console.log('inside volumeChange function')
    this.setState({ 
      currentVolume: updatedVolume 
    });
  }

  // this one works
  qualityChange = (event) => {
    console.log('inside qualityChnage function')
    this.setState({ 
      quality: event.target.value 
    });
  }



  render() {
      return this.state.isLoggedIn 
      ? (
        <div>
          <NavBar />
          <Dashboard 
            onlineStatusChange={this.onlineStatusChange}
            volumeChange={this.volumeChange} 
            qualityChange={this.qualityChange} 
            online={this.state.online} 
            currentVolume={this.state.currentVolume} 
            quality={this.state.quality}/>
        </div>
        )
      : 
        <div>
          <NavBar />
          <Login onClick={this.login}/>
        </div>
  }
}

export default App