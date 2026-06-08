const express = require("express");

const {
  getGitHubUserData
} = require("../services/github.service");

const router = express.Router();

router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const data = await getGitHubUserData(username);

    res.json(data);

  } catch (error) {

    if (err.response?.status === 404) {
      setError("GitHub user not found");
    } else if (err.response?.status === 403) {
      setError(
        "GitHub API rate limit exceeded. Try again later."
      );
    } else {
      setError("Something went wrong. Please try again.");
    }}

});

module.exports = router;