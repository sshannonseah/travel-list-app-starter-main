import React from "react";

function Item({ item , onDelete , onUpdate}) {
    const { description, quantity, packed, photo } = item;
    return (
      <li style={{ textDecoration: packed ? "line-through" : "none" }}>
        {quantity} x {description}
        <div>


      {photo && (
        <div>
          <img src={photo} alt="Item" style={{ width: '100px', height: 'auto' }} />
        </div>
      )}
        </div>
        <button onClick={() => onDelete(item.id)}>X</button>
        <input type="checkbox" checked={packed} onChange={(e) => onUpdate(item.id, { ...item, packed: e.target.checked })} />
      </li>
    );
  }
 
  export default Item;