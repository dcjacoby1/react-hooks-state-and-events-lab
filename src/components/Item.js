import React, { useState } from "react";

function Item({ name, category }) {
  const [cartFull, setCartFull] = useState(false)
  function handleClick() {
    setCartFull(!cartFull)
  }

  return (
    <li className={cartFull? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">
        {cartFull?
        "Remove From Cart" 
        :
         "Add To Cart"}
         </button>
    </li>
  );
}

export default Item;
