/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  mode: process.env.TAILWIND_MODE ? 'jit' : '',
  content: [
    "./src/**/*.{ts,html,scss}",
    "./projects/**/*.{ts,html,scss}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      ibm: ["IBM Plex Mono"],
    },
    fontSize: {
      h1: ['3.875rem', { lineHeight: '4.875rem', letterSpacing: '0' }],
      h2: ['3rem', { lineHeight: '3.75rem', letterSpacing: '0' }],
      h3: ['2rem', { lineHeight: '2.5rem', letterSpacing: '0' }],
      h4: ['1.75rem', { lineHeight: '2.25rem', letterSpacing: '0' }],
      h5: ['1.5rem', { lineHeight: '1.875rem', letterSpacing: '0' }],
      h6: ['1.25rem', { lineHeight: '1.625rem', letterSpacing: '0' }],
      h7: ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
      h8: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0' }],
      h9: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.01rem' }],
      h10: ['0.625rem', { lineHeight: '1rem', letterSpacing: '0.02rem' }],
      b1: ['1.125rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
      b2: ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
      b3: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0' }],
      b4: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.01rem' }],
      b5: ['0.625rem', { lineHeight: '1rem', letterSpacing: '0.02rem' }],
    }
  },
  plugins: [],
}
