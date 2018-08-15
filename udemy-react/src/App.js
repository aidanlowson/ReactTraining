//  Packages
import React, { Component } from 'react';
//  Components
import Person from './Person/Person'
//  Style
import styles from'./App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Aidan',age: 23},
      {name: 'Person 2', age: 33},
      {name: 'Person 3', age: 43}
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

    let persons = null;
    let btnClass = '';

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

      btnClass = styles.Red
    }

    const classes = [];

    if(this.state.persons.length <= 2) {
      classes.push(styles.red);
    }

    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>
          Unit Testing
        </h1>
        <p className={classes.join(' ')}>
          People Cards:
        </p>
        <button
          className={btnClass}
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
