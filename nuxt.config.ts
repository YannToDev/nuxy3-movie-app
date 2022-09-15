import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    privateRuntimeConfig :{

        API_KEY :process.env.API_KEY
    },
    
    modules:["@nuxtjs/tailwindcss"]
})
