# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Local Production Preview (Yarn)

To correctly build and preview the application locally outside of Docker:

1. **Environment Configuration**: 
   The `yarn build` command reads from the `.env` file. Ensure you have a `.env` file in the root directory (you can copy it from `.env.local`):
   ```bash
   cp .env.local .env
   ```

2. **DNS Configuration**:
   If your `BASE_URL` uses `qz-main-api.localhost`, you must map this domain to your local machine:
   ```bash
   sudo sh -c 'echo "127.0.0.1 qz-main-api.localhost" >> /etc/hosts'
   ```

3. **Build and Run**:
   ```bash
   yarn build
   yarn preview
   ```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
