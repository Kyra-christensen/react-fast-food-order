import React from 'react';

export default function FoodDropdown({ setFoodId }) {
  function handleChange(e) {
    setFoodId(e.target.value);
  }
  return <section onChange={handleChange}>
    <option value="1">Pizza</option>
    <option value="2">Pho</option>
    <option value="3">Ribs</option>
  </section>;
}
