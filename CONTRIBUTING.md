# Contributing to Open Source World

Thank you for taking the time to contribute to Open Source World (OSW)! 🎉
This document explains how you can help, how we review contributions, and the standards we follow so your work can be merged quickly.

---

## Quick start (TL;DR)

1. Fork the repository on GitHub
2. Clone your fork locally
   ```bash
   git clone https://github.com/YOUR_USERNAME/open-source-world.git
   cd open-source-world
   ```
3. Create a feature branch from `main`:
   ```bash
   git checkout -b feat/short-description
   ```
4. Install and run locally:
   ```bash
   npm install
   npm start
   ```
5. Make changes, add tests (if applicable), run linters and commit
6. Push your branch and open a PR against `theopensourceworld:main`

---

## Branch naming

Use clear, consistent branch names. Examples:

- `feat/<short-description>` for new features
- `fix/<short-description>` for bug fixes
- `chore/<short-description>` for maintenance

Keep branch names short and kebab/camel-style friendly.

---

## Development workflow

- Fork → branch → implement → test → PR → review → merge
- Rebase with the upstream `main` branch when your branch lags behind:
  ```bash
  git fetch upstream
  git checkout main
  git pull upstream main
  git checkout feat/your-branch
  git rebase main
  ```

> Note: If you don't have an `upstream` remote, add it:
```bash
git remote add upstream https://github.com/theopensourceworld/open-source-world.git
```

---

## Coding standards

- Language: TypeScript + React
- Formatting: follow existing project styling (Tailwind utility classes for UI)
- Keep PRs focused and small; one logical change per PR is ideal
- Write clear commit messages using conventional-style prefixes, e.g.:
  - `feat(nav): add responsive menu`
  - `fix(contact): validate email input`
  - `docs: update README install steps`

---

## Local testing

- Start dev server:
  ```bash
  npm start
  ```
- Run tests (if provided):
  ```bash
  npm test
  ```
- Build locally to verify production output:
  ```bash
  npm run build
  ```

---

## Pull Request checklist

When you open a PR, please ensure the following items are completed to help maintainers review quickly:

- [ ] The PR targets `main` and is created from a feature/fix branch
- [ ] A clear title and description are included (what, why, how)
- [ ] Related issue referenced (e.g. `Closes #23`) or marked as `Related to` if not closing
- [ ] Screenshots included for UI changes (before / after)
- [ ] All new and existing tests pass
- [ ] No linting errors (run `npm run lint` if available)
- [ ] I followed the code style and added comments where helpful

---

## How to create a high-quality issue

If you find a bug or want to request a feature, please open an issue and include:

- A clear title
- Detailed description
- Steps to reproduce (for bugs)
- Expected and actual behavior
- Environment (browser, OS, Node version)
- Screenshots or code samples where applicable

Label the issue where appropriate or add `good first issue` if you'd like help tagging.

---

## Labels and expectations

We use labels to help triage contributions. Examples:

- `good first issue` — friendly to new contributors
- `hacktoberfest` / `hacktoberfest2025` — Hacktoberfest-friendly
- `help wanted` — maintainers welcome contributions
- `enhancement`, `bug`, `docs` — type of issue

If you want a label added to your issue/PR, ask in the PR comments or open an issue requesting labeling.


## Attribution & Licensing

By contributing, you agree that your contributions will be licensed under the repository's MIT license.

---

## Getting help

If you're stuck, you can:

- Open an issue describing the problem and the maintainer(s) will help
- Join the community channels

Thank you for contributing — every patch helps the project grow! ❤️
