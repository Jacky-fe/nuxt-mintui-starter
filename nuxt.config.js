module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '汇拾',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  build: {
    vendor: [
      'mint-ui'
    ],
    babel: {
      'plugins': [['component', [
        {
          'libraryName': 'mint-ui',
          'style': true
        }
      ]]],
      'comments': true
    }
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' }
}
