import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

 
function App() {
  const [items, setItems] = useState([]);
  const travelDate = "2024-12-10";
 
  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }
 
  function handleUpdateItem(id, updatedItem) { 
    setItems((prevItems) => prevItems.map((item) => 
      item.id === id ? updatedItem : item
    ));
  }


  return (
    <div className="app">
      <Logo travelDate={travelDate} />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} updatedItem= {handleUpdateItem} />
      <Stats items={items} />
    </div>
  );
}
 
 
 
export default App;
 