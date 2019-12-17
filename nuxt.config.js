
export default {
  mode: 'spa',
  srcDir: 'src',
  env: {
    serverUrl: process.env.SERVER_URL || 'http://0.0.0.0:3000'
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/styles/common.styl'
  ],
  plugins: [
    '@/plugins/apiClient',
    '@/plugins/element-ui',
    '@/plugins/vue-awesome',
    '@/plugins/dayjs',
    '@/plugins/firebase'
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  axios: {},
  build: {
    transpile: [/^element-ui/],
    extend (config, ctx) {
    }
  }
}
