import React, { useState } from "react";


function Form({onAddItem}) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0]; 
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPhoto(reader.result); 
          };
          reader.readAsDataURL(file); 
        }
      };

    function handleSubmit(e) {
      e.preventDefault();
      const newItem = { id: Date.now(), description, quantity,photo, packed: false };
      onAddItem(newItem);
      setDescription("");
      setQuantity(1);
      setPhoto(null);
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
        <input type="file" accept="image/*" onChange={handlePhotoChange} />
        <button type= "submit">Add</button>
      </form>
    );
  }

  export default Form;