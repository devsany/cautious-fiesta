import React, { useState } from 'react';

const Dropdown = ({ items, onSelect }) => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleSelect = (event) => {
    const value = event.target.value;
    setSelectedItem(value);
    onSelect(value);
  };

  return (
    <div> 
      <label htmlFor="dropdown">Select an item:</label>
      <select id="dropdown" value={selectedItem} onChange={handleSelect}>
        <option value="">--Select--</option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      {selectedItem && <p>Selected: {selectedItem}</p>}
    </div>
  );
};

export default Dropdown;