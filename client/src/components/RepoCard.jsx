function RepoCard({ repo }) {
    return (
      <div className="repo-card">
        <h3>{repo.name}</h3>
  
        <p>{repo.description || "No description provided"}</p>
  
        <p>Language: {repo.language || "N/A"}</p>
  
        <p>⭐ {repo.stars}</p>
  
        <p>
          Updated:{" "}
          {new Date(repo.updatedAt).toLocaleDateString()}
        </p>
      </div>
    );
  }
  
  export default RepoCard;