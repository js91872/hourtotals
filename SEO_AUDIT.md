# WorkTimeCheck repository audit — October 23, 2026

Scope: `js91872/hourtotals`, upstream main `9edaef5d212379f34868d5e91449eb6728fa1e79`. The README identifies this as WorkTimeCheck.com production source. Source was retrieved through the GitHub connector because the workspace proxy prevented cloning. No AGENTS.md was present in the repository tree. No unrelated source changes were present locally.

## Architecture

Next.js 16 App Router, React 19, TypeScript, custom CSS. Eighteen calculator routes are generated from `src/lib/pages.ts` through `[slug]/page.tsx`; shared client calculators live in `Tools.tsx`, server-rendered supporting content in `ToolPage.tsx`. Homepage, tools directory and seven information pages are separate routes. Existing robots and sitemap use the correct HTTPS domain. No database or server calculation endpoint. Existing analytics is loaded after interaction readiness. Existing brand, system font stack and architecture retained.

## Priorities and verified findings

| Priority | Finding in original source | Action |
| --- | --- | --- |
| P1 | Numeric state coercion turns an empty field immediately into zero | Editable text field with visible empty/invalid explanation; invalidate the model and suppress results until corrected |
| P1 | Average calculator accepts only five minute values and rounds to whole minutes | Variable entries, H:MM:SS/H:MM/minutes, second precision; blanks excluded, zeros included |
| P1 | Vacation and PTO projections hide shortfalls using a zero clamp | Display negative projections; annual allowance and typical accrual schedules |
| P1 | Time-card overtime fixed at 40 hours and 1.5 multiplier | Configurable assumptions, each seven-day week calculated independently |
| P1 | Clock-out wraps across midnight without identifying the day | Explicit day offset and lunch presets |
| P2 | Generic page titles do not describe specific task benefits | Unique search-focused titles and descriptions on all 18 routes |
| P2 | All pages receive a homepage canonical by default from root layout | Explicit homepage canonical; calculators and information pages retain self canonicals |
| P2 | Generic related-links list omits lunch and biweekly tools | Five coherent clusters and focused related links including every route |
| P2 | FAQPage markup on a general calculator site | Remove FAQ markup; keep visible FAQ content. Retain accurate app schema and add matching breadcrumb schema |
| P2 | Daily time inputs have no individual accessible labels | Day-specific accessible labels, caption, scoped table headings |
| P2 | Mobile header extended to 400px at a 375px viewport in Chromium | Reduce narrow-header brand size and spacing; all 18 route overflow checks now pass |
| P2 | No skip link; application-menu roles without menu keyboard handling | Skip link and native disclosure navigation |
| P2 | No copy/CSV options; limited print styles | Copy results, CSV time-card export, improved printable records |
| P3 | No mathematical regression tests | Node calculation and source-SEO tests; Chromium mobile tests in CI |

## Accuracy review

Original clock parsing correctly validates 12/24-hour inputs, and shift logic handles one midnight crossing. Default weekdays total 42h 30m after lunch. Decimal conversion divides by 60 correctly. Biweekly overtime already evaluated each week separately; this behavior is preserved and tested. Addition/subtraction correctly normalize minutes and preserve negative differences. No change to correct math was required merely for SEO.

Same start/end means zero; clock tools do not model dates, DST or time zones. Excess breaks invalidate the shift and block payroll totals and exports. Billable hours remain capped at worked hours and collection estimates are limited to 0–100. PTO caps, carryover and employment eligibility remain policy-dependent.

## What source review cannot establish

Live HTTP/HTTPS and www redirects, response status chains, production indexability, GSC coverage, real user Core Web Vitals, current Google-selected canonicals, backlinks and ranking outcomes were not measured. Network failure is an environment problem, not evidence of a site outage. No live broken-link or indexing problem is claimed. Source-level literal link destinations and cluster routes are tested. Similar work-hour pages are retained with distinct intent; no redirects or deletions were imposed without evidence.
