import React from "react";

const CourseFilterBar = ({ 
  categories, 
  tags, 
  selectedCategory, 
  selectedTag, 
  searchTerm, 
  onCategoryChange, 
  onTagChange, 
  onSearchChange 
}) => (
  <div className="flex flex-col gap-4 mb-6 w-full max-w-4xl mx-auto px-4" role="search" aria-label="Course filters">
    <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
      <label htmlFor="course-search" className="font-semibold text-sm sm:text-base whitespace-nowrap">
        Search:
      </label>
      <input
        id="course-search"
        type="text"
        placeholder="Search courses..."
        value={searchTerm || ""}
        onChange={(e) => onSearchChange(e.target.value)}
        className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-auto"
        aria-label="Search courses by title, description, or tags"
      />
    </div>
    <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
      <span className="font-semibold text-sm sm:text-base whitespace-nowrap" id="category-label">
        Category:
      </span>
      <div className="flex flex-wrap gap-1" role="group" aria-labelledby="category-label">
        <button
          className={`px-2 py-1 rounded text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors ${
            !selectedCategory ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onCategoryChange(null)}
          aria-pressed={!selectedCategory}
          aria-label="Show all categories"
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-2 py-1 rounded text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors ${
              selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => onCategoryChange(cat)}
            aria-pressed={selectedCategory === cat}
            aria-label={`Filter by ${cat} category`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
    <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
      <span className="font-semibold text-sm sm:text-base whitespace-nowrap" id="tag-label">
        Tag:
      </span>
      <div className="flex flex-wrap gap-1" role="group" aria-labelledby="tag-label">
        <button
          className={`px-2 py-1 rounded text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors ${
            !selectedTag ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onTagChange(null)}
          aria-pressed={!selectedTag}
          aria-label="Show all tags"
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`px-2 py-1 rounded text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors ${
              selectedTag === tag ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => onTagChange(tag)}
            aria-pressed={selectedTag === tag}
            aria-label={`Filter by ${tag} tag`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default CourseFilterBar; 