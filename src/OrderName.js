import React from 'react';

export default function OrderName({ setOrderName }) {
  function handleChange(e) {
    setOrderName(e.target.value);
  }
  return <section className='customer-name'>
      Customer Name:
    <input onChange={handleChange} />
  </section>;
}
