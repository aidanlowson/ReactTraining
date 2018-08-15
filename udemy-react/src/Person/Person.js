//  Packages
import React from 'react';
//  Styles
import './Person.css';

const person = (props) => {
  return (
  <div className={"Person"}>
    <p onClick={props.click}>
    Name: {props.name} years {props.age} old
    </p>
    <p>{props.children}</p>
    <input type="text" value={props.name} onChange={props.changed} />
  </div>
  )


};

export default (person);