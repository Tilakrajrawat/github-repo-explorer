# GitHub Repo Explorer

## Brief Description

This project is a full-stack GitHub Repo Explorer built using React and Node.js. Users can search for a GitHub username and view the user's public profile information along with their public repositories. The frontend communicates with a Node.js backend which acts as a proxy to the GitHub API and implements server-side caching.

## Live Demo

Frontend:
https://github-repo-explorer-lskqtdh20-tilakrajrawats-projects.vercel.app

Backend:
https://github-repo-explorer-api-oz9a.onrender.com

## Tech Stack

### Frontend

* React
* Vite
* Axios
* CSS

### Backend

* Node.js
* Express
* Axios

### Deployment

* Vercel (Frontend)
* Render (Backend)

## Features

### Core Features

* Search GitHub users
* Display profile information
* Display public repositories
* Sort repositories by:

  * Stars
  * Name
  * Last Updated
* Error handling for invalid usernames
* Network error handling

### Additional Features

* 60-second server-side caching
* Loading states
* Expandable repository details
* Recently searched usernames using localStorage
* Responsive UI

## How to Run Locally

### Clone Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd github-repo-explorer
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

Server runs on:

```text
http://localhost:5000
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## Environment Variables

Create a `.env` file inside the client folder:

```env
VITE_API_URL=http://localhost:5000/api/github
```

## API Documentation

### Get GitHub User Data

**GET**

```http
/api/github/:username
```

Example:

```http
/api/github/octocat
```

Response:

```json
{
  "user": {},
  "repos": []
}
```

## Project Structure

```text
github-repo-explorer/

client/
├── src/
│   ├── components/
│   ├── services/
│   ├── App.jsx
│   └── App.css

server/
├── src/
│   ├── routes/
│   ├── services/
│   ├── cache/
│   ├── app.js
│   └── server.js
```

## Caching Strategy

The backend uses an in-memory Map to cache GitHub API responses for 60 seconds. If the same username is requested within the cache duration, cached data is returned instead of making another GitHub API request.

## Future Improvements

* Pagination / Load More functionality
* Repository language charts
* Debounced search
* Unit and integration tests
* Redis-based caching
* GitHub authentication support

## Notes

AI tools were used to assist with development. All code was reviewed, understood, tested, and modified as needed before submission.
