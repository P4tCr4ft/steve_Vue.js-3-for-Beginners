import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'

import { library } from '@fortawesome/fontawesome-svg-core'

import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.use(ToastService)

app.use(createPinia())
app.use(router)

app.mount('#app')
