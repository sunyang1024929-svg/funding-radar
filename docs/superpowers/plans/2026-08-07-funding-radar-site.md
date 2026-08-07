# Funding Radar Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the financing tracker as a GitHub Pages static site that stays synchronized with the research dataset.

**Architecture:** A Node build step derives browser-safe JSON from the funding records. A dependency-free HTML/CSS/JS application reads that JSON and provides filtering. GitHub Actions tests, builds the workbook and site data, then deploys `site/` to GitHub Pages.

**Tech Stack:** Node.js built-in test runner, static HTML/CSS/JavaScript, GitHub Actions, GitHub Pages.

---

### Task 1: Build public website data

**Files:**
- Create: `src/site-data.js`
- Create: `scripts/build-site-data.mjs`
- Modify: `tests/funding.test.js`

- [ ] Write a failing test proving records are sorted by market and include display-safe amounts.
- [ ] Run `node --test` and observe the missing module failure.
- [ ] Implement public data mapping and write `site/data/funding.json`.
- [ ] Run `node --test` and verify all tests pass.

### Task 2: Create the static interface

**Files:**
- Create: `site/index.html`
- Create: `site/styles.css`
- Create: `site/app.js`

- [ ] Build the A-version high-density tracker interface with a filter toolbar and data table.
- [ ] Add responsive layout, loading/error/empty states, and accessible controls.
- [ ] Test in a local browser with search and market filters.

### Task 3: Add GitHub Pages automation

**Files:**
- Create: `.github/workflows/deploy-pages.yml`
- Modify: `scripts/build-workbook.mjs`
- Modify: `README.md`

- [ ] Make the workbook build also refresh website data.
- [ ] Add a Pages workflow that tests, builds and deploys `site/`.
- [ ] Document repository setup and GitHub Pages activation.
