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
        demo: 'demo.html',
      },
      output: [
        {
          entryFileNames: '[name].js',
        }
      ]
    },
  },
} satisfies UserConfig;
