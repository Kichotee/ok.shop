/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",'*.css'],
  
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
    colors: {
      'primary': "#FF7C02",
      // 'black':'#00000',
      'neutral':'#ffffff'
    }
  },
  plugins: [],
}
