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
    ],
    showPeople: false
  }

  handleNameChange = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[person])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePeople = () => {
    const doesShow = this.state.showPeople;
    this.setState({
      showPeople: !doesShow
    })
  }
  
  handleDeletePerson = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      marginTop: '10px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPeople) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.handleDeletePerson(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.handleNameChange(event, person.id)}
            />
          })}
      </div>
      );
    }

    return (
      <div className="App">
        <h1>
          Unit Testing
        </h1>
        <button
          style={style}
          onClick={this.togglePeople}
        >
          Show People Cards
        </button>
       {persons}
      </div>
    );
  }
}

export default App;
