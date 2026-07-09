import { createApp } from 'vue'
import App from './App.vue'
import { vuetify } from './plugins/vuetify'

// Icons
import '@mdi/font/css/materialdesignicons.css'

// Estilos globales compartidos entre secciones
import '@/assets/styles/main.css'

createApp(App).use(vuetify).mount('#app')
