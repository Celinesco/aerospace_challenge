<!-- @format -->

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Challenge for isar-aerospace

## Versions

Next.js 14
Node v18.17.1

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

- After running npm run dev a browser tab is opened. However it takes a some seconds to load the app.
- If you are using Linux, the port is not killed after command + c.
- I had to kill the port where localhost was running. In my case 3000:

```bash
kill -9 $(lsof -t -i:3000)
```

I guess is a bug with next.js new version

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Resources

The components are built with [Tremor](https://www.tremor.so/)

For the css [Tailwind](https://tailwindcss.com/)

Icons [Heroicons](https://heroicons.com/). I installed the version that is used as example on Tremor v1.0.6

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
