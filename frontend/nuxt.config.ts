// Nuxt 3 config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [],
  modules: [],
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3001/api'
    }
  }
})
