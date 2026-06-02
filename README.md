# Alessandro Calianu — Portfolio
 
Personal portfolio page built with React, Vite, and Tailwind CSS.
 
## Stack
 
- **React** — component structure and state
- **Vite** — dev server and build
- **Tailwind CSS** — utility-first styling
- **Maple Mono** — monospace font (falls back to Space Mono)
## Getting started
 
```bash
npm install
npm run dev
```
 
## Build & deploy
 
```bash
npm run build      # outputs to /dist
npm run deploy     # pushes to gh-pages branch (requires gh-pages package)
```
 
Live at: `https://fedstrial.github.io/<repo-name>/`
 
## Structure
 
```
src/
└── App.jsx   # single-page portfolio — all sections and data live here
```
 
All resume data (skills, projects, education, experience) is defined in the `resume` object at the top of `App.jsx`. Edit that to update the page.
 