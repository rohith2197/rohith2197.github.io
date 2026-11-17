# Rohith Pallamreddy — Portfolio

A React, TypeScript, and Vite portfolio. All four illustrations are included in `public/images`. The ZIP also includes a GitHub Actions workflow that builds and deploys the site to GitHub Pages. It automatically handles the `/repository-name/` path used by project repositories.

## Replace a plain-HTML GitHub Pages site

1. Download and extract `rohith-portfolio-github-pages.zip` on your computer.
2. Open GitHub Desktop, clone your existing GitHub repository, and create a new branch named `replace-site-with-portfolio`. In GitHub Desktop use **Repository → Show in Explorer/Finder** to open the local repository folder. Make a backup of any old-site files you need to keep.
3. Open Git Bash (Windows) or Terminal (Mac/Linux) in that repository folder. Remove the old tracked files and copy in **all** the extracted bundle files, including the hidden `.github` folder:

   ```bash
   git rm -r .
   cp -R /path/to/extracted-portfolio/. .
   ```

   Replace `/path/to/extracted-portfolio` with the folder where you unzipped the ZIP. The final folder should contain `.github/workflows/deploy-pages.yml`, `package.json`, `src/`, and `public/` alongside `index.html`.

4. Check the project builds, then commit and push the replacement branch:

   ```bash
   npm ci
   npm run build
   git add -A
   git commit -m "Replace plain HTML site with portfolio"
   git push -u origin replace-site-with-portfolio
   ```

5. On GitHub, open a pull request from `replace-site-with-portfolio` into your default branch (usually `main`). Review the changes, but leave the pull request open for the moment.
6. In the repository, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**. Do this before merging so the deployment workflow is allowed to publish.
7. Merge the pull request. If your repository's default branch is not named `main`, change `main` under `branches` in `.github/workflows/deploy-pages.yml` to that branch name before you push.
8. Open the **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to finish successfully. Find the site's URL under **Settings → Pages**. Project pages use links such as `https://YOUR-NAME.github.io/YOUR-REPO/#/projects`; the `#/` is normal.

The workflow runs automatically when code is pushed or merged to the watched branch. For a custom domain hosted at its root, set an Actions repository variable named `VITE_BASE_PATH` to `/` under **Settings → Secrets and variables → Actions → Variables**.

## Make future updates

Edit the files in your local clone, then commit and push them to the watched branch (or merge a pull request into it). GitHub Actions will build and redeploy the updated site automatically. Changes made only in Manus or only on your computer do not sync to GitHub until you push them.

## Run locally

Use Node.js 18 or newer:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. To verify the production build locally, run `npm run build`; output is written to `dist/`.
