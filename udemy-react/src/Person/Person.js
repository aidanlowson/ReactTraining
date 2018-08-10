import React from 'react';

const person = (props) => {
  return (
  <div>
    <p onClick={props.click}>
    Person {props.name} years {props.age} old
    </p>
    <p>{props.children}</p>
  </div>
  )


};

export default person;