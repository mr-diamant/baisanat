// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/baisanat/',
  devToolbar: {
    enabled: false,
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && /\.(woff2?|ttf|otf|eot)$/i.test(assetInfo.name)) {
              return 'Fonts/[name][extname]';
            }
            return '_astro/[name]-[hash][extname]';
          },
        },
      },
    },
  },
});
