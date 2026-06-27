import { defineConfig } from 'astro/config';

/* import data from "./OpenLinks.json"; */

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://bachhoagiangsen.pages.dev',

  vite: {
    plugins: [tailwindcss()]
  }
});
