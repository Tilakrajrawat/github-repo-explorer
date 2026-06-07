import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { searchUser } from "./services/githubApi";

function App() {
  const [data, setData] = useState(null);

  const handleSearch = async (username) => {
    try {
      const result = await searchUser(username);

      console.log(result);

      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>GitHub Repo Explorer</h1>

      <SearchBar onSearch={handleSearch} />

      {data && (
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;