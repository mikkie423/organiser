import pkg from './package';

export default {
  mode: 'spa',

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Bad+Script&amp;subset=cyrillic'
      }
    ]
  },

  // router: {},

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  // css: [{ src: '~/assets/scss/main.scss', lang: 'sass' }],
  

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/fireauth.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['@/assets/scss/*.scss'], 
   },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
