/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
//import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import 'vuetify/styles'

// Composables
import { createApp } from 'vue'
import { createPinia} from 'pinia';
import { createVuetify } from 'vuetify'

import router from './router';

const app = createApp(App);
const pinia = createPinia();
const vuetify = createVuetify();

app.use(router);
app.use(pinia);
app.use(vuetify);

//registerPlugins(app)

app.mount('#app')
