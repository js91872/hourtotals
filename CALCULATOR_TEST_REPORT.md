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
