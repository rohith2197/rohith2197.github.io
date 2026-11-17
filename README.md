# Rohith Pallamreddy — Portfolio

A React, TypeScript, and Vite portfolio. All four illustrations are included in `public/images`. The ZIP includes a GitHub Actions workflow for building and deploying to GitHub Pages.

## Website analytics

Umami is configured for **production only** with the website ID supplied by Rohith. GitHub Pages production builds will start tracking automatically; no separate setup is needed. Local development/Preview does not send visits, so testing will not inflate the live numbers. The ID is included in the public client code, so it is **not a password or secret**. Analytics reports remain behind your Umami account login; no dashboard link is displayed on the portfolio itself.

To check stats, [open Umami Cloud login](https://cloud.umami.is/login), sign in to the account associated with the supplied website ID, and select the site. Umami automatically records this hash-routed site’s page navigations.

This tracker is configured to honor the browser's Do Not Track signal. Umami says its tracker does not use cookies; it collects visits, referrers, device/browser details, and approximate location ([privacy FAQ](https://docs.umami.is/docs/faq)). The current free Hobby plan includes one website, up to 100,000 events per month, and six months of retention ([pricing](https://umami.is/pricing), [Cloud FAQ](https://docs.umami.is/docs/cloud/faq)).

To change the site ID, add/update the `VITE_UMAMI_WEBSITE_ID` **Actions repository variable** in GitHub. To switch tracking off, set that variable to `off`, then deploy again. Never put your Umami account password or API key into source code or the repository.

## Replace a plain-HTML GitHub Pages site

1. Download and extract `rohith-portfolio-github-pages.zip` on your computer.
2. Open GitHub Desktop, clone your existing GitHub repository, and create a new branch named `replace-site-with-portfolio`. In GitHub Desktop use **Repository → Show in Explorer/Finder** to open the local repository folder. Back up any old-site files you need to keep.
3. Open Git Bash (Windows) or Terminal (Mac/Linux) in that repository folder. Remove the old tracked files and copy in **all** extracted bundle files, including the hidden `.github` folder:

   ```bash
   git rm -r .
   cp -R /path/to/extracted-portfolio/. .
   ```

   Replace `/path/to/extracted-portfolio` with the folder where you unzipped the ZIP. The final folder should contain `.github/workflows/deploy-pages.yml`, `package.json`, `src/`, and `public/` alongside `index.html`.

4. Verify, commit, and push the replacement branch:

   ```bash
   npm ci
   npm run build
   git add -A
   git commit -m "Replace plain HTML site with portfolio"
   git push -u origin replace-site-with-portfolio
   ```

5. On GitHub, open a pull request from `replace-site-with-portfolio` into your default branch (usually `main`). Review the changes, but leave the pull request open for the moment.
6. Go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**. Do this before merging so the workflow can publish.
7. Merge the pull request. If your default branch is not named `main`, change `main` under `branches` in `.github/workflows/deploy-pages.yml` to the right branch before pushing.
8. Open **Actions** and wait for **Deploy portfolio to GitHub Pages** to finish. Find the URL under **Settings → Pages**. Project pages use links such as `https://YOUR-NAME.github.io/YOUR-REPO/#/projects`; the `#/` is normal.

The workflow runs automatically when code is pushed or merged to its watched branch. For a custom domain hosted at its root, set an Actions repository variable named `VITE_BASE_PATH` to `/` under **Settings → Secrets and variables → Actions → Variables**.

## Make future updates

Edit the files in your local clone, then commit and push them to the watched branch (or merge a pull request into it). GitHub Actions builds and redeploys the updated site. Changes made only in Manus or only on your computer do not sync to GitHub until you push them.

## Run locally

Use Node.js 18 or newer:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. To verify the production build locally, run `npm run build`; output is written to `dist/`.
