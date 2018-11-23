import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './components/body';
import AppSidebar from './components/appsidebar'

class App extends Component {
  render() {
    return (
      <div className='fp-wrapper'>
          <AppSidebar />
            <div >
              <Body />
          </div>
      </div>
    );
  }
}

export default App;
