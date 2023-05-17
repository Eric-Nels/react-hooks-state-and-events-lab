import React, { useState } from "react";

function Item({ name, category }) {
  const [item, setItem] = useState("")
  console.log(item)

  return (
    <li className={item}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setItem("in-cart")}>{item === "" ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;

