import React from 'react';

export default function OrderImages({ foodId, sideId, drinkId }) {
  return (
    <div className='order-images'>
      <img src={`food-${foodId}.webp`} />
      <img src={`side-${sideId}.webp`} />
      <img src={`drink-${drinkId}.webp`} />
    </div>
  );
} 
