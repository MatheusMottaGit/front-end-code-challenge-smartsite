/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        'gotham-black': "url('assets/fonts/gotham-black.woff2')",
        'gotham-bold': "url('assets/fonts/gotham-bold.woff2')",
        'gotham-book': "url('assets/fonts/gotham-book.woff2')",
        'gotham-light': "url('assets/fonts/gotham-light.woff2')"
      }
    },
  },
  plugins: [],
}

