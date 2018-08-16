import React from 'react';
import Person from './../Persons';
import PropTypes from 'prop-types';

class Persons extends React.Component { 
    render () {
      return this.props.persons.map((person, index) => {
        return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        position={index}
        changed={(event) => this.props.changed(event, person.id)}
      />
    });
  }
}

Persons.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
}

export default Persons;