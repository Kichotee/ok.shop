import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {faBars, faClose} from '@fortawesome/free-solid-svg-icons'; 



config.autoAddCss = false
library.add(faGithub, faLinkedin, faTwitter,faBars, faClose)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})