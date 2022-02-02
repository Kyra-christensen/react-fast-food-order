import React from 'react';

export default function DrinkDropdown({ setDrinkId }) {
  function handleChange(e) {
    setDrinkId(e.target.value);
  }

  return <select className='drink-dropdown' onChange={handleChange}>
    <option value="1">Soda</option>
    <option value="2">Lemonade</option>
    <option value="3">Smoothie</option>
  </select>;
}
