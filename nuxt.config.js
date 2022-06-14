export default {
  ssr: true,
  target: 'static',
  head: {
    title: 'Tazim Rahbar',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'twitter:site', content: '@tazim_rahbar' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://tazim.netlify.app',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Tazim Rahbar',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Portfolio of Tazim Rahbar.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://tazim.netlify.app/_nuxt/img/profile.1c8704b.jpg',
      },
    ],
    link: [],
  },
  css: [
    './assets/styles/main.scss',
    './node_modules/bulma-timeline/dist/css/bulma-timeline.min.css',
  ],
  plugins: [],
  components: true,
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  modules: ['@nuxtjs/axios'],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  build: {},
}
