// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     modules:[
        '@nuxtjs/tailwindcss',
           '@pinia/nuxt'
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
            script:[
               {
                  
                  hid:'script',  src:'<script src="https://kit.fontawesome.com/38b393d179.js" crossorigin="anonymous"></script>'
               }

            ]
         },
         pageTransition: { name: 'page', mode: 'out-in' },
      },
     
})
