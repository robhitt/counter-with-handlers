import React from 'react';
import Button from './Button';

const Count = ({ increaseCount, decreaseCount }) => {
  return (
    <div>
      <Button
        handleCount={increaseCount}
        buttonText='Increase'
      />
      <Button
        handleCount={decreaseCount}
        buttonText='Decrease'
      />
    </div>
  )
}

export default Count;