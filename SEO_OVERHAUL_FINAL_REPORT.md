# WorkTimeCheck SEO overhaul release report

Prepared on branch `seo/overhaul-2026-10-23`, draft PR https://github.com/js91872/hourtotals/pull/2. No merge or production deployment performed.

## Changes

All 18 calculator pages gain task-focused metadata and contextual related tools/guides while preserving their URLs. Shared UX changes improve numeric editing, copying, focus visibility and mobile controls. Weekly/biweekly time cards add editable overtime assumptions, separate week totals, clear entries, copying, CSV and print output. Vacation/PTO accrual supports annual allowances and accrual schedules; negative balances remain visible. Average time supports variable H:MM:SS/H:MM/minute entries and second precision. Clock-out shows midnight day offsets and lunch presets. Existing correct duration, addition and decimal arithmetic is retained and regression tested.

Five substantive guides were added at `/guides/time-card-payroll`, `/guides/duration-math`, `/guides/decimal-hours`, `/guides/pto-accrual`, and `/guides/billable-utilization`. The tools directory and related sections organize the requested five topic clusters.

Technical changes include canonical inheritance cleanup, matching visible/schema breadcrumbs, removing generic FAQ schema, sitemap guide inclusion, input labels, skip link and native navigation semantics. Existing robots and correct HTTPS canonical domain remain.

## Commits and validation

- `fd32d398d3a1e0524f79fabce5461931a318639b`: calculator, content-cluster and technical SEO implementation. GitHub Actions run 39909702058 passed install, tests, TypeScript and production build.
- `5991edc5282ff2fbdfbfc6e5aa0a9d68c3236f55`: expanded metadata, presets and Chromium mobile regression suite. TypeScript and production build passed in run 39909988954. Browser tests exposed shared header overflow (18 route failures; 3 interaction checks passed); the release fix reduces mobile brand size and retains the strict overflow assertion. Final-head CI outcome follows below.
- Reporting commit follows these implementation commits; its own hash is available in the PR history rather than embedded recursively in this file.

Local calculation tests: 8 passed. Local SEO/source checks: 4 passed. Local dependency installation/build unavailable because of workspace networking; remote CI is the build evidence. Browser tests must be confirmed on the current head before release.

## Remaining checks and release status

Keep the PR draft until current-head build and browser checks pass. No ranking improvements are claimed. Live redirect chains, host canonical behavior, GSC coverage, current indexing and real user Core Web Vitals remain unverified. Confirm those on the hosting environment and GSC after owner-approved release. PTO policy limits, DST/date-aware time intervals and payroll eligibility are outside the arithmetic model and are explained in content.

Deployment requires the owner's approval. No deployment was requested or executed.
