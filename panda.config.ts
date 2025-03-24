import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  html: {
    colorScheme: 'dark',
  },
  'html, body': {
    margin: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'background',
    color: 'text',
    fontFamily: 'body',
  },
  '::selection': {
    backgroundColor: 'primary',
    color: 'text',
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,astro}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sm: '480px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
      tokens: {
        colors: {
          background: { value: '#171c23' },
          text: { value: '#f0fcf9' },
          primary: { value: '#00bd95' },
          secondary: { value: '#e63462' },
          accent: { value: '#48bb78' },
        },
        fonts: {
          body: { value: 'Fira Code, system-ui, sans-serif' },
          heading: { value: 'Sora, system-ui, sans-serif' },
        },
        fontSizes: {
          heading: { value: 'clamp(2.25rem, 2vw + 1rem, 5rem)' },
          subtitle: { value: '1.5rem' },
          body: { value: '1rem' },
        },
        lineHeights: {
          heading: { value: '1.2' },
          subtitle: { value: '1.2' },
          body: { value: '1.2' },
        },
      },
    },
  },

  // Global CSS styles
  globalCss,

  // The output directory for your css system
  outdir: 'styled-system',

  // Use Lightning CSS for faster performance
  // lightningcss: true,

  // Minify the output
  minify: true,
});
