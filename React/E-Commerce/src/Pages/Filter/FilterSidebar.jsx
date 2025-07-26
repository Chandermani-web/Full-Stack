import React from "react";

const FilterSidebar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 w-full sm:w-64 border-t-4 rounded-tr-4xl">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Category</label>
        <input
          type="text"
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded-md"
          placeholder="e.g. electronics"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Brand</label>
        <input
          type="text"
          name="brand"
          value={filters.brand}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded-md"
          placeholder="e.g. apple"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Min Price</label>
        <input
          type="number"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded-md"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Max Price</label>
        <input
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded-md"
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
