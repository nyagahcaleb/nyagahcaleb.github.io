# Caleb Nyagah — Portfolio

React + Vite + Tailwind, deployed on GitHub Pages, content managed through JSON files (no backend, no login).

## Run it locally

```bash
npm install
npm run dev
```

Open the local URL it prints (usually http://localhost:5173).

## Add a new project

Open `src/data/projects.json` and add an entry:

```json
{
  "id": "unique-slug",
  "name": "Project Name",
  "category": "Software",
  "status": "In Progress",
  "statusNote": "Optional one-line status update.",
  "description": "One or two sentences on what it does.",
  "technologies": ["React", "MATLAB"],
  "date": "2026",
  "githubUrl": "",
  "demoUrl": "",
  "image": ""
}
```

`status` should be one of: `Idea`, `Learning`, `In Progress`, `Prototype`, `Completed`, `Archived`.
`category` can be anything — the filter bar on the site builds itself from whatever categories exist in the file.

## Update what you're learning

Edit `src/data/learning.json` — each entry is `{ "topic": "...", "status": "Exploring | Learning | Building" }`.

## Set up the contact form

1. Create a free account at emailjs.com.
2. Get your Service ID, Template ID and Public Key.
3. In `src/components/Contact.jsx`, fill in `SERVICE_ID`, `TEMPLATE_ID`, `PUBLIC_KEY`, uncomment the `import emailjs` line and the `emailjs.send(...)` call.
4. `npm install @emailjs/browser`

## Fill in real links

In `src/components/Contact.jsx`, replace the placeholder `mailto:`, GitHub and LinkedIn URLs with your real ones.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In `vite.config.js`, set `base: '/your-repo-name/'`.
3. In your repo settings → Pages, set the source to **GitHub Actions**.
4. Push to `main` — `.github/workflows/deploy.yml` builds and deploys automatically.

Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.
