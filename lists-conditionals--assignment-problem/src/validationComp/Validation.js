import React from 'react';

const Validation = (props) => {

  let validationMessage = 'String is long enough';

  if (props.textLength <= 5) {
    validationMessage = 'String too short';
  }


  return(
  <div className="validation wrapper">
    <div>
      <p>
        {validationMessage}
      </p>
    </div>
    <div>
      Text Length = {props.textLength}
    </div>
  </div>
  )
}

export default Validation;