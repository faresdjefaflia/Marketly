// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [['@nuxtjs/google-fonts', {
      families: {
        Inter: {
          wght: '100..900',
        }
      },
      display: 'swap',
      preconnect: true
  }], '@pinia/nuxt']
  
})