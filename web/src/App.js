import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import './animate.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header animated fadeInDown">
          <img src={logo} className="App-logo animated infinite pulse" alt="logo"/>
          <h1 className="App-title">Manage your environments like a boss.</h1>
        </header>
        <p className="App-intro animated fadeInUp">
          Content
        </p>
      </div>
    );
  }
}

export default App;
