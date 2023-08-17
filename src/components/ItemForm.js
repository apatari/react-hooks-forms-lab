import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ items, setItems, itemName, itemCategory, onItemFormSubmit, setItemName, setItemCategory }) {

  function handleSubmit(e) {
    e.preventDefault()
    const newItem = {
      name: itemName, category: itemCategory, id: uuid()
    }
    
    onItemFormSubmit(newItem)
  }

  function handleNameChange(e) {
    setItemName(e.target.value)
  }

  function handleCategoryChange(e) {
    setItemCategory(e.target.value)
  }
  
  

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleCategoryChange}>
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
