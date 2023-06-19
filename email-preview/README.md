# Email preview tool

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Hosting

Site is hosted at Netlify. Find credentials in 1Password.

## Environment variables

Create a file `env.local` at the root of your email-preview project. This file will be ignored by Git.

Add the following configuration variable:

```env
INCLUDE_MODULES=true
```

## Alternate builds

The site is deployed to two URLs

-   Full preview site for email developers: https://thesis-hp-email-system.netlify.app/
-   Recipe-only site for marketing: https://thesis-hp-email-recipes.netlify.app/

To preview the recipe-only site, set `INCLUDE_MODULES=false` in `env.local` and restart the dev server.

This configuration is set at Netlify to configure the correct build at deploy time.
