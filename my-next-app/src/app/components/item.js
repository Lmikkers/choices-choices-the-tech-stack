// components/item.js
import React from 'react';

const Item = ({ title, content }) => {
  return (
    <article>
      <h2>{title}TEST</h2>
      <p>{content}</p>
    </article>
  );
};

export default Item;