# My Website

Minimal personal website with avatar, bio, projects and contact form.

## Local development

1. Open `index.html` in browser, or run a local server:

```bash
cd "c:\\Users\\mirce\\Desktop\\My Website"
python -m http.server 8000
```

2. Visit http://localhost:8000

## GitHub Pages deployment

1. Initialize Git repository:

```bash
git init
git add .
git commit -m "Initial website"
```

2. Create GitHub repo and push:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

3. Pages is auto-deployed from `main` branch via workflow.

## Optional custom domain

Add `CNAME` file with your custom host if needed, and configure domain DNS.
