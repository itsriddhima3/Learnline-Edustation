import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <h2 className="text-xl font-bold mb-3">Product List</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;