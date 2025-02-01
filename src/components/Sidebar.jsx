import React, { useState, useCallback } from 'react'

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems = ["Home", "About", "Contact"] }) {
  let [newMenuItem, setNewMenuItem] = useState("")
  // Using a state hook, maintain the current menu items as an array
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [filter, setFilter] = useState("")

  // Adds a new menu item to the state
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() === "") return; // prevent adding empty items
    setMenuItems([newMenuItem, ...menuItems])
    setNewMenuItem("") // clear the input field after adding
  }, [newMenuItem, menuItems])

  // Filter the menu items based on the filter text (case-insensitive)
  const filteredItems = menuItems.filter(item =>
    new RegExp(filter, "i").test(item)
  )

  return (
    <div>
      {/* Place your header at the top */}
      <h2>Sidebar 1</h2>
      
      {/* Render the list of menu items right after the header */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Inputs for adding new menu items */}
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
        placeholder="New Menu Item"
      />
      <br />
      <button onClick={addMenuItem}>
        Add Item
      </button>
      <br />

      {/* Input for filtering items */}
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />
    </div>
  )
}
