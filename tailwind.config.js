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
  },
  plugins: [],
}
