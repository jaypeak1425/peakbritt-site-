# PeakBritt Financial Group — Website

Static marketing site. No database, no environment variables.

## Deploy on Railway
1. Create a **new GitHub repo** (e.g. `peakbritt-site`) and add these three files:
   `index.html`, `server.js`, `package.json`.
2. Railway → **New Project → Deploy from GitHub repo** → pick `peakbritt-site`.
3. When the deploy is green: **Settings → Networking → Generate Domain**.
4. Visit the domain — the site is live.

Railway auto-detects Node, installs nothing (zero dependencies), and runs `npm start`,
which serves `index.html` on Railway's `$PORT`.

## Run locally
`npm start` then open http://localhost:3000
