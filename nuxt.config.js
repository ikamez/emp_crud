import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'My-Project',
    title: 'My-Project',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    '~/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],
  auth: {
    redirect: {
      login: '/login'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'https://sakko-demo-api.herokuapp.com/api/v1/user/sign_in',
            method: 'post',
            propertyName: 'user.auth_jwt'
          },
          logout: {
            url: 'https://sakko-demo-api.herokuapp.com/api/v1/user/sign_out',
            method: 'delete'
          },
          user: {
            url: 'https://sakko-demo-api.herokuapp.com/api/v1/user/me',
            method: 'get',
            propertyName: 'user'
          },
        },
        tokenName: 'auth-token'
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#2196F3',
          secondary: '#69F0AE',
          accent: '#AB47BC',
          error: '#D32F2F',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
