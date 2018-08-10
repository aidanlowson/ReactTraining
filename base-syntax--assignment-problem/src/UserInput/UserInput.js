import React from 'react';

const UserInput = () => {
  return (
    <div>
      <input type="text" value="InputBox" onChange={console.log('Changed')}/>
    </div>
  )
}

export default UserInput;