import React from 'react';

const InputField = (props) => {
  return ( 
    <div>
    <input
    type="text"
    value={props.currentValue}
    onChange={props.onChange}
    >   
    </input>
    <p>
      <b>Output Text:</b> {props.currentValue}
    </p>
  </div>
  )
}


export default InputField;