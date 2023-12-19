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

## Resources

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

The components are built with [Tremor](https://www.tremor.so/)

For the css [Tailwind](https://tailwindcss.com/)

Icons [Heroicons](https://heroicons.com/). I installed the version that is used as example on Tremor v1.0.6

## Introduction

“Spectrum”, the launch vehicle built by Isar Aerospace just performed a successful lift-off from
the launch pad and is flying towards Earth orbit. A web service provides live insights into
Spectrum’s sensor system during its maiden flight. Your task is to visualize these sensor values
in a web interface so that the crew in ground control can check if everything is okay.
