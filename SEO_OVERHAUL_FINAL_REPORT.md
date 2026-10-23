# WorkTimeCheck SEO overhaul release report

Prepared on branch `seo/overhaul-2026-10-23`, draft PR https://github.com/js91872/hourtotals/pull/2. No merge or production deployment performed.

## Changes

All 18 calculator pages gain task-focused metadata and contextual related tools/guides while preserving their URLs. Shared UX changes improve numeric editing, copying, focus visibility and mobile controls. Weekly/biweekly time cards add editable overtime assumptions, separate week totals, clear entries, copying, CSV and print output. Vacation/PTO accrual supports annual allowances and accrual schedules; negative balances remain visible. Average time supports variable H:MM:SS/H:MM/minute entries and second precision. Clock-out shows midnight day offsets and lunch presets. Existing correct duration, addition and decimal arithmetic is retained and regression tested.

Five substantive guides were added at `/guides/time-card-payroll`, `/guides/duration-math`, `/guides/decimal-hours`, `/guides/pto-accrual`, and `/guides/billable-utilization`. The tools directory and related sections organize the requested five topic clusters.

Technical changes include canonical inheritance cleanup, matching visible/schema breadcrumbs, removing generic FAQ schema, sitemap guide inclusion, input labels, skip link and native navigation semantics. Existing robots and correct HTTPS canonical domain remain.

## Commits and validation

- `fd32d398d3a1e0524f79fabce5461931a318639b`: calculator, content-cluster and technical SEO implementation. GitHub Actions run 39909702058 passed install, tests, TypeScript and production build.
- `5991edc5282ff2fbdfbfc6e5aa0a9d68c3236f55`: expanded metadata, presets and Chromium mobile regression suite. TypeScript and production build passed in run 39909988954. Browser tests exposed shared header overflow (18 route failures; 3 interaction checks passed); the release fix reduces mobile brand size and retains the strict overflow assertion. The fix was subsequently verified by run 39910480557.
- `1a3f2e6ff6a05b938e898c603f79d85194891b0e`: audit, opportunity map, technical/test/final reports and mobile overflow diagnostics.
- `4f05eaf617bbbbdfb05acc9007da18f32b738092`: fix shared mobile header overflow. GitHub Actions run [39910480557](https://github.com/js91872/hourtotals/actions/runs/39910480557) passed installation, tests, TypeScript, production build and all 21 Chromium checks.
- Final documentation-only commit records these results; its own hash is available in PR history to avoid a recursive self-hash.

Local calculation tests: 8 passed. Local SEO/source checks: 4 passed. Local dependency installation/build unavailable because of workspace networking; remote CI is the build evidence. Browser suite on the final application code: 21 passed, 0 failed. The production build generated 38/38 static pages.

## Remaining checks and release status

Application code is verified and ready for owner review. The PR remains a draft as a release handoff, with no merge or deployment authorization implied. Hosting/GSC checks below remain outstanding. No ranking improvements are claimed. Live redirect chains, host canonical behavior, GSC coverage, current indexing and real user Core Web Vitals remain unverified. Confirm those on the hosting environment and GSC after owner-approved release. PTO policy limits, DST/date-aware time intervals and payroll eligibility are outside the arithmetic model and are explained in content.

Deployment requires the owner's approval. No deployment was requested or executed.

## PR #2 release-hardening review

Confirmed and fixed: empty/invalid numeric edits previously retained stale numeric models; time-card missing punches and excessive breaks could produce zero contributions to payroll. Numeric edits now propagate an explicit invalid state, preserve editable text, distinguish valid zero and suppress dependent results/copy actions until corrected. Time-card rows validate clock pairs and breaks; unused rows with zero break remain allowed. Invalid rows block aggregate totals, pay, copy, print and CSV. Row-specific messages are linked to inputs with aria-describedby/aria-invalid, and a summary announces the blocked calculation.

Expanded pure checks cover numeric boundaries/steps, strict shift validation, CSV contents/rejection, independent biweekly overtime and annual/per-period PTO rates. Browser tests now cover all numeric calculator routes for blank/zero/invalid/recovery states, downloaded biweekly CSV, weekly overtime, PTO modes, empty clock values, sitemap/robots/guide canonicals, 320/375/768px layouts and keyboard/error associations. Existing URLs and metadata were retained. Local 17 calculation/source checks pass. Hardening validation is green: [GitHub Actions run 39913002276](https://github.com/js91872/hourtotals/actions/runs/39913002276) on `93bb872a56d2590169d54e05665342c4dd209beb` passed installation, all unit/source tests, TypeScript checks, production build and **42/42 Chromium browser tests**. The build generated **38/38 static pages**. Local checks: **17 passed, 0 failed**. Earlier historical runs above apply to the earlier implementation.

Hardening implementation commits: `c4417e626b56e5d6571e86c28e1dab663948be95` (strict numeric/shift validation, guarded results/exports and expanded tests), `899a2de53d42651959ff6c22889aefea06fb2ee4` (typed accrual schedule selector), and `93bb872a56d2590169d54e05665342c4dd209beb` (bounded browser setup and cancellation of superseded validation runs). A fresh runner resolved the stalled browser dependency installation; no browser assertion was weakened or skipped.

Release status: ready for owner review with the previously documented live-host/GSC/Core Web Vitals limitations. PR #2 remains unmerged and production was not deployed. The final documentation-only commit records these results; its SHA is available in PR history.
