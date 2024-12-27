import React, { useState } from 'react';

const ShoppingList = () => {
    const [items, setItems] = useState([
        { name: 'Apples', bought: false },
        { name: 'Bananas', bought: false },
        { name: 'Carrots', bought: false },
    ]);

    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        setItems([...items, { name: newItem, bought: false }]);
        setNewItem('');
    };

    const toggleItemBought = (index) => {
        const updatedItems = items.map((item, i) => 
            i === index ? { ...item, bought: !item.bought } : item
        );
        setItems(updatedItems);
    };

    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <input 
                            type="checkbox" 
                            checked={item.bought}
                            onChange={() => toggleItemBought(index)}
                        />
                        {item.name}
                    </li>
                ))}
            </ul>
            <input 
                type="text" 
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add new item"
            />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};

export default ShoppingList;