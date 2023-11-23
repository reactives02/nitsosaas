/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        "custom": '0px 0px 0px 4px #F3F4F7 , 0px 0px 0px 3.5px #F9F9FB , 0px 0px 0px 1px rgba(228, 229, 233, 0.60), 0px 0px 0px 0.5px #E4E5E9'
      }
    },
  },
  plugins: [],
}
