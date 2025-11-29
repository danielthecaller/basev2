This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-onchain`](https://www.npmjs.com/package/create-onchain).


## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the app by modifying `app/page.tsx` and the components in `app/components`.

This repository now contains a prototype app called "Sudoku Duel" — a two-player UI for betting on identical Sudoku puzzles. It's an early front-end-only skeleton that includes:

- Lobby UI: create / join game and pick an ETH bid
- Game view: two identical Sudoku boards (masked), controls to start/reveal/decide a winner, and prize calculation (1.8x)

Notes: This is a prototype UX — the on-chain flows, cryptographic verification, private puzzle distribution, and fair settlement are intentionally left out for now and will be implemented in follow-up iterations.


## Learn More

To learn more about OnchainKit, see our [documentation](https://docs.base.org/onchainkit).

To learn more about Next.js, see the [Next.js documentation](https://nextjs.org/docs).
