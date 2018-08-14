import React from 'react';

const UserInput = (props) => {
  return (
    <div>
      <input type="text"
       value={props.value} 
       onChange={props.handleEvent}/>
    </div>
  )
}

export default UserInput;