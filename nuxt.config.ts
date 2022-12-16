// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     modules:[
        '@nuxtjs/tailwindcss'
       ],
      app:{
         head:{
            title:'Ok shop',
            meta:[
               {name:'description', content:'the thrift shop'}
            ],
            link:[
               {
                  rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'
               }
            ]
         },
         pageTransition: { name: 'page', mode: 'out-in' },
      },
     
})
