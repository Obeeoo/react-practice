# The Shield Education

A responsive React 19 + Vite study abroad website based on the six latest PDF references supplied for this project. The homepage combines the student imagery and destination layout of the second reference with The Shield's blue/purple identity, course discovery, support sections, journey and FAQs. About and Contact share the same visual system.

## Development

Use Node.js 24 (validated with 24.19.0) and npm 11:

```sh
npm ci --no-audit --no-fund --cache /workspace/.npm-cache
npm run dev -- --host 0.0.0.0 --port 5173 --strictPort
```

```sh
npm run build
npm run lint
npm run preview -- --host 0.0.0.0 --port 4173
```

## Pages

- `/` — combined homepage
- `/courses` — searchable course catalogue, subject/level filters and pagination
- `/courses/advanced-geotechnical-engineering` — example course detail
- `/universities` — searchable university catalogue, region filter and pagination
- `/universities/university-of-southampton` — example university detail
- `/about` — About us
- `/contact` — consultation enquiry draft

Every catalogue item links to its own detail page. Browser back/forward navigation and direct paths work. Production hosting must rewrite unknown paths to `index.html` for this client-side app.

## Content and integrations

`src/data.js` holds a **sample** catalogue of 12 universities and 16 courses. Fees, intakes, qualifications and descriptions are illustrative, not verified admissions advice. Replace them with verified content before launch. University logos and student/destination artwork in `public/images` were cropped from the user-supplied PDF references.

DM Sans and Manrope are self-hosted in `public/fonts`, with their font licenses included. No remote font request is needed.

Contact form validation and downloadable enquiry drafts work locally. The form explicitly says it does not send submissions; connect an approved contact endpoint or CMS before enabling online enquiries. No personal contact details have been invented. Saved courses use browser localStorage on the current device. No Payload CMS, database, mail service or external credentials are configured.

## Validation

Build and ESLint checks pass. Headless Chromium checks covered all seven page types at desktop/mobile sizes, search, combined subject/level filters, empty/reset states, pagination, university navigation, persistent saved courses, enquiry prefill/draft validation, mobile menu and missing-page handling. No browser runtime exceptions were observed. The browser check script and screenshots were kept outside the repository in `/tmp`.
