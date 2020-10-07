export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'leap-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        body: true, src: 'js/jquery.min.js'
      },
      {
        body: true, src: 'js/popper.min.js'
      },
      {
        body: true, src: 'js/bootstrap.js'
      },
      {
        body: true, src: 'js/aos.js'
      },
      {
        body: true, src: 'js/clipboard.min.js'
      },
      {
        body: true, src: 'js/jquery.fancybox.min.js'
      },
      {
        body: true, src: 'js/flatpickr.min.js'
      },
      {
        body: true, src: 'js/flickity.pkgd.min.js'
      },
      {
        body: true, src: 'js/ion.rangeSlider.min.js'
      },
      {
        body: true, src: 'js/isotope.pkgd.min.js'
      },
      {
        body: true, src: 'js/jarallax.min.js'
      },
      {
        body: true, src: 'js/jarallax-video.min.js'
      },
      {
        body: true, src: 'js/jarallax-element.min.js'
      },
      {
        body: true, src: 'js/jquery.countdown.min.js'
      },
      {
        body: true, src: 'js/jquery.smartWizard.min.js'
      },
      {
        body: true, src: 'js/plyr.polyfilled.min.js'
      },
      {
        body: true, src: 'js/prism.js'
      },
      {
        body: true, src: 'js/scrollMonitor.js'
      },
      {
        body: true, src: 'js/smooth-scroll.polyfills.min.js'
      },
      {
        body: true, src: 'js/svg-injector.umd.production.js'
      },
      {
        body: true, src: 'js/twitterFetcher_min.js'
      },
      {
        body: true, src: 'js/typed.min.js'
      },
      {
        body: true, src: 'js/theme.js'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/theme-saas.css',
    '@/assets/css/loaders/loader-typing.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}'
      }
    }
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  // modules: [
  //   // https://go.nuxtjs.dev/bootstrap
  //   'bootstrap-vue/nuxt'
  // ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
