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

    if (error.response?.status === 404) {
      return res.status(404).json({
        message: "GitHub user not found"
      });
    }

    if (error.response?.status === 403) {
      return res.status(403).json({
        message: "GitHub API rate limit exceeded"
      });
    }

    return res.status(500).json({
      message: "Something went wrong"
    });
  }
});

module.exports = router;