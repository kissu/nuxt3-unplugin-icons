// @ts-nocheck
import { defineNuxtConfig } from 'nuxt'
import Icons from 'unplugin-icons/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    plugins: [
      Icons({
        // expiremental
        autoInstall: true
      })
    ]
  }
})
