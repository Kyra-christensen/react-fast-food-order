import React from 'react';

export default function OrderName({ setOrderName }) {
  function handleChange(e) {
    setOrderName(e.target.value);
  }
  return <section>
    <input onChange={handleChange} />
  </section>;
}
