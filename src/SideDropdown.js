import React from 'react';

export default function SideDropdown({ setSideId }) {
  function handleChange(e) {
    setSideId(e.target.value);
  }
  return <select onChange={handleChange}>
    <option value="1">Fries</option>
    <option value="2">Fried Rice</option>
    <option value="3">Potato Chips</option>
  </select>;
}
