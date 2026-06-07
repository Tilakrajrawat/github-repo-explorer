const axios = require("axios");

const getGitHubUserData = async (username) => {
  const [userResponse, reposResponse] = await Promise.all([
    axios.get(`https://api.github.com/users/${username}`),
    axios.get(`https://api.github.com/users/${username}/repos`)
  ]);

  return {
    user: userResponse.data,
    repos: reposResponse.data
  };
};

module.exports = {
  getGitHubUserData
};