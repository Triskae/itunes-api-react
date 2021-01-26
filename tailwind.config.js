module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'loader': "url('https://i.postimg.cc/9X9L6B8H/Bean-Eater-1s-200px.gif')"
      })
    },
    zIndex: {
      '100': '100'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
