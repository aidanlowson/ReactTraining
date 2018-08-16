//  Packages
import React from 'react';
//  Styles
import styles from './Person.css';

class Persons extends React.Component {

  componentDidMount () {
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }
  

  render () {
    return (
      <div className={styles.Person}>
        <p onClick={this.props.click}>
        Name: {this.props.name} years {this.props.age} old
        </p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => { this.inputElement = inp }}
          type="text"
          value={this.props.name}
          onChange={this.props.changed}
        />
      </div>
      )
  }
}

export default Persons;
