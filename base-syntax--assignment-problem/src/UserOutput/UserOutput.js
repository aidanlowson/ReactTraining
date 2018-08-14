import React from 'react';
import './style.css';

const UserOutput = (props) => {
  return (
    <div className="userOutput">
      <p>User: {props.userName}</p>
      <p>Lorem ipsum dolor sit amet, est platea, interdum quam placerat, diam tellus posuere.</p>
    </div>
  )
}

export default UserOutput;