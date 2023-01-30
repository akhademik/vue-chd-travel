import { fileURLToPath, URL } from 'node:url';
import { resolve, dirname } from 'node:path';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    VueI18nPlugin({
      //location for translation files
      // prettier-ignore
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/*.json'),
    }),
  ],
  server: {
    port: 1234,
  },
  resolve: {
    // prettier-ignore
    alias: {      
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@navbar': fileURLToPath(new URL('./src/components/navbar', import.meta.url)),
      '@homeview': fileURLToPath(new URL('./src/components/homeview', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@i18n': fileURLToPath(new URL('./src/i18n', import.meta.url)),
    },
  },
});
