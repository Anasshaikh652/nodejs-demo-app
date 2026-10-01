# Node.js Demo App — DevOps Task 1

## Objective
Automate testing, Docker image building, and Docker Hub publishing using GitHub Actions.

## Tools
- GitHub
- GitHub Actions
- Node.js
- Docker
- Docker Hub

## CI/CD flow
Push to `main` → install dependencies → run tests → build Docker image → push image to Docker Hub.

## Repository structure
```text
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml
├── .dockerignore
├── Dockerfile
├── package.json
├── server.js
├── server.test.js
└── README.md
```

## Run locally

```bash
npm install
npm test
npm start
```

Open http://localhost:3000

## Run with Docker

```bash
docker build -t nodejs-demo-app .
docker run -p 3000:3000 nodejs-demo-app
```

Open http://localhost:3000

## GitHub Secrets

Create these repository secrets:

- `DOCKERHUB_USERNAME` — your Docker Hub username
- `DOCKERHUB_TOKEN` — a Docker Hub access token, not your Docker Hub password

The workflow uses these secrets to authenticate and push the image.

## Expected Docker Hub image

```text
YOUR_DOCKERHUB_USERNAME/nodejs-demo-app:latest
```

## Submission

Submit the GitHub repository URL after confirming that the Actions workflow succeeds and the Docker image appears in Docker Hub.
