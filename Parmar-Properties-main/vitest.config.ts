import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    dir: './src/__tests__',
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__tests__/setup/index.ts',
    include: ['**/*.test.{ts,tsx}'],
    exclude: ['**/tests/e2e/**', '**/node_modules/**'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
