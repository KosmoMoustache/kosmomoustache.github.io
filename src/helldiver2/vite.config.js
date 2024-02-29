import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'styled-system': fileURLToPath(
        new URL('./styled-system', import.meta.url)
      ),
    },
  },
  build: {
    outDir: '../../helldiver2',
  },
});
