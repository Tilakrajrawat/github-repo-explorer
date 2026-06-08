import RepoCard from "./RepoCard";

function RepoList({ repos }) {
  return (
    <div className="repo-list">
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