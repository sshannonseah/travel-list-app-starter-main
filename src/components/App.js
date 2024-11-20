// Initial packing items
import React, { useState } from "react";
 
 
function Logo() {
  return <h1>My Travel List</h1>;
}
 
function Form({onAddItem}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }
 
 
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
 
      <select value={quantity} onChange={(e)=> setQuantity(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
 
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type= "submit">Add</button>
    </form>
  );
}
 
function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} />
            </li>
        ))}
      </ul>
    </div>
  );
}
 
function Item({ item }) {
  const { description, quantity, packed } = item;
  return (
    <li style={{ textDecoration: packed ? "line-through" : "none" }}>
      {quantity} x {description}
    </li>
  );
}
 
 
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items in the list. You already packed Y (Z%).</em>
    </footer>
  );
}
 
function App() {
  const [items, setItems] = useState([]);
 
  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }
 
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} />
      <Stats items={items} />
    </div>
  );
}
 
 
 
export default App;
 