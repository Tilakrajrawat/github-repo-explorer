import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { searchUser } from "./services/githubApi";

function App() {
  const [data, setData] = useState(null);

  const handleSearch = async (username) => {
    try {
      const result = await searchUser(username);
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>GitHub Repo Explorer</h1>

      <SearchBar onSearch={handleSearch} />

      {data && <UserCard user={data.user} />}
    </div>
  );
}

export default App;