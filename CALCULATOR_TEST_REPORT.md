# Calculator test report

## Executed locally

Node v24.19.0: `node tests/calculations.test.mjs` — 8 passed, 0 failed. `node tests/seo.test.mjs` — 4 passed, 0 failed.

Coverage: AM/PM and invalid time strings; empty clock fields; equal times; overnight shifts; lunch deductions; excess breaks; zero values; decimal rounding; signed durations; second parsing and invalid components; blank-vs-zero averages; weekly and biweekly totals; configurable overtime/pay; default weekdays; PTO accrual, annual allowance, deficits and zero workday handling. SEO checks cover unique metadata, route preservation, complete five-cluster coverage, guide files, literal internal links and canonical/breadcrumb source wiring.

## CI

First implementation commit `fd32d398d3a1e0524f79fabce5461931a318639b`: GitHub Actions run 39909702058 succeeded for npm install, tests, typecheck and production build. This run predates the browser suite.

Browser suite includes 18 mobile route checks plus deletion/retyping, next-day clock-out and second-precision averages. Latest run and outcome are recorded in the final report. Do not interpret an added test as an executed test.

## Local limitations

`npm install` failed through the workspace proxy. Local `npm run typecheck` and `npm run build` were attempted and could not run because `tsc`/`next` were absent. The local test command uses native TypeScript stripping and needs no dependencies. GitHub Actions supplies build dependencies.

No live Core Web Vitals, screen-reader session, printed-PDF visual inspection or production crawl has been performed.

Run 39909988954: install, unit/source tests, TypeScript and build passed. Browser suite: 3 interaction checks passed; 18 route checks failed due to a shared header extending to 400px on a 375px viewport. Diagnostic run 39910246684 isolated the tools disclosure. A narrow-header fix was implemented; the overflow assertion remains strict.

## Final application-code verification

Commit `4f05eaf617bbbbdfb05acc9007da18f32b738092`, [CI run 39910480557](https://github.com/js91872/hourtotals/actions/runs/39910480557): all steps succeeded, including installation, unit/source tests, TypeScript, production build and Chromium installation/tests. Browser results: **21 passed, 0 failed**. Build: **38/38 static pages generated**. The mobile route checks retain the strict document-width assertion and all 18 pass after the header correction. Subsequent changes are documentation only.

## PR #2 hardening regression coverage

Local execution: 8 existing calculation tests + 5 hardening calculation tests + 4 source SEO tests passed (17 total). The new suite verifies incomplete/invalid numeric parsing versus valid zero, strict shift validation, invalid CSV rejection, downloaded CSV content, biweekly overtime and PTO modes. Existing tests now use validated unused rows rather than treating missing clock values as worked zero. Expanded Chromium suite is pending CI at this entry's creation; final results are in the release report.
