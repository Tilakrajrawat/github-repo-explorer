import { useState } from "react";

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const trimmedUsername = username.trim();
  
    if (!trimmedUsername) return;
  
    onSearch(trimmedUsername);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;