/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "app.vue"
  ],
  theme: {

    screens :{

      xs:"500px",
      md:"750px",
      lg:"1100px"
    },

    extend: {},
  },
  plugins: [],
}
