# AIGroundwork

A static website. Research methods for professional work, written as prompts for AI, organised into four steps.

## What is here

```
index.html            Home: the pitch and the four-step framework
how-it-works.html     Why prompts that carry a method beat ordinary prompts
research-practice.html The four-step framework explained in full (no prompts)
prompt-library.html   The direct prompts you paste into a chat, by step
system-prompt.html    The one standing instruction for a project or agent
404.html            Not-found page
assets/style.css    All styling
assets/copy.js      Copy-to-clipboard for prompt blocks
vercel.json         Static hosting config (clean URLs, asset caching)
build.py            Generator for steps.html and prompts.html (see below)
```

The site is plain HTML and CSS with one small script. No build step is required to host it. `build.py` exists only to regenerate `steps.html` and `prompts.html` from the source content; the generated files are committed, so you do not need to run it to deploy.

## Deploy: GitHub then Vercel

1. Create a new GitHub repository and push this folder to it.

   ```
   git init
   git add .
   git commit -m "AIGroundwork site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/aigroundwork.git
   git push -u origin main
   ```

2. In Vercel, choose **Add New > Project** and import the repository.

3. Framework preset: **Other**. Leave build command empty and set the output directory to the repository root (the default). Vercel serves the static files directly.

4. Deploy. You will get a `*.vercel.app` URL immediately.

## Point the domain

To use `aigroundwork.com.au`:

1. In the Vercel project, open **Settings > Domains** and add `aigroundwork.com.au`.
2. Vercel shows the DNS records to set. At your domain registrar, add those records (an A record or CNAME as instructed).
3. Wait for DNS to propagate. Vercel issues the HTTPS certificate automatically.

## Editing content

- Prose and layout: edit the `.html` files directly.
- Prompts and the step/method structure: edit `/research-prompts.md` (kept alongside this project), then run `python3 build.py` to regenerate `steps.html` and `prompts.html`. Commit the regenerated files.

## Notes

- No tracking, no analytics, no external dependencies other than Google Fonts.
- All styling is driven by design tokens at the top of `assets/style.css`.
