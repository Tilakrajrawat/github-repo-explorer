const axios = require("axios");
const cache = require("../cache/memoryCache");

const getGitHubUserData = async (username) => {

  const cachedData = cache.get(username);

  if (
    cachedData &&
    cachedData.expiry > Date.now()
  ) {
    console.log("Cache Hit");
    return cachedData.data;
  }

  const [userResponse, reposResponse] = await Promise.all([
    axios.get(`https://api.github.com/users/${username}`),
    axios.get(`https://api.github.com/users/${username}/repos`)
  ]);

  const user = userResponse.data;

  const responseData = {
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

  cache.set(username, {
    data: responseData,
    expiry: Date.now() + 60000
  });

  return responseData;
};

module.exports = {
  getGitHubUserData
};