import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAppStore, faGithub, faGooglePlay, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {faBars, faCartPlus, faClose, faHeart, faCaretDown } from '@fortawesome/free-solid-svg-icons'; 



config.autoAddCss = false
library.add(faGithub, faLinkedin, faTwitter,faBars, faClose, faHeart, faCartPlus, faAppStore, faGooglePlay, faCaretDown)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})