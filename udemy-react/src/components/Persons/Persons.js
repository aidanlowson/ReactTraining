//  Packages
import React from 'react';
//  Styles
import styles from './Person.css';

class Persons extends React.Component {
  constructor (props) {
    super (props);
    this.inputElement = React.createRef();
  }

  componentDidMount () {
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }
  

  render () {
    return (
      <div className={styles.Person}>
      
        { 
         this.props.isAuthenticated ? 'Authenticated' : null 
        }
            
        <p onClick={this.props.click}>
        Name: {this.props.name} years {this.props.age} old
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          value={this.props.name}
          onChange={this.props.changed}
        />
      </div>
      )
  }
}

export default Persons;
