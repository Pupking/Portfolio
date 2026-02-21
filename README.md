# Portfolio

Deployable static portfolio website for GitHub Pages.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually).

Your live site URL will be:

- `https://<your-github-username>.github.io/Portfolio/`

If your repo name changes, replace `Portfolio` with the new repository name.
