import React, { useState } from "react";

function Item({ name, category }) {
  
  const [click, setClick] = useState(false)

  function handleAdd(){
    setClick(!click)
  }

  return (
    <li className={click ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>Add to Cart</button>
    </li>
  );
}

export default Item;
