import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

function launchGateIntegration() {
  return {
    name: 'launch-gate',
    hooks: {
      'astro:build:start': async () => {
        const { validateLaunchGate } = await import('./src/utils/launchGate.ts');
        validateLaunchGate();
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://asianowo.com',
  integrations: [sitemap(), launchGateIntegration()],
  vite: {
    plugins: [tailwindcss()],
  },
});
