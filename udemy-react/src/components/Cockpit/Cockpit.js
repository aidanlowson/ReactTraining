import React from 'react';
import style from './Cockpit.css';

const cockpit = (props) => {

  let btnClass = '';

  if (props.showPerson) {
    btnClass = style.Red
  }

  const classes = [];

  if(props.persons.length <= 2) {
    classes.push(style.red);
  }

  if (props.persons.length <= 1) {
    classes.push(style.bold);
  }

  return (
  <div className={style.Cockpit}>
    <h1>
      Unit Testing tet
    </h1>
    <p className={classes.join(' ')}>
      People Cards:
    </p>
    <button
      className={btnClass}
      onClick={props.clicked}
    >
      Show People Cards
    </button>
    <button onClick={props.login}>Log In</button>
  </div>
  );
}

export default cockpit;