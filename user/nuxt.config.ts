// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    ['@nuxtjs/google-fonts', {
        families: {
          Inter: {
            wght: '100..900',
          }
        },
        display: 'swap',
        preconnect: true
    }],
  ]
})
