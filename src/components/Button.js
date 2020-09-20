import React from 'react';

const Button = (props) => {
  return (
    <button onClick={props.handleCount}>{props.buttonText || 'Temp Text'}</button>
  )
}

export default Button;