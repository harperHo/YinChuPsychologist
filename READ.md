# YinChuPsychologist

## Scripts

```bash
npm install
```
Install dependencies. Run this first after cloning the repository.

```bash
npm run dev
```
Start development server with hot reload. Code changes will update in real-time. Use this during development.

```bash
npm run build
```
Build the project and generate static files to the `out` folder. GitHub Actions runs this automatically on push to master.

```bash
npm run lint
```
Check code for errors and style issues.

```bash
npm run subset-fonts
```
Regenerate subset fonts after updating website content. The script extracts all characters used in the website and creates optimized WOFF2 font files.

First time setup:
```bash
python3 -m venv .venv
.venv/bin/pip install fonttools brotli
```

## Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/) format:

```
feat: add new feature
fix: fix a bug
chore: maintenance tasks (e.g. update dependencies, config changes)
docs: documentation changes
style: code style changes (formatting, no logic change)
refactor: code refactoring (no feature or bug fix)
```
