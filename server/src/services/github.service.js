const axios = require("axios");

const getGitHubUserData = async (username) => {
  const [userResponse, reposResponse] = await Promise.all([
    axios.get(`https://api.github.com/users/${username}`),
    axios.get(`https://api.github.com/users/${username}/repos`)
  ]);

  const user = userResponse.data;

  return {
    user: {
      avatarUrl: user.avatar_url,
      name: user.name,
      bio: user.bio,
      followers: user.followers,
      following: user.following,
      publicRepos: user.public_repos,
      profileUrl: user.html_url
    },

    repos: reposResponse.data.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      language: repo.language,
      stars: repo.stargazers_count,
      updatedAt: repo.updated_at,
      openIssues: repo.open_issues_count,
      defaultBranch: repo.default_branch,
      repoUrl: repo.html_url
    }))
  };
};

module.exports = {
  getGitHubUserData
};