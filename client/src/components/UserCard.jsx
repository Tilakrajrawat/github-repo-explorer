function UserCard({ user }) {
    return (
      <div className="user-card">
        <img
          src={user.avatarUrl}
          alt={user.name}
          width="120"
        />
  
        <h2>{user.name}</h2>
  
        <p>{user.bio}</p>
  
        <div className="user-info">
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Repositories: {user.publicRepos}</p>
        </div>
  
        <a
          href={user.profileUrl}
          target="_blank"
          rel="noreferrer"
        >
          View GitHub Profile
        </a>
      </div>
    );
  }
  
  export default UserCard;