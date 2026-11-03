# CP-Explainer client

## Requirements

Use Node 22.22.2 or newer in the Node 22 line, Node 24.15.0 or newer in the Node 24 line, or Node 26+. Install the locked dependencies with `npm ci`.

## Commands

- `npm start`: Vite development server at http://localhost:3000, with React Fast Refresh. The port is fixed because the Python backend's CORS policy allows this origin.
- `npm test`: run the Vitest suite once in jsdom.
- `npm run test:watch`: watch tests during development.
- `npm run typecheck`: check all client TypeScript without emitting files.
- `npm run build`: type-check, then generate the production site in `build/`.
- `npm run preview`: serve the production build locally for inspection, not deployment.

The existing browser support policy in `package.json` supplies JavaScript targets and CSS prefixes. Set `PUBLIC_URL` in the build environment to set the static asset base, for example `PUBLIC_URL=/cp/ npm run build`.

## Build-chain migration

Vite and Vitest replace Create React App's unmaintained `react-scripts` build and Jest toolchain. This removes the legacy minimatch and deepmerge dependency paths rather than forcing incompatible major versions into their consumers. The application, graph algorithms, runtime library versions, and `http://localhost:8000` API URLs are unchanged. Start the Python backend separately as described in the repository README.

The HTML entry is now `index.html`; static assets remain in `public/`. `npm test` is a single run instead of watch mode. CRA's `eject` command and its bundled ESLint integration are no longer present; `npm run build` runs the explicit TypeScript gate, not a lint gate. Tests use `vi.mock` with an explicit default export instead of Jest's factory convention.

No deployment command is part of these scripts. Roll back the migration as one commit if necessary; do not restore individual legacy overrides into the new toolchain.
