import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import RepoList from "./components/RepoList";
import { searchUser } from "./services/githubApi";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    try {
      setLoading(true);
      setError("");

      const result = await searchUser(username);

      setData(result);
    } catch (err) {
      if (err.response?.status === 404) {
        setError("GitHub user not found");
      } else {
        setError("Something went wrong. Please try again.");
      }

      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub Repo Explorer</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {data && (
        <>
          <UserCard user={data.user} />
          <RepoList repos={data.repos} />
        </>
      )}
    </div>
  );
}

export default App;