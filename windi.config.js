import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['src/**/*.{jsx,js,ts,tsx}'],
    exclude: ['node_modules', '.git', 'dist'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
});
