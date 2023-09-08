const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api', (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;

  if (!slackName || !track) {
    return res.status(400).json({ error: "'slack_name' and 'track' parameters are required" });
  }

  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  const utcTime = new Date().toUTCString();
  const utcOffsetHours = new Date().getTimezoneOffset() / 60;

  if (Math.abs(utcOffsetHours) > 2) {
    return res.status(400).json({ error: 'UTC time is not within +/-2 hours' });
  }

  const fileGithubUrl = 'https://github.com/AnimBadger/Zuri/ProjectOne/src/index.js';
  const sourceCodeGithubUrl = 'https://github.com/AnimBadger/Zuri';

  const response = {
    slack_name: slackName,
    current_day: currentDay,
    current_utc_time: utcTime,
    track: track,
    file_github_url: fileGithubUrl,
    source_code_github_url: sourceCodeGithubUrl,
    status_code: 200
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
