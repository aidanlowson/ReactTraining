//  Packages
import React, { Component } from 'react';
//  Components
import Person from './Person/Person'
//  Style
import './App.css';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Aidan',
        age: 23
      },
      {
        name: 'Person 2',
        age: 33
      },
      {
        name: 'Person 3',
        age: 43
      }
    ]
  }

  handleSwitchName = () => {
    // console.log('Switch Button Clicked');
    this.setState({
      persons: [
        {name: 'Aidan', age: 33 },
        {name: 'Person 2 Updated', age: 33 },
        {name: 'Person 3', age: 434 }
      ] 
    })
    return
  }

  reset = () => {
    this.setState({
          persons: [
      {
        name: 'Aidan',
        age: 23
      },
      {
        name: 'Person 2',
        age: 33
      },
      {
        name: 'Person 3',
        age: 43
      }
    ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>
          React App
        </h1>
        <Person
          age={this.state.persons[1].age}
          name={this.state.persons[1].name}
        />
        <Person
          age={this.state.persons[2].age}
          name={this.state.persons[2].name}
        />
        <Person
          age={this.state.persons[0].age}
          name={this.state.persons[0].name}
          click={this.handleSwitchName}
        >
          Child Element
        </Person>
        <button onClick={this.reset}>Reset Names</button>
      </div>
    );
  }
}

export default App;
