export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Gil Rudolf Härdi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal web for the developer Gil Rudolf Härdi' },
      { name: 'keywords', content: 'ghaerdi, Gil Rudolf Härdi, web, software, developer, fullstack, JavaScript, TypeScript, Python, Go, React, Vue' },
      { name: 'author', content: 'Gil Rudolf Härdi' },
      { name: 'manifest', content: "/site.webmanifest" },
      { name: 'msapplication-config', content: "/browserconfig.xml" },
      { name: 'msapplication-TileColor', content: "#161617" },
      { name: 'theme-color', content: "#161617" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'appicon/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '512x512', href: 'appicon/android-chrome-512x512.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'appicon/android-chrome-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'appicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'appicon/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'appicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/x-icon', href: 'appicon/favicon.ico' }
    ]
  },

  target: "static",
  ssr: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    fallback: true
  }
}
