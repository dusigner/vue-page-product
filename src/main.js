import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import Tabs from 'vue3-tabs';
import store from './store'

const app = createApp(App).use(store);
app.use(Tabs);
app.mount('#app')

// createApp(App).mount('#app')
