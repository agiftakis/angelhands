/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Define your custom font names here
        // Set 'sans' to Montserrat to make it the default for Tailwind's `font-sans`
        sans: ['var(--font-montserrat)', 'sans-serif'], // Use the variable from next/font
        geist: ['var(--font-geist-sans)'], // Now you can explicitly use font-geist for elements
        mono: ['var(--font-geist-mono)'], // If you have geistMono variable defined

        // If you had a custom montserrat variable, you could also define it here:
        // montserrat: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
}