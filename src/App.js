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
       quality: "med",
    }
  }

  // Login componets calls function login when button on the ogin componenet is fixed
  login = (e) => {
    e.preventDefault();
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    })
  }


  // should change the status of online
  onlineStatusChange = () => {
    this.setState({
      online: !this.state.online
    })
  }

  // 
  volumeChange = (event, value) => {
    this.setState({ 
      currentVolume: event.target.value 
    });
  }

  // this one works
  qualityChange = (event, value ) => {
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