import React from 'react';
import './style.css'

const UserInput = (props) => {
  const inputStyle = {
    border: '2px solid burlywood'
  }
  return (
    <div className="inputWrapepr">
      <input type="text"
       value={props.value} 
       onChange={props.handleEvent}
       style={inputStyle}
      />
    </div>
  )
}

export default UserInput;