import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [category, setCategory] = useState('Produce');
  const [input, setInput] = useState('')

  function toggleCategory(event) {
    setCategory(event.target.value)
  };

  function handleInput(event) {
    setInput(event.target.value)
  }
  
  function handleSubmit() {  
    onItemFormSubmit ({
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: input,
    category: category,
  });}

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleInput}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={event => toggleCategory(event)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
