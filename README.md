# PulseTrack – Fitness Tracking Landing

PulseTrack is a fitness tracking landing page built with React, TypeScript, Vite, and Radix Themes.  
It showcases a training analytics app with a marketing home page and an About page featuring a contact form.

## Tech stack

- React + TypeScript + Vite
- `@radix-ui/themes` and `@radix-ui/react-icons`
- `react-router-dom`
- `react-hook-form` (built-in rules only, no schema validators)
- `@tanstack/react-query`

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Open the app in your browser (usually at `http://localhost:5173`).

## Available scripts

- `npm run dev` – start Vite dev server
- `npm run build` – type-check and build for production
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint

## Routes

- `/` – **Home**: hero section, highlights, features grid, “How it works” steps, and final CTA, all styled with Radix Themes.
- `/about` – **About & Contact**: about copy plus a contact form with validation and submit handled via React Hook Form and React Query.

## Contact form & draft persistence

- Validation is implemented via `react-hook-form` using `register` rules:
  - `name`: required, min length 2
  - `email`: required, email pattern
  - `topic`: required select
  - `message`: required, min length 20
  - `consent`: required checkbox with custom `validate`
- Draft values are stored in `localStorage` under the `contactDraft` key and restored on page load; resetting or successful submit clears the draft.
