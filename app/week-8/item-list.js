"use client";
import { useState } from 'react';
import Item from './item';

export default function ItemList({ Items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  // Sort the items
  const sortedItems = [...Items].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div className="bg-gray-700 rounded-lg shadow-sm p-4">
      <div className="mb-4">
        <span className="mr-2 text-white">Sort by:</span>
        <button
          onClick={() => setSortBy('name')}
          className={`p-2 mr-2 ${
            sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
          } rounded`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`p-2 ${
            sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
          } rounded`}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={onItemSelect}
          />
        ))}
      </ul>
    </div>
  );
}