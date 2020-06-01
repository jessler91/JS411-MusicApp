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


  login = (e) => {
    e.preventDefault();
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    })
  }

  onlineChange = () => {
    this.setState({
      online: !this.state.online
    })
  }

  render() {
      return this.state.isLoggedIn 
      ? (
        <div>
          <NavBar />
          <Dashboard onClick={this.onlineChange}onlineChange={this.onlineChange} volumeChange={this.volumeChange} qualityChange={this.qualityChange} online={this.state.online} volume={this.state.volume} quality={this.state.quality}/>
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