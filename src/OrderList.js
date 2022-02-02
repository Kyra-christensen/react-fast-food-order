import React from 'react';
import Instruction from './Instruction';

export default function OrderList({ instructionsArray }) {
  return <div className='instructions-list'>
    {instructionsArray.map((instruction, i) =>
      <Instruction key={`${instruction}-${i}`} instruction={instruction} />)}
  </div>;
}
