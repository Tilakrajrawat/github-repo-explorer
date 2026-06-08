function SortDropdown({ sortBy, onSortChange }) {
    return (
      <div className="sort-container">
        <label>Sort By: </label>
  
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="stars">Stars</option>
          <option value="name">Name</option>
          <option value="updated">Last Updated</option>
        </select>
      </div>
    );
  }
  
  export default SortDropdown;