# Rohith Pallamreddy — Portfolio

A React, TypeScript, and Vite portfolio. The generated illustrations are included in `public/images`, so the project does not depend on Manus-hosted image URLs.

## Run it locally

Use Node.js 18 or newer:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. To check a production build, run:

```bash
npm run build
```

The output is written to `dist/`.

## Put this code into an existing GitHub repository

The safer way is to create a branch first, so you can review the full replacement before merging it into `main`.

1. Download and unzip `rohith-portfolio-source.zip`.
2. Clone your GitHub repository and start a replacement branch:

   ```bash
   git clone https://github.com/YOUR-NAME/YOUR-REPO.git rohith-portfolio
   cd rohith-portfolio
   git switch -c replace-site-with-portfolio
   ```

3. If you need to keep any existing files (for example, a license or repository-specific documentation), make a copy before the next command. Then remove the repository's tracked files and copy the bundle contents into its root:

   ```bash
   git rm -r .
   unzip -o /path/to/rohith-portfolio-source.zip -d .
   ```

4. Install and verify the site before pushing:

   ```bash
   npm ci
   npm run build
   git add -A
   git commit -m "Replace site with portfolio"
   git push -u origin replace-site-with-portfolio
   ```

5. On GitHub, open a pull request from `replace-site-with-portfolio` into `main`, review the changed/deleted files, and merge it when ready. The merge replaces the tracked site files on `main` while keeping normal Git history; it does not delete other branches or releases.

If the repository has no branch protection and you intentionally want to update `main` directly, merge your replacement branch locally and push it:

```bash
git switch main
git merge replace-site-with-portfolio
git push origin main
```

`git rm -r .` removes tracked files from the new branch; the change only reaches the main branch after you merge/push. Back up anything from the old repository you want to keep first.

GitHub stores the code but does not automatically serve this site. For deployment, connect the repository to a host such as Vercel or Netlify using `npm ci && npm run build` and the `dist` output directory. Configure SPA rewrites to `index.html` so direct visits to `/projects`, `/about`, and other routes work. GitHub Pages deployments under a repository subpath need matching Vite base-path and router configuration.
