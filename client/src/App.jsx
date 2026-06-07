import { useMemo, useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import RepoList from "./components/RepoList";
import { searchUser } from "./services/githubApi";
import SortDropdown from "./components/SortDropdown";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("stars");

  const sortedRepos = useMemo(() => {
    if (!data?.repos) return [];
  
    const repos = [...data.repos];
  
    switch (sortBy) {
      case "name":
        return repos.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
  
      case "updated":
        return repos.sort(
          (a, b) =>
            new Date(b.updatedAt) -
            new Date(a.updatedAt)
        );
  
      case "stars":
      default:
        return repos.sort(
          (a, b) => b.stars - a.stars
        );
    }
  }, [data, sortBy]);

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
          <>
  <SortDropdown
    sortBy={sortBy}
    onSortChange={setSortBy}
  />

  <RepoList repos={sortedRepos} />
</>
        </>
      )}
    </div>
  );
}

export default App;