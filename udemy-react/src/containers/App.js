//  Packages
import React, { PureComponent } from 'react';
//  Components
import Persons from '../components/Persons/Person/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//  Style
import styles from'./App.css';

class App extends PureComponent {
  state = {
    persons: [
      {id: 1, name: 'Aidan',age: 23},
      {id: 2, name: 'Artorius', age: 33},
      {id: 3, name: 'Manus', age: 120}
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
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  render() {
    let persons = null;

    if (this.state.showPeople) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.handleDeletePerson}
            changed={this.handleNameChange}
          />
      );
    }

    return (
      <div className={styles.App}>
      <button
        onClick={() => {this.setState({
          showPeople: true
        })}}
      >
        Show People
      </button>
        <Cockpit
          showPerson={this.state.showPeople}
          persons={this.state.persons}
          clicked={this.togglePeople}
        />
        {persons}
      </div>
    );
  }
}

export default App;
