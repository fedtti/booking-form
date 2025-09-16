import type { UserConfig } from 'vite';

export default {
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: './',
    emptyOutDir: true,
    rolldownOptions: {
      input: {
        'assets/js/booking-form': 'src/ts/booking-form.ts',
        index: 'index.html',
      },
      output: [
        {
          entryFileNames: '[name].js',
        }
      ]
    },
  },
  preview: {
    open: true,
  }
} satisfies UserConfig;
