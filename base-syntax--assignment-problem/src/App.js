//  Packages
import React, { Component } from 'react';
//  Components
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
//  Styles
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Super Aidan',
      currentValue: 'Default Name'
    }
  }
  handleNameChange = (event) => {
    this.setState({
    currentValue: event.target.value
  })
}
  render() {


    return (
      <div className="App">
          <div>
            <UserInput
              handleEvent={this.handleNameChange}
              currentValue={this.state.currentValue}
            />
          </div>
          <div>
            <UserOutput
              userName={this.state.currentValue}
              />
            <UserOutput
               userName={this.state.userName}
              />
          </div>
      </div>
    );
  }
}

export default App;
