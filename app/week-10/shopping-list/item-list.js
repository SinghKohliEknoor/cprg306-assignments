"use client";
import { useState } from 'react';
import Item from './item';

export default function ItemList({ Items, onItemSelect}) {
  const [sortBy, setSortBy] = useState('name');

  // Sort the items
  const sortedItems = [...Items].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4">
      {/* Sort Buttons */}
      <div className="mb-3 flex justify-between items-center">
        <span className="text-white text-sm font-semibold">Sort by:</span>
        <div>
          <button
            onClick={() => setSortBy('name')}
            className={`px-3 py-1 text-xs font-medium rounded transition duration-200 ${
              sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Name
          </button>
          <button
            onClick={() => setSortBy('category')}
            className={`ml-2 px-3 py-1 text-xs font-medium rounded transition duration-200 ${
              sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Category
          </button>
        </div>
      </div>

      {/* Items List */}
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center bg-gray-900 p-2 rounded-lg mb-2 shadow-sm">
            <div className="flex-1">
              <Item name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
