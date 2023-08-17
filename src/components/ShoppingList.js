import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("")

  const [ itemName, setItemName] = useState("")
  const [ itemCategory, setItemCategory] = useState("Produce")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onItemFormSubmit(newItem) {
    console.log(newItem)
    setItems([...items, newItem])
    setItemName("")
    setItemCategory("Produce")

  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
  
  return (
    <div className="ShoppingList">
      <ItemForm 
      items={items} 
      setItems={setItems} 
      onItemFormSubmit={onItemFormSubmit}
      itemName={itemName}
      itemCategory={itemCategory}
      setItemCategory={setItemCategory}
      setItemName={setItemName}
      />
      <Filter 
        searchText={searchText}
        onSearchChange={setSearchText}
        onCategoryChange={handleCategoryChange} 
        />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
