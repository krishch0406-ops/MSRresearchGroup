# MSR Knowledge Base

![CI](https://github.com/krishch0406-ops/MSRresearchGroup/actions/workflows/ci.yml/badge.svg)

A single-page web application that serves as a reference guide for Mining Software Repositories (MSR) researchers.
It has four tabs as listed: **Data Sources, Collection Methods, Analysis Methods, and Publication Venues.**

**Live site:** https://krishch0406-ops.github.io/MSRresearchGroup/

## What Was Implemented

- **Milestone 1: Page Structure and Navigation.** HTML structure with four tabs at the top. Clicking a tab shows its section and hides the others example Java.
- **Milestone 2: Data Sources Content.** A table of 7 data sources showing the source name, data provided, and a brief description.
- Basic CSS styling for a clean, readable layout.

## Repository Structure

```
docs/requirements.md       User stories
src/index.html             Main page with tabs/sections
src/style.css              Styling
src/script.js              Tab switching
tests/test_checklist.md    Test cases
.github/workflows/ci.yml   CI/CD pipeline
README.md
.gitignore
```

## How to Run

Open the `src/index.html` in a web browser.

## Testing

Test cases are in `tests/test_checklist.md`. The GitHub Actions workflow will verify that: page files exist there are 4 tabs listed there are 7 data sources listed

## CI/CD

`.github/workflows/ci.yml` runs the tests automatically on every push and pull request.
When the tests passes on the `main`, it willl deploy the website to the GitHub Pages.

## Future Work (Remaining Milestones)

Milestone | Work(Remaining)

3 | Create a section on different methods of collecting data. REST API, Graphql, Web Scraping (Selenium), Web Scraping (BeautifulSoup), Database Dumps, Manual Download. Provide information about the purpose of these methods and their pro's and cons.
4 | Create a section on different types of analysis. Statistical Analysis, Regression Analysis, Thematic Analysis, Grounded Theory, Machine Learning, Time Series Analysis, Network Analysis, Visualization. Provide information on the type of analysis and when they can be applied.
5 | Create a section on where to publish. Create subsections for conferences (ICSE, FSE, ASE, MSR, EASE, SANER) and journals (EMSE, TSE, TOSEM). Provide information on the type of conference/journal, area of focus, and how relevant they are (High/Medium).
6 | Improve the styling using more CSS, make it responsive and make it look more professional.