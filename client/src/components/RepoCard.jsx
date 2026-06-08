import { useState } from "react";

function RepoCard({ repo }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="repo-card">
      <h3>{repo.name}</h3>

      <p>{repo.description || "No description available"}</p>

      <p>Language: {repo.language || "N/A"}</p>

      <p>⭐ {repo.stars}</p>

      <p>
        Updated: {new Date(repo.updatedAt).toLocaleDateString()}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Hide Details" : "Show Details"}
      </button>

      {expanded && (
        <div>
          <p>Open Issues: {repo.openIssues}</p>
          <p>Default Branch: {repo.defaultBranch}</p>

          <a
            href={repo.repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open Repository
          </a>
        </div>
      )}
    </div>
  );
}

export default RepoCard;