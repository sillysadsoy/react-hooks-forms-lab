import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedName, setSearchedName] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  };

  function handleSearchChange(event) {
    setSearchedName(event.target.value);
  }

  const itemsToDisplay = items.filter(item => selectedCategory === "All" || item.category === selectedCategory).filter(item => item.name.toUpperCase().includes(searchedName.toUpperCase()));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} 
              onSearchChange={handleSearchChange}
              search={searchedName}
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
