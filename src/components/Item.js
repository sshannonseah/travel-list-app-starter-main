import React from "react";

function Item({ item , onDelete , onUpdate}) {
    const { description, quantity, packed } = item;
    return (
      <li style={{ textDecoration: packed ? "line-through" : "none" }}>
        {quantity} x {description}
        <button onClick={() => onDelete(item.id)}>X</button>
        <input type="checkbox" checked={packed} onChange={(e) => onUpdate(item.id, { ...item, packed: e.target.checked })} />
      </li>
    );
  }
 
  export default Item;