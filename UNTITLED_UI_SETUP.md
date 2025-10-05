# Untitled UI Integration Guide for Cloudflare Vite React Template

This guide will help you integrate Untitled UI components into a Cloudflare Vite React Worker template, maintaining the Cloudflare architecture while adding a professional UI library.

## Prerequisites

- A Cloudflare Vite React Worker template project
- Node.js and npm installed
- Access to Untitled UI components

## Step 1: Install Required Dependencies

Install the necessary Untitled UI and related packages:

```bash
npm install @tailwindcss/vite tailwindcss tailwindcss-animate tailwindcss-react-aria-components
npm install @untitledui/icons @untitledui/file-icons
npm install react-aria-components react-router-dom motion
npm install tailwind-merge
```

## Step 2: Configure Vite

Update your `vite.config.ts` to include the Tailwind CSS plugin and path aliases:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    cloudflare()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/react-app'),
    },
  },
});
```

**Important Notes:**
- The `@` alias points to `./src/react-app` to maintain Cloudflare's separation between worker and React code
- Keep the `cloudflare()` plugin in the plugins array
- The order matters: `react()`, `tailwindcss()`, then `cloudflare()`

## Step 3: Update TypeScript Configuration

Update `tsconfig.app.json` to include path aliases:

```json
{
  "compilerOptions": {
    // ... existing options ...
    
    /* Path Aliases */
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/react-app/*"]
    }
  },
  "include": ["src/react-app"]
}
```

## Step 4: Remove PostCSS Config (if exists)

If you have a `postcss.config.mjs` or `postcss.config.js` file, delete it. The Vite plugin handles everything:

```bash
# Windows PowerShell
Remove-Item postcss.config.mjs

# Unix/Mac
rm postcss.config.mjs
```

## Step 5: Copy Untitled UI Components

Manually copy the following folders from your Untitled UI source directory to `src/react-app/`:

- `components/` - All UI components
- `hooks/` - Custom React hooks
- `pages/` - Page components (optional, or create your own)
- `providers/` - Context providers (theme, router)
- `styles/` - CSS files (globals.css, theme.css, typography.css)
- `types/` - TypeScript type definitions
- `utils/` - Utility functions

Your structure should look like:
```
src/
├── react-app/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── providers/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
└── worker/
    └── index.ts
```

## Step 6: Update globals.css

Ensure your `src/react-app/styles/globals.css` has the correct imports and plugins:

```css
@import "tailwindcss";
@import "./theme.css";
@import "./typography.css";

@plugin "tailwindcss-react-aria-components";
@plugin "tailwindcss-animate";

@custom-variant dark (&:where(.dark-mode, .dark-mode *));
@custom-variant label (& [data-label]);
@custom-variant focus-input-within (&:has(input:focus));

@utility scrollbar-hide {
    /* For Webkit-based browsers (Chrome, Safari and Opera) */
    &::-webkit-scrollbar {
        display: none;
        -webkit-appearance: none;
    }

    /* For IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}

@utility transition-inherit-all {
    transition-property: inherit;
    transition-duration: inherit;
    transition-timing-function: inherit;
}

html,
body {
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
    -webkit-font-kerning: normal;
    font-kerning: normal;
}

/* Hide the default expand arrow on Safari.  */
details summary::-webkit-details-marker {
    display: none;
}

/* Hide default arrows from number inputs. */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
}

/* Hide the default clear button (X) from search inputs. */
input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
}
```

**Important:** Do NOT include `@plugin "@tailwindcss/typography"` unless you've installed that package separately.

## Step 7: Update main.tsx

Update `src/react-app/main.tsx` to include the providers and import the correct CSS:

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RouteProvider } from '@/providers/router-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import App from './App';
import '@/styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <RouteProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </RouteProvider>
        </BrowserRouter>
    </React.StrictMode>
);
```

**Key Changes:**
- Import `BrowserRouter` from `react-router-dom`
- Import providers using `@/` alias
- Import `@/styles/globals.css` instead of `./index.css`
- Wrap App with provider hierarchy: BrowserRouter → RouteProvider → ThemeProvider → App

## Step 8: Create Missing Components (if needed)

If you encounter missing component errors, create them. For example, `SectionDivider`:

Create `src/react-app/components/shared-assets/section-divider.tsx`:

```typescript
export const SectionDivider = () => {
    return <div className="border-t border-secondary" />;
};
```

## Step 9: Install Landing Page Template (Optional)

To install a pre-built landing page from Untitled UI:

```bash
npx untitledui@latest example landing-pages/19
```

When prompted for the directory, enter: `src/react-app/pages`

### Fix Import Paths in Landing Page

After installation, update the imports in the landing page file to use the `@/` alias:

```typescript
// Change from:
import { Avatar } from "./base/avatar/avatar";

// To:
import { Avatar } from "@/components/base/avatar/avatar";
```

Update all component imports to use `@/components/...` instead of relative paths.

## Step 10: Update App.tsx

Update `src/react-app/App.tsx` to use your landing page or components:

```typescript
import LandingPage19 from '@/pages/landing-page-19';

function App() {
  return <LandingPage19 />;
}

export default App;
```

## Step 11: Fix TypeScript Errors

If you encounter TypeScript errors about unused imports, remove them:

### Example 1: pagination-base.tsx
```typescript
// Change from:
import React, { cloneElement, ... } from "react";

// To:
import { cloneElement, ... } from "react";
```

### Example 2: button.tsx
```typescript
// Change from:
import React, { isValidElement } from "react";

// To:
import { isValidElement } from "react";
```

## Step 12: Test Locally

Run the development server:

```bash
npm run dev
```

Visit `http://localhost:5173` to see your application.

## Step 13: Deploy to Cloudflare

Build and deploy:

```bash
npm run build
npm run deploy
```

Or push to your Git repository if you have Cloudflare Pages connected.

## Troubleshooting

### Error: Cannot find module '@tailwindcss/postcss'
**Solution:** Delete `postcss.config.mjs` file. The Vite plugin handles PostCSS automatically.

### Error: Cannot find module 'motion/react'
**Solution:** Install the motion package:
```bash
npm install motion
```

### Error: Cannot find module '@untitledui/file-icons'
**Solution:** Install the package:
```bash
npm install @untitledui/file-icons
```

### TypeScript Error: 'React' is declared but never used
**Solution:** Remove the unused `React` import from the file. Only import what you use.

### Build fails on Cloudflare
**Solution:** Ensure all dependencies are in `dependencies` (not `devDependencies`) in `package.json`.

## Project Structure

Final structure should look like:

```
your-project/
├── src/
│   ├── react-app/              # React application
│   │   ├── components/         # Untitled UI components
│   │   ├── hooks/              # Custom hooks
│   │   ├── pages/              # Page components
│   │   ├── providers/          # Context providers
│   │   ├── styles/             # CSS files
│   │   ├── types/              # TypeScript types
│   │   ├── utils/              # Utility functions
│   │   ├── App.tsx             # Main App component
│   │   └── main.tsx            # Entry point
│   └── worker/                 # Cloudflare Worker
│       └── index.ts            # Worker code
├── vite.config.ts              # Vite configuration
├── tsconfig.app.json           # TypeScript config for app
├── tsconfig.json               # Base TypeScript config
├── package.json                # Dependencies
└── wrangler.json              # Cloudflare config
```

## Key Benefits of This Setup

1. **Separation of Concerns**: Worker code stays in `src/worker/`, React code in `src/react-app/`
2. **Clean Imports**: Use `@/` alias for all imports within the React app
3. **Type Safety**: Full TypeScript support with proper path resolution
4. **Dark Mode**: Built-in theme provider with dark mode support
5. **Responsive**: All components are mobile-responsive
6. **Production Ready**: Optimized for Cloudflare Workers deployment

## Additional Resources

- [Untitled UI Documentation](https://www.untitledui.com/docs)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Vite Documentation](https://vitejs.dev/)
- [React Aria Components](https://react-spectrum.adobe.com/react-aria/)

## Notes for LLMs

When following this guide:
1. Execute commands one at a time and wait for confirmation
2. Read files before modifying them to understand current state
3. Use `replace_in_file` for targeted changes, `write_to_file` for new files
4. Always verify imports use the `@/` alias pattern
5. Check for TypeScript errors after each major change
6. Test locally before deploying to Cloudflare
7. The `@/` alias always points to `src/react-app/`, not just `src/`
