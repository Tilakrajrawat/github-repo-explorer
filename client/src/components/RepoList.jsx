import RepoCard from "./RepoCard";

function RepoList({ repos }) {
  return (
    <div>
      <h2>Repositories</h2>

      {repos.map((repo) => (
        <RepoCard
          key={repo.id}
          repo={repo}
        />
      ))}
    </div>
  );
}

export default RepoList;