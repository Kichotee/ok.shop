// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     modules:[
        '@nuxtjs/tailwindcss',
           '@pinia/nuxt',
           '@pinia-plugin-persistedstate/nuxt',
       ],
       css: [
         '@fortawesome/fontawesome-svg-core/styles.css'
       ],
       build: {
         transpile: [
           '@fortawesome/fontawesome-svg-core',
           '@fortawesome/free-brands-svg-icons',
           '@fortawesome/free-regular-svg-icons',
           '@fortawesome/free-solid-svg-icons',
           '@fortawesome/vue-fontawesome'
         ]
       },
      app:{
         head:{
            title:'Ok shop',
            meta:[
               {name:'description', content:'the thrift shop'}
            ],
            link:[
               {
                  rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons',
               },
            ],
          
         },
         pageTransition: { name: 'page', mode: 'out-in' },
      },
     
})
