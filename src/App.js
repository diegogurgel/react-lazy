import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Lazy from './Lazy'

class App extends Component {
  state = {
    loadLazyComponent: false,
    hasError: false
  }
  static getDerivedStateFromError(error) {
    this.setState({hasError: true})
  }

  render() {
    const { loadLazyComponent, hasError } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button 
            className="App-link"
            onClick={() => this.setState({loadLazyComponent:true})}>
            Load
          </button>
          {loadLazyComponent && <Lazy/>}
          {hasError && 'Sorry we did something wrong :('}
        </header>
        
        
      </div>
    );
  }
}

export default App;
