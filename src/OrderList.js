import React from 'react';

export default function OrderList({ instructionsArray }) {
  return <ul>
    {
      instructionsArray.map((instruction, i) =>
        <li key={`${instruction}-${i}`}> {instruction} </li>)
    }
  </ul>;
}
