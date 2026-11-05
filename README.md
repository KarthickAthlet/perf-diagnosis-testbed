# perf-diagnosis testbed

A tiny static product page, deployed on Netlify, used to run the performance-diagnosis GitHub
Action against real pull requests.

- `site/` is the page that Netlify publishes (see `netlify.toml`).
- `.github/actions/perf-diagnosis/` is the Action, as a bundled build.
- `.github/workflows/perf.yml` runs on every PR. It waits for the Netlify deploy preview, then
  runs Lighthouse 3× on production and 3× on the preview, and posts one comment.
- `perf.config.json` and `perf.budgets.json` hold the pages to test and the budgets.
- `thirdparty/widget.js` is a deliberately slow script, served from cdn.jsdelivr.net when a
  test PR wants a "third party".
