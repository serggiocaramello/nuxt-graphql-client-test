import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-graphql-client'],

  runtimeConfig: {
    public: {
      'graphql-client': {
        watch: true,
      }
    }
  }
})
